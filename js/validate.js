$(document).ready(function () {
  $('.invite__form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
      },
      userphone: {
        required: true,
      }
    },
    messages: {
      username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Ещё 1 слимвол")
      },
      userphone: "Укажите номер телефона"
    },
    submitHandler: function () {
      event.preventDefault();
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $('.invite__form').serialize(),
        success: function (data) {
          $('.invite__form')[0].reset();
          form.hide(animationTime);
          success.show(animationTime);
          setTimeout(function () {
            form.show(animationTime);
            success.hide(animationTime);
          }, timeReturn);
        }
      });
    },
    errorElement: "div",
    errorClass: "invalid",
    validClass: "success",
  });
});
$(document).ready(function (){
$('.modals__form').validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
    },
    userphone: {
      required: true,
    }
  },
  messages: {
    username: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Ещё 1 слимвол")
    },
    userphone: "Укажите номер телефона"
  },
  submitHandler: function () {
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $('.modals__form').serialize(),
      success: function (data) {
        $('.modals__form')[0].reset();
        form.hide(animationTime);
        success.show(animationTime);
        setTimeout(function () {
          form.show(animationTime);
          success.hide(animationTime);
        }, timeReturn);
      }
    });
  },
  errorElement: "div",
  errorClass: "invalid",
  validClass: "success",
});
$(document).ready(function(){
  $('.modals__formi').validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
    },
    userphone: {
      required: true,
    }
  },
  messages: {
    username: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Ещё 1 слимвол")
    },
    userphone: "Укажите номер телефона"
  },
  submitHandler: function () {
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $('.modals__formi').serialize(),
      success: function (data) {
        $('.modals__formi')[0].reset();
        form.hide(animationTime);
        success.show(animationTime);
        setTimeout(function () {
          form.show(animationTime);
          success.hide(animationTime);
        }, timeReturn);
      }
    });
  },
  errorElement: "div",
  errorClass: "invalid",
  validClass: "success",
});
});
  $("#modal__phone").mask("8 (999) 999-99-99");
  $(".phone").mask("8 (999) 999-99-99");
  $("#modal_phone").mask("8 (999) 999-99-99");
});


