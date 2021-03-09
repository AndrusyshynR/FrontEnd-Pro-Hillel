// В JS создать блок с стилями.... Много стилей не делайте.... Нужно вставить класс через атрибут, и поместите туда с CSS класс для стилизации.
// логотип, Заголовок, Под заголовок , Текст так же создать.

var newDiv = document.createElement("div");
document.body.append(newDiv);
newDiv.className = "divstyle";
// document.body.classList.add('divstyle');


var img = document.createElement("img");
img.src = "./img.png";
newDiv.appendChild(img);
img.className = "img";


var title = document.createElement("h1");
var textTitle = document.createTextNode("Создание сайта");
title.appendChild(textTitle);
newDiv.appendChild(title);


var subTitle = document.createElement("h3");
var textSubTitle = document.createTextNode("Руководитель отдела маркетинга компании 'Hillel'");
subTitle.appendChild(textSubTitle);
newDiv.appendChild(subTitle);


var text = document.createElement("p");
var textContent = document.createTextNode("Спасибо команде за отличную работу, всем удачи!");
text.appendChild(textContent);
newDiv.appendChild(text);


var lastText = document.createElement("span");
var lastContent = document.createTextNode("Рад, что друзя посоветовали именно Вас!");
lastText.appendChild(lastContent);
newDiv.appendChild(lastText);

console.log(newDiv);