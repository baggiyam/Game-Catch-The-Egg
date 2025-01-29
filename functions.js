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


class Egg {
    constructor() {
        this.height = 5;
        this.width = 5;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1)); 
        this.createDomElement();
    }
    createDomElement(){
        this.eggElm = document.createElemnt('div');
        this.eggElm.className="egg";
        this.eggElm.style.backgroundImage = "url('Images/egg.jpeg')";
        this.eggElm.style.width = this.width + "vw";
        this.eggElm.style.height = this.height + "vh";
        this.eggElm.style.left = this.positionX + "vw";
        this.eggElm.style.bottom = this.positionY + "vh";
        this.eggElm.style.backgroundSize = "cover";
        this.eggElm.style.backgroundRepeat = "no-repeat";
        this.eggElm.style.position = "absolute";
        const parentElm =document.getElementById("image");
        parentElm.appendChild(this.eggElm);


    
}
moveDown() {
    this.positionY--;
    this.eggElm.style.bottom = this.positionY + "vh";
}
}


const basket = new Basket();

const eggArr = []; 


// create obstacles
setInterval(() => {
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle);
}, 3000);

// update obstacles
setInterval(() => {
    obstaclesArr.forEach((obstacleInstance, i, arr) => {

        // move
        obstacleInstance.moveDown();

        // detect collision
        if (
            Basket.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            Basket.positionX + player.width > obstacleInstance.positionX &&
            Basket.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            Basket.positionY + player.height > obstacleInstance.positionY
        ) {
            // Collision detected!
            console.log("game over...");
            location.href = "gameover.html";
        }
    });
}, 30);



document.addEventListener("keydown", (event) => {
    if (event.code === 'ArrowLeft') {
        player.moveLeft();
    } else if (event.code === 'ArrowRight') {
        player.moveRight();
    }
});