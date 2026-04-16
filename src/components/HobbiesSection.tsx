import React from "react";
import CircularGallery from "./CircularGallery";

export default function HobbiesSection() {
  return (
    <div>
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#000000"
          borderRadius={0.05}
          scrollEase={0.02}
          scrollSpeed={2}
        />
      </div>
    </div>
  );
}
