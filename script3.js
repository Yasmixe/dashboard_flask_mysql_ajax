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
/*-------------------------------------------------------------*/
    // request 4
    var httpRequest4 = new XMLHttpRequest();
    httpRequest4.open('GET', '/api/data4');
    httpRequest4.onreadystatechange = function () {
        if (httpRequest4.readyState === 4) {
            if (httpRequest4.status === 200) {
                var data_JSON4 = JSON.parse(httpRequest4.response);
                update_PieChart(data_JSON4);
            } else {
                console.error("Error fetching data:", httpRequest4.status);
            }
        }
    };
    httpRequest4.send();
/*-------------------------------------------------------------*/
var httpRequest5 = new XMLHttpRequest();
    httpRequest5.open('GET', '/api/data5');
    httpRequest5.onreadystatechange = function () {
        if (httpRequest5.readyState === 4) {
            if (httpRequest5.status === 200) {
                var data_JSON5 = JSON.parse(httpRequest5.response);
                update_BarChart(data_JSON5);
            } else {
                console.error("Error fetching data:", httpRequest5.status);
            }
        }
    };
    httpRequest5.send();
/*-------------------------------------------------------------*/
var httpRequest6 = new XMLHttpRequest();
httpRequest6.open('GET', '/api/data6');
httpRequest6.onreadystatechange = function () {
    if (httpRequest6.readyState === 4) {
        if (httpRequest6.status === 200) {
            var data_JSON6 = JSON.parse(httpRequest6.response);
            update_BarChart6(data_JSON6);
        } else {
            console.error("Error fetching data:", httpRequest6.status);
        }
    }
};
httpRequest6.send();
/*-------------------------------------------------------------*/
var httpRequest7 = new XMLHttpRequest();
httpRequest7.open('GET', '/api/data7');
httpRequest7.onreadystatechange = function () {
    if (httpRequest7.readyState === 4) {
        if (httpRequest7.status === 200) {
            var data_JSON7 = JSON.parse(httpRequest7.response);
            update_BubbleChart(data_JSON7);
        } else {
            console.error("Error fetching data:", httpRequest7.status);
        }
    }
};
httpRequest7.send();
/*-------------------------------------------------------------*/
var httpRequest8 = new XMLHttpRequest();
    httpRequest8.open('GET', '/api/data8');
    httpRequest8.onreadystatechange = function () {
        if (httpRequest8.readyState === 4) {
            if (httpRequest8.status === 200) {
                var data_JSON8 = JSON.parse(httpRequest8.response);
                update_BarChart8(data_JSON8);
            } else {
                console.error("Error fetching data:", httpRequest8.status);
            }
        }
    };
    httpRequest8.send();
/*-------------------------------------------------------------*/
    var httpRequest9 = new XMLHttpRequest();
    httpRequest9.open('GET', '/api/data9');
    httpRequest9.onreadystatechange = function () {
        if (httpRequest9.readyState === 4) {
            if (httpRequest9.status === 200) {
                var data_JSON9 = JSON.parse(httpRequest9.response);
                update_LineChart9(data_JSON9);
            } else {
                console.error("Error fetching data:", httpRequest9.status);
            }
        }
    };
    httpRequest9.send();
/*-------------------------------------------------------------*/
    var httpRequest10 = new XMLHttpRequest();
    httpRequest10.open('GET', '/api/data10');
    httpRequest10.onreadystatechange = function () {
        if (httpRequest10.readyState === 4) {
            if (httpRequest10.status === 200) {
                var data_JSON10 = JSON.parse(httpRequest10.response);
                update_PieChart10(data_JSON10);
            } else {
                console.error("Error fetching data:", httpRequest10.status);
            }
        }
    };
    httpRequest10.send();
/*-------------------------------------------------------------*/
    var httpRequest11 = new XMLHttpRequest();
    httpRequest11.open('GET', '/api/data11');
    httpRequest11.onreadystatechange = function () {
        if (httpRequest11.readyState === 4 && httpRequest11.status === 200) {
            var data_JSON11 = JSON.parse(httpRequest11.response);
            update_DoughnutChart(data_JSON11);
        } else {
            console.error("Error fetching data:", httpRequest11.status);
        }
    };
    httpRequest11.send();
/*-------------------------------------------------------------*/
var httpRequest12 = new XMLHttpRequest();
httpRequest12.open('GET', '/api/data12');
httpRequest12.onreadystatechange = function () {
    if (httpRequest12.readyState === 4 && httpRequest12.status === 200) {
        var data_JSON12 = JSON.parse(httpRequest12.response);
        update_HorizontalBarChart(data_JSON12);
    } else {
        console.error("Error fetching data:", httpRequest12.status);
    }
};
httpRequest12.send();
/*-------------------------------------------------------------*/
var httpRequest13 = new XMLHttpRequest();
httpRequest13.open('GET', '/api/data13');
httpRequest13.onreadystatechange = function () {
    if (httpRequest13.readyState === 4 && httpRequest13.status === 200) {
        var data_JSON13 = JSON.parse(httpRequest13.response);
        update_BubbleChart3(data_JSON13);
    } else {
        console.error("Error fetching data:", httpRequest13.status);
    }
};
httpRequest13.send();
/*-------------------------------------------------------------*/
var httpRequest14 = new XMLHttpRequest();
    httpRequest14.open('GET', '/api/data14');
    httpRequest14.onreadystatechange = function () {
        if (httpRequest14.readyState === 4) {
            if (httpRequest14.status === 200) {
                var data_JSON14 = JSON.parse(httpRequest14.response);
                createTable(data_JSON14);
            } else {
                console.error("Error fetching data:", httpRequest14.status);
            }
        }
    };
    httpRequest14.send();
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
// Function to generate random colors
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
                text: 'Number of Males by Year'
            },
            legend: {
                position: 'top'
            }
        }
    });
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
                text: 'Nbr of moyenne >15and <=18'
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

function update_BarChart8(data_JSON8) {
    var labels = data_JSON8.map(item => item.specialite);
    var countData8 = data_JSON8.map(item => item.data);

    // Define custom colors for each specialite
    var customColors = [
        '#cfdddb',
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 99, 132, 0.7)',
        '#f8584c',
        '#081225',
        '#2ba297',
        '#e87659',
        '#ea5863'
        // Add more colors for each specialite
    ];

    // Bar Chart
    new Chart(document.getElementById("bar-chart-8"), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Number of Students',
                    backgroundColor: customColors,
                    data: countData8
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Number of Students in Each Specialite'
            },
            legend: {
                position: 'top'
            }
        }
    });
}

function update_LineChart9(data_JSON9) {
    var labels = data_JSON9.map(item => item.specialite);
    var successData = data_JSON9.map(item => item.success);
    var failData = data_JSON9.map(item => item.fail);

    new Chart(document.getElementById("line-chart-9"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Success',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    data: successData,
                    fill: false
                },
                {
                    label: 'Fail',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    data: failData,
                    fill: false
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Success and Fail Count in Each Specialite'
            },
            legend: {
                position: 'top'
            }
        }
    });
}

function update_PieChart10(data_JSON10) {
    var specialites = data_JSON10.map(item => item.specialite);
    var averages = data_JSON10.map(item => item.average);

    // Define custom colors for each specialite
    var customColors = [
        '#cfdddb',
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 99, 132, 0.7)',
        '#f8584c',
        '#081225',
        '#2ba297',
        '#e87659',
        '#ea5863'
        // Add more colors for each specialite
    ];

    // Pie Chart
    new Chart(document.getElementById("pie-chart-avg"), {
        type: 'pie',
        data: {
            labels: specialites,
            datasets: [
                {
                    backgroundColor: customColors,
                    data: averages
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Average Moyenne by Specialite'
            },
            legend: {
                position: 'top'
            }
        }
    });
}


function update_DoughnutChart(data_JSON11) {
    var labels = data_JSON11.map(item => item.specialite);
    var countFemme = data_JSON11.map(item => item.count_femme);
    var countHomme = data_JSON11.map(item => item.count_homme);

    // Define custom colors for each specialite
    var customColors = [
        '#cfdddb',
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 99, 132, 0.7)',
        '#f8584c',
        '#081225',
        '#2ba297',
        '#e87659',
        '#ea5863'
        // Add more colors for each specialite
    ];

    // Doughnut Chart
    new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [
                {
                    data: countFemme,
                    backgroundColor: customColors,
                    label: 'Femme'
                },
                {
                    data: countHomme,
                    backgroundColor: customColors,
                    label: 'Homme'
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Gender Distribution in Each Specialite'
            },
            legend: {
                position: 'top'
            }
        }
    });
}

function update_HorizontalBarChart(data_JSON12) {
    var labels = data_JSON12.map(item => item.specialite);
    var maxMoyennes = data_JSON12.map(item => item.max_moyenne);
    var minMoyennes = data_JSON12.map(item => item.min_moyenne);

    // Define custom colors for each specialite
    var customColors = [
        '#cfdddb',
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 99, 132, 0.7)',
        '#f8584c',
        '#081225',
        '#2ba297',
        '#e87659',
        '#ea5863'
        // Add more colors for each specialite
    ];

    // Horizontal Bar Chart
    new Chart(document.getElementById("horizontal-bar-chart"), {
        type: 'horizontalBar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Maximum Moyenne',
                    backgroundColor: customColors,
                    data: maxMoyennes
                },
                {
                    label: 'Minimum Moyenne',
                    backgroundColor: customColors,  // Use the same colors for consistency
                    data: minMoyennes
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Maximum and Minimum Moyenne in Each Specialite'
            },
            legend: {
                position: 'top'
            }
        }
    });
}



function createTable(data) {
    var table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.border = "1px solid #ddd"; // Border style

    var thead = table.createTHead();
    var tbody = table.createTBody();
    key = ['Annee', 'ID', 'First Name', 'Last Name', 'Gender', 'Specialite', 'Moyenne']
    // Create table header
    var headerRow = thead.insertRow();
    headerRow.style.backgroundColor = "#f2f2f2"; // Header background color

    for (var i in data[0]) {
        var th = document.createElement("th");
        th.style.border = "1px solid #ddd"; // Border style
        th.appendChild(document.createTextNode(key[i]));
        headerRow.appendChild(th);
        th.style.textAlign = "center";

    }

    // Create table rows
    data.forEach(function (row) {
        var tr = tbody.insertRow();

        // Apply red background if moyenne is less than 10
        if (parseFloat(row.moyenne) < 10) {
            tr.style.backgroundColor = "#ffe6e6"; 
            tr.style.textAlign = "center";
            td.style.textAlign = "center";

        }

        for (var key in row) {
            var cell = tr.insertCell();
            cell.style.border = "1px solid #ddd"; // Border style
            cell.appendChild(document.createTextNode(row[key]));
        }
    });

    // Append the table to a container in your HTML (replace "table-container" with the actual container ID)
    document.getElementById("table-container").appendChild(table);
}
