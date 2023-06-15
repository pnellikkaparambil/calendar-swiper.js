declare global {
  interface JQuery {
    swiperEventCalender(options?: SwiperEventCalenderOptions): void;
  }
}

interface SwiperEventCalenderOptions {
  calendarOptions?: any;
  swiperOptions?: any;
  events?: Array<any>;
}

declare class SwiperEventCalender {
  constructor(element: Element, options?: SwiperEventCalenderOptions);
}

export {};
