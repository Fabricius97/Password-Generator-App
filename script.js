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
  
  function generatePassword() {
    const passwordLength = document.querySelector('.slider').value;
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lettersInclude');
    const numbersCheckbox = document.getElementById('includeNumbers');
    const symbolsCheckbox = document.getElementById('includeSymbolsStrength');
  
    let characters = '';
    let password = '';

    if (!uppercaseCheckbox.checked && !lowercaseCheckbox.checked && !numbersCheckbox.checked && !symbolsCheckbox.checked) {
      alert('U need atleast one checkbox checked to generate a password');
      return;
    }
  
    if (uppercaseCheckbox.checked) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    if (lowercaseCheckbox.checked) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
  
    if (numbersCheckbox.checked) {
      characters += '0123456789';
    }
  
    if (symbolsCheckbox.checked) {
      characters += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    }
  
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    const passwordContainer = document.getElementById('password');
    passwordContainer.textContent = password;

    checkPasswordStrength(password);

  return password;
  }

  function copyToClipboard() {
    const password = document.querySelector('#password').textContent;
    navigator.clipboard.writeText(password)
      .then(() => {
        console.log('Lösenordet har kopierats till urklipp');
      })
      .catch(err => {
        console.log('Kunde inte kopiera lösenordet till urklipp: ', err);
      });
  }

  const button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    generatePassword();
    copyToClipboard();
  });
    
  const copyIcon = document.querySelector('#copy-icon');
  copyIcon.addEventListener('click', copyToClipboard);
  

  function checkPasswordStrength() {
    const password = document.getElementById('password').textContent;
    const strengthText = document.getElementById('strengthText');
    const bars = document.querySelectorAll('.bar');
    let score = 0;
    
    if (password.length >= 8) {
      score++;
    }
    
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      score++;
    }
    
    if (/\d/.test(password)) {
      score++;
    }
    
    if (/[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password)) {
      score++;
    }
    
    if (score === 0) {
      strengthText.textContent = 'Bad';
      bars.forEach(bar => {
        bar.style.backgroundColor = 'transparent';
        bar.style.border = '1px solid white';
      });
    } else if (score === 1) {
      strengthText.textContent = 'Weak';
      bars[0].style.backgroundColor = '#ffa257';
      bars[0].style.border = 'none';
      bars[1].style.backgroundColor = 'transparent';
      bars[1].style.border = '1px solid white';
      bars[2].style.backgroundColor = 'transparent';
      bars[2].style.border = '1px solid white';
      bars[3].style.backgroundColor = 'transparent';
      bars[3].style.border = '1px solid white';
    } else if (score === 2) {
      strengthText.textContent = 'Medium';
      bars[0].style.backgroundColor = '#ffa257';
      bars[0].style.border = 'none';
      bars[1].style.backgroundColor = '#ffa257';
      bars[1].style.border = 'none';
      bars[2].style.backgroundColor = 'transparent';
      bars[2].style.border = '1px solid white';
      bars[3].style.backgroundColor = 'transparent';
      bars[3].style.border = '1px solid white';
    } else if (score === 3) {
      strengthText.textContent = 'Medium';
      bars[0].style.backgroundColor = '#ffa257';
      bars[0].style.border = 'none';
      bars[1].style.backgroundColor = '#ffa257';
      bars[1].style.border = 'none';
      bars[2].style.backgroundColor = '#ffa257';
      bars[2].style.border = 'none';
      bars[3].style.backgroundColor = 'transparent';
      bars[3].style.border = '1px solid white';
    } else if (score >= 4) {
      strengthText.textContent = 'Great';
      bars.forEach(bar => bar.style.backgroundColor = '#4ABEA0');
      bars.forEach(bar => bar.style.border = 'none');
    } 
  }
  
  
  
    

 

  

  
  