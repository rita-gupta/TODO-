const clock = document.querySelector(".clock");
const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();

  console.log(h, m);
};

setInterval(tick, 1000);
