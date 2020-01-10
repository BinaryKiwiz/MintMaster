var Mints = 0;
var MintsPerClick = 1;
var Money = 0;
var MoneyPerMint = 0.1;

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
