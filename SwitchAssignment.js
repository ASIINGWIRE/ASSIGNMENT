// SWITCH STATEMENT
// TRAIL 1
let Floor=3;
switch(Floor){
    case 1:
      Floor = 1;
    break;
    case 2:
      Floor = 2;
    break;
    case 3:
      Floor = 3;
    break;
    case 4:
      Floor = 4;
    break;
    case 5:
      Floor = 5;
    break;
    default:
      Floor= "invalid"
}
console.log(Floor)
// here the level 3 is printed since the vairiable matches one of the cases

// TRAIL 2
let floor=3;
switch(floor){
    case 1:
      floor = 1;
    break;
    case 2:
      floor = 2;
    break;
    case 4:
      floor = 4;
    break;
    case 5:
      floor = 5;
    break;
}
console.log(floor)
// In Trial 2, floor 3 is still printed reason being there is no default keyword in the code to give an alternative to print otherwise incase there is no match!

// TRAIL 3
let FLOOR=3;
switch(FLOOR){
    case 1:
      FLOOR = 1;
    break;
    case 2:
      FLOOR= 2;
    break;
    case 3:
      FLOOR = 3;
    case 4:
      FLOOR = 4;
    case 5:
      FLOOR = 5;
    break;
    default:
      FLOOR = "invalid"
}
console.log(FLOOR)
// In trial 3, floor 5 will be printed because there is no break keyword from case 3 to case 5, there for it prints the next case even if it doesnt match the variable

// TRAIL 4
let level=3;
switch(level){
    case 1:
      level = 1;
    break;
    case 2:
      level= 2;
    break;
    case 4:
      level = 4;
    break;
    case 5:
      level = 5;
    break;
    default:
      level = "invalid";
}
console.log(level)
// TRAIL 4, level will be invalid because there is no match in the code with the variable and the default key which is to specify the code in case there is no match has been identified

// TRAIL 5
let Level=3;
switch(Level){
    default:
      Level = "invalid";
    break;
    case 1:
      Level = 1;
    break;
    case 2:
      Level= 2;
    break;
    case 4:
      Level = 4;
    break;
    case 5:
      Level = 5;
    break;
}
console.log(Level)
// TRAIL 5 has its default as first in the code and yet the results are the same as for trial 4, this is because its place in the code doesnt matter, for as long as it comes with a break