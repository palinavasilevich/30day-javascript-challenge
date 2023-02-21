const hourHand = document.body.querySelector(".hour-hand");
const minHand = document.body.querySelector(".min-hand");
const secondHand = document.body.querySelector(".second-hand");

const setRotate = (deg, hand) => {
  if (deg === 90) {
    hand.style.transition = "all 0s";
  } else {
    hand.style.transition = "all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
  }
  return `rotate(${deg}deg)`;
};

const setTime = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = setRotate(secondsDegrees, secondHand);

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = setRotate(minutesDegrees, minHand);

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = setRotate(hourDegrees, hourHand);
};

setInterval(setTime, 1000);
