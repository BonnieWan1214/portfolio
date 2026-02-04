import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

function DisableWheelZoom() {
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;
    
    const preventWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    canvas.addEventListener("wheel", preventWheel, { passive: false });

    return () => {
      canvas.removeEventListener("wheel", preventWheel);
    };
  }, [gl]);

  return null;
}

function ShaderBackground() {
  return (
    <ShaderGradientCanvas
      style={{ position: "absolute", inset: 0 }}
      pixelDensity={1.3}
      fov={45}
    >
      <DisableWheelZoom />
      <ShaderGradient
        animate="on"
        axesHelper="off"
        bgColor1="#000000"
        bgColor2="#000000"
        brightness={0.8}
        cAzimuthAngle={180}
        cDistance={2.8}
        cPolarAngle={80}
        cameraZoom={9.1}
        color1="#155183"
        color2="#4589c0"
        color3="#212121"
        destination="onCanvas"
        embedMode="off"
        envPreset="dawn"
        format="gif"
        fov={45}
        frameRate={10}
        gizmoHelper="hide"
        grain="on"
        lightType="3d"
        pixelDensity={1.3}
        positionX={0}
        positionY={0}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.1}
        rotationX={50}
        rotationY={0}
        rotationZ={-60}
        shader="defaults"
        type="sphere"
        uAmplitude={1.3}
        uDensity={1.3}
        uFrequency={0}
        uSpeed={0.1}
        uStrength={1.5}
        uTime={8}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}

export default ShaderBackground;
