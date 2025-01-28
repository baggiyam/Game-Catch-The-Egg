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

class Basket{
    constructor(){
        
        this.width = 50;
        this.height = 50; 
        this.positionX =20;
        this.positionY =20;
        this.playerElm = document.getElementById('player'); 
        this.updateUI();
    }
    
    moveright(){
        document.addEventListener("keydown",(event)=>{
            if(event.code==="ArrowRight"){
                this.positionX++;
            }
        })
    }

moveleft(){
    document.addEventListener("keydown",(event)=>{
        if(event.code==="ArrowLeft"){
            this.positionX--;
        }
    })

    }
    moveup(){
        document.addEventListener("keydown",(event)=>{
            if(event.code==="ArrowRight"){
                this.positionY++;
            }
        })
    

    }
movedown(){
    document.addEventListener("keydown",(event)=>{
        if(event.code==="ArrowRight"){
            this.positionY--;
        }
    })
}

}
const basket = new Basket();