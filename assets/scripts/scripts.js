let form = document.querySelector(`#formulaire`);
let fightRecord = document.querySelector(`#historique`);
let wizardName1 = document.querySelector(`#wizardName1`);
let wizardName2 = document.querySelector (`#wizardName2`);

let lifeWizard1 = 200;
let lifeWizard2 = 200;

form.addEventListener('submit', (e) => {

    //permet d'arreter la soumission du formulaire
    e.preventDefault();

    // c'est là que ça démarre
    let compteurTour = 1;

    while (lifeWizard1 > 0 && lifeWizard2 > 0){
        if (compteurTour%2 === 0){
            
        }else{
            
        }

        compteurTour ++;
    }
})

/*
fonction qui génère la valeur de l'attaque à chaque tour. Cette
valeur un entier dans l'intervalle [5 ; 16[
*/
function attack (min = 5, max = 16){
    let attackForce = Math.floor(Math.random() * (max-min) + min);
    return lifeWizard2
}
