// Import modules
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

// Create chart instance
const buildChart = () => {
  const chart = am4core.create('chartdiv', am4charts.XYChart);

  chart.marginRight = 100;

  // Add data
  chart.data = [{
    event: 'Edinson, MN',
    cost: 5000,
    food: 1000,
    souvenirs: 1000,
    shows: 1000,
    staff: 1000,
    animals: 1000,
  },
  {
    event: 'Hopscotch, FL',
    cost: 5500,
    food: 1500,
    souvenirs: 1000,
    shows: 1000,
    staff: 1000,
    animals: 1000,
  },
  {
    event: 'Chicago, IL',
    cost: 4000,
    food: 1000,
    souvenirs: 500,
    shows: 1000,
    staff: 1000,
    animals: 500,
  },
  {
    event: 'Arrington, TN',
    cost: 8000,
    food: 1500,
    souvenirs: 2000,
    shows: 1500,
    staff: 1000,
    animals: 2000,
  },
  {
    event: 'Holly, MI',
    cost: 9000,
    food: 2000,
    souvenirs: 2000,
    shows: 2000,
    staff: 1000,
    animals: 2000,
  },
  {
    event: 'Todd, TX',
    cost: 7500,
    food: 1500,
    souvenirs: 1500,
    shows: 1500,
    staff: 1500,
    animals: 1500,
  },
  {
    event: 'Lake Tahoe, CA',
    cost: 10000,
    food: 2000,
    souvenirs: 2000,
    shows: 2000,
    staff: 2000,
    animals: 2000,
  },
  {
    event: 'Kenosha, WI',
    cost: 8500,
    food: 1500,
    souvenirs: 1500,
    shows: 2000,
    staff: 2000,
    animals: 1500,
  },
  {
    event: 'Norman, OK',
    cost: 7900,
    food: 1000,
    souvenirs: 900,
    shows: 2000,
    staff: 1000,
    animals: 2000,
  },
  {
    event: 'Crownsville, MA',
    cost: 6500,
    food: 1500,
    souvenirs: 500,
    shows: 1500,
    staff: 1500,
    animals: 1500,
  },
  {
    event: 'Shakopee, MN',
    cost: 10500,
    food: 2500,
    souvenirs: 2000,
    shows: 2000,
    staff: 2000,
    animals: 2000,
  },
  {
    event: 'Tuxedo, NY',
    cost: 15000,
    food: 3000,
    souvenirs: 3000,
    shows: 3000,
    staff: 3000,
    animals: 3000,
  },
  {
    event: 'Huntersville, NC',
    cost: 9000,
    food: 2500,
    souvenirs: 1500,
    shows: 1000,
    staff: 2000,
    animals: 2000,
  },
  {
    event: 'Sunset Park, NV',
    cost: 7200,
    food: 1500,
    souvenirs: 1200,
    shows: 1500,
    staff: 1500,
    animals: 1500,
  },
  {
    event: 'Florence, AL',
    cost: 6900,
    food: 1500,
    souvenirs: 1000,
    shows: 1500,
    staff: 1500,
    animals: 1400,
  },
  {
    event: 'Fairburn, GA',
    cost: 9500,
    food: 2000,
    souvenirs: 1500,
    shows: 2000,
    staff: 2000,
    animals: 2000,
  },
  ];

  // Create axes
  const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = 'event';
  categoryAxis.title.text = 'Events';
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;

  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = 'Total Cost';

  // Create series
  const series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = 'food';
  series.dataFields.categoryX = 'event';
  series.name = 'Food Sales';
  series.tooltipText = '{name}: [bold]{valueY}[/]';
  series.columns.template.fill = am4core.color('#670b1a');
  series.stacked = true;

  const series2 = chart.series.push(new am4charts.ColumnSeries());
  series2.dataFields.valueY = 'souvenirs';
  series2.dataFields.categoryX = 'event';
  series2.name = 'Souvenir Sales';
  series2.tooltipText = '{name}: [bold]{valueY}[/]';
  series2.columns.template.fill = am4core.color('#5fc8e6');
  series2.stacked = true;

  const series3 = chart.series.push(new am4charts.ColumnSeries());
  series3.dataFields.valueY = 'shows';
  series3.dataFields.categoryX = 'event';
  series3.name = 'Show Sales';
  series3.tooltipText = '{name}: [bold]{valueY}[/]';
  series3.columns.template.fill = am4core.color('#dde9ee');
  series3.stacked = true;

  const series4 = chart.series.push(new am4charts.ColumnSeries());
  series4.dataFields.valueY = 'staff';
  series4.dataFields.categoryX = 'event';
  series4.name = 'Staff Wages';
  series4.tooltipText = '{name}: [bold]{valueY}[/]';
  series4.columns.template.fill = am4core.color('#ffcf34');
  series4.stacked = true;

  const series5 = chart.series.push(new am4charts.ColumnSeries());
  series5.dataFields.valueY = 'animals';
  series5.dataFields.categoryX = 'event';
  series5.name = 'Animal Encounters';
  series5.tooltipText = '{name}: [bold]{valueY}[/]';
  series5.columns.template.fill = am4core.color('#211f23');
  series5.stacked = true;

  chart.cursor = new am4charts.XYCursor();
};


export default { buildChart };
