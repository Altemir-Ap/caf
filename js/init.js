  (function ($) {
    $(function () {
  
      $('.button-collapse').sideNav({
        menuWidth: 250,
        closeOnClick: true, 
        draggable: true

      });
      $('.parallax').parallax();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space
  
  $('.carousel.carousel-slider').carousel({ fullWidth: true });
  
  $(document).ready(function () {
    $('.slider').slider({indicators: false, height: 550});
  });
  
  $(document).ready(function () {
    $('.scrollspy').scrollSpy();
  });
  
  $(document).ready(function(){
      $('.modal').modal();
  });
        
  function next() {
    $('.carousel').carousel('next');
  }
  var options = [
    {
      selector: '#staggered-test',
      offset: 250,
      callback: function (el) { Materialize.showStaggeredList($(el)); }
    }
  
  ];
  Materialize.scrollFire(options);
  
  function openEM(){
      $('#modal1').modal('open');
  }
  
  $(document).ready(function(){
      $('.modal').modal();
    });
            