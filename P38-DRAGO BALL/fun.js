

function getRandomImage() {
    const images = ['goku.webp', 'picollo.webp', 'vejeta.webp', ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  function cambiarImagenes() {
    for (let i = 1; i <= 3; i++) {
      document.getElementById(`imagen1_${i}`).src = getRandomImage();
      document.getElementById(`imagen2_${i}`).src = getRandomImage();
    }
  }

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

