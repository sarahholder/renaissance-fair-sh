import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import eventFoodDetails from '../eventSingleView/eventFoodDetails';
import eventSouvenirDetails from '../eventSingleView/eventSouvenirDetails';
import eventStaffDetails from '../eventSingleView/eventStaffDetails';
import eventShowDetails from '../eventSingleView/eventShowDetails';
import eventAnimalDetails from '../eventSingleView/eventAnimalDetails';

const singleEventTotalsArray = [];

const getSingleCollectionTotals = () => {
  const collectionName = $('');
  const collectionTotal = $('');

  const totals = {
    collection: collectionName.value,
    cost: collectionTotal.value,
  };
  singleEventTotalsArray.push(totals);
  console.error(totals);
};

const buildSingleEventChart = () => {
  const chart = am4core.create('chartDiv', am4charts.XYChart);

  chart.marginRight = 400;

  // Add data
  chart.data = [{
    collection: 'Food',
    cost: 1500,
  },
  {
    collection: 'Souvenirs',
    cost: 1000,
  },
  {
    collection: 'Shows',
    cost: 2000,
  },
  {
    collection: 'Staff',
    cost: 1000,
  },
  {
    collection: 'Animals',
    cost: 2200,
  },
  ];

  // Create axes
  const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = 'collection';
  categoryAxis.title.text = 'Collections';

  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = 'Total Cost';

  // Create series
  const series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = 'cost';
  series.dataFields.categoryX = 'collection';
  series.name = 'Cost';
  series.tooltipText = '{name}: [bold]{valueY}[/]';
  series.columns.template.fill = am4core.color('#670b1a');

  chart.cursor = new am4charts.XYCursor();
};


export default { buildSingleEventChart, getSingleCollectionTotals };
