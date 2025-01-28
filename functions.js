//Creating the CHANGABLE BACKGROUND

function applyBannerClass() {
    const bodyElement = document.body;

    let counter = 1;

    const id = setInterval(function () {
        console.log(`hello ${counter}`);
        counter++;

        if (counter > 0 && counter < 15) {
            bodyElement.classList.add('Banner2');
        }
        if (counter > 15 && counter < 30) {
            bodyElement.classList.add('Banner3');
        }
        if (counter > 30 && counter < 45) {
            bodyElement.classList.add('Banner4');
        }
        if (counter > 45 && counter < 50) {
            bodyElement.classList.add('Banner2');
            counter = 1;
            bodyElement.classList.remove('Banner2', 'Banner3', 'Banner4');

        }
    }, 1000);
}

window.onload = applyBannerClass();

//INSERTING THE BASKET

class Basket {
    constructor() {

        this.width = 20;
        this.height = 20;
        this.positionX = 0;
        this.positionY = 0;

        this.basketElm = document.getElementById('image');
        this.basketElm.style.backgroundImage = "url('Images/Nest.jpeg')";
        this.basketElm.style.width = this.width + "vw";
        this.basketElm.style.height = this.height + "vh";
        this.basketElm.style.left = this.positionX + "vw";
        this.basketElm.style.bottom = this.positionY + "vh";
        this.basketElm.style.backgroundSize = "cover";
        this.basketElm.style.backgroundRepeat = "no-repeat";
        this.basketElm.style.position = "absolute";
        this.updateUI();
        this.Basketmovement();


    }
    updateUI() {
        this.basketElm.style.left = this.positionX + "vw";
        this.basketElm.style.bottom = this.positionY + "vh";
    }
    Basketmovement() {
        document.addEventListener("keydown", (event) => {
            switch (event.code) {
                case "ArrowRight":
                    this.positionX++;
                    break;
                case "ArrowLeft":
                    this.positionX--;
                    break;
                case "ArrowUp":
                    this.positionY++;
                    break;
                case "ArrowDown":
                    this.positionY--;
                    break;

            }
            this.updateUI();
        });

}

    }
    const basket = new Basket();
