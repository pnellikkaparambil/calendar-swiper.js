import "./style.css";

import "./components/calenders";
import $ from "jquery";
// calling swiper event calender
const slider = $(".swiper-event-calender").swiperEventCalender({
  calendarOptions: {},
  events: [
    {
      title: "Event 1",
      start: "2023-06-14T10:00:00",
      end: "2023-06-14T12:00:00",
      allDay: false,
      extendedProps: {
        description:
          "Et convidem a participar en la presentació online de l'Informe FAROS",
      },
    },
    {
      title: "Event 2",
      start: "2023-06-14T14:00:00",
      end: "2023-06-14T16:00:00",
      allDay: false,
    },
    {
      title: "Event 3",
      start: "2023-06-09T14:00:00",
      end: "2023-06-09T16:00:00",
      allDay: false,
    },
    {
      title: "Event 4",
      start: "2023-07-09T14:00:00",
      end: "2023-07-09T16:00:00",
      allDay: false,
    },
    {
      title: "Event 5",
      start: "2023-07-09T14:00:00",
      end: "2023-07-09T16:00:00",
      allDay: false,
    },
    {
      title: "Event 6",
      start: "2023-06-09T14:00:00",
      end: "2023-06-09T16:00:00",
      allDay: false,
    },
    // Add more events as needed
    {
      title: "Event 3",
      start: "2023-06-19T10:00:00",
      end: "2023-06-19T12:00:00",
      allDay: false,
      extendedProps: {
        description:
          "Et convidem a participar en la presentació online de l'Informe FAROS",
      },
    },
    {
      title: "Event 4",
      start: "2023-06-19T14:00:00",
      end: "2023-06-19T16:00:00",
      allDay: false,
    },
  ],
});

const slider1 = slider.get(0);
$("#btnClick").on("click", () => {
  slider1.changeEventSource([
    {
      title: "Event 11",
      start: "2023-06-01T14:00:00",
      end: "2023-06-01T16:00:00",
      allDay: false,
    },
  ]);
});
