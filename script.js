
function allFunctions() {
    calculatePredictedWalkDistance();
    calculateDistanceWalked();
    calculatePercentPredicted();
}

function testing(){
    //alert("testing testing 1 2 3");
  var gender2 = document.getElementById("g2");
  var height2 = document.getElementById("h2");
  var age2 = document.getElementById("a2");
    alert("gender2: "+gender2.value +"height2: "+parseInt(height2.value)+"age2: "+age2.value);
    
}

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
  var distance_walked = parseFloat(l.value)*parseFloat(dpl.value);
  
  //output the distance walked
  document.getElementById("distance_walked").innerHTML = "Distance Walked: " + parseInt(distance_walked) +"m";
  
  return parseInt(distance_walked); 
}

function calculatePercentPredicted(){
  //output percent predicted
  document.getElementById("percent_predicted").innerHTML = "Percent predicted: "+ parseInt(calculateDistanceWalked()/calculatePredictedWalkDistance()*100) +"%";

}


// CodePen Stopwatch by Billy Brown (https://codepen.io/_Billy_Brown/pen/dbJeh)
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var Stopwatch = function () {
    function Stopwatch(display, results) {_classCallCheck(this, Stopwatch);
        this.running = false;
        this.display = display;
        this.results = results;
        this.laps = [];
        this.reset();
        this.print(this.times);
    }_createClass(Stopwatch, [{ key: 'reset', value: function reset()

        {
            this.times = [0, 0, 0];
        } }, { key: 'start', value: function start()

        {
            if (!this.time) this.time = performance.now();
            if (!this.running) {
                this.running = true;
                requestAnimationFrame(this.step.bind(this));
            }
        } }, { key: 'lap', value: function lap()

        {
            var times = this.times;
            var li = document.createElement('li');
            li.innerText = this.format(times);
            this.results.appendChild(li);
        } }, { key: 'stop', value: function stop()

        {
            this.running = false;
            this.time = null;
        } }, { key: 'restart', value: function restart()

        {
            if (!this.time) this.time = performance.now();
            if (!this.running) {
                this.running = true;
                requestAnimationFrame(this.step.bind(this));
            }
            this.reset();
        } }, { key: 'clear', value: function clear()

        {
            clearChildren(this.results);
        } }, { key: 'step', value: function step(

        timestamp) {
            if (!this.running) return;
            this.calculate(timestamp);
            this.time = timestamp;
            this.print();
            requestAnimationFrame(this.step.bind(this));
        } }, { key: 'calculate', value: function calculate(

        timestamp) {
            var diff = timestamp - this.time;
            // Hundredths of a second are 100 ms
            this.times[2] += diff / 10;
            // Seconds are 100 hundredths of a second
            if (this.times[2] >= 100) {
                this.times[1] += 1;
                this.times[2] -= 100;
            }
            // Minutes are 60 seconds
            if (this.times[1] >= 60) {
                this.times[0] += 1;
                this.times[1] -= 60;
            }
        } }, { key: 'print', value: function print()

        {
            this.display.innerText = this.format(this.times);
        } }, { key: 'format', value: function format(

        times) {
            return (
                pad0(times[0], 2) + ':' +
                pad0(times[1], 2) + ':' +
                pad0(Math.floor(times[2]), 2));
        } }]);return Stopwatch;}();


function pad0(value, count) {
    var result = value.toString();
    for (; result.length < count; --count) {
        result = '0' + result;}
    return result;
}

function clearChildren(node) {
    while (node.lastChild) {
        node.removeChild(node.lastChild);}
}

var stopwatch = new Stopwatch(
document.querySelector('.stopwatch'),
document.querySelector('.results'));




