class dustbin{
constructor(x,y){
this.x=x;
this.y=y;
this.width=200;
this.height=100;
this.wallThickness=20;
this.angle=0;

this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.wallThickness,{isStatic:true});
this.leftbody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.wallThickness,this.height,{isStatic:true});
Matter.Body.setAngle(this.leftbody,this.body);
this.rightbody=Bodies.rectangle(this.x+this.width/2,this.y+this.height/2,this.wallThickness,this.height,{isStatic:true});
Matter.Body.setAngle(this.rightbody,this.body);

}
display(){
var bottompos=this.bottombody.position;
push();
translate(bottompos.x,bottompos.y);
rectMode(CENTER);
strokeWeight(3);
Fill(255,0,255);
ellipse(0,0,this.width,this.height);
pop();

var rightpos=this.rightbody.position;
push();
translate(rightpos.x,rightpos.y);
rectMode(CENTER);
strokeWeight(3);
Fill(255,0,255);
ellipse(0,0,this.width,this.height,this.wallThickness);
pop();

var leftpos=this.leftbody.position;
push();
translate(lefttpos.x,leftpos.y);
rectMode(CENTER);
strokeWeight(3);
Fill(255,0,255);
ellipse(0,0,this.width,this.height,this.wallThickness);
pop();

}


}