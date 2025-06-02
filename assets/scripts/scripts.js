let form = document.querySelector(`#formulaire`);
let fightRecord = document.querySelector(`#historique`);
let wizardName1 = document.querySelector(`#wizardName1`);
let wizardName2 = document.querySelector (`#wizardName2`);


/*
Tableau qui stocke les infos de mes sorciers:
[vie restante, force de la dernière attaque]
*/
let wizard1 = [200 , 0];
let wizard2 = [200 , 0];


form.addEventListener('submit', (e) => {

    //permet d'arreter la soumission du formulaire
    e.preventDefault();

    // c'est là que ça démarre
    let compteurTour = 1;

    // je stocke la force de l'attaque et la vie restante pour chacun de mes sorciers
    

    while (wizard1[0] > 0 && wizard2[0] > 0){
        if (compteurTour%2 === 0){
        attack(wizard1, wizard2);

        }else{
        attack(wizard2, wizard1);
        }
        compteurTour ++;
    }
})

/*
fonction qui génère la valeur de l'attaque à chaque tour. Cette
valeur un entier dans l'intervalle [5 ; 15]
*/
function attack (wizardAttacking, wizardDefending, min = 5, max = 15){
    wizardAttacking[1] = Math.floor(Math.random() * (max-min+1) + min);
    wizardDefending[0] -= wizardAttacking[1];
}
function recordFight (tour, wizardAttacking, wizardDefending){
    let paraFight = document.createElement("p");
    paraFight.innerHTML = `Tour ${tour} : ${wizardAttacking} attaque ${wizardDefending} for ${damage} dégâts. Il reste ${life}`
}
