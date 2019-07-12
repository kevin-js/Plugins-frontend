function createAccount() {
  $.ajax({
    url: '/api/create-account',
    type: 'POST',
    data: {
      email: $('#email-input').val(),
      password: $('#password-input').val()
    },
    success: function(data) {
      if (data.redirect) {
        window.location.pathname = data.redirect;
      } else {
        window.location.pathname = '/profile-info';
      }
    },
    error: function(err) {
      alert(JSON.stringify(err));
    }
  });
}

function validateAndCreateAccount() {
  if (!$('#email-input').val()) {
    alert('email field is blank');
  } else if (!$('#password-input').val()) {
    alert('password field is blank');
  } else if ($('#confirm-password').val() !== $('#password-input').val()) {
    alert('passwords do not match');
  } else {
    createAccount();
  }
}

function login() {
  $.ajax({
    url: '/api/login',
    type: 'POST',
    data: {
      email: $('#email-input').val(),
      password: $('#password-input').val()
    },
    success: function(data) {
      if (data.redirect) {
        window.location.pathname = data.redirect;
      } else {
        window.location.pathname = '/profile';
      }
    },
    error: function(req, err) {
      alert(err);
    }
  });
}

function facebookLogin() {
  FB.login(function(response) {
    if (response.authResponse) {
      $.ajax({
        url: '/api/login-with-facebook',
        type: 'POST',
        data: response.authResponse,
        success: function(data) {
          if (data.redirect) {
            window.location.pathname = data.redirect;
          } else {
            window.location.pathname = '/profile';
          }
        },
        error: function(err) {
          alert(JSON.stringify(err));
        }
      });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
  }, {
    scope: 'email,user_birthday'
  });
}