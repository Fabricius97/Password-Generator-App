document.querySelectorAll(".slider").forEach(function(el) {       
    el.oninput =function(){            
    var valPercent = (el.valueAsNumber  - parseInt(el.min)) / 
                        (parseInt(el.max) - parseInt(el.min));
      var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #a638f6), color-stop('+ valPercent+', #16111A));';
      el.style = style;
    };
    el.oninput();
  });

  const range = document.querySelector('.slider');
  const rangeValue = document.getElementById('rangeValue');
  
  range.addEventListener('input', function() {
    let value = range.value;
    if (value > 20) {
        value = 20;
    }
    rangeValue.innerHTML = value;
  });
  