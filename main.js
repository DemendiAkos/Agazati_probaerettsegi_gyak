$(document).ready(function () {
  $('.navbar-nav li').click(function (x) {
    $('.navbar-nav li').removeClass('active');
    $(event.target).parent().addClass('active');
  });
});

function showCircuit() {
    $('#circuit').change(function (o) {
      switch (o.target.value) {
        case 'ITA':
          $('#circuitimage').attr('src', 'img/monza.jpg');
          $('#f1sound')[0].play();
          break;
        case 'HUN':
          $('#circuitimage').attr('src', 'img/hungaroring.jpg');
          break;
        case 'BEL':
          $('#circuitimage').attr('src', 'img/spa.jpg');
          break;
        case 'MON':
          $('#circuitimage').attr('src', 'img/monaco.jpg');
          break;

        default:
          break;
      }
    });
  }

//---------------------------------------------------------

function calculate() {
  let map = document.querySelector('#circuit').value;
  let sped = document.querySelector('#laptime').value/3600;
      
  
  if (map == 'ITA') {
    map = 5.793;
  } else if (map == 'HUN') {
    map = 4.381;
  } else if (map == 'MON') {
    map = 3.337;
  } else {
    map = 7.004;
  }

  let final = map/sped;

  let slot = document.querySelector('#averagespeed');
  slot.value = final + " km/h";

  console.log(map + " " + sped + " " + final)
  
}


