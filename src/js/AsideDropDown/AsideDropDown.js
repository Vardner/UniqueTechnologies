const aside = $('.Aside');
let ul = document.createElement('ul');
let optionsList = document.createElement('div');
optionsList.classList.add('Menu-options');


const optionsData = ['Сушилки для рук','Блендеры, комбайны','Кухонные пренадлежности','Чашки','Наборы для кофе', 'Пароварки'];


for (i = 0; i < optionsData.length; i++) {
  let li = document.createElement('li');
  li.innerText = optionsData[i];
  console.log(li);
  ul.appendChild(li);
}
