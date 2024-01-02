loadData();
function loadData()
{
    httpRequest = new XMLHttpRequest();	
	httpRequest.open('GET', '/api/data');
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState === 4 && httpRequest.status === 200) {
			data_JSON = JSON.parse(httpRequest.response);
			update_Bars(data_JSON);			
		}
	};
	httpRequest.send();

    httpRequest3 = new XMLHttpRequest();	
	httpRequest3.open('GET', '/api/data3');
	httpRequest3.onreadystatechange = function () {
		if (httpRequest3.readyState === 4 && httpRequest3.status === 200) {
			data_JSON3 = JSON.parse(httpRequest3.response);
			update_Bubbles(data_JSON3);
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
	new Chart(document.getElementById("bar-chart"), {
		type: 'bar',
		data: {
		  labels: labels,
		  datasets: [
			{
			  label: "le nombre d’étudiants",
			  backgroundColor: "#cfdddb",
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



function loadData4(callback) {
    var httpRequest4 = new XMLHttpRequest();
    httpRequest4.open('GET', '/api/data4');
    httpRequest4.onreadystatechange = function () {
        if (httpRequest4.readyState === 4) {
            if (httpRequest4.status === 200) {
                var data_JSON4 = JSON.parse(httpRequest4.response);
                callback(data_JSON4);
            } else {
                console.error("Error fetching data:", httpRequest4.status);
            }
        }
    };
    httpRequest4.send();
}



function update_PieChart(data_JSON4) {
    var countFemales = data_JSON4.map(item => item.countFemales);
    var countMales = data_JSON4.map(item => item.countMales);

    // Pie Chart
    new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
            labels: ['Failed Females', 'Failed Males'],
            datasets: [
                {
                    backgroundColor: ['#cfdddb', 'rgba(75, 192, 192, 0.7)'],
                    data: [countFemales.reduce((a, b) => a + b, 0), countMales.reduce((a, b) => a + b, 0)]
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Number of Failed Results by Gender'
            },
            legend: {
                position: 'top'
            }
        }
    });
}
function loadData5(callback) {
    var httpRequest5 = new XMLHttpRequest();
    httpRequest5.open('GET', '/api/data5');
    httpRequest5.onreadystatechange = function () {
        if (httpRequest5.readyState === 4) {
            if (httpRequest5.status === 200) {
                var data_JSON5 = JSON.parse(httpRequest5.response);
                callback(data_JSON5);
            } else {
                console.error("Error fetching data:", httpRequest5.status);
            }
        }
    };
    httpRequest5.send();
}

function update_BarChart(data_JSON5) {
    var labels = data_JSON5.map(item => item.annee);
    var countFemales = data_JSON5.map(item => item.countFemales);

    new Chart(document.getElementById("bar2-chart"), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Femmes',
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                    data: countFemales
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Number of Females by Year'
            },
            legend: {
                position: 'top'
            }
        }
    });
}
function loadData6(callback) {
    var httpRequest6 = new XMLHttpRequest();
    httpRequest6.open('GET', '/api/data6');
    httpRequest6.onreadystatechange = function () {
        if (httpRequest6.readyState === 4) {
            if (httpRequest6.status === 200) {
                var data_JSON6 = JSON.parse(httpRequest6.response);
                callback(data_JSON6);
            } else {
                console.error("Error fetching data:", httpRequest6.status);
            }
        }
    };
    httpRequest6.send();
}

function update_BarChart6(data_JSON6) {
    var labels = data_JSON6.map(item => item.annee);
    var countData6 = data_JSON6.map(item => item.countData6);

    new Chart(document.getElementById("bar3-chart"), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Hommes',
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                    data: countData6
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Custom Data by Year'
            },
            legend: {
                position: 'top'
            }
        }
    });
}

function loadData7(callback) {
    var httpRequest7 = new XMLHttpRequest();
    httpRequest7.open('GET', '/api/data7');
    httpRequest7.onreadystatechange = function () {
        if (httpRequest7.readyState === 4) {
            if (httpRequest7.status === 200) {
                var data_JSON7 = JSON.parse(httpRequest7.response);
                callback(data_JSON7);
            } else {
                console.error("Error fetching data:", httpRequest7.status);
            }
        }
    };
    httpRequest7.send();
}

function update_BubbleChart(data_JSON7) {
    var bubblesData = data_JSON7.map(item => ({
        x: Math.floor(item.moyenne), // Partie entière
        y: +(item.moyenne % 1).toFixed(2), // Partie décimale avec 2 chiffres après la virgule
        r: item.moyenne * 0.5 // Taille des bulles basée sur la moyenne (ajustez le facteur 2 selon vos besoins)
    }));

    new Chart(document.getElementById("bubble-chart"), {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Students',
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: bubblesData
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Moyenne of Students in 2019'
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Partie entière de la Moyenne'
                    },
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Partie décimale de la Moyenne'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        }
    });
}

// Load data from the new /api/data7 route
loadData7(update_BubbleChart);
// Load data from the new /api/data6 route
loadData6(update_BarChart6);

// Load data from the new /api/data5 route
loadData5(update_BarChart);

// Usage
loadData4(update_PieChart);

// Usage

// Usage
