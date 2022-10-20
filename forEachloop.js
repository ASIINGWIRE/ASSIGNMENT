// FOR EACH LOOP
// this goes through each element automatically.
// FOR EACH LOOP; Return;
// the return after a given condtion simply calls back the printer to continue with other items after executing that given condition
// if the return keyword is not used,the statements before the main statement won't be excecuted.

const mylist=[
    "ABOUT GROUP C",
    "Patricia",
    "MEMBERS",
    "1. Asiingwire Resty",
    "2. Atusasiire Zipporah",
    "3. Royola Ruth",
    "4. Neema Hellen",
    "5. Hamba Peace",
    "6. Agather",
    "7. Veronica",
   ];
   mylist.forEach((l)=>{
    if(l==="Patricia"){console.log(l + " => Facilitator GROUP C")
    return;
    }
    if(l=="ABOUT GROUP C"){console.log("      ABOUT GROUP C")
    return;
    }
    if(l=="MEMBERS"){console.log("       MEMBERS")
    return;
    }
   if(l==="1. Asiingwire Resty"){console.log(l + " is my name")
   return;
   }
   console.log(l);
   })
//    forEach loop ends here.

/* DO WHILE LOOP

>> This is an example of an exit control loop
>> It actually works the same way as the WHILE LOOP, the only difference is for the DO WHILE LOOP, the condition is put outside the body
>> it also executes the statement atleast once even if the condition is false
>> Also the statements inside the loop are executed before the condition is tested*/

// Do while loop ends here.

/* FOR OF LOOP
>> This one actually rates through the values rather than the key

example
var x =[1,2,3];
for(let i of x){
console.log(i)
}*/
// for of loop ends here.