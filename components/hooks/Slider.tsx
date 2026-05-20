// "use client";

// import { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";

// // Added 'plugins' as the second argument
// export const useSlider = (options = {}, plugins = []) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "start",
//     ...options,
//   }, plugins); // Pass plugins here

//   const [index, setIndex] = useState(0);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//   }, [emblaApi, onSelect]);

//   return { emblaRef, emblaApi, index };
// };
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
// Import these types from embla-carousel
import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";

export const useSlider = (
  options: EmblaOptionsType = {},
  plugins: EmblaPluginType[] = [], // Explicitly type this as EmblaPluginType[]
) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      ...options,
    },
    plugins,
  );

  const [index, setIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return { emblaRef, emblaApi, index };
};
