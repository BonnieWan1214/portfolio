import { useEffect, useMemo, useRef, useState } from 'react';

const CARD_DESIGN_PX = 200;
const MIN_CARD_PX = 110;
const CORE_INDICES = [0, 1, 2, 3];
const EXTRA_POOL = [4, 5, 6];

const LAYOUT_META = [
  {
    count: 7,
    designWidth: 820,
    designHeight: 400,
    firstCardX: -345,
    transformStyles: [
      'rotate(4deg) translate(-345px)',
      'rotate(1deg) translate(-230px)',
      'rotate(-2deg) translate(-115px)',
      'rotate(0deg)',
      'rotate(-1.5deg) translate(115px)',
      'rotate(2deg) translate(230px)',
      'rotate(-1.5deg) translate(345px) translateY(-22px)'
    ]
  },
  {
    count: 5,
    designWidth: 640,
    designHeight: 360,
    firstCardX: -230,
    transformStyles: [
      'rotate(3deg) translate(-230px)',
      'rotate(-2deg) translate(-115px)',
      'rotate(0deg)',
      'rotate(-1.5deg) translate(115px)',
      'rotate(2deg) translate(230px)'
    ]
  },
  {
    count: 4,
    designWidth: 540,
    designHeight: 320,
    firstCardX: -180,
    transformStyles: [
      'rotate(3deg) translate(-180px)',
      'rotate(-1deg) translate(-60px)',
      'rotate(1deg) translate(60px)',
      'rotate(-2deg) translate(180px)'
    ]
  }
];

function pickCount(availableWidth) {
  const width = Math.max(0, availableWidth || 0);

  for (const layout of LAYOUT_META) {
    const scale = width > 0 ? Math.min(1, width / layout.designWidth) : 1;
    const effectiveCardPx = CARD_DESIGN_PX * scale;
    const isLast = layout.count === 4;

    if (effectiveCardPx >= MIN_CARD_PX || isLast) {
      return {
        ...layout,
        scale,
        shellWidth: layout.designWidth * scale,
        shellHeight: layout.designHeight * scale
      };
    }
  }

  const fallback = LAYOUT_META[LAYOUT_META.length - 1];
  return {
    ...fallback,
    scale: 1,
    shellWidth: fallback.designWidth,
    shellHeight: fallback.designHeight
  };
}

function buildIndices(count, extraIndex) {
  if (count >= 7) return [0, 1, 2, 3, 4, 5, 6];
  if (count === 5) return [...CORE_INDICES, extraIndex];
  return [...CORE_INDICES];
}

/**
 * Measures wrap width and picks 7/5/4 card fan + proportional scale.
 * Always keeps Landing page_1–4; for 5 cards adds one stable random from 5–7.
 */
export default function useLandingCardsLayout(wrapRef, allImages) {
  const [availableWidth, setAvailableWidth] = useState(
    typeof window !== 'undefined' ? Math.min(window.innerWidth - 64, 1200) : 1200
  );
  const extraIndexRef = useRef(null);

  if (extraIndexRef.current == null) {
    extraIndexRef.current = EXTRA_POOL[Math.floor(Math.random() * EXTRA_POOL.length)];
  }

  useEffect(() => {
    const el = wrapRef?.current;
    if (!el || typeof ResizeObserver === 'undefined') return;

    const update = () => {
      const next = el.getBoundingClientRect().width;
      setAvailableWidth((prev) => (Math.abs(prev - next) < 0.5 ? prev : next));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [wrapRef]);

  return useMemo(() => {
    const layout = pickCount(availableWidth);
    const indices = buildIndices(layout.count, extraIndexRef.current);
    const images = indices.map((i) => allImages[i]).filter(Boolean);

    return {
      count: layout.count,
      images,
      transformStyles: layout.transformStyles,
      scale: layout.scale,
      designWidth: layout.designWidth,
      designHeight: layout.designHeight,
      shellWidth: layout.shellWidth,
      shellHeight: layout.shellHeight,
      firstCardX: layout.firstCardX
    };
  }, [availableWidth, allImages]);
}
