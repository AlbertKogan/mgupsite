$(function () {
        $('#container').highcharts({
            chart: {
                type: 'area',
                spacingBottom: 30
            },
            title: {
                text: 'Старые браузеры, не поддерживающие CSS3'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 500,
                y: 50,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF'
            },
            xAxis: {
                categories: ['2008', '2009', '2010', '2011', '2012', '2013']
            },
            yAxis: {
                labels: {
                    formatter: function() {
                        return this.value + '%';
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.series.name +'</b><br/>'+
                    this.x +': '+ this.y + '%';
                }
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Firefox 2.0 - 3.0',
                data: [43, 16.6, 2.4, 0.6, 0.8, 0]
            }, {
                name: 'Opera 9.5',
                data: [1, 2, 2, 1, 0, 0]
            },{
                name: 'IE 6.0',
                data: [25, 14, 7, 2, 1, 0]
            },{
                name: 'IE 7.0',
                data: [26, 19, 9, 4, 2, 1]
            },{
                name: 'IE 8.0',
                data: [null, 8, 16, 13, 8, 6]
            }]
        });
    });
    
