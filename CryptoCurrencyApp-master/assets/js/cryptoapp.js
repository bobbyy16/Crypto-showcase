window.onload = function () {



    var airbrake = new airbrakeJs.Client({
        projectId: 182411,
        projectKey: 'cfd922b7e69bb39091203948e051d800'
    });
    airbrake.addFilter(function (notice) {
        notice.context.environment = 'production';
        return notice;
    });



    var options = {
        animationEnabled: true,
        title: {
            text: "Crypto Currency Chart - 2018"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Sales (in USD)",
            prefix: "$",
            includeZero: false
        },
        data: [{
            yValueFormatString: "$#,###",
            xValueFormatString: "MMMM",
            type: "spline",
            dataPoints: [
                { x: new Date(2017, 0), y: 25060 },
                { x: new Date(2017, 1), y: 27980 },
                { x: new Date(2017, 2), y: 33800 },
                { x: new Date(2017, 3), y: 49400 },
                { x: new Date(2017, 4), y: 40260 },
                { x: new Date(2017, 5), y: 33900 },
                { x: new Date(2017, 6), y: 48000 },
                { x: new Date(2017, 7), y: 31500 },
                { x: new Date(2017, 8), y: 32300 },
                { x: new Date(2017, 9), y: 42000 },
                { x: new Date(2017, 10), y: 52160 },
                { x: new Date(2017, 11), y: 49400 }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);

}