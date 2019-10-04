$('#collpase-navbar').on('show.bs.collapse', function () {
  $('.arquitetura-banner').css('transform', 'translate(-50%, 10%)');
});

$('#collpase-navbar').on('hide.bs.collapse', function () {
  $('.arquitetura-banner').css('transform', 'translate(-50%, -50%)');
});