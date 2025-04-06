// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: March 31 2025
// This file contains the JS functions for index.html

"use strict"

function volumeOfPyramid() {
  // Setting the varibles
  const lengthOfPyramid = parseFloat(document.getElementById("length-of-pyramid").value)
  const widthOfPyramid = parseFloat(document.getElementById("width-of-pyramid").value)
  const heightOfPyramid = parseFloat(document.getElementById("height-of-pyramid").value)
  const volumeOfPyramid = (lengthOfPyramid* widthOfPyramid * heightOfPyramid) / 3
  // clacualtoins 
  document.getElementById("Volume").innerHTML = 
  "Volume is: " + volumeOfPyramid.toFixed(2) + " mm³";
}