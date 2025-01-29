// Creating the CHANGABLE BACKGROUND
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

window.onload = applyBannerClass;

// INSERTING THE BASKET
class Basket {
    constructor() {
        this.width = 20;
        this.height = 20;
        this.positionX = 0;
        this.positionY = 0;

        this.createDomElement(); 
        this.updateUI();
        this.Basketmovement(); 
    }

    createDomElement() {
        this.basketElm = document.createElement('div');
        this.basketElm.className = "Basket";
        this.basketElm.style.backgroundImage = "url('Images/Nest.jpeg')";
        this.basketElm.style.width = this.width + "vw";
        this.basketElm.style.height = this.height + "vh";
        this.basketElm.style.left = this.positionX + "vw";
        this.basketElm.style.bottom = this.positionY + "vh";
        this.basketElm.style.backgroundSize = "cover";
        this.basketElm.style.backgroundRepeat = "no-repeat";
        this.basketElm.style.position = "absolute"; // Set position to absolute

        // Append the basket to the 'image' container
        const parentElm = document.getElementById('image');
        parentElm.appendChild(this.basketElm);
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
            this.updateUI(); // Update basket position after key press
        });
    }
}

// Egg class for falling egg behavior
class Egg {
    constructor() {
        this.height = 40;
        this.width = 40;
        this.positionX = 50; 
        this.positionY = 40; 
        this.createDomElement(); 
        this.fall(); 
    }

    createDomElement() {
        this.eggElm = document.createElement('div');
        this.eggElm.className = "eggclass"; 
        this.eggElm.style.backgroundImage = "url('Images/egg.jpeg')";
        this.eggElm.style.width = this.width + "px";
        this.eggElm.style.height = this.height + "px";
        this.eggElm.style.backgroundSize = "contain";
        this.eggElm.style.backgroundRepeat = "no-repeat";
        this.eggElm.style.position = "absolute"; 
        this.eggElm.style.overflow = "hidden"; 

        // Append the egg element to the 'image' div
        const parentElm = document.getElementById('image');
        parentElm.appendChild(this.eggElm);
        this.updateUI(); // Update the egg position
    }

    updateUI() {
        // Update the egg's position based on positionX and positionY
        this.eggElm.style.left = this.positionX + "vw";
        this.eggElm.style.bottom = this.positionY + "vh";
    }

    fall() {
        // Make the egg fall down every 100ms
        setInterval(() => {
            if (this.positionY > 0) {
                this.positionY--; 
                this.updateUI(); 
            }
        }, 100); 
    }
}

class RedEgg{
    constructor(){
     this.height = 40;
     this.width = 40;
     this.positionX = 50; 
     this.positionY = 40; 
     this.createDomElement(); 
     this.fall(); 
 }


    }

}
// Initialize basket and egg objects
const basket = new Basket();
const eggfall = new Egg(); 
