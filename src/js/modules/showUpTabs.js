export default class ShowUp {
    constructor(container, items) {
        this.container = document.querySelector(container);
        try {
            this.items = this.container.querySelectorAll(items);
            this.plus = this.container.querySelector('.plus');
        }
        catch { };
        this.counter = 0;
        this.btn = document.querySelector('.difference .next');
        this.i = false;
        this.j = false;
    }

    hideTabs() {
        try {
            this.items.forEach((item, i, arr) => {
                if (i !== arr.length - 1) {
                    item.style.display = 'none';
                }
            });
        }
        catch {};
    }

    showTabs() {
        try {
            this.plus.addEventListener('click', () => {
                if (this.counter !== this.items.length - 2) {
                    this.items[this.counter].classList.add('animated', 'fadeInUp');
                    this.items[this.counter].style.display = 'flex';
                    this.counter++;
                }
                else {
                    this.items[this.items.length - 1].remove();
                    this.items[this.counter].style.display = 'flex';
                }
            });
        }
        catch {};
    }


    init() {
        this.hideTabs();
        this.showTabs();
    }
}