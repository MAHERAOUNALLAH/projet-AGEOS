import {
  PresentationControls,
  ContactShadows,
  Environment,
  useProgress,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import { Suspense } from "react";
import GarbageModel from "../GarbageModel/GarbageModel";
import { SECTIONS } from "../../constants/sections";
import { AppContext } from "../../context/appContext";
import { useContext, useLayoutEffect, useEffect } from "react";

function LoadingHandler({ setIsLoading, setLoadingProgress }) {
  const { progress } = useProgress();

  useLayoutEffect(() => {
    setIsLoading(true);

    return () => {
      setIsLoading(false);
    };
  }, []);

  useEffect(() => {
    setLoadingProgress(progress.toFixed(0));
  }, [progress]);

  return null;
}

export default function Experience() {
  const { setIsLoading, setLoadingProgress } = useContext(AppContext);

  return (
    <>
      <Suspense
        fallback={
          <LoadingHandler
            setIsLoading={setIsLoading}
            setLoadingProgress={setLoadingProgress}
          />
        }
      >
        <ambientLight intensity={0.6} />

        <spotLight
          position={[10, 10, 10]}
          angle={0.2}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />
        <directionalLight
          position={[-0.3, 0.0, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          intensity={0.25}
        />

        <ScrollControls pages={SECTIONS.length} damping={0.15}>
          <Scroll
            html
            style={{
              width: "100vw",
            }}
          >
            <div
              className="canon-info"
              style={{
                position: "absolute",
                top: "20vh",
                left: "50vw",
                width: "40vw",
              }}
            >
              {SECTIONS.map((section, index) => (
                <div
                  key={index}
                  style={{
                    height: "100vh",
                  }}
                >
                  {section.content}
                </div>
              ))}
            </div>
            <footer
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
                padding: "0",
                textAlign: "center",
                color: "black",
                fontSize: ".7rem",
                transform: `translateY(${SECTIONS.length * 100}vh)`,
                marginBottom: "5px",
              }}
            >
              Solution de démonstration 3D pour le tri intelligent.
            </footer>
          </Scroll>

          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            polar={[-Math.PI / 2.2, Math.PI / 2.2]}
            azimuth={[-Math.PI, Math.PI]}
          >
            <GarbageModel scale={2} />
          </PresentationControls>
        </ScrollControls>

        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.7}
          scale={3}
          blur={3}
          far={4}
        />
        <Environment preset="city" />
      </Suspense>
    </>
  );
}
