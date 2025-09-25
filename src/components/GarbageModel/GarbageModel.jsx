import React, { useRef, useEffect, useContext } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AppContext } from "../../context/appContext";
import { SECTIONS } from "../../constants/sections";

export default function GarbageModel(props) {
  const { scene } = useGLTF("/models/garbage.glb");
  const { setScrollContext, setActiveSection } = useContext(AppContext);

  const groupRef = useRef();
  const scroll = useScroll();

  useEffect(() => {
    setScrollContext(scroll);
  }, [scroll]);

  useFrame((state) => {
    const scrollOffset = scroll.offset;
    const sectionCount = SECTIONS.length;

    const rawIndex = scrollOffset * (sectionCount - 1);
    const menuSectionIndex = Math.round(Math.min(rawIndex, sectionCount - 1));
    setActiveSection(menuSectionIndex);

    const currentSectionIndex = Math.floor(rawIndex);
    const currentSection = SECTIONS[currentSectionIndex];
    const nextSection = SECTIONS[Math.min(currentSectionIndex + 1, sectionCount - 1)];

    if (!currentSection || !nextSection) return;

    const sectionProgress = smoothstep(0.2, 0.8, rawIndex - currentSectionIndex);

    state.camera.position.x = lerp(
      currentSection.cameraPosition.position.x,
      nextSection.cameraPosition.position.x,
      sectionProgress
    );
    state.camera.position.y = lerp(
      currentSection.cameraPosition.position.y,
      nextSection.cameraPosition.position.y,
      sectionProgress
    );
    state.camera.position.z = lerp(
      currentSection.cameraPosition.position.z,
      nextSection.cameraPosition.position.z,
      sectionProgress
    );

    if (groupRef.current && currentSection.objectPosition) {
      const nextObjectPosition = nextSection.objectPosition || currentSection.objectPosition;

      groupRef.current.rotation.x = lerp(
        currentSection.objectPosition.rotation.x,
        nextObjectPosition.rotation.x,
        sectionProgress
      );
      groupRef.current.rotation.y = lerp(
        currentSection.objectPosition.rotation.y,
        nextObjectPosition.rotation.y,
        sectionProgress
      );
      groupRef.current.rotation.z = lerp(
        currentSection.objectPosition.rotation.z,
        nextObjectPosition.rotation.z,
        sectionProgress
      );
    }

    if (currentSection.cameraPosition.lookAt || nextSection.cameraPosition.lookAt) {
      const defaultLookAt = { x: 3, y: 0.5, z: 0 };
      const currentLookAt = currentSection.cameraPosition.lookAt || defaultLookAt;
      const nextLookAt = nextSection.cameraPosition.lookAt || defaultLookAt;

      const lookAtX = lerp(currentLookAt.x, nextLookAt.x, sectionProgress);
      const lookAtY = lerp(currentLookAt.y, nextLookAt.y, sectionProgress);
      const lookAtZ = lerp(currentLookAt.z, nextLookAt.z, sectionProgress);

      state.camera.lookAt(lookAtX, lookAtY, lookAtZ);
    } else {
      state.camera.lookAt(3, 0.5, 0);
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      {/* Y rotation adjusted to -60° (was -90°) */}
      <group rotation={[0, -Math.PI / 3, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/garbage.glb");

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function smoothstep(min, max, value) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
} 