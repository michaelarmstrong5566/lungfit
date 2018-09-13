function calculateDistanceWalked(){

  var gender = document.getElementById("g");
  var height = document.getElementById("h");
  var age = document.getElementById("a");
  var laps = document.getElementById("l");
  var distance_per_lap = document.getElementById("dpl");
  
  return 218+(5.14*parseInt(gender.value)-5.32*parseInt(age.value))-1.8*parseInt(height.value)+51.31*parseInt(gender.value);
  
  //alert("gender_select + gender: " + (parseInt(gender_select.value) + parseInt(gender.value)));
 


} 

function calculatePrecentPredicted(){

}

alert(calculateDistanceWalked());




