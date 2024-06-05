import EventEmmiter from './EventEmitter'



export default class Sizes  extends EventEmmiter {
    
    constructor(){
        
        //Extend Class
        super()

        // setup 

        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        window.addEventListener("resize" , () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')

        })
    }
}