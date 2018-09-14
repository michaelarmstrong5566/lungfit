function calculatePredictedWalkDistance(){

  //get gender, height, age, laps, distance/lap
  var gender = document.getElementById("g");
  var height = document.getElementById("h");
  var age = document.getElementById("a");

  //calculate predicted distance
  var predicted_distance = 218+(5.14*parseInt(height.value)-5.32*parseInt(age.value))-1.8*parseInt(height.value)+51.31*parseInt(gender.value);
  
  //output the calcualted predicted walk distance
  document.getElementById("predicted_walk_distance").innerHTML = "Predicted Walk Distance: " + parseInt(predicted_distance) +"m";
  
  return parseInt(predicted_distance);
} 

function calculateDistanceWalked(){
  var laps = document.getElementById("l");
  var distance_per_lap = document.getElementById("dpl");
  
  //calculate distance walked
  var distance_walked = parseInt(l.value)*parseInt(dpl.value);
  
  //output the distance walked
  document.getElementById("distance_walked").innerHTML = "Distance Walked: " + parseInt(distance_walked) +"m";
  
  return parseInt(distance_walked); 
}

function calculatePercentPredicted(){
  //output percent predicted
  document.getElementById("percent_predicted").innerHTML = "Percent predicted: "+ calculateDistanceWalked()/calculatePredictedWalkDistance()*100 +"%";

}

//alert(calculateDistanceWalked());




