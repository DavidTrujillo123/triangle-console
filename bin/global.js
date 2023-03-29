#!/usr/bin/env node
let triangle = require('../src/index.js');

const rndInt = Math.floor(Math.random() * 20) + 1;

triangle.seeTriangles(rndInt);