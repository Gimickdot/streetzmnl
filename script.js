// SHOW LATEST IMAGES PAG NAG LOAD //
function showImages(category) 
{
    document.querySelectorAll('.collection-category').forEach(item => item.classList.add('d-none'));
    document.getElementById(category + '-images').classList.remove('d-none');
}

window.onload = function() 
{
    showImages('sports');
};
// END NG SHOW LATEST IMAGES //

// START NG SIGN IN VALIDATION //
function validateSignIn(event) 
{
  event.preventDefault();
  
  const email = document.getElementById('logmail');
  const password = document.getElementById('logpass');

  if (email.validity.valid && password.value.trim() !== '') 
  {
    alert('Login Successful');
    window.location.href = 'index.html';
  } 
  
  else 
  {
    email.classList.add('is-invalid');
    password.classList.add('is-invalid');
  }
}
// END NG SIGN IN VALIDATION //

// START NG REGISTER VALIDATION //
function validateRegistration(event) 
{
  event.preventDefault();

  const email = document.getElementById('email');
  const confirmEmail = document.getElementById('confirmEmail');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const phone = document.getElementById('phone');

  let isValid = true;

  [email, confirmEmail, password, confirmPassword, phone].forEach(field => 
  {
    field.classList.remove('is-invalid');
  });

  if (email.value !== confirmEmail.value || !email.value.includes('@')) 
  {
    alert('Email does not match');
    email.classList.add('is-invalid');
    confirmEmail.classList.add('is-invalid');
    isValid = false;
  }

  if (password.value !== confirmPassword.value) 
  {
    alert('Password does not match');
    password.classList.add('is-invalid');
    confirmPassword.classList.add('is-invalid');
    isValid = false;
  }

  if (!/^\d*$/.test(phone.value)) 
  {
    phone.classList.add('is-invalid');
    isValid = false;
  }

  if (isValid) 
  {
    alert('Registration Successful');
    window.location.href = 'index.html';
  }
}
//END NG REGISTRATION VALIDATION //
