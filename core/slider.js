"use strict";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// init swiper

export const createSwiperInstance = (elem, options) => {
  const defailtSwiperOptions = {
    modules: [
      // Navigation, Pagination
    ],
    ...options,
  };
  return new Swiper(".swiper", defailtSwiperOptions);
};
