---
title: prototype_js_engine
permalink: /prototype/scripts/engine
---
// ---- Skills ---- //
var strength = 1;
var constitution = 1;
var dexterity = 1;
var intellegence = 1;
var wisdom = 1;
var charisma = 1;

var xp_str = 0;
var xp_con = 0;
var xp_dex = 0;
var xp_int = 0;
var xp_wis = 0;
var xp_cha = 0;


// ---- Foraging ---- //
var berries = 0;
var roots = 0;

function onClickForage(){
  var event = Math.round((100 * Math.random()));
  if(event >= 0.1){
    berries = Math.round(berries + 1 + (dexterity*0.1));
    xp_dex = xp_dex + 1;
  }
  else if (event >= 0.7 && strength > 1) {
    roots = roots + 1;
    xp_str = xp_str + 3.5;
  }
  document.getElementById("tot_berries").innerHTML = berries;
};


var auto = 0;

function buyAuto(){

  var autoCost = Math.floor(10 * Math.pow(1.1,auto));
  if(item >= autoCost){
    auto = auto + 1;
    item = item - autoCost;
    document.getElementById('autocount').innerHTML = auto;
    document.getElementById('itemcount').innerHTML = item;
  };

  var nextAutoCost = Math.floor(10 * Math.pow(1.1,auto));
  document.getElementById('autoCost').innerHTML = nextAutoCost;

};
