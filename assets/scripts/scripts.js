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
    let compteurTour = 0;

    while (lifeWizard1 > 0 && lifeWizard2 > 0){
        if (compteurTour%2 === 0){
            let damage = attack();
            lifeWizard2 -= damage;
            fightDisplay(wizardName1.value, wizardName2.value, damage, lifeWizard2);
        }else{
            let damage = attack();
            lifeWizard1 -= damage;
            fightDisplay(wizardName2.value, wizardName1.value, damage, lifeWizard1);
        }
        compteurTour ++;
        console.log(wizardName1);
        // console.log(lifeWizard2);
        // console.log(compteurTour);
    }
})
/*
fonction qui génère la valeur de l'attaque à chaque tour. Cette
valeur un entier dans l'intervalle [5 ; 16[
*/
function attack (min = 5, max = 16){
    let attackForce = Math.floor(Math.random() * (max-min) + min);
    return attackForce
}
function fightDisplay(firstWizardName, secondWizardName, force, life){
    let paraFightRecord = document.createElement("p");
    paraFightRecord.innerHTML = `${firstWizardName} attaque ${secondWizardName} pour ${force} dégâts. Il reste ${life} à ${secondWizardName}`;
    fightRecord.insertAdjacentElement("beforeend", paraFightRecord);
}