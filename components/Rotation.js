AFRAME.registerComponent('fly-plane',{
    schema:{
        x:{type:'number',default:0.01}
    },
    init:function() {
        window.addEventListener('keydown',(e)=>{

            if(e.code=='ArrowLeft'){
                this.data.x-=0.1
               
            }
            if(e.code=='ArrowRight'){
                this.data.x+=0.1
            }
        })
    },
    tick:function(){
        var rotation=this.el.getAttribute("rotation")
        rotation.x=this.data.x;
        this.el.setAttribute("rotation",{x:rotation.x,y:rotation.y,z:rotation.z})
    }
})