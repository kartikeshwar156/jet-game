

function shuffle2() {

    pause();
    reset();
    z=0;
    //Use nested loops to access each cell of the 5x5 grid
    for (var row=1;row<=5;row++) { //For each row of the 5x5 grid
       for (var column=1;column<=5;column++) { //For each column in this row
      
        var row2=Math.floor(Math.random()*5 + 1); //Pick a random row from 1 to 5
        var column2=Math.floor(Math.random()*5 + 1); //Pick a random column from 1 to 5
         
        changeTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells and it is same as
        // "swaptiles" function but name is changed as it was applying check function too
      } 
    }
    
    

    }
    function changeTiles(cell1,cell2) {
        var temp = document.getElementById(cell1).className;
        document.getElementById(cell1).className = document.getElementById(cell2).className;
        document.getElementById(cell2).className = temp;
      }

shuffle2();

