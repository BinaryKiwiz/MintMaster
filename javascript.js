var Mints = 0;
var MintsPerClick = 1;
var Money = 0;
var MoneyPerMint = 0.1;

function ManufactureMint(){
  Mints = Mints + MintsPerClick;
  document.getElementById("Mints").innerHTML = Mints;
}
