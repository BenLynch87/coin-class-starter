class Coin{
    constructor (initialState){
        this.state = initialState
    }
    flip() {
        this.state = Math.round(Math.random())
    }

    toString() {
        switch(this.state){
            case 0:
               return 'Tails'
               break
            case 1:
                return 'Heads'
       }
    }

    toHTML(){
        let image = document.createElement('img')

        switch(this.state){
            case 0:
               image.src = "./assets/images/tails.png"
               break
            case 1:
                image.src = "./assets/images/heads.png"
                break
       }

        return image
    }
}