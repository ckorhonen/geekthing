$(window).load(function() {

  var theWindow        = $(window),
      $bg              = $("#background-wrapper img:visible"),
      aspectRatio      = $bg.width() / $bg.height();

  function resizeBg() {
    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
        $bg
          .removeClass()
          .addClass('bgheight');
    } else {
        $bg
          .removeClass()
          .addClass('bgwidth');
    }
  }

  function rotateBg() {
    theWindow.resize(resizeBg).trigger("resize");
  }

  theWindow.resize(resizeBg).trigger("resize");

  setInterval(rotateBg, 3000);

});