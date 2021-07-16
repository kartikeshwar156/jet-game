let r, c;

function pause() {
    storedTime= elapsedTime;
    clearInterval(timerInterval);
  }

function check(){
    for(r=1;r<=5;r++)
    {

        for(c=1;c<=5;c++)
        {
            if ( document.getElementById("cell"+r+c).className==("tile"+r+c))
            {
                if((r==5)&&(c==5))
                {
                    Pause();
                }
                
            }
            

        }
        


    }
  } 