google.charts.load('current', {'packages':['corechart']});
google.charts.load("current", {packages:["timeline"]});
google.charts.load('current', {'packages':['table']});
google.charts.load('current', {'packages':['gauge']});

google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawDonutChart);
google.charts.setOnLoadCallback(drawSeriesChart);
google.charts.setOnLoadCallback(drawBarChart);
google.charts.setOnLoadCallback(drawLineCurveChart);
google.charts.setOnLoadCallback(drawTimeLine);
google.charts.setOnLoadCallback(drawGaugeChart);
google.charts.setOnLoadCallback(drawColumnChart);


$.ajax({
  url: "https://wt-897d063c63715c7a5c2ad709d4e86bfa-0.sandbox.auth0-extend.com/getData", 
  dataType: "json",
  type: 'POST',
  data: {customer: "demo"},
  success: function(result){
    console.log(result);
  }
});

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string');
  data.addColumn('number','Devices');
  data.addRows([
    ['SamSung', 21],
    ['Apple', 14],
    ['Huawei', 9],
    ['LG', 4],
    ['Xiaomi', 5],
    ['ZTE', 5],
    ['Other', 42]
    ]);
  var options = {
    title: 'Global smartphone share Q2 2015',
    'width': "100%",
    'height': 300
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('number', 'Salary');
  data.addColumn('boolean', 'Full Time Employee');
  data.addRows([
    ['Mike',  {v: 10000, f: '$10,000'}, true],
    ['Jim',   {v:8000,   f: '$8,000'},  false],
    ['Alice', {v: 12500, f: '$12,500'}, true],
    ['Bob',   {v: 7000,  f: '$7,000'},  true],
    ['Cann',   {v: 7500,  f: '$1,000'},  false],
    ['Sunny',   {v: 1100,  f: '$33,000'},  true],
    ['Rose',   {v: 9900,  f: '$4,000'},  true],
    ['List',   {v: 22000,  f: '$5,000'},  false]
    ]);

  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}

function drawDonutChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
    ]);

  var options = {
    title: 'My Daily Activities',
    pieHole: 0.4,
    'width': "100%",
    'height': 300
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}

function drawSeriesChart() {

  var data = google.visualization.arrayToDataTable([
    ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
    ['CAN',    80.66,              1.67,      'North America',  33739900],
    ['DEU',    79.84,              1.36,      'Europe',         81902307],
    ['DNK',    78.6,               1.84,      'Europe',         5523095],
    ['EGY',    72.73,              2.78,      'Middle East',    79716203],
    ['GBR',    80.05,              2,         'Europe',         61801570],
    ['IRN',    72.49,              1.7,       'Middle East',    73137148],
    ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
    ['ISR',    81.55,              2.96,      'Middle East',    7485600],
    ['RUS',    68.6,               1.54,      'Europe',         141850000],
    ['USA',    78.09,              2.05,      'North America',  307007000]
    ]);

  var options = {
    title: 'Correlation between life expectancy, fertility rate ' +
    'and population of some world countries (2010)',
    hAxis: {title: 'Life Expectancy'},
    vAxis: {title: 'Fertility Rate'},
    bubble: {textStyle: {fontSize: 11}}
  };

  var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
  chart.draw(data, options);
}
function drawBarChart() {
  var data = google.visualization.arrayToDataTable([
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000]
    ]);

  var options = {
    title: 'Population of Largest U.S. Cities',
    chartArea: {width: '50%'},
    hAxis: {
      title: 'Total Population',
      minValue: 0
    },
    vAxis: {
      title: 'City'
    }
  };

  var chart = new google.visualization.BarChart(document.getElementById('bar_chart'));
  chart.draw(data, options);
}
function drawLineCurveChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
    ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
function drawTimeLine() {

  var container = document.getElementById('timeline_chart');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'string', id: 'Position' });
  dataTable.addColumn({ type: 'string', id: 'Name' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ 'President', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
    [ 'President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4) ],
    [ 'President', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4) ],
    [ 'Vice President', 'John Adams', new Date(1789, 3, 21), new Date(1797, 2, 4)],
    [ 'Vice President', 'Thomas Jefferson', new Date(1797, 2, 4), new Date(1801, 2, 4)],
    [ 'Vice President', 'Aaron Burr', new Date(1801, 2, 4), new Date(1805, 2, 4)],
    [ 'Vice President', 'George Clinton', new Date(1805, 2, 4), new Date(1812, 3, 20)],
    [ 'Secretary of State', 'John Jay', new Date(1789, 8, 25), new Date(1790, 2, 22)],
    [ 'Secretary of State', 'Thomas Jefferson', new Date(1790, 2, 22), new Date(1793, 11, 31)],
    [ 'Secretary of State', 'Edmund Randolph', new Date(1794, 0, 2), new Date(1795, 7, 20)],
    [ 'Secretary of State', 'Timothy Pickering', new Date(1795, 7, 20), new Date(1800, 4, 12)],
    [ 'Secretary of State', 'Charles Lee', new Date(1800, 4, 13), new Date(1800, 5, 5)],
    [ 'Secretary of State', 'John Marshall', new Date(1800, 5, 13), new Date(1801, 2, 4)],
    [ 'Secretary of State', 'Levi Lincoln', new Date(1801, 2, 5), new Date(1801, 4, 1)],
    [ 'Secretary of State', 'James Madison', new Date(1801, 4, 2), new Date(1809, 2, 3)]
    ]);

  chart.draw(dataTable);
}
function drawGaugeChart() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Memory', 80],
    ['CPU', 55],
    ['Network', 68]
    ]);

  var options = {
    height:300,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('gauge_chart'));

  chart.draw(data, options);

  setInterval(function() {
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 13000);
  setInterval(function() {
    data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 5000);
  setInterval(function() {
    data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 26000);
}
function drawColumnChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('timeofday', 'Time of Day');
  data.addColumn('number', 'Motivation Level');
  data.addColumn({type: 'string', role: 'annotation'});
  data.addColumn('number', 'Energy Level');
  data.addColumn({type: 'string', role: 'annotation'});

  data.addRows([
    [{v: [8, 0, 0], f: '8 am'},   1, '1',  .25, '.2'],
    [{v: [9, 0, 0], f: '9 am'},   2, '2',   .5, '.5'],
    [{v: [10, 0, 0], f:'10 am'},  3, '3',    1,  '1'],
    [{v: [11, 0, 0], f: '11 am'}, 4, '4', 2.25,  '2'],
    [{v: [12, 0, 0], f: '12 pm'}, 5, '5', 2.25,  '2'],
    [{v: [13, 0, 0], f: '1 pm'},  6, '6',    3,  '3'],
    [{v: [14, 0, 0], f: '2 pm'},  7, '7', 3.25,  '3'],
    [{v: [15, 0, 0], f: '3 pm'},  8, '8',    5,  '5'],
    [{v: [16, 0, 0], f: '4 pm'},  9, '9',  6.5,  '6'],
    [{v: [17, 0, 0], f: '5 pm'}, 10, '10',  10, '10'],
    ]);

  var options = {
    title: 'Motivation and Energy Level Throughout the Day',
    height:300,
    annotations: {
      alwaysOutside: true,
      textStyle: {
        fontSize: 14,
        color: '#000',
        auraColor: 'none'
      }
    },
    hAxis: {
      title: 'Time of Day',
      format: 'h:mm a',
      viewWindow: {
        min: [7, 30, 0],
        max: [17, 30, 0]
      }
    },
    vAxis: {
      title: 'Rating (scale of 1-10)'
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('column_chart'));
  chart.draw(data, options);
}
