// copy and paste it into the console after opening the the Anket page.
//  open the console through inspect element not directly by f12.
// change the elem variable index  in range 0 -> 4 to select the desired option for the Anket 
let counter = 1;

function incrementCounter() {
  counter++;
  if (counter > 99) {
    counter = 0;
  }
  let counterString = counter.toString().padStart(2,'0');
return counterString;
} 

for (let x=0; x<18; x++){ 
   y = incrementCounter() 
    var elem = document.getElementsByName(`grdAnketSorular$ctl${y}$anketRadioList`); 
  elem[4].checked = "true";
}
