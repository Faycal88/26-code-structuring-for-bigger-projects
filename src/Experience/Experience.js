import * as THREE from 'three'
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World'

let instance = null;

export default class Experience {

    constructor(canvas){

        if(instance){
            return instance
        }

        instance = this

        // Global access
        //window.experience = this

        // options
        this.canvas = canvas

        // setup

        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()
        

        // sizes resize event
        this.sizes.on('resize', () => {
           this.resize()
        })

        // time tick event
        this.time.on('tick', () => {
            this.update()
        })
    }

    resize(){
        this.camera.resize()
        this.renderer.resize()
    }

    update(){
        this.camera.update()
        this.renderer.update()
    }
}