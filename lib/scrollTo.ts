import { animateScroll } from "./animateScroll";

const logError = () =>
  console.error(
    `Invalid element, are you sure you've provided element id or react ref?`
  );

const getElementPosition = (element: any) => element.offsetTop;

export const scrollTo = ({ id, duration = 1000 }: any) => {
  // the position of the scroll bar before the user clicks the button
  const initialPosition = window.scrollY;

  const element = document.getElementById(id);

  if (!element) {
    // log error if the reference passed is invalid
    logError();
    return;
  }

  animateScroll({
    targetPosition: getElementPosition(element),
    initialPosition,
    duration,
  });
};
