  function updatePositions() {
  frame++;
  e=Math.sin(document.body.scrollTop / 1250);
  window.performance.mark("mark_start_frame");
  var items = document.querySelectorAll('.mover');
  for (var i = 0; i < items.length; i++) {
    phase =  e + (i % 5);
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }

  // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}
  function animate()
  {
    updatePositions();
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);