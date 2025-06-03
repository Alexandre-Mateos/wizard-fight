let form = document.querySelector(`#formulaire`);
let fightRecord = document.querySelector(`#historique`);
let wizardName1 = document.querySelector(`#wizardName1`);
let wizardName2 = document.querySelector(`#wizardName2`);
let wizardHouse1 = document.querySelector(`#maison1`);
let wizardHouse2 = document.querySelector(`#maison2`);

// elements pour l'affichage des deux sorciers duelistes
let duelistName1 = document.querySelector("#duelistName1");
let duelistHouse1 = document.querySelector("#duelistHouse1");
let duelistLife1 = document.querySelector("#duelistLife1");

let duelistName2 = document.querySelector("#duelistName2");
let duelistHouse2 = document.querySelector("#duelistHouse2");
let duelistLife2 = document.querySelector("#duelistLife2");

/*
Objet qui stocke les infos de mes sorciers:
[nom, maison, vie restante, force]
*/
let wizard1 = {
  life: 200,
  comeBack: false
};
let wizard2 = {
  life: 200,
  comeBack: false
};

form.addEventListener("submit", (e) => {
  //permet d'arreter la soumission du formulaire
  e.preventDefault();

  // c'est là que ça démarre

  /* récupère le nom des sorciers et leur maison et les stock
  dans les objets wizards 1 et wizard 2*/
  wizard1.name = wizardName1.value;
  wizard2.name = wizardName2.value;
  wizard1.house = wizardHouse1.value;
  wizard2.house = wizardHouse2.value;

  // Affichage des deux sorciers
  duelistName1.innerHTML = wizard1.name;
  duelistHouse1.innerHTML = wizard1.house;
  duelistLife1.innerHTML = wizard1.life;

  duelistName2.innerHTML = wizard2.name;
  duelistHouse2.innerHTML = wizard2.house;
  duelistLife2.innerHTML = wizard2.life;

  // boucle de jeu
  let compteurTour = 1;
  let criticalFactor;
  
  let fightLoop = setInterval(() => {

    criticalFactor = Math.random();

    if (compteurTour % 2 === 0) {
      theComeBack(compteurTour, wizard1);
      damage(wizard1, wizard2, criticalFactor);
      fight(compteurTour, wizard1, wizard2, criticalFactor);
    } else {
      theComeBack(compteurTour, wizard2);
      damage(wizard2, wizard1, criticalFactor);
      fight(compteurTour, wizard2, wizard1, criticalFactor);
    }

    if (wizard1.life <= 0 || wizard2.life <= 0) {
      clearInterval(fightLoop);
    }
    compteurTour++;
  }, 300);

});

/*
fonction qui génère la valeur de l'attaque à chaque tour. Cette
valeur un entier dans l'intervalle [5 ; 15]
*/
function damage(wizardAttacking, wizardDefending, critical, min = 5, max = 15, factor = 0.1) {
  /*
  calcul des dommages de base
  */
  wizardAttacking.attackPower = Math.floor(
    Math.random() * (max - min + 1) + min
  );
  /*
  Calcul des dommages de coups critique
  permet les coups critique en multipliant la force  de base par 3;
  */
 
  if (critical < factor){
    wizardAttacking.attackPower = wizardAttacking.attackPower*3;
    console.log("coup critique");
  }

  if (wizardDefending.life - wizardAttacking.attackPower <= 0) {
    wizardDefending.life = 0;
  } else {
    wizardDefending.life -= wizardAttacking.attackPower;
  }
}

/*
fonction qui affiche les tours du combat
*/
function fight(tour, wizardAttacking, wizardDefending, critical, factor = 0.1) {
  let paraFight = document.createElement("p");
  paraFight.innerHTML = `Tour ${tour} : ${wizardAttacking.name} attaque ${wizardDefending.name} pour ${wizardAttacking.attackPower} dégâts. Il reste ${wizardDefending.life} PV à ${wizardDefending.name}`;
  if(critical < factor){
    paraFight.classList.add("criticalStyle");
  }
  fightRecord.insertAdjacentElement("beforeend", paraFight);
  
  // mise à jour des points de vie
  duelistLife1.innerHTML = wizard1.life;
  duelistLife2.innerHTML = wizard2.life;
}

function theComeBack (tour, wizard){
  if (wizard.life <= 100 && !wizard.comeBack){
    wizard.life = 200;
    wizard.comeBack = true;

    let paraFight = document.createElement("p");
    paraFight.innerHTML = `Tour ${tour} : ${wizard.name} va chercher des ressources cachées et récupère tout ses PV`;
    paraFight.classList.add("healthStyle");
    fightRecord.insertAdjacentElement("beforeend", paraFight);
  }
}