import 'bootstrap';
import './style.sass';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/images/card1-gift.jpg';
import './assets/images/card2-data.jpg';

window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
}, false);

/*
$('form').submit(event => {
  window.open("mailto:hello@wishnu.io?subject=Test")
  return false;
});
*/
