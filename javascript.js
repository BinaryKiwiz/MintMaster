//Variables
var Mints = 0;
var MintsPerClick = 1;
var Money = 0;
var MoneyPerMint = 0.01;
var MPS = 0;
var NumMV = 0;
var CostMV = 25;
var MPSMV = 1;
var Clicks = 0;
var InfoBoxInfo = "Bruh";
var x = "0";
var InfoBoxMoney = 0;

//Game Loading and Screen Refresh
document.getElementById("Mints").innerHTML = Mints;
document.getElementById("Money").innerHTML = Money;
document.getElementById("InfoBoxInfo").innerHTML = InfoBoxInfo;
document.getElementById("ManditoryVolunteerPrice").innerHTML = CostMV;

//Functions
function RefreshScreen(){
  document.getElementById("Mints").innerHTML = Mints;
  document.getElementById("Money").innerHTML = Money;
  document.getElementById("InfoBoxInfo").innerHTML = InfoBoxInfo;
  document.getElementById("ManditoryVolunteerPrice").innerHTML = CostMV;
}
function ImportSave(){
  if(localStorage.getItem('Mints')){
    Mints = localStorage.getItem('Mints');
  }
  if(localStorage.getItem('Clicks')){
    Clicks = localStorage.getItem('Clicks');
  }
  if(localStorage.getItem('Money')){
    Money = localStorage.getItem('Money');
  }
  Mints = parseInt(Mints);
  Money = parseFloat(Money);
  Clicks = parseInt(Clicks);
  document.getElementById("Mints").innerHTML = Mints;
  document.getElementById("Money").innerHTML = Money;
}

function ManufactureMint(){
  Mints = Mints + MintsPerClick;
  Clicks = Clicks + 1;
  document.getElementById("Mints").innerHTML = Mints;
}

function SellMints(){
  x = Math.round((Mints * MoneyPerMint) * 100)/100;
  InfoBoxMoney = x;
  InfoBoxInfo = "You Sold all of your Mints for $" + InfoBoxMoney;
  Money = Money + Mints * MoneyPerMint;
  Money = Math.round(Money*100) / 100;
  Mints = 0;;
  RefreshScreen();
}

function Save(){
  localStorage.setItem('Mints', Mints);
  localStorage.setItem('Money', Money);
  localStorage.setItem('Clicks', Clicks);
}

function BuyManditoryVolunteer(){
  if (Money >= 25){
    Money = Money - 25;
    RefreshScreen();
  }
}
