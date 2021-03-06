import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(page, btns) {
        super(page, btns);
    }

    showSlides(n) {

       try {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = 0;
            this.hanson.classList.add('animated');

            if (n === 3) {
                setTimeout(() => {
                    this.hanson.classList.add('slideInUp');
                    this.hanson.style.opacity = 1;
                }, 3000);
            }
            else {
                this.hanson.classList.remove('slideInUp');
            }
        }
        catch (e) {

        }

        for (this.slide of this.slides) {
                this.slide.style.display = 'none';
        }

        this.slides[this.slideIndex - 1].style.display = 'block';
       }
       catch {};
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
       if (this.container) {
        try {
            this.hanson = document.querySelector('.hanson');
        } 
        catch(e){}

        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);

        document.querySelectorAll('.prevmodule').forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(-1);
            });
        });

        document.querySelectorAll('.nextmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.plusSlides(1);
            });
        });

       }
    }

}