var Mints = 0;
var MintsPerClick = 1;
var Money = 0;
var MoneyPerMint = 0.1;
var MPS = 0;

function ImportSave(){
  if(localStorage.getItem('Mints')){
    Mints = localStorage.getItem('Mints');
  }

  if(localStorage.getItem('Money')){
    Money = localStorage.getItem('Money');
  }
  document.getElementById("Mints").innerHTML = Mints;
  document.getElementById("Money").innerHTML = Money;
  Mints = parseInt(Mints);
  Money = parseInt(Money);
}

function ManufactureMint(){
  Mints = Mints + MintsPerClick;
  document.getElementById("Mints").innerHTML = Mints;
}

function SellMints(){
  Money = Money + Mints * MoneyPerMint
  Money = Math.round(Money*10) / 10;
  Mints = 0
  document.getElementById("Money").innerHTML = Money;
  document.getElementById("Mints").innerHTML = Mints;
}

function Save(){
  localStorage.setItem('Mints', Mints);
  localStorage.setItem('Money', Money);
  document.getElementById("Mints").innerHTML = Mints;
document.getElementById("Money").innerHTML = Money;
}
