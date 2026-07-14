import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './BounceCards.css';

export default function BounceCards({
  className = '',
  images = [],
  linkTo = '',
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)',
    'rotate(6deg) translate(255px)',
    'rotate(-5deg) translate(340px)'
  ],
  enableHover = true
}) {
  const containerRef = useRef(null);
  const cardElsRef = useRef([]);
  const imgElsRef = useRef([]);

  const isSafari = useMemo(() => {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent;
    return /Safari/i.test(ua) && !/Chrome|Chromium|CriOS|Edg\//i.test(ua);
  }, []);

  const hoverDuration = isSafari ? 0.28 : 0.4;
  const hoverEase = isSafari ? 'power3.out' : 'back.out(1.4)';

  const [hoverEnabled, setHoverEnabled] = useState(() => {
    if (typeof window === 'undefined') return enableHover;
    if (!enableHover) return false;
    return window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 901px)').matches;
  });

  useEffect(() => {
    if (!enableHover || typeof window === 'undefined') {
      setHoverEnabled(false);
      return;
    }
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 901px)');
    const update = () => setHoverEnabled(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, [enableHover]);

  useEffect(() => {
    let cancelled = false;
    const ctx = gsap.context(() => {
      const cards = cardElsRef.current.filter(Boolean);
      const imgs = imgElsRef.current.filter(Boolean);
      if (!cards.length) return;

      // Set initial state immediately to avoid layout thrash during decode.
      gsap.set(cards, { scale: 0, transformOrigin: '50% 50%', force3D: true });

      const decodeAll = async () => {
        await Promise.allSettled(
          imgs.map((img) => {
            if (!img || img.complete) return Promise.resolve();
            if (typeof img.decode === 'function') return img.decode();
            return new Promise((resolve) => {
              img.addEventListener('load', resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
            });
          })
        );
      };

      const animateIn = () => {
        const entranceEase = isSafari ? 'back.out(1.2)' : easeType;
        gsap.to(cards, {
          scale: 1,
          stagger: animationStagger,
          ease: entranceEase,
          delay: animationDelay,
          overwrite: 'auto',
          force3D: true
        });
      };

      const run = async () => {
        // Safari: brief decode wait, but never stall entrance.
        if (isSafari) {
          await Promise.race([
            decodeAll(),
            new Promise((resolve) => setTimeout(resolve, 280))
          ]);
          if (cancelled) return;
          animateIn();
          return;
        }

        // Chrome: animate immediately (decode can happen in parallel).
        animateIn();
        decodeAll();
      };

      requestAnimationFrame(() => {
        if (!cancelled) run();
      });
    }, containerRef);

    return () => {
      cancelled = true;
      ctx.revert();
    };
  }, [animationStagger, easeType, animationDelay, isSafari]);

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return `${transformStr} rotate(0deg) `;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = (hoveredIdx) => {
    if (!hoverEnabled) return;

    images.forEach((_, i) => {
      const el = cardElsRef.current[i];
      if (!el) return;
      gsap.killTweensOf(el);

      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        const noRotationTransform = getNoRotationTransform(baseTransform);
        gsap.to(el, {
          transform: noRotationTransform,
          duration: hoverDuration,
          ease: hoverEase,
          overwrite: 'auto',
          force3D: true
        });
      } else {
        const offsetX = i < hoveredIdx ? -100 : 100;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);
        const distance = Math.abs(hoveredIdx - i);
        const delay = isSafari ? 0 : distance * 0.05;

        gsap.to(el, {
          transform: pushedTransform,
          duration: hoverDuration,
          ease: hoverEase,
          delay,
          overwrite: 'auto',
          force3D: true
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!hoverEnabled) return;

    images.forEach((_, i) => {
      const el = cardElsRef.current[i];
      if (!el) return;
      gsap.killTweensOf(el);
      const baseTransform = transformStyles[i] || 'none';
      gsap.to(el, {
        transform: baseTransform,
        duration: hoverDuration,
        ease: hoverEase,
        overwrite: 'auto',
        force3D: true
      });
    });
  };

  return (
    <div
      className={`bounce-cards ${isSafari ? 'bounce-cards--safari' : ''} ${className}`}
      ref={containerRef}
    >
      {images.map((src, idx) => {
        const cardProps = {
          key: idx,
          className: `bounce-cards__card bounce-cards__card--${idx}`,
          style: { transform: transformStyles[idx] ?? 'none' },
          onMouseEnter: () => pushSiblings(idx),
          onMouseLeave: resetSiblings
        };

        const content = (
          <img
            className="bounce-cards__card-image"
            src={src}
            alt={`card-${idx}`}
            loading={idx < 2 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={idx < 2 ? 'high' : 'auto'}
            draggable={false}
            ref={(el) => {
              imgElsRef.current[idx] = el;
            }}
          />
        );

        const setCardRef = (el) => {
          cardElsRef.current[idx] = el;
        };

        return linkTo ? (
          <Link to={linkTo} {...cardProps} ref={setCardRef}>
            {content}
          </Link>
        ) : (
          <div {...cardProps} ref={setCardRef}>
            {content}
          </div>
        );
      })}
    </div>
  );
}