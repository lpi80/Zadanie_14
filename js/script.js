const carousel = document.querySelector('.main-carousel');
const flkty = new Flickity(carousel, {
    imagesLoaded: true,
    percentPosition: false,
    fullscreen: true, 
    cellAlign: 'center',
    contain: true,
    hash: true, 
    pageDots: false

});

const progressBar = document.querySelector('.progress-bar');
flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});


document.querySelectorAll('.reset').forEach(function(kind) {
    kind.addEventListener('click', function(event) {
        flkty.select(0);
    })
})