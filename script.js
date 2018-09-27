
function testing(){
 
    //document.getElementById("g2").style.backgroundColor = "red";
    //document.getElementById("h2").style.backgroundColor = "orange";
    //document.getElementById("a2").style.backgroundColor = "yellow";
    //document.getElementById("l2").style.backgroundColor = "blue";
    //document.getElementById("dpl2").style.backgroundColor = "purple";
  
    //assign form elements to a array
    //
    var form = document.getElementById('form');
    var text = form[0];
    console.log(text);
    
    var gender = form[1];
    console.log(gender.value);
    
    var height = form[2];
    console.log(height.value);
    
    var age = form[3];
    console.log(age.value);
    
    var laps = form[4];
    console.log(laps.value);
    
    var distance_per_lap = form[5];
    console.log(distance_per_lap.value);
    
    var fev1 = form[6];
    console.log(fev1.value);

        
    //calculate predicted distance, distance walked and percent predicted
    var predicted_distance = 218+(5.14*height.value - 5.32*age.value) - 1.8*height.value + 51.31*gender.value;
    var distance_walked = laps.value*distance_per_lap.value;
    var percent_predicted = distance_walked/predicted_distance*100;
    
    //output the calculated predicted walk distance, distance walked  and percent predicted
    document.getElementById("predicted_walk_distance").innerHTML = "Predicted Walk Distance: " + predicted_distance.toFixed(0) +" m";
    document.getElementById("distance_walked").innerHTML = "Distance Walked: " + distance_walked.toFixed(0) +" m";
    document.getElementById("percent_predicted").innerHTML = "Percent predicted: "+ percent_predicted.toFixed(0) +" %";
    document.getElementById("percent_predicted").innerHTML = "Lung Age: "+ fev1.value.toFixed(2) +" years";
    
} 





