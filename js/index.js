$(document).ready(function() {
  $('i').hide();
})
 // Short delay to have icons appear after pge is loaded
$(window).load(function () {
    $('i').show();
     // Set Variables for Animation
    var twitterPos = $('#twitter').position();
    var githubPos = $('#github').position();
    var stackPos = $('#stack').position();
    var linkedinPos = $('#linkedin').position();
    var codePos = $('#code').position();
    var plusPos = $('#facebook').position();
    var mailPos = $('#mail').position();
    var imgPos = $('#me').position();
   
    var scale = 1;
    setInterval(function () {
        scale = scale == 1 ? 1.5 : 1
        $('.social i#twitter').css('transform', 'scale(' + scale + ')')
    }, 1000)

    var scale1 = 1;
    setInterval(function () {
        scale1 = scale1 == 1 ? 1.5 : 1
        $('.social i#github').css('transform', 'scale(' + scale + ')')
    }, 1000)

    var scale2 = 1;
    setInterval(function () {
        scale2 = scale2 == 1 ? 1.5 : 1
        $('.social i#linkedin').css('transform', 'scale(' + scale + ')')
    }, 1000)

    var scale3 = 1;
    setInterval(function () {
        scale3 = scale3 == 1 ? 1.5 : 1
        $('.social i#facebook').css('transform', 'scale(' + scale + ')')
    }, 1000)

    var scale4 = 1;
    setInterval(function () {
        scale4 = scale4 == 1 ? 1.5 : 1
        $('.social i#mail').css('transform', 'scale(' + scale + ')')
    }, 1000)


  // Start Animation along X-plane to orginal position
  $('i').css({
    position: 'absolute',
    zIndex: '1',
    top: imgPos
  });
   // Start animation when mouse over
  setTimeout(function() {
    $('#twitter').animate({
      top: twitterPos.top + 10,
      left: twitterPos.left - 10
    }, 500);
  }, 250);
  
  setTimeout(function() {
    $('#twitter').animate({
      top: twitterPos.top,
      left: twitterPos.left
    }, 250);
    
    $('#github').animate({
      top: githubPos.top + 10,
      left: githubPos.left - 6
    }, 500);
  }, 500);
  
  setTimeout(function() {
    $('#github').animate({
      top: githubPos.top,
      left: githubPos.left
    }, 250);
    
    $('#stack').animate({
      top: stackPos.top + 10,
      left: stackPos.left - 3
    }, 500);
  }, 750);
  
  setTimeout(function() {
    $('#stack').animate({
      top: stackPos.top,
      left: stackPos.left
    }, 250);
    
    $('#linkedin').animate({
      top: linkedinPos.top + 10,
      left: linkedinPos.left
    }, 500);
  }, 1000);
  
  setTimeout(function() {
    $('#linkedin').animate({
      top: linkedinPos.top,
      left: linkedinPos.left
    }, 250);
    
    $('#code').animate({
      top: codePos.top + 10,
      left: codePos.left + 3
    }, 500);
  }, 1250);
  
  setTimeout(function() {
    $('#code').animate({
      top: codePos.top,
      left: codePos.left
    }, 250);
    
    $('#facebook').animate({
      top: plusPos.top + 10,
      left: plusPos.left + 6
    }, 500);
  }, 1500);
  
  setTimeout(function() {
    $('#facebook').animate({
      top: plusPos.top,
      left: plusPos.left
    }, 250);
    
    $('#mail').animate({
      top: mailPos.top + 10,
      left: mailPos.left + 10
    }, 500);
  }, 1750);
  
  setTimeout(function() {
    $('#mail').animate({
      top: mailPos.top,
      left: mailPos.left
    }, 250);
  }, 2000);
  
})