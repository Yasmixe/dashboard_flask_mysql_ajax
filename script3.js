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

    httpRequest4 = new XMLHttpRequest();	
	httpRequest4.open('GET', '/api/data4');
	httpRequest4.onreadystatechange = function () {
		if (httpRequest4.readyState === 4 && httpRequest4.status === 200) {
			data_JSON4 = JSON.parse(httpRequest4.response);
			update_Pie(data_JSON4);
		}
	};
	httpRequest4.send();


}

function update_Bubbles(data_JSON3) {
    var labels = data_JSON3.annee;

    var datasets = Array.isArray(data_JSON3.datasets) ? data_JSON3.datasets : [];

    new Chart(document.getElementById("bubble-chart"), {
        type: 'bubble',
        data: {
            labels: labels,
            datasets: datasets,
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
        },
    });
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