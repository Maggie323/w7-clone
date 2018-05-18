console.log("let's build some charts!")

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'bar']});

//--^Only have to do this once!

//For second chart: 
//1. Set a callback for it
//2. Have the callback function for it (can be same as first, i.e.).
//3. Be sure all call back functions have different names.
//4. BE sure al callback functions use different divs to draw in. Add a new div to HTML for each chart. 

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);


// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart1() {

// Create the data table.
 var data = google.visualization.arrayToDataTable([
          ['Toppings', 'Slices'],
          ['Mushrooms', 3],
          ['Banana Peppers', 2],
	 				['Hawaiian', 1],
	 				['Pepperoni', 2]
        ]);
// Set Chart Options
 var options = {
     		chart: {
           title: 'Kinds of Pizza I ate Last Night',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };
//Instantiate and draw our chart, passing in some options
 var chart = new google.charts.Bar(document.getElementById('chart_div1'));

 chart.draw(data, google.charts.Bar.convertOptions(options));
 }

function drawChart2() {

// Create the data table.
 var data = google.visualization.arrayToDataTable([
          ['Toppings', 'Slices'],
          ['Mushrooms', 3],
          ['Banana Peppers', 2],
	 				['Hawaiian', 1],
	 				['Pepperoni', 2]
        ]);
// Set Chart Options
 var options = {
     		chart: {
           title: 'Kinds of Pizza I ate Last Night',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };
//Instantiate and draw our chart, passing in some options
 var chart = new google.charts.Bar(document.getElementById('chart_div2'));

 chart.draw(data, google.charts.Bar.convertOptions(options));
 }