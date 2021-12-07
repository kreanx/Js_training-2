import Player from './modules/player';
import MainSlider from './modules/sliders/main-slider';
import SliderMini from './modules/sliders/slider-mini';
import ShowUp from './modules/showUpTabs';
import Forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const sliderModule = new MainSlider({
        container: '.moduleapp',
        btns: '.next'
    })
    sliderModule.render();

    const showUpSlider = new SliderMini({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new SliderMini({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new SliderMini({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();


    const player = new Player('.showup .play', '.overlay');
    player.init();
    
    new ShowUp('.officerold', '.officer__card-item').init();
    new ShowUp('.officernew', '.officer__card-item').init();
    new Forms('.form').init();

});