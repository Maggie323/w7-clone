// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'bar', 'timeline']});

//--^Only have to do this once!

//For second chart: 
// 1. Set a callback for it
// 2. Have the callback function for it (can be same as first, i.e.).
// 3. Be sure all call back functions have different names.
// 4. BE sure al callback functions use different divs to draw in. Add a new div to HTML for each chart. 

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDonationChart);
google.charts.setOnLoadCallback(drawStudyTimeline);
google.charts.setOnLoadCallback(drawStudyBar);


function drawStudyTimeline(){
 			var container = document.getElementById('study-timeline');
      var chart = new google.visualization.Timeline(container);
      var dataTable = new google.visualization.DataTable();

      dataTable.addColumn({ type: 'string', id: 'Phase of Study' });
      dataTable.addColumn({ type: 'date', id: 'Start' });
      dataTable.addColumn({ type: 'date', id: 'End' });
      dataTable.addRows([
        ['General Ed', new Date(2018, 8, 1), new Date(2019, 4, 1)],
				['Choose Mjor', new Date(2019, 5, 1), new Date(2019, 7, 1)],
        ['Choose Mjr Clss', new Date(2019, 8, 1), new Date(2020, 4, 1)],
        ['12 Mjr Clss',  new Date(2019, 8, 1), new Date(2022, 4, 1)]
			]);

        chart.draw(dataTable);
}

function drawStudyBar(){
	
}


function drawDonationChart(){
	console.log("HELLO")
	
	// #donation-chart is the container
	//source: https://developers.google.com/chart/interactive/docs/gallery/piechart
	
	var data = google.visualization.arrayToDataTable([
          ['Cateory', 'Expenditure'],
          ['Administrative Costs', 4],
          ['Fundrasing', 			16],
          ['Youth Programs', 	36],
          ['Adult Programs',	44],
        ]);

        var options = {
          title: 'Organization Fund Allocation',
          pieHole: 0.4,
					slices: [
						{color: '#8AD1C2'},
						{color: '#9F8AD1'},
						{color: '#D18A99'},
						{color: '#BCD18A'},
					],
//					font-size: 24,
//					height: 800,
//					width: 800,
//					legend: 'top',
				};
	
        var chart = new google.visualization.PieChart(document.getElementById('donation-chart'));
        chart.draw(data, options);
}

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