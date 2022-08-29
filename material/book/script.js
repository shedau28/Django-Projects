//------------------------------------------
// Set book text on load
//------------------------------------------

// localStorage.setItem('currentbook', 'humility');
var currentBook = localStorage.getItem('currentbook');

$('#app').attr('mv-app', currentBook);



//------------------------------------------
// After Mavo loads
//------------------------------------------

Mavo.inited
.then( () => Mavo.all[0].dataLoaded )
.then( () => {

    $('.toc-list-item').on('click', function() {
      var $this = $(this);
      var linkID = $this.attr('data-link');
      var linkHash = $('#' + linkID);

      $('html, body').animate({
          scrollTop: linkHash.offset().top
      }, 1);

      $('.panel').fadeOut(300);
      $('.overlay').fadeOut(300);

    })

})
.then(() => {
  
  bookmarking();
  
  function bookmarking() {
    var pageTop = '';
    var bookmarkLocation = '';

    $(window).scroll(function() {
      pageTop = $(window).scrollTop();
      localStorage.setItem('bookmark', pageTop);
    });

    bookmarkLocation = localStorage.getItem('bookmark');
    $('html, body').animate({
      scrollTop: bookmarkLocation
    },1);
  }  
  
})

 
//------------------------------------------
// UI
//------------------------------------------

$('.menu-link').on('click', function() {
  $('.toc').fadeIn(300);
  $('.overlay').fadeIn(300);
});

$('.overlay').on('click', function() {
  $('.panel').fadeOut(300);
  $('.overlay').fadeOut(300);
});

$('.settings-link').on('click', function() {
  $('.settings').fadeIn(300);
  $('.overlay').fadeIn(300);
});

// dark mode

$('.dark-switch').on('click', function() {
  $('body').toggleClass('dark');
  $('.switch-inner').toggleClass('active');
});