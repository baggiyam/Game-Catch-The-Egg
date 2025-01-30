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
        this.width = 150;
        this.height = 150;
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
        this.basketElm.style.width = this.width + "px";
        this.basketElm.style.height = this.height + "px";
        this.basketElm.style.left = this.positionX + "px";
        this.basketElm.style.bottom = this.positionY + "px";
        this.basketElm.style.backgroundSize = "contain";
        this.basketElm.style.backgroundRepeat = "no-repeat";
        this.basketElm.style.position = "absolute"; 

        // Append the basket to the 'image' container
        const parentElm = document.getElementById('image');
        parentElm.appendChild(this.basketElm);
    }

    updateUI() {
        this.basketElm.style.left = this.positionX + "px";
        this.basketElm.style.bottom = this.positionY + "px";
    }

    Basketmovement() {
        let containerWidth = 800;  
        let containerHeight = 600;  
        let basketWidth = 150;  
        let basketHeight = 150;
        document.addEventListener("keydown", (event) => {
            switch (event.code) {
                case "ArrowRight":
                    if (this.positionX < containerWidth - basketWidth) 
                        this.positionX+=10; 
                    break;
                case "ArrowLeft":
                    if (this.positionX > 0) this.positionX-=10; // Add boundary for left movement
                    break;
                case "ArrowUp":
                    if (this.positionY < containerHeight - basketHeight)
                        this.positionY+=10  // Add boundary for up movement
                    break;
                case "ArrowDown":
                    if (this.positionY > 0) this.positionY-=10; // Add boundary for down movement
                    break;
            }
            this.updateUI(); // Update basket position after key press
        });
    }
}

// Egg class for falling egg behavior
let score=0;
function updateScoreDisplay() {
    const scoreElement = document.getElementById("score-text");
    scoreElement.textContent = "Score: " + score;  
}
class Egg {
    constructor() {
        this.height = 100;
        this.width = 100;
        this.positionX = Math.floor(Math.random() * 700);
        this.positionY = 900;
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
        this.eggElm.style.left = this.positionX + "px";
        this.eggElm.style.bottom = this.positionY + "px";
    }

    fall() {
        const interval = setInterval(() => {
            if (this.positionY > 0) {
                this.positionY -= 10;
                this.updateUI();
                this.checkCollision();
            }

            // Check if the egg has reached the bottom and remove it
            if (this.positionY === 0) {
                this.remove();
                clearInterval(interval); // Stop the egg from falling after removal
            }
        }, 100);
    }

    remove() {
        const bottomValue = parseFloat(this.eggElm.style.bottom);
        if (bottomValue === 0) {
            this.eggElm.remove(); // Remove the egg element when it reaches the bottom
        }
    }

    checkCollision() {
        // Basket positions (dimensions)
        const basketLeft = basket.positionX;
        const basketRight = basket.positionX + basket.width;
        const basketBottom = basket.positionY;
        const basketTop = basket.positionY + basket.height;
        
        // Egg positions
        const eggLeft = this.positionX;
        const eggRight = this.positionX + this.width;
        const eggBottom = this.positionY;
        const eggTop = this.positionY + this.height;

        if (
            eggRight > basketLeft &&
            eggLeft < basketRight &&
            eggTop > basketBottom &&
            eggBottom < basketTop
        ) {
            score++;  
            this.eggElm.remove();
            updateScoreDisplay();
        }
      
    }
    
    
}

// RedEgg class (similar to Egg class)
class RedEgg {
    constructor() {
        this.height = 100;
        this.width = 100;
        this.positionX = Math.floor(Math.random() * 700);
        this.positionY = 900;
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
        this.redeggElm.style.left = this.positionX + "px";
        this.redeggElm.style.bottom = this.positionY + "px";
    }

    fall() {
        setInterval(() => {
            if (this.positionY > 0) {
                this.positionY -= 50;
                this.updateUI();
                this.checkCollision();
            }

            // Check if the red egg has reached the bottom and remove it
            if (this.positionY === 0) {
                this.remove();
            }
        }, 300);
    }

    remove() {
        this.redeggElm.remove(); // Remove the red egg when it reaches the bottom
    }

    checkCollision() {
        // Basket positions (dimensions)
        const basketLeft = basket.positionX;
        const basketRight = basket.positionX + basket.width;
        const basketBottom = basket.positionY;
        const basketTop = basket.positionY + basket.height;

        // Red egg positions
        const redeggLeft = this.positionX;
        const redeggRight = this.positionX + this.width;
        const redeggBottom = this.positionY;
        const redeggTop = this.positionY + this.height;

        if (
            redeggRight > basketLeft &&
            redeggLeft < basketRight &&
            redeggTop > basketBottom &&
            redeggBottom < basketTop
        ) {
           
            score--;  // Decrease score on catching the red egg
            this.redeggElm.remove();
            updateScoreDisplay();
        }
    }
}

// Candies class (similar to Egg class)
class Candies {
    constructor() {
        this.height = 100;
        this.width = 100;
        this.positionX = Math.floor(Math.random() * 700);
        this.positionY = 900;
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
        this.CandiesElm.style.left = this.positionX + "px";
        this.CandiesElm.style.bottom = this.positionY + "px";
    }

    fall() {
        setInterval(() => {
            if (this.positionY > 0) {
                this.positionY-=20;
                this.updateUI();
                this.checkCollision();
            }

            // Check if the candy has reached the bottom and remove it
            if (this.positionY === 0) {
                this.remove();
            }
        }, 150);
    }

    remove() {
        this.CandiesElm.remove(); // Remove the candy when it reaches the bottom
    }

    checkCollision() {
        // Basket positions (dimensions)
        const basketLeft = basket.positionX;
        const basketRight = basket.positionX + basket.width;
        const basketBottom = basket.positionY;
        const basketTop = basket.positionY + basket.height;

        // Candy positions
        const candieLeft = this.positionX;
        const candieRight = this.positionX + this.width;
        const candieBottom = this.positionY;
        const candieTop = this.positionY + this.height;

        if (
            candieRight > basketLeft &&
            candieLeft < basketRight &&
            candieTop > basketBottom &&
            candieBottom < basketTop
        ) {
            
            score += 2; 
            this.CandiesElm.remove();
            updateScoreDisplay();
        }
    }
}

// Initialize basket and game objects
const basket = new Basket();
const egg = new Egg();
const Red = new RedEgg();
const candie = new Candies();
const eggsArr = [];
const redEggsArr = [];
const candiesArr = [];

class CreateMultiple {
    constructor() {
        this.create();
    }

    create() {
        const creationInterval = setInterval(() => {
            
            let eggCount = Math.floor(Math.random()*2) + 1;  
           let redEggCount = Math.floor(Math.random()) + 1;  
            let candiesCount = Math.floor(Math.random()*3) + 1;  

            for (let i = 0; i < eggCount; i++) {
                eggsArr.push(new Egg());
            }

            for (let i = 0; i < redEggCount; i++) {
                redEggsArr.push(new RedEgg());
            }

            for (let i = 0; i < candiesCount; i++) {
                candiesArr.push(new Candies());
            }

        }, 6000);
    }
}

//implementing Timer 


new CreateMultiple();
