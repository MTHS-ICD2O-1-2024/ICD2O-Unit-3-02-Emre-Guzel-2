// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: March 27  2025
// This file contains the JS functions for index.html

"use strict"

function volumeOfPyramid() {
  // Setting the varibles
  const LENGTH_Of_PYRAMID = parseFloat(document.getElementById("length-of-pyramid").value)
  const WIDTH_OF_PYRAMID = parseFloat (document.getElementById("width-of-pyramid").value)
  const HEIGHT_OF_PYRAMID = parseFloat (document.getElementById("height-of-pyramid").value)
  const volumeOfPyramid = (baseAOfTrapizoid + baseBOfTrapizoid) /3
  // clacualtoins 
  document.getElementById("area").innerHTML ="Area is: " + volumeOfPyramid + "mm²"
}