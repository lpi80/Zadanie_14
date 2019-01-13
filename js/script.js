const templateCarousel = document.getElementById('template-carousel').innerHTML;
const templateItem = document.getElementById('template-carousel-item').innerHTML;
Mustache.parse(templateItem);
let listItems = '';
for (let i = 0; i < productsData.length; i++) {
    listItems += Mustache.render(templateItem, productsData[i]);
}

const fullCarousel = Mustache.render(templateCarousel, { carousel: listItems });

results.insertAdjacentHTML('beforeend', fullCarousel);


const carousel = document.querySelector('.main-carousel');
let flkty = new Flickity(carousel, {
    imagesLoaded: true,
    percentPosition: false,
    fullscreen: true,
    cellAlign: 'center',
    contain: true,
    hash: true,
    pageDots: false

});

const progressBar = document.querySelector('.progress-bar');
flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});

document.querySelectorAll('.reset').forEach(function (kind) {
    kind.addEventListener('click', function (event) {
        flkty.select(0);
    });
});

function initMap() {
    let uluru = [];
    let marker = [];
    for (let i = 0; i < productsData.length; i++) {
        uluru.push(productsData[i].coords);
    };
    const map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru[0] });

    for (let i = 0; i < productsData.length; i++) {
        marker[i] = new google.maps.Marker({ position: uluru[i], map: map });
        marker[i].addListener('click', function () {
            flkty.select(i);
        });
    }
}

