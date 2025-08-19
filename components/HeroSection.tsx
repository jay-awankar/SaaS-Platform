"use client";
import { MorphingText } from "@/components/magicui/morphing-text";
import { FlickeringGrid } from "./magicui/flickering-grid";

const texts = [
  "Build it, Learn it, Use it",
  "Your Future",
  "Your Knowledge",
  "Your Power",
  "The Future of Learning",
  "EDUCATOR",
  "Your Own AI Teacher",
  "Let's Get Started...",
];

const HeroSection = () => {
  return (
    <div className="relative p-8 w-full overflow-hidden rounded-lg bg-transparent">
      <FlickeringGrid
        className="absolute inset-0 z-0 min-w-full"
        squareSize={5}
        gridGap={2}
        color="#4F3F8A"
        maxOpacity={0.2}
        flickerChance={0.3}
        height={800}
        width={1600}
      />
      <MorphingText texts={texts} />
    </div>
  );
};

export default HeroSection;
