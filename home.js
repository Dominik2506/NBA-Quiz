let form = document.getElementById('form');
let nick = document.getElementById('nick');

function check(){                                       // Sprawdza czy nick zostal podany
    if (nick !==null && nick.value!==""){
        form.addEventListener('submit', function(e){
            e.preventDefault();
           let nickValue = nick.value; 
           sessionStorage.setItem( 'nick' , nickValue );
       });
    }
    else{
        alert("Nie podales nicku");
    }
}


function nba(){
    window.open('https://www.nba.com/');
}

function bulls(){
    window.open('https://www.nba.com/bulls');
}

function lakers(){
    window.open('https://www.nba.com/lakers');
}
function gsw(){
    window.open('https://www.nba.com/warriors');
}
function ny(){
    window.open('https://www.nba.com/knicks');
}
function bucks(){
    window.open('https://www.nba.com/bucks');
}
function detroit(){
    window.open('https://www.nba.com/pistons');
}
function nets(){
    window.open('https://www.nba.com/nets');
}
function clev(){
    window.open('https://www.nba.com/cavaliers');
}
function pacers(){
    window.open('https://www.nba.com/pacers');
}
function jazz(){
    window.open('https://www.nba.com/jazz');
}
function magic(){
    window.open('https://www.nba.com/magic');
}
