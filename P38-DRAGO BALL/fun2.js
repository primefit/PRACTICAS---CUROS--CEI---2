

const personajes = {
    p0: {
        name: 'goku',
        force: '1'
    },
    p1: {
        name: 'vejeta',
        force: '2'
    }, 
    p2: {
        name: 'picollo',
        force: '3'
    } ,
};

//CAPTURAMOS ELEMENTOS

const btnFight = document.querySelector('.btn-fight');
const photoContainerLeft = document.querySelector('.game__fighter-left-in');
const photoContainerRight = document.querySelector('.game__fighter-right-in');


btnFight.addEventListener('click', fight);



function fight(){

    //LEFT

    const keyLeft = Math.floor(Math.random()*3); //Genero numero aleatorio 0 a 2
    const urlPhotoLeft = 'img/' +personajes['p'+ keyLeft].name + '.webp'; //creo url
    const photoLeft = document.createElement('img'); //creo una imagen
    photoLeft.src = urlPhotoLeft; // asigno url a la imagen
    photoContainerLeft.innerHTML = ""; //vaciado de div
    photoContainerLeft.appendChild(photoLeft);


    const forceLeft = personajes['p'+ keyLeft].force;


    //RIGHT

    const keyRight = Math.floor(Math.random()*3);
    const urlPhotoRight = 'img/' +personajes['p'+ keyRight].name + '.webp'; //creo url
    const photoRight = document.createElement('img'); //creo una imagen
    photoRight.src = urlPhotoRight; // asigno url a la imagen
    photoContainerRight.innerHTML = ""; //vaciado de div
    photoContainerRight.appendChild(photoRight);


    const forceRight = personajes['p'+ keyRight].force;

    showWinner(forceLeft, forceRight);
  
}


//FUNCION QUE MUESTRA EL GANADOR DEL JUEGO

function showWinner(forceLeft, forceRight){
    photoContainerLeft.parentNode.classList.remove('winner', 'draw');
    photoContainerRight.parentNode.classList.remove('winner', 'draw');

    if(forceLeft > forceRight){
        //ganadorL
        photoContainerLeft.parentNode.classList.add('winner');
       
    }
    else if(forceRight >forceRight){
        //ganadorR
        photoContainerRight.parentNode.classList.add('winner');
       
    }else{
        //empate
        photoContainerLeft.parentNode.classList.add('draw');
        photoContainerRight.parentNode.classList.add('draw');
        
    }
}