define(['helper/setting', 'helper/gesture_detector'],
function(setting, gesture) {
  var audioContext, analyser, mic;

  navigator.getUserMedia = (navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia);

  if (document.readyState == 'complete') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  function init() {
    audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();

    navigator.getUserMedia({audio: true}, processStream, function(err) {
      console.log('error getting audio via user media: ' + err);
    });

    console.log('app initialized');
  }

  function processStream(stream) {
    console.log('got audio steam');

    // Create an AudioNode from the stream.
    var mediaStreamSource = audioContext.createMediaStreamSource(stream);

    // Connect it to the destination to hear yourself
    //(or any other node for processing!)
    mediaStreamSource.connect(audioContext.destination);
  }
});
