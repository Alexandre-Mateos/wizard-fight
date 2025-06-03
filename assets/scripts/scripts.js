let form = document.querySelector(`#formulaire`);
let fightRecord = document.querySelector(`#historique`);
let duelist1 = document.querySelector(`#duelist1`);
let duelist2 = document.querySelector(`#duelist2`);
let wizardName1 = document.querySelector(`#wizardName1`);
let wizardName2 = document.querySelector(`#wizardName2`);
let wizardHouse1 = document.querySelector(`#maison1`);
let wizardHouse2 = document.querySelector(`#maison2`);

/*
Objet qui stocke les infos de mes sorciers:
[nom, maison, vie restante, force]
*/
let wizard1 = {
  life: 200,
};
let wizard2 = {
  life: 200,
};

form.addEventListener("submit", (e) => {
  //permet d'arreter la soumission du formulaire
  e.preventDefault();

  // c'est là que ça démarre
  let compteurTour = 1;
  /* récupère le nom des sorciers et leur maison et les stock
  dans les objets wizards 1 et wozard 2*/
  wizard1.name = wizardName1.value;
  wizard2.name = wizardName2.value;
  wizard1.house = wizardHouse1.value;
  wizard2.house = wizardHouse2.value;

  // Affichage des duelist
  displayWizard(wizard1);
  displayWizard(wizard2);

  // boucle de jeu
  while (wizard1.life > 0 && wizard2.life > 0) {
    if (compteurTour % 2 === 0) {
      attack(wizard1, wizard2);
      recordFight(compteurTour, wizard1, wizard2);
    } else {
      attack(wizard2, wizard1);
      recordFight(compteurTour, wizard2, wizard1);
    }
    compteurTour++;
  }
});

/*
fonction qui génère la valeur de l'attaque à chaque tour. Cette
valeur un entier dans l'intervalle [5 ; 15]
*/
function attack(wizardAttacking, wizardDefending, min = 5, max = 15) {
  wizardAttacking.attackPower = Math.floor(
    Math.random() * (max - min + 1) + min);
  
  if (wizardDefending.life - wizardAttacking.attackPower <= 0){
    wizardDefending.life = 0;
  }else{
    wizardDefending.life -= wizardAttacking.attackPower;
  }
}
/*
fonction qui affiche les tours du combat
*/
function recordFight(tour, wizardAttacking, wizardDefending) {
  let paraFight = document.createElement("p");
  paraFight.innerHTML = `Tour ${tour} : ${wizardAttacking.name} attaque ${wizardDefending.name} pour ${wizardAttacking.attackPower} dégâts. Il reste ${wizardDefending.life} PV à ${wizardDefending.name}`;
  fightRecord.insertAdjacentElement("beforeend", paraFight);
}

function displayWizard (wizard){
  let paraNameWizard = document.createElement("p");
  let paraHouseWizard = document.createElement("p");
  let paraLife = document.createElement("p");

  paraNameWizard.innerHTML = wizard.name;
  paraHouseWizard.innerHTML = wizard.house;
  paraLife.innerHTML = wizard.life;

  if(wizard1){
    duelist1.insertAdjacentElement("beforeend", paraNameWizard);
    duelist1.insertAdjacentElement("beforeend", paraHouseWizard);
    duelist1.insertAdjacentElement("beforeend", paraLife);
  }else{
    duelist2.insertAdjacentElement("beforeend", paraNameWizard);
    duelist2.insertAdjacentElement("beforeend", paraHouseWizard);
    duelist2.insertAdjacentElement("beforeend", paraLife);
  }
}