loadData();

function loadData(){	
	httpRequest = new XMLHttpRequest();	
	httpRequest.open('GET', '/api/data');
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState === 4 && httpRequest.status === 200) {
			data_JSON = JSON.parse(httpRequest.response);
			update_Bars(data_JSON);			
		}
	};
	httpRequest.send();
	httpRequest2 = new XMLHttpRequest();	
	httpRequest2.open('GET', '/api/data2');
	httpRequest2.onreadystatechange = function () {
		if (httpRequest2.readyState === 4 && httpRequest2.status === 200) {
			data_JSON2 = JSON.parse(httpRequest2.response);
			update_Lines(data_JSON2);
		}
	};
	httpRequest2.send();

	httpRequest3 = new XMLHttpRequest();	
	httpRequest3.open('GET', '/api/data4');
	httpRequest3.onreadystatechange = function () {
		if (httpRequest3.readyState === 4 && httpRequest3.status === 200) {
			data_JSON4 = JSON.parse(httpRequest3.response);
			update_Pie(data_JSON4);
		}
	};
	httpRequest3.send();
	httpRequest4 = new XMLHttpRequest();	
	httpRequest4.open('GET', '/api/data5');
	httpRequest4.onreadystatechange = function () {
		if (httpRequest4.readyState === 4 && httpRequest4.status === 200) {
			data_JSON5 = JSON.parse(httpRequest4.response);
			update_polar(data_JSON5);
		}
	};
	httpRequest4.send();
	httpRequest5 = new XMLHttpRequest();	
	httpRequest5.open('GET', '/api/data3');
	httpRequest5.onreadystatechange = function () {
		if (httpRequest5.readyState === 4 && httpRequest5.status === 200) {
			data_JSON3  = JSON.parse(httpRequest5.response);
			update_barchartgrouped(data_JSON3);
		}
	};
	httpRequest5.send();
	httpRequest6 = new XMLHttpRequest();
    httpRequest6.open('GET', '/api/data6');
    httpRequest6.onreadystatechange = function () {
        if (httpRequest6.readyState === 4 && httpRequest6.status === 200) {
            data_JSON6 = JSON.parse(httpRequest6.response);
            update_etudiants_horizontal_bar_chart(data_JSON6);
        }
    };
    httpRequest6.send();
	httpRequest7 = new XMLHttpRequest();
    httpRequest7.open('GET', '/api/data7');
    httpRequest7.onreadystatechange = function () {
        if (httpRequest7.readyState === 4 && httpRequest7.status === 200) {
            data_JSON7 = JSON.parse(httpRequest7.response);
            update_echec_bar_chart(data_JSON7);
        }
    };
    httpRequest7.send();
	
	httpRequest9 = new XMLHttpRequest();
    httpRequest9.open('GET', '/api/data9');
    httpRequest9.onreadystatechange = function () {
        if (httpRequest9.readyState === 4 && httpRequest9.status === 200) {
            data_JSON9 = JSON.parse(httpRequest9.response);
            update_moyenne_mixed_chart(data_JSON9);
        }
    };
    httpRequest9.send();
	httpRequest10 = new XMLHttpRequest();
    httpRequest10.open('GET', '/api/data10');
    httpRequest10.onreadystatechange = function () {
        if (httpRequest10.readyState === 4 && httpRequest10.status === 200) {
            data_JSON10 = JSON.parse(httpRequest10.response);
            update_gender_doughnut_chart(data_JSON10);
        }
    };
    httpRequest10.send();
	httpRequest11 = new XMLHttpRequest();
    httpRequest11.open('GET', '/api/data11');
    httpRequest11.onreadystatechange = function () {
        if (httpRequest11.readyState === 4 && httpRequest11.status === 200) {
            data_JSON11 = JSON.parse(httpRequest11.response);
            update_gender_variation_chart(data_JSON11);
        }
    };
    httpRequest11.send();
	httpRequest12 = new XMLHttpRequest();
    httpRequest12.open('GET', '/api/data12');
    httpRequest12.onreadystatechange = function () {
        if (httpRequest12.readyState === 4 && httpRequest12.status === 200) {
            data_JSON12 = JSON.parse(httpRequest12.response);
            update_avg_specialites_chart(data_JSON12);
        }
    };
    httpRequest12.send();
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
			  backgroundColor: ["#6b146b","#d30d59","#c45850"],
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
function update_Lines(data_JSON2){
	var labels = data_JSON2.annee;
	for(d of data_JSON2.datasets){
		d.fill = false;				  
		d.borderColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		d.borderWidth=2;
		d.radius=1;			
	}			
	var data =data_JSON2.datasets;
	new Chart(document.getElementById("line-chart"), {
		type: 'line',
		data: {
			labels: labels,
			datasets: data
		},
		options: {						
			responsive: false,
			maintainAspectRatio: true,
			title: {
				display: false,
				text: 'le nombre d’étudiants par sexe'
			},
			legend:{
				position:'top'
			}
		}
	});
}

function update_Pie(data_JSON4){
	var labels = data_JSON4.map(function(e) {return e.annee;});
	
	var data = data_JSON4.map(function(e) {
	   return e.data;
	});
	
	new Chart(document.getElementById("pie-chart"), {
		type: 'pie',
		data: {
		  labels: labels,
		  datasets: [{
			label: "le nombre de réussite par année",
			backgroundColor: ["#6b146b","#d30d59","#c45850"],
			data: data
		  }]
		},
		options: {
		  responsive: false,
		  maintainAspectRatio: true,
		  title: {
			display: false,
			text: 'le nombre de réussite par année'
		  },
		  legend:{
			position:'right'
		  }
		}
	});	
}
function update_polar(data_JSON5){
	var labels = data_JSON5.map(function(e) {return e.annee;});
	
	var data = data_JSON5.map(function(e) {
	   return e.data;
	});
new Chart(document.getElementById("polar-chart"), {
    type: 'polarArea',
    data: {
      labels:labels,
      datasets: [
        {
          label: "nombre de réussite",
          backgroundColor: ["#a32506", "#ffea30","#00d4a6","#0016dd","#6b146b"
		  ,"#d30d59","rgba(255, 108, 23, 0.966)"],
          data: data
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'le nombre de réussite par spécialité en 2021'
      }
    }
});
}
function update_barchartgrouped(data_JSON3){
	var labels = data_JSON3.annee;
	
	for(d of data_JSON3.datasets){
		d.fill = false;				  
		d.backgroundColor= '#'+Math.floor(Math.random()*16777215).toString(16);
		d.borderWidth=2;
		d.radius=1;			
	}			
	
	var data =data_JSON3.datasets;
	new Chart(document.getElementById("bar-chart-grouped"), {
    	type: 'bar',
    	data: {
      	labels:labels,
      	datasets: data
    	},
  	  options: {
    	  	title: {
          	display: true,
	        text: ''
      	}
    	}
});}	
function update_etudiants_horizontal_bar_chart(data_JSON6) {
    var datasets = [];

    for (var i = 0; i < data_JSON6.length; i++) {
        var annee = data_JSON6[i].annee;
        var data = data_JSON6[i].data.map(function(e) {
            return e.etudiants;
        });

        datasets.push({
            label: annee,
            backgroundColor: "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",0.5)",
            borderColor: "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",1)",
            data: data
        });
    }

    new Chart(document.getElementById("horizontal-bar-chart-etudiants"), {
        type: 'horizontalBar',
        data: {
            labels: data_JSON6[0].data.map(function(e) {
                return e.specialite;
            }),
            datasets: datasets
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Nombre d\'étudiants par spécialité (2019, 2020, 2021)'
            },
            legend: {
                position: 'top'
            }
        }
    });
}

function update_echec_bar_chart(data_JSON7) {
    var datasets = [];

    // Utilisez une fonction pour générer des couleurs aléatoires
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    for (var i = 0; i < data_JSON7.length; i++) {
        var specialite = data_JSON7[i].specialite;
        var data = data_JSON7[i].data.map(function(e) {
            return e.nombre;
        });

        datasets.push({
            label: specialite,
            backgroundColor: getRandomColor(),
            data: data
        });
    }

    new Chart(document.getElementById("bar-chart-echec-specialite"), {
        type: 'bar',
        data: {
            labels: ["Échec"],
            datasets: datasets
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Nombre d\'échecs par spécialité en 2021'
            },
            legend: {
                position: 'top'
            }
        }
    });
}


function update_moyenne_mixed_chart(data_JSON9) {
    var datasets = [];

    for (var i = 0; i < data_JSON9.length; i++) {
        var annee = data_JSON9[i].annee;
        var data = data_JSON9[i].data.map(function(e) {
            return e.moyenne;
        });

        datasets.push({
            label: annee,
            backgroundColor: "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",0.5)",
            borderColor: "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",1)",
            type: 'line',
            data: data
        });
    }

    new Chart(document.getElementById("mixed-chart-moyenne"), {
        type: 'bar',
        data: {
            labels: data_JSON9[0].data.map(function(e) {
                return e.specialite;
            }),
            datasets: datasets
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Variation de la moyenne générale par spécialité (2019, 2020, 2021)'
            },
            legend: {
                position: 'top'
            }
        }
    });
}

function update_gender_doughnut_chart(data_JSON10) {
    var labels = data_JSON10.map(function(e) {
        return e.sexe;
    });

    var data = data_JSON10.map(function(e) {
        return e.count;
    });

    new Chart(document.getElementById("doughnut-chart-gender"), {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: ["#6b146b", "#d30d59"],  // Couleurs pour les deux sexes (ajustez selon vos préférences)
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Nombre d\'étudiants par sexe'
            }
        }
    });
}
function update_gender_variation_chart(data_JSON11) {
    var labels = data_JSON11[0].data.map(function(e) {
        return e.sexe;
    });

    var data2019 = data_JSON11[0].data.map(function(e) {
        return e.count;
    });

    var data2020 = data_JSON11[1].data.map(function(e) {
        return e.count;
    });

    var data2021 = data_JSON11[2].data.map(function(e) {
        return e.count;
    });

    new Chart(document.getElementById("line-chart-gender-variation"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "2019",
                    borderColor: "#6b146b",
                    data: data2019,
                    fill: false
                },
                {
                    label: "2020",
                    borderColor: "#d30d59",
                    data: data2020,
                    fill: false
                },
                {
                    label: "2021",
                    borderColor: "#c45850",
                    data: data2021,
                    fill: false
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Variation du nombre d\'étudiants par sexe (2019, 2020, 2021)'
            },
            legend: {
                position: 'top'
            }
        }
    });
}
function update_avg_specialites_chart(data_JSON12) {
    var labels = data_JSON12[0].data.map(function(e) {
        return e.specialite;
    });

    var avg2019 = data_JSON12[0].data.map(function(e) {
        return e.moyenne;
    });

    var avg2020 = data_JSON12[1].data.map(function(e) {
        return e.moyenne;
    });

    var avg2021 = data_JSON12[2].data.map(function(e) {
        return e.moyenne;
    });

    new Chart(document.getElementById("radar-chart-avg-specialites"), {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "2019",
                    backgroundColor: "rgba(107, 20, 107, 0.5)",
                    borderColor: "#6b146b",
                    pointBackgroundColor: "#6b146b",
                    data: avg2019
                },
                {
                    label: "2020",
                    backgroundColor: "rgba(211, 13, 89, 0.5)",
                    borderColor: "#d30d59",
                    pointBackgroundColor: "#d30d59",
                    data: avg2020
                },
                {
                    label: "2021",
                    backgroundColor: "rgba(196, 88, 80, 0.5)",
                    borderColor: "#c45850",
                    pointBackgroundColor: "#c45850",
                    data: avg2021
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Moyenne générale des spécialités (2019, 2020, 2021)'
            },
            legend: {
                position: 'top'
            }
        }
    });
}