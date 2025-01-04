import { Circle, CircleDotIcon } from "lucide-react"
import { useEffect, useState } from "react";
import { ImageSlider } from "@/types";

const images: ImageSlider[] = [
 { imageUrl: "https://picsum.photos/400/300", url: "/products" },
 {imageUrl:  "https://picsum.photos/seed/picsum/400/300", url: "/products" },
 { imageUrl: "https://picsum.photos/400/300", url: "/products" },
 {imageUrl:  "https://picsum.photos/seed/picsum/400/300", url: "/products" },
 { imageUrl: "https://picsum.photos/400/300", url: "/products" },
 {imageUrl:  "https://picsum.photos/seed/picsum/400/300", url: "/products" },
]

import { CSSProperties } from "react";
import { Link } from "react-router";

const styles: { slider: CSSProperties; image: CSSProperties; imagediv:CSSProperties } = {
  slider: {
    width: "55%",
    height: "350px",
    overflow: "hidden",
    position: "relative",
    margin: "0 auto",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
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
    }, 5555); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div style={styles.slider}>
      <Link to={images[currentIndex].url}>
      <img
        src={images[currentIndex].imageUrl}
        alt={`Slide ${currentIndex + 1}`}
        style={styles.image}
        loading="lazy"
      />
      </Link>
      <div 
      // onClick={() => HandleClick()}
        style={styles.imagediv}>
       {images.map((_, index) => (
         index === currentIndex ? (<CircleDotIcon key={index} className="w-5 h-5 text-white" />) : (<Circle key={index} className="w-4 h-4 text-white" />)
       ))} 
        </div>
    </div>
  )
}

{/* <Carousel className="w-[54%] h-[350px] top-6 flex mx-auto">
<CarouselContent className="flex h-full">
  {images.map((image, index) => (
    <CarouselItem key={index} className="w-full">
      <div className="w-full h-full aspect-video flex mx-auto justify-center">
        <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
      </div>
    </CarouselItem>
    
  ))}
</CarouselContent>
</Carousel> */}
