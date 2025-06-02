let form = document.querySelector(`#formulaire`);

let lifeWizard1 = 200;
let lifeWizard2 = 200;

form.addEventListener('submit', (e) => {
    //permet d'arreter la soumission du formulaire
    e.preventDefault();
    // c'est là que ça démarre
    let compteurTour = 0;
    while (lifeWizard1 > 0 && lifeWizard2 > 0){
        if (compteurTour%2 === 0){
            lifeWizard2 -= attack();
        }else{
            lifeWizard1 -= attack ();
        }
        compteurTour ++;
        console.log(lifeWizard1);
        console.log(lifeWizard2);
        console.log(compteurTour);
    }
})

function attack (min = 5, max = 16){
    let attackForce = Math.floor(Math.random() * (max-min) + min);
    return attackForce
}