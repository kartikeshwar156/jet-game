var myGamePiece;
var myObstacles = [];
var mObstacles = [];
var ourscore=[];
var DD = 0;
var UU = 0;
var g=0;
var i ,j;
var turn=0;
var rem=1;
let timerInterval;
let timerInterval2;
let timerInterval3;
var myScore;
var SG=0,SG1=0,SG2=0,SG3=0,GS=0;
var newgame=0;

let storedTime=0;
let startTime;

ourscore[0]=0;

function on() {
    document.getElementById("overlay").style.display = "block";
  }

  function stop2() {
    clearInterval(timerInterval3);
  }

  function on3() {
    clearInterval(timerInterval2);
    document.getElementById("overlay3").style.display = "block";
    timerInterval3 =setInterval( function off() {
      document.getElementById("overlay3").style.display = "none";
      stop2();
      
    }, 5000);
  }

  function on2() {
    clearInterval(timerInterval);
      document.getElementById("overlay2").style.display = "block";
      timerInterval2 =setInterval( function off() {
        document.getElementById("overlay2").style.display = "none";
        on3();
      }, 5000);
  }

  


  
  //function off() {
    //document.getElementById("overlay").style.display = "none";
  //}

  function starting() {
    on();
    startTime = Date.now();
    timerInterval =setInterval( function off() {
        document.getElementById("overlay").style.display = "none";
        on2();
      }, 5000);
  }



function startGame() {
    SG=0;
    SG1=0;
    SG2=0;
    SG3=0;
    GS=0;
    newgame=newgame+1;
    myScore=0;
    starting();
    GS=GS + 1;
    myGameArea.start();
    myGamePiece = new component(30, 30, "brown", 10, 120);
    myScore = new component("20px", "Consolas", "black", 280, 40, "text");
}

var myGameArea = {
    canvas : document.getElementById("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 370;
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },

    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stop : function() {
        clearInterval(this.interval);
        ourscore[newgame] = SG3;

        if(ourscore[newgame] > ourscore[newgame-1])
        {
            if(GS > 0)
            {
                document.getElementById("highscore").innerHTML ="HIGH SCORE :" + ourscore[newgame] + " points" ;
            }
        myScore.text=0;
        }
        
    }   
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
  }

function component(width, height, color, x, y,type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.update = function(){
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }
        else{
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        
    }

    this.left_right=function() {
        if(this.x == 0)
        {
            this.speedX = +1;
            this.x += this.speedX;
            this.speedX = 0;
        }
        if(this.x == canvas.width-30)
        {
            this.speedX = -1;
            this.x += this.speedX;
            this.speedX = 0;
        }


    }

    this.end = function() {
        if((this.y <= 0))
        {
            myGameArea.stop();
        }
        if((this.y >= 250))
        {
            myGameArea.stop();
        }

    }

    this.buttons = function() {
        if((this.y <= 210) && (this.y >= 16) && (this.speedY>0))
        {
            show=document.getElementById("moveDown");
            show1=document.getElementById("moveUp");
            show.style.display = "none";
            show1.style.display = "none";
        }
        if((this.y <= 220) && (this.y >= 210))
        {
            show=document.getElementById("moveUp");
            show.style.display = "";
        }
        if((this.y <= 210) && (this.y >= 16) && (this.speedY<0))
        {
            show=document.getElementById("moveDown");
            show1=document.getElementById("moveUp");
            show.style.display = "none";
            show1.style.display = "none";
        }
        if((this.y <= 15) && (this.y >= 11))
        {
            show=document.getElementById("moveDown");
            show.style.display = "";
        }
        
    }

    this.newPos = function() {
        
        this.x += this.speedX;
        this.y += this.speedY;

        
        
    }

    this.newPos1 = function() {

        if((this.y <= 230)&&(this.y >= 220))
        {
            this.speedY = -2;
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedY = 0;
            DD = DD + 1;

        }
        else
        {
            this.speedY = +2;
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedY = 0;
            UU = UU + 1;
        }

    }
    
    //this.newPos2 = function(myObstacles[j]) {

        
      //  var othertop2 = myObstacles[j].q;
        //var otherbottom2 = myObstacles[j].q + (myObstacles[j].height);

        //if((othertop2 <= 230)&&(othertop2 >= 220))
        //{
        //    myObstacles[j].q += -1
        //}
        //if((otherbottom2 <= 15)&&(otherbottom2 >= 11))
        //{
        //    myObstacles[j].q += +1
        //}
        

    //}     

    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
      }
}



function updateGameArea() {

    turn=turn + 1;
    if(turn >= 15)
    {
        rem = turn % 15;
    }
    
    if((DD != 0) && (rem == 0) && (myGamePiece.y <= 230)&&(myGamePiece.y >= 225))
    {
        myGamePiece.speedY = 2;
    }

    if((UU != 0) && (rem == 0) && (myGamePiece.y <= 15)&&(myGamePiece.y >= 10))
    {
        myGamePiece.speedY = -2;
    }

    var x, y;


    

    myGamePiece.newPos();

    
    
    
    //myGameArea.clear();
    //myObstacle.update();
    //myGamePiece.update();
    //if (myGamePiece.crashWith(myObstacle)) {
        //myGamePiece.speedX = 0;
        
        //myGameArea.clear();
        //myObstacle.update();
        //myGamePiece.newPos1();
        //myGamePiece.update();

      //} else {
        //myGameArea.clear();
        //myObstacle.x -= 1;
        //myObstacle.update();
        //myGamePiece.newPos();
        //myGamePiece.update();
      //}
      
      for (i = 0; i < myObstacles.length; i += 1) {
          if (myGamePiece.crashWith(myObstacles[i])) {
            myGamePiece.newPos1();
            return;
          } 
      }


    
      myGameArea.clear();
      myGameArea.frameNo += 1;
      if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 100;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 150;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        gap2 = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);

        a=x+ gap+ gap2 ;

        turn=turn+1;

        myObstacles.push(new component(height  , 200, "green", a , 260));
        myObstacles.push(new component(height, 10, "blue", x + gap, 0));

        
        //myObstacles.push(new component(height, 10, "green", x + gap, 0));
        //myObstacles.push(new component(height  , 10, "green", x +gap +gap2 , 260));
      }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }

    
    
    
        
    if((SG != 0) || (SG1 != 0))
    {
        if((SG == 1) || (SG1 == 1)){
            SG2= myGameArea.frameNo;
            SG=67;
            SG1=98;
        }
        
        SG3=myGameArea.frameNo-SG2;
        
        myScore.text = "SCORE: " + SG3;
        myScore.update();
        
        
    }
    
    
    myGamePiece.buttons();
    myGamePiece.end();
    myGamePiece.left_right();
    myGamePiece.update();
    

  }

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

  function moveup() {
    myGamePiece.speedY = -1; 
    SG1=SG1+1;
}

function movedown() {
    myGamePiece.speedY = 1;
    SG=SG+1; 
}

function moveleft() {
    myGamePiece.speedX -= 1; 
}

function moveright() {
    myGamePiece.speedX += 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
     
}






startGame();

//<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
