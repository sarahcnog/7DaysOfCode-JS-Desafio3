const nome = prompt('Qual o seu nome?');
alert ('Olá ' + nome + ', vamos jogar?');

area = prompt('Você quer seguir na área de Front-End (1) ou Back-End (2)?');

while (area > 2 || area < 1) {
  alert('Essa opção não existe. Tente de novo!');
  area = prompt('Você quer seguir na área de Front-End (1) ou Back-End (2)?');
}

if (area == 1) {
      estudo = prompt('Você quer aprender React (1) ou Vue (2)?');
      while (estudo > 2 || estudo < 1) {
      alert('Essa opção não existe. Tente de novo!');
  estudo = prompt('Você quer aprender React (1) ou Vue (2)?'); }
} if (area == 2) {
    estudo = prompt('Você quer aprender C# (1) ou Java (2)?');
  while (estudo > 2 || estudo < 1) {
      alert('Essa opção não existe. Tente de novo!');
       estudo = prompt('Você quer aprender C# (1) ou Java (2)?'); }
}

passo3 = prompt('Você pretende seguir se especializando na área escolhida (1) ou seguir se desenvolvendo para se tornar Fullstack (2)?');

while (passo3 > 2 || passo3 < 1) {
  alert('Você não inseriu um valor válido!');
  passo3 = prompt('Você pretende seguir se especializando na área escolhida (1) ou seguir se desenvolvendo para se tornar Fullstack (2)?');
}

techs = prompt('Qual tecnologia você quer se especializar/conhecer?');
addTech = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite S ou N');

while (addTech !== 'S' && addTech !== 'N') {
  alert('Você não inseriu um valor válido!');
  addTech = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite S ou N');
}

if (addTech === 'S') {
  while (addTech === 'S') {
  techs = prompt('Qual outra tecnologia você quer se especializar/conhecer?');
  alert('Legal! ' + techs + ' parece ser interessante!');
  addTech = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite S ou N');
    while (addTech !== 'S' && addTech !== 'N') {
  alert('Você não inseriu um valor válido!');
  addTech = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite S ou N');
}
}} if (addTech === 'N') {
  alert('Boa sorte nos estudos!');
}