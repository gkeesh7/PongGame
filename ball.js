function Ball(){
    this.xloc=10;
    this.yloc=0;
    this.xdir=1;
    this.ydir=1;
    this.myscore=0;
    this.aiscore=0;
    this.aiY=0;
    this.show = function(){
      fill(155,0,0);
      rect(this.xloc,this.yloc,scl,scl);
    }
    this.aishow = function(){
      fill(0,0,155);
      for(var i=0;i<5;i++){
        rect(390,this.aiY+(i*scl),scl,scl);
      }
    }

    this.update = function(){
      this.xloc+=(this.xdir*scl);
      this.yloc+=(this.ydir*scl);
      this.aiY=this.yloc;
      if(this.aiY>=350){
        this.aiY=350;
      }
      if(this.aiY<=0){
        this.aiY=0;
      }
    }

    this.collide = function(batYloc,aiYloc){
      if(this.xloc==0 || (this.xloc==390)){
        this.xdir*=(-1);
        if(this.xloc==0){
          this.aiscore++;
          this.xloc=200;
          this.yloc=(Math.floor(random(38))+1)*10;
        }
        else{
          this.myscore++;
        }
      }
      if((this.yloc==0)||(this.yloc==390)){
        this.ydir*=(-1);
      }
      if((this.xloc==10)&&(this.yloc>=batYloc && this.yloc<=batYloc+40)){
        this.xdir*=(-1);
      }
      if((this.xloc==380)&&(this.yloc>=aiYloc && this.yloc<=aiYloc+40)){
        this.xdir*=(-1);
      }
    }

}
