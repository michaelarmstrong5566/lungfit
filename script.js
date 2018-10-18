
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

    var mrc = form[7];
    console.log(mrc.value);

    var weight = form[8];
    console.log(weight.value);
    
        
    //calculate predicted distance, distance walked and percent predicted
    var predicted_distance = 218+(5.14*height.value - 5.32*age.value) - 1.8*height.value + 51.31*gender.value;
    var distance_walked = laps.value*distance_per_lap.value;
    var percent_predicted = distance_walked/predicted_distance*100;
    
    //calculate C
    var C = calculateC(height.value, fev1.value, gender.value);
 
    //calculate D
    var D = calculateD(C, gender.value);
 
    //calcualte Lung Age
    var LungAge = calculateLungAge(D, gender.value);
 
    //calculate FEV1 predicted from age, height and gender
    var fev1_pred = calculateFEV1(age.value,height.value,gender.value);
 
   //calculate FEV1 percent predicted from FEV1 and FEV1 predicted
   var fev1_percent_pred = calculateFEV1PercentPred(fev1.value, fev1_pred);

   //calculate BMI
   var bmi = calculateBMI(height.value, weight.value);

   //calculate BODE Score
   var bode = calculateBodeScore1(fev1_percent_pred) + calculateBodeScore2(distance_walked) + parseInt(mrc.value) + calculateBodeScore4(bmi); 
   
 
    //output the calculated predicted walk distance, distance walked, percent predicted, lung age
    //document.getElementById("predicted_walk_distance").innerHTML = "Predicted Walk Distance: " + predicted_distance.toFixed(0) +" m";
    document.getElementById("distance_walked").innerHTML = "Distance Walked: " + distance_walked.toFixed(0) +" m";
    document.getElementById("percent_predicted").innerHTML = "Percent predicted: "+ percent_predicted.toFixed(0) +" %";
    document.getElementById("lung_age").innerHTML = "Lung Age: "+ LungAge +" years";
    //document.getElementById("C").innerHTML = "C: "+ C;
    //document.getElementById("D").innerHTML = "D: "+ D;
     document.getElementById("bode_index").innerHTML = "BODE Index: "+ bode;
     //document.getElementById("bmi").innerHTML = "BMI: " + bmi;
    
} 

  
    //calculate C to calculate D 
    function calculateC(H,F,G){
         if (G == 1){
         return -0.00014098*H**2 -0.5536 + parseFloat(F);
         }
         else {
         return -0.00011496*H**2 -0.4333 + parseFloat(F);
         } 
        }
    //calculate D to calculate Lung Age
    function calculateD(C,G){
         if (G == 1){
         
         return Math.sqrt(0.013003*0.013003-4*parseFloat(C)*0.00017);
          
         }
         else {
          
         return Math.sqrt(0.00361*0.00361-4*parseFloat(C)*0.00019);
         
         } 
        }
//calcualte Lung Age
 function calculateLungAge(D,G){
         if (G == 1){
         
         return parseInt((-0.01303 + parseFloat(D))/0.00034);
          
         }
         else {
          
         return parseInt((-0.00361 + parseFloat(D))/0.00038);
         
         } 
        }
//calcualte FEV1(L) Predicted
//A = age(years), H = height(cm), G = gender(1=male, 0=female)

 function calculateFEV1(A,H,G){
         if (G == 1){
          var a = 0.5536;
          var b = -0.01303
          var c = -0.000172
          var d = 0.00014098
         
         return a + b*parseInt(A) + c*parseInt(A)*parseInt(A) + d*parseInt(H)*parseInt(H); 
          
         }
         else {
          var a = 0.5536;
          var b = -0.01303
          var c = -0.000172
          var d = 0.00014098
                    
         return a + b*parseInt(A) + c*parseInt(A)*parseInt(A) + d*parseInt(H)*parseInt(H);
          
         } 
        }
function calculateFEV1PercentPred(A, B){
         var a = A;
         var b = B;
         return a/b;
 }

 function calculateBodeScore1(fev1_percent_pred){
    if (fev1_percent_pred >= 0.65){
        return 0;
    } else if (fev1_percent_pred >= 0.5 && fev1_percent_pred <=0.64){
        return 1;
    } else if (fev1_percent_pred >= 0.36 && fev1_percent_pred <= 0.49){
        return 2;
    } else if (fev1_percent_pred <= 0.35){
        return 3;
    }
 }

 function calculateBodeScore2(distance_walked){
    if (distance_walked >= 350){
        return 0;
    } else if (distance_walked >= 250 && distance_walked <= 349){
        return 1;
    } else if (distance_walked >= 150 && distance_walked <= 249){
        return 2;
    } else if (distance_walked <= 149){
        return 3;
    }
 }

function calculateBMI(height, weight){
    var h = height/100;
    var w = weight;
    return w/(parseFloat(h)*parseFloat(h));
}

function calculateBodeScore4(bmi){;
    if (bmi >= 21) {
        return 0;
    } else {
        return 1;
    }
}




