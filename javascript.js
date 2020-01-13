//Variables
var Mints = 0;
var MintsPerClick = 1;
var Money = 0;
var MoneyPerMint = 0.01;
var MPS = 0;
var NumMV = 0;
var CostMV = 5;
var MPSMV = 1;
var Clicks = 0;
var InfoBoxInfo = "Bruh";
var x = "0";
var InfoBoxMoney = 0;
var EffManufacturingPrice = 50;

//Game Loading and Screen Refresh
document.getElementById("Mints").innerHTML = Mints;
document.getElementById("Money").innerHTML = Money;
document.getElementById("InfoBoxInfo").innerHTML = InfoBoxInfo;
document.getElementById("MandatoryVolunteerPrice").innerHTML = CostMV;
document.getElementById("MPS").innerHTML = MPS;
document.getElementById("EfficientManufacturingPrice").innerHTML = EffManufacturingPrice;

//Functions
function RefreshScreen(){
  document.getElementById("Mints").innerHTML = Mints;
  document.getElementById("Money").innerHTML = Money;
  document.getElementById("InfoBoxInfo").innerHTML = InfoBoxInfo;
  Money = Math.round(Money*100) / 100;
  document.getElementById("MandatoryVolunteerPrice").innerHTML = CostMV;
  document.getElementById("MPS").innerHTML = MPS;
  
  document.getElementById("EfficientManufacturingPrice").innerHTML = EffManufacturingPrice;
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
  if(InfoBoxInfo != "You Manufactued a Mint"){
    InfoBoxInfo = "You Manufactured a Mint";
  }
  RefreshScreen();
}

function SellMints(){
  x = Math.round((Mints * MoneyPerMint) * 100)/100;
  InfoBoxMoney = x;
  InfoBoxInfo = "You Sold all of your Mints for $" + InfoBoxMoney;
  Money = Money + Mints * MoneyPerMint;
  Money = Math.round(Money*100) / 100;
  Mints = 0;
  RefreshScreen();
}

function Save(){
  localStorage.setItem('Mints', Mints);
  localStorage.setItem('Money', Money);
  localStorage.setItem('Clicks', Clicks);
  InfoBoxInfo = "Game Saved";
  RefreshScreen();
}

function BuyMandatoryVolunteer(){
  if (Money >= CostMV){
    Money = Math.round((Money - CostMV) * 100) / 100;
    CostMV = Math.round((CostMV * 1.05) * 100) / 100;
    MPS = MPS + MPSMV;
    if(InfoBoxInfo != "You went to the auction and you bought a Manditory Volunteer to work 24/7. Oh and you don't need to pay them. Isn't that convenient?"){
      InfoBoxInfo = "You went to the auction and you bought a Manditory Volunteer to work 24/7. Oh and you don't need to pay them. Isn't that convenient?";
    }
    RefreshScreen();
  }
}

function AddMPS(){
  Mints = Math.round(Mints + MPS);
  setTimeout(AddMPS, 1000);
  RefreshScreen();
}

function ResearchEffManufacturing(){
  if(Mints >= 50){
    Mints = Mints - EffManufacturingPrice;
    Mints = Math.round(Mints);
    MintsPerClick = MintsPerClick + 1;
    EffManufacturingPrice = Math.round(EffManufacturingPrice * 1.05);
    InfoBoxInfo = "You threw some mints at a Manditory Volunteer, and they research some efficiency stuff or something. You feel your hands become MORE POWERFUL";
    RefreshScreen();
  }
}

//Post-Function Random Commands like MPS
AddMPS();
