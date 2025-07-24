// Conntroles do Target 1 --

const videoepa = document.querySelector('#epa');
const alvovera = document.querySelector('#targetvera');
const verabox = document.querySelector('#planevera');




function tocavideovera() {

    document.querySelector('#epa').play()
    
    };

   

function pausavideovera() {

    document.querySelector('#epa').pause();
};

function reiniciavideovera() {
    document.querySelector('#epa').pause()
    videoepa.currentTime = 0;
};

// Controles do vídeo: Play, Pause e Reiniciar: 

alvovera.addEventListener('targetFound', () => {
    window.addEventListener('click', tocavideovera);
});

alvovera.addEventListener('targetLost', pausavideovera);


alvovera.addEventListener('targetFound', () => {
    window.addEventListener('dblclick', reiniciavideovera);
});

// efeito do botão index







