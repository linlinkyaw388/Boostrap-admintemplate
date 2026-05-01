// start right navbar

const getsitesittings =document.getElementById('sitesettings');

    getsitesittings.addEventListener('click',function(){
        document.body.classList.toggle('show-nav');
    });

// end right navbar


// start navbar

// start top nav bar
function dropbtn(e){
    // console.log(e.target);

    e.target.parentElement.nextElementSibling.classList.toggle('show');
}
// end top nav bar

// end navbar

$(document).ready(function(){
    // start navbar
//  start lefts side bar
    $('.sidebarlinks').click(function(){
        $('.sidebarlinks').removeClass('currents');
        $(this).addClass('currents');
    })
//  end lefts side bar
// end navbar
});


// start Guage area
var gaugeurs = new JustGage({
  id: 'gaugeusers',
  value:50,
  min:0,
  max:100,
  decimals:2,
  gaugeWidthScale:0.6
});
var gaugecus = new JustGage({
  id: 'gaugecustomers',
  value:50,
  min:0,
  max:100,
  decimals:2,
  gaugeWidthScale:0.6
});
var gaugeemps = new JustGage({
  id: 'gaugeemployees',
  value:50,
  min:0,
  max:100,
  decimals:2,
  gaugeWidthScale:0.6
});
var gaugeinvs = new JustGage({
  id: 'gaugeinvesters',
  value:50,
  min:0,
  max:100,
  decimals:2,
  gaugeWidthScale:0.6
});
//update the value randonly
setInterval(() => {
  gaugeurs.refresh(Math.random() * 100);
  gaugecus.refresh(Math.random() * 100);
  gaugeemps.refresh(Math.random() * 100);
  gaugeinvs.refresh(Math.random() * 100);
},5000)
// end Guage area


// start Expenses area 
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [12, 19, 3],
        borderWidth: 1
      }]
    },
    options: {
    }
  });
// end Expenses area 

// start earning area
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Sales Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
// end earning area



// start footer
const getyear = document.getElementById('getyear');
const getfullyear = new Date().getFullYear();
getyear.textContent = getfullyear;
// end footer