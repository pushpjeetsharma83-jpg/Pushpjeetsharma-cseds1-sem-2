function result(){
    let inputValue=document.getElementById('inputData').value;
    let displayHeading=document.getElementById('text');
    displayHeading.innerHTML=inputValue;
    displayHeading.style.color="red";
    document.getElements
}
let paraBkg=document.getElementById('para');
function colorChange(){
    paraBkg.style.backgroundColor="blue";
}
//add event listener
paraBkg.addEventListener('mouseover',colorChange);
