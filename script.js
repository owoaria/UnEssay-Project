$('#toggle').click(function() {
  $(this).toggleClass('is-active');
  $('#navbarCollapse').toggleClass('is-active');
});
// Handle navbar link click
$('#navbarCollapse a').click(function() {
  // Check if the navbar is open
  if ($('#navbarCollapse').hasClass('is-active')) {
    // Collapse the navbar and reset the toggle button
    $('#navbarCollapse').removeClass('is-active');
    $('#toggle').removeClass('is-active');
  }
});