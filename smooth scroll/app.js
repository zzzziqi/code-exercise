function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  //   var targetPosition = target.getBoundingClientRect().top;
  var targetPosition = target.offsetTop;
  console.log(targetPosition);
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  console.log(targetPosition);
  console.log(startPosition);

  var startTime;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    // console.log(startTime);
    // console.log(currentTime);
    // console.log(startTime, currentTime);
    var timeElapsed = currentTime - startTime;
    // console.log(timeElapsed);
    var run = ease(timeElapsed, startPosition, distance, duration);
    // console.log(run);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // t:当前时间, b: 开始值, c:改变值, d: 持续时间
  function ease(t, b, c, d) {
    t /= d;
    return c * t * t + b;
  }

  requestAnimationFrame(animation);
}

var section1 = document.querySelector(".section1");
section1.addEventListener("click", function () {
  smoothScroll(".box2", 4000);
});
var section2 = document.querySelector(".section2");
section2.addEventListener("click", function () {
  smoothScroll(".box1", 4000);
});
