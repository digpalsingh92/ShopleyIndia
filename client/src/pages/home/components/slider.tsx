import { Circle, CircleDotIcon } from "lucide-react"
import { useEffect, useState } from "react";
import { ImageSlider } from "@/types";

const images: ImageSlider[] = [
 { imageUrl: "/figma_frame.png", url: "/products" },
//  {imageUrl:  "https://picsum.photos/seed/picsum/400/200", url: "/products" },
//  { imageUrl: "https://picsum.photos/400/200", url: "/products" },
//  {imageUrl:  "https://picsum.photos/seed/picsum/400/200", url: "/products" },
//  { imageUrl: "https://picsum.photos/400/200", url: "/products" },
//  {imageUrl:  "https://picsum.photos/seed/picsum/400/200", url: "/products" },
]

import { CSSProperties } from "react";
import { Link } from "react-router";

const styles: { slider: CSSProperties; image: CSSProperties; imagediv:CSSProperties } = {
  slider: {
    width: "100%",
    maxWidth: "1200px",
    height: "auto",
    top: "2rem",
    maxHeight: "350px",
    overflow: "hidden",
    position: "relative",
    margin: "0 auto",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imagediv: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "0.5rem",
    marginBottom: "1rem",
  }
};

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div style={styles.slider}>
        <Link to={images[currentIndex].url}>
          <img
            src={images[currentIndex].imageUrl}
            alt={`Slide ${currentIndex + 1}`}
            style={styles.image}
          />
        </Link>
        <div style={styles.imagediv}>
          {images.map((_, index) => (
            index === currentIndex ? (
              <CircleDotIcon key={index} className="w-4 h-4 text-white" />
            ) : (
              <Circle key={index} className="w-4 h-4 text-white" />
            )
          ))}
        </div>
      </div>
    </div>
  );
}
