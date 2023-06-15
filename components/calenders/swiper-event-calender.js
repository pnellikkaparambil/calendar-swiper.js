// script to handle all pages with swiper event calender
import $ from "jquery";
import { createCalendarInstance } from "../../core/calendar";
import { createSwiperInstance } from "../../core/slider";

// if ($calnderElem.length) {
//   $calnderElem.each(function () {
//     // initializing swiper event calender
//   });
// }

class SwiperEventCalender {
  constructor(elem, options) {
    this.elem = elem;
    this.options = options;
    this.init();
  }

  init() {
    // create calender instance
    this.initCalendar();
    this.initEvents(this.options.events);
    this.render();
  }

  initCalendar() {
    this.calendar = createCalendarInstance(this.elem, {
      eventContent: function (arg) {
        // return {
        //   html: '<div class="swiper-slide">' + arg.event.title + "</div>",
        // };
        return {
          html: `
          <div class="slide">${arg.event.title}</div>
        `,
        };
      },
      eventDidMount: (arg) => {
        const $elem = $(arg.el);
        const $dateCell = $elem.closest(".fc-daygrid-day");
        if ($dateCell) {
          var dayFrame = $dateCell.children(".fc-daygrid-day-frame");
          // check if swiper is already initialized

          var $swiperContainer = this.createEventSwiperHTML(dayFrame);
          $swiperContainer.siblings().remove();
          this.swiper = createSwiperInstance($swiperContainer, {});
        }
      },
      eventWillUnmount: (arg) => {
        const slider = $(arg.el)
          .closest(".fc-daygrid-day-frame")
          .find(".swiper-container");
        slider.remove();
      },
    });
  }

  initEvents(events = []) {
    this.calendar.addEventSource(events);
  }

  initEventSwiper() {}

  render() {
    this.calendar.render();
  }

  createEventSwiperHTML($parentElem) {
    // create a div using jquery and append html
    // check if swiper is already initialized
    // if not initialized then initialize it
    // if initialized then add new slide
    console.log("on createEventSwiperHTML");
    const $swiperContainer = $parentElem.find(".swiper-container");
    if ($swiperContainer.length === 0) {
      const $swiperContainer = $("<div></div>");
      $swiperContainer.addClass("swiper-container");
      $swiperContainer.append(
        '<div class="swiper-wrapper"></div>' +
          ' <div class="swiper-button-prev"></div>' +
          '<div class="swiper-button-next"></div>' +
          '<div class="swiper-pagination"></div>'
      );
      $parentElem.append($swiperContainer);
    } else {
    }
    return $swiperContainer;
  }

  changeEventSource(events = []) {
    this.calendar.removeAllEventSources();
    this.calendar.addEventSource(events);
  }
}

$.fn.swiperEventCalender = function (
  options = {
    calendarOptions: {},
    swiperOptions: {},
    events: {},
  }
) {
  const _this = this;
  return this.map(function () {
    return new SwiperEventCalender(this, options);
  });
};
