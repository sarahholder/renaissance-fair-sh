import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';


const chart = am4core.create('chartdiv', am4charts.XYChart);

chart.data = [{
  category: 'Food',
  cost: 800,
},
{
  category: 'Souvenirs',
  cost: 500,
},
{
  category: 'Shows',
  cost: 1000,
},
{
  category: 'Staff',
  cost: 400,
},
{
  category: 'Animals',
  cost: 600,
},
];


const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = 'category';
categoryAxis.title.text = 'Categories';

const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = 'Cost of Event';

const series = chart.series.push(new am4charts.ColumnSeries());

series.dataFields.valueY = 'cost';
series.dataFields.categoryX = 'category';
series.name = 'Sales';
series.columns.template.tooltipText = 'Series: {name}\nCategory: {categoryX}\nValue: {valueY}';
series.columns.template.fill = am4core.color('#104547'); // fill
series.dataFields.valueY = 'cost';
series.dataFields.categoryX = 'category';

chart.cursor = new am4charts.XYCursor();

export default { chart };
