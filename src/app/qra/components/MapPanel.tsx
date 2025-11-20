"use client";
import Image from "next/image";
import MapMarker from "./MapMarker";

interface MapPanelProps {
  currentStepIndex: number; // Expects step from the parent
}

export default function MapPanel({ currentStepIndex }: MapPanelProps) {
  return (
    <div className="relative w-[600px] h-full ml-auto text-white flex items-center justify-center">
      {/* MAP IMAGE / SVG */}
      <div className="relative ml-auto inset-0 min-h-[854px] min-w-[565px]">
        <Image
          src="/assets/graphics/uk-map.png"
          alt="UK Map"
          height={854}
          width={565}
          //fill
          priority
          className="absolute top-0 right-0 object-contain rotate-2"
        />
      </div>

      {/* MARKERS — positioned by top/right */}

      {currentStepIndex === 2 ? (
        <MapMarker
          top="18%"
          right="40%"
          pulsing
          onClick={() => alert("Handle Location Selection")}
        />
      ) : (
        <MapMarker top="18%" right="40%" />
      )}

      {currentStepIndex === 1 || currentStepIndex === 2 ? (
        <MapMarker
          top="42%"
          right="30%"
          pulsing
          onClick={() => alert("Threat B")}
        />
      ) : (
        <MapMarker
          top="42%"
          right="30%"
          onClick={() => alert("Show Location Info?")}
        />
      )}

      <MapMarker top="68%" right="17%" />
      <MapMarker top="80%" right="23%" />

      {currentStepIndex === 2 ? (
        <MapMarker
          top="85%"
          right="29%"
          pulsing
          onClick={() => alert("Handle Location Selection")}
        />
      ) : (
        <MapMarker top="85%" right="29%" />
      )}
    </div>
  );
}
