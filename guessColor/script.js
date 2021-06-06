var value1 = Math.floor(Math.random() * 256);
var value2 = Math.floor(Math.random() * 256);
var value3 = Math.floor(Math.random() * 256);

var clicks = 0;


function rgb_function() {
    document.getElementById("rgb_value").innerHTML = "RGB: " + value1 + ", " + value2 + ", " + value3;
  }

var rand_square = Math.floor(Math.random() * 4);

if (rand_square == 1) {
    document.getElementById('color1').style.backgroundColor = "rgb("+ value1 + "," + value2 + "," + value3 + ")";
} else if (rand_square == 2) {
    document.getElementById('color2').style.backgroundColor = "rgb("+ value1 + "," + value2 + "," + value3 + ")";
} else {
    document.getElementById('color3').style.backgroundColor = "rgb("+ value1 + "," + value2 + "," + value3 + ")";
}



if (rand_square != 1) {
    document.getElementById('color1').style.backgroundColor = "rgb("+ value3 + "," + value1 + "," + value1 + ")";
} 
  
if (rand_square != 2) {
    document.getElementById('color2').style.backgroundColor = "rgb("+ value2 + "," + value3 + "," + value1 + ")";
} 

if (rand_square == 1 || rand_square == 2) {
    document.getElementById('color3').style.backgroundColor = "rgb("+ value2 + "," + value2 + "," + value1 + ")";
}

var element = document.getElementById("color1"); 
element.onclick = function() { 
    if (rand_square == 1) {
        alert('You won!')
    } else {
        alert('you clicked the wrong one')
        clicks += 1;
        if (clicks == 2) {
            alert('you lose')
        }
    }
}

var element = document.getElementById("color2"); 
element.onclick = function() { 
    if (rand_square == 2) {
        alert('You won!')
    } else {
        alert('you clicked the wrong one')
        clicks += 1;
        if (clicks == 2) {
            alert('you lose')
        }
    }
}

var element = document.getElementById("color3"); 
element.onclick = function() { 
    if (rand_square == 3) {
        alert('You won!')
    } else {
        alert('you clicked the wrong one')
        clicks += 1;
        if (clicks == 2) {
            alert('you lose')
        }
    }
}








