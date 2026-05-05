import SliderLib, { Settings, LazyLoadTypes } from "react-slick";

// CJS/ESM interop: Vite may resolve the module object instead of the default export
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slider = ((SliderLib as any).default ?? SliderLib) as React.ComponentType<Settings>;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselVariant } from "@/interfaces/carousel.enum";

interface CarouselProps extends Partial<Settings> {
  items: React.ReactNode[];
  variant?: CarouselVariant;
}

export function Carousel({
  items,
  variant = CarouselVariant.PROJECTS,
  ...settings
}: CarouselProps) {
  const variants = {
    [CarouselVariant.PROJECTS]: {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 10_000,
      cssEase: "linear",
      pauseOnHover: true,
      lazyLoad: "ondemand" as LazyLoadTypes,
      waitForAnimate: true,
    },
  };

  return (
    <Slider {...variants[variant]} {...settings} className="px-2">
      {items}
    </Slider>
  );
}
