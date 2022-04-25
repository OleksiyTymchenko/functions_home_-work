/*=================== 1 task =================*/

//const aNswer;

const perfectNumber = (nUmber) => {
  a = (nUmber * (nUmber + 1)) / 2;
  if (a % 2 == 0) {
    return alert("Досконале число");
  } else {
    return alert("Не досконале число");
  }
  //alert(a);
};

const nUmber = +prompt(`Enter your number`);

perfectNumber(nUmber);
