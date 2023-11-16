"use strict";

// Defining variables

const homePrice = 5000;
const downPmt = 2000;
// const homePrice = document.querySelector(".home-price");
// const downPmt = document.querySelector(".down-pmt");
const term = document.querySelector(".term");
var i = document.querySelector(".rate");

var p = homePrice - downPmt;
var n = term * 12;
console.log(p);

// mortgage formula = principal & Interest
// P = L[c(1 + c)n]/[(1 + c)n - 1]

// property tax calculator ($2.248 per $100 of assessed value)
