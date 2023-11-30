/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const cardType = document.querySelectorAll(".card-type");
  const cardValue = document.querySelector("#cardValue");
  const button = document.querySelector("#cardGenerator");
  const cardValueList = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const cardTypeList = ["♦", "♥", "♠", "♣", "J"];

  const getRandomColor = () => {
    const colors = ["red", "black"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const cardGenerator = () => {
    const randomCardValue =
      cardValueList[Math.floor(Math.random() * cardValueList.length)];
    const randomCardType =
      cardTypeList[Math.floor(Math.random() * cardTypeList.length)];

    cardType[0].innerHTML = randomCardType;
    cardType[1].innerHTML = randomCardType;

    if (randomCardType === "J") {
      const randomColor = getRandomColor();
      cardValue.innerHTML = `<img src='src/assets/img/istockphoto-538781960-612x612.jpeg' style='height: 150px;' />`;
      cardType[0].classList.toggle("text-danger", randomColor === "red");
      cardType[0].classList.toggle("text-black", randomColor === "black");
      cardType[1].classList.toggle("text-danger", randomColor === "red");
      cardType[1].classList.toggle("text-black", randomColor === "black");
    } else {
      cardValue.innerHTML = randomCardValue;

      const isBlack = randomCardType === "♣" || randomCardType === "♠";
      cardType[0].classList.toggle("text-danger", !isBlack);
      cardType[0].classList.toggle("text-black", isBlack);
      cardType[1].classList.toggle("text-danger", !isBlack);
      cardType[1].classList.toggle("text-black", isBlack);
    }
  };

  button.addEventListener("click", cardGenerator);
};
