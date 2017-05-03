'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var chart;

            var chartData = [
                
               
                {
                    "attendence_type": "Present",
                    "visits": 22
                },
                {
                    "attendence_type": "Absent",
                    "visits": 5
                }
            ];


            AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = chartData;
                chart.categoryField = "attendence_type";
                chart.startDuration = 1;
                chart.valueAxes = [{
                	 "title": "Employee Attendence",
                	 "maximum": 25
                }];

                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.labelRotation = 90;
                categoryAxis.gridPosition = "start";

                // value
                // in case you don't want to change default settings of value axis,
                // you don't need to create it, as one value axis is created automatically.

                // GRAPH
                var graph = new AmCharts.AmGraph();
                graph.valueField = "visits";
                graph.balloonText = "[[category]]: <b>[[value]]</b>";
                graph.type = "column";
                graph.max = 50;
                graph.lineAlpha = 0.1;
                graph.minDistance = 10;
                graph.fillAlphas = 0.8;
                chart.addGraph(graph);


                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.creditsPosition = "top-right";

                chart.write("chartdiv",{
                	"valueAxes": [{
				    "id": "ValueAxis-1",
				    "capMaximum": 60,
				    "capMinimum": 0,
				    "title": ""
				  }]
                });
            });
  });
