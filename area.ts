class area{
    radius:number=10;
    areacircle:number;
    width:number=5
    height:number=3
    rectangular:number;
    constructor(){
        this.areacircle=3.14*this.radius*this.radius
        this.rectangular=this.height*this.width
    }
}
var circle=new area()
    console.log(circle.areacircle)
    console.log(circle.rectangular)
