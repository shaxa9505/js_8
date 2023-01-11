"use strict";

// Foor Loop  || Sikl

let startNum = 1;

// while first
// 1-yuli

while(startNum <= 10) {
  console.log(startNum);
  startNum++;
}

// Second
// 2-yuli 

do{
  console.log(startNum);
  startNum++;
} while (startNum <= 10) 


// Third

for(let i = 1; i <= 8; i++) {
  console.log(i);
}


for(let i = 1; i < 8; i++) {
  if(i === 5) {
    // break
    continue
  }
  console.log(i);
}