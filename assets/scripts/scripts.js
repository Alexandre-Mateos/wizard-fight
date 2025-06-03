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
};
let wizard2 = {
  life: 200,
};

form.addEventListener("submit", (e) => {
  //permet d'arreter la soumission du formulaire
  e.preventDefault();

  // c'est là que ça démarre

  /* récupère le nom des sorciers et leur maison et les stock
  dans les objets wizards 1 et wozard 2*/
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
  let fightLoop = setInterval(() => {
    if (compteurTour % 2 === 0) {
      attack(wizard1, wizard2);
      fight(compteurTour, wizard1, wizard2);
    } else {
      attack(wizard2, wizard1);
      fight(compteurTour, wizard2, wizard1);
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
function attack(wizardAttacking, wizardDefending, min = 5, max = 15) {
  wizardAttacking.attackPower = Math.floor(
    Math.random() * (max - min + 1) + min
  );
  if (wizardDefending.life - wizardAttacking.attackPower <= 0) {
    wizardDefending.life = 0;
  } else {
    wizardDefending.life -= wizardAttacking.attackPower;
  }
}
/*
fonction qui affiche les tours du combat
*/
function fight(tour, wizardAttacking, wizardDefending) {
  let paraFight = document.createElement("p");
  paraFight.innerHTML = `Tour ${tour} : ${wizardAttacking.name} attaque ${wizardDefending.name} pour ${wizardAttacking.attackPower} dégâts. Il reste ${wizardDefending.life} PV à ${wizardDefending.name}`;
  fightRecord.insertAdjacentElement("beforeend", paraFight);
  duelistLife1.innerHTML = wizard1.life;
  duelistLife2.innerHTML = wizard2.life;
}


