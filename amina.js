loadData();
function loadData()
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', '/api/data');
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data_JSON = JSON.parse(httpRequest.response);
                update_Bars(data_JSON);
            } else {
                console.error("Error fetching data:", httpRequest.status);
            }
        }
    };
    httpRequest.send();
/*-------------------------------------------------------------*/
var httpRequest3 = new XMLHttpRequest();
    httpRequest3.open('GET', '/api/data3');
    httpRequest3.onreadystatechange = function () {
        if (httpRequest3.readyState === 4) {
            if (httpRequest3.status === 200) {
                var data_JSON3 = JSON.parse(httpRequest3.response);
                update_LineChart3(data_JSON3);
            } else {
                console.error("Error fetching data:", httpRequest3.status);
            }
        }
    };
    httpRequest3.send();
}

function update_Bars(data_JSON){	

	var labels = data_JSON.map(function(e) {
	   return e.annee;
	});
	
	var data = data_JSON.map(function(e) {
	   return e.data;
	});
    var colors = ['rgba(75, 192, 192, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(255, 205, 86, 0.7)'];

	new Chart(document.getElementById("bar-chart"), {
		type: 'bar',
		data: {
		  labels: labels,
		  datasets: [
			{
			  label: "le nombre d’étudiants",
			  backgroundColor: colors,
			  data: data
			}
		  ]
		},
		options: {
		  responsive: false,
		  maintainAspectRatio: true,	
		  legend: { display: false },
		  title: {
			display: true,
			text: 'le nombre d’étudiants par années'
		  }
		}
	});
}

function update_LineChart3(data_JSON3) {
    var labels = data_JSON3.annee;
    var datasets = data_JSON3.datasets;


    // Define your custom colors
    var customColors = [
        'rgba(255, 99, 132, 1)', // Red
        'rgba(54, 162, 235, 1)', // Blue
        'rgba(255, 206, 86, 1)', // Yellow
        'rgba(75, 192, 192, 1)', // Green
        // Add more colors as needed
    ];

    var lineChartData = datasets.map(function (dataset, index) {
        var customColor = customColors[index % customColors.length];

        return {
            label: dataset.label,
            data: dataset.data,
            fill: false,
            borderColor: customColor,
        };
    });

    new Chart(document.getElementById("line-chart-3"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: lineChartData,
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Number of Students in Moyenne Ranges by Year'
            },
            legend: {
                position: 'top'
            },
            scales: {
                y: {
                    ticks: {
                        callback: function (value) {
                            // Customize the display of moyenne ranges if needed
                            return value;
                        }
                    }
                }
            }
        }
    });
}