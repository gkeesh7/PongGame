function Bat(){
    this.yloc=0;
    this.long=5;


    this.show = function (){
      fill(0,155,0);
      for(var i=0;i<this.long;i++){
        rect(0,this.yloc+i*scl,scl,scl);
      }
    }

    this.dir = function (val){
          this.yloc+=(val*scl);
          if(this.yloc<0){ //Hardcoding this because constrain was not working
            this.yloc=0;
          }
          if(this.yloc>350){
            this.yloc=350;
          }
    }

}
