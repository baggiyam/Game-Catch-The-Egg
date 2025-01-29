// Creating the CHANGABLE BACKGROUND
function applyBannerClass() {
    const bodyElement = document.body;
    let counter = 1;

    const id = setInterval(function () {
        console.log(`hello ${counter}`);
        counter++;

        if (counter > 0 && counter < 15) {
            bodyElement.classList.add('Banner2');
            bodyElement.classList.remove('Banner3', 'Banner4');
        }
        else if (counter > 15 && counter < 30) {
            bodyElement.classList.add('Banner3');
            bodyElement.classList.remove('Banner2', 'Banner4');
        }
        else if (counter > 30 && counter < 45) {
            bodyElement.classList.add('Banner4');
            bodyElement.classList.remove('Banner2', 'Banner3');
        }
        else if (counter >= 45 && counter < 50) {
            bodyElement.classList.add('Banner2');
            bodyElement.classList.remove('Banner3', 'Banner4');
            counter = 1;
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
                    if (this.positionX < 80) this.positionX++; // Add boundary for right movement
                    break;
                case "ArrowLeft":
                    if (this.positionX > 0) this.positionX--; // Add boundary for left movement
                    break;
                case "ArrowUp":
                    if (this.positionY < 80) this.positionY++; // Add boundary for up movement
                    break;
                case "ArrowDown":
                    if (this.positionY > 0) this.positionY--; // Add boundary for down movement
                    break;
            }
            this.updateUI(); // Update basket position after key press
        });
    }
}

// Egg class for falling egg behavior
class Egg {
    constructor() {
        this.height = 100;
        this.width = 100;
        this.positionX = Math.floor(Math.random() * 80);
        this.positionY = 80;
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
        this.eggElm.style.left = this.positionX + "vw";
        this.eggElm.style.bottom = this.positionY + "vh";
    }

    fall() {
        setInterval(() => {
            if (this.positionY > 0) {
                this.positionY--;
                this.updateUI();
            }
        }, 100);
    }
}

class RedEgg {
    constructor() {
        this.height = 100;
        this.width = 100;
        this.positionX = Math.floor(Math.random() * 80);
        this.positionY = 80;
        this.createDomElement();
        this.fall();
        this.updateUI();
    }

    createDomElement() {
        this.redeggElm = document.createElement("div");
        this.redeggElm.className = "RedEgg";
        this.redeggElm.style.backgroundImage = "url('Images/Redegg.jpeg')";
        this.redeggElm.style.width = this.width + "px";
        this.redeggElm.style.height = this.height + "px";
        this.redeggElm.style.backgroundSize = "contain";
        this.redeggElm.style.backgroundRepeat = "no-repeat";
        this.redeggElm.style.position = "absolute";
        this.redeggElm.style.overflow = "hidden";
        const parentElm = document.getElementById('image');
        parentElm.appendChild(this.redeggElm);
        this.updateUI();
    }

    updateUI() {
        this.redeggElm.style.left = this.positionX + "vw";
        this.redeggElm.style.bottom = this.positionY + "vh";
    }

    fall() {
        setInterval(() => {
            if (this.positionY > 0) {
                this.positionY--;
                this.updateUI();
            }
        }, 300);
    }
}

class Candies {
    constructor() {
        this.height = 100;
        this.width = 100;
        this.positionX = Math.floor(Math.random() * 80);
        this.positionY = 80;
        this.createDomElement();
        this.fall();
        this.updateUI();
    }

    createDomElement() {
        this.CandiesElm = document.createElement("div");
        this.CandiesElm.className = "candies";
        this.CandiesElm.style.backgroundImage = "url('Images/Candies.jpeg')";
        this.CandiesElm.style.width = this.width + "px";
        this.CandiesElm.style.height = this.height + "px";
        this.CandiesElm.style.backgroundSize = "contain";
        this.CandiesElm.style.backgroundRepeat = "no-repeat";
        this.CandiesElm.style.position = "absolute";
        this.CandiesElm.style.overflow = "hidden";
        const parentElm = document.getElementById('image');
        parentElm.appendChild(this.CandiesElm);
        this.updateUI();
    }

    updateUI() {
        this.CandiesElm.style.left = this.positionX + "vw";
        this.CandiesElm.style.bottom = this.positionY + "vh";
    }

    fall() {
        setInterval(() => {
            if (this.positionY > 0) {
                this.positionY--;
                this.updateUI();
            }
            if (this.positionX === 0) {
                
            }

        }, 150);
    }
}
const egg=new Egg();
const Red=new RedEgg();
const candie=new Candies();

const eggsArr = [];  
const redEggsArr = [];  
const candiesArr = [];

class createmultiple {
    constructor() {
        this.create(); 
    }

    create() {
        const creationInterval = setInterval(() => {
            
            let eggCount = Math.floor(Math.random() * 5) + 1;  
            let redEggCount = Math.floor(Math.random()) + 1;  
            let candiesCount = Math.floor(Math.random() * 3) + 1;  

            for (let i = 0; i < eggCount; i++) {
                const eggfall = new Egg();
                eggsArr.push(eggfall);  
            }

            for (let i = 0; i < redEggCount; i++) {
                const redegg = new RedEgg();
                redEggsArr.push(redegg);  
            }
            for (let i = 0; i < candiesCount; i++) {
                const candy = new Candies();
                candiesArr.push(candy);  
            }

        }, 6000);  
        
    }
}

// Initialize basket and egg objects
const basket = new Basket();
const create = new createmultiple(); 
