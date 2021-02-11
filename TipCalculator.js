
//Calculate Tip
function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let tipPercent = document.getElementById("tipamt").value;
  let numOfPeople = document.getElementById("peopleamt").value;
  let calculationBox = document.getElementById("calculationBox");
  console.log( billAmt , tipPercent , numOfPeople)
  // validate input
  if (billAmt == 0 || tipPercent == 0 || numOfPeople == 0 ) {
    alert("Please enter all the values");
  }
  
  //Calculate tip and split amount
  else{
    let tip = (billAmt * tipPercent) / (100*numOfPeople);
    let totalAmnt = ((billAmt/numOfPeople + tip) );
    calculationBox.style.display = "block"; 
    document.getElementById("tip").innerHTML = `$${tip}`;
    document.getElementById("total").innerHTML = `$${totalAmnt}`;
  }
}

//increment decrement counters
function decrementTip()
{
	let cur = document.getElementById("tipamt").value;
	if (cur == 0){
		alert("Tip cannot be negitive")
	}
	else
	{
		document.getElementById("tipamt").value = --cur;
		tipPercent = cur;
	} 
}
function incrementTip()
{
	let cur = document.getElementById("tipamt").value;
	document.getElementById("tipamt").value = ++cur;
	tipPercent = cur;
}

function decrementPeopleCount()
{ 
	let cur = document.getElementById("peopleamt").value;
	if (cur == 0){
		alert("Count cannot be negitive")
	}
	else
	{
		document.getElementById("peopleamt").value = --cur;
		numOfPeople = cur;
	} 
}
function incrementPeopleCount()
{
  	let cur = document.getElementById("peopleamt").value;
	document.getElementById("peopleamt").value = ++cur;
	numOfPeople = cur;
}