/*
    openMenu e' la funzione utilizzata per mostrare tramite click ( o tap per tablet e mobile ) il menu dalla view per dispositivi mobili
*/
function openMenu() {
    // Con questa riga vado a prendere l'elemento con id menuMobile e lo inserisco all'interno di una variabile
    var element = document.getElementById("menuMobile");
    
    // Tramite il classList.toggle vado a definire l'inserimento e l'eliminazione automatica della classe showMenu applicata a element
    // ovvero il mio elemento con id menuMobile!
    element.classList.toggle("showMenu");
}
