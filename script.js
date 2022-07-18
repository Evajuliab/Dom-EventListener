
// affichage pop up
document.addEventListener('mouseout', e => {
    if (!e.toElement && !e.relatedTarget) {
        document.querySelector('.popup').classList.add('visible'); 
    }
});

// close la popup

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('visible'); 
});





