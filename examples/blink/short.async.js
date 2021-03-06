/*
 * examples/blink/short.async.js
 */

'use strict';

var udoo = require('../..');

var led = udoo.outputPin(13),
    on = false;

function loop() {
  led.set(on = !on, function (err) {
    if (err) { throw err; }
    setTimeout(loop, 1000);
  });
}

udoo.reset(function (err) {
  if (err) { throw err; }
  loop();
});
