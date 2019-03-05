google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['table']});

google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawDonutChart);

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
    ['Bob',   {v: 7000,  f: '$7,000'},  true]
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
