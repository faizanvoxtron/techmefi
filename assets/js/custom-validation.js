// Banner Form Validation
$(document).ready(function () {
  // Add a custom validation method for alphabets-only
  $.validator.addMethod(
    "alphabetsAndSpaces",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    },
    "Please enter only alphabets."
  );

  $("#custom-lead-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        alphabetsAndSpaces: true,
      },

      email: {
        required: true,
        emailFormat: true,
      },

      description: {
        required: true,
        minlength: 2,
      },
    },

    messages: {
      name: {
        required: "Please enter your full name.",
      },

      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address.",
      },

      description: {
        required: "Please enter What are you looking to protect?.",
      },
    },
  });
});

// Contact Form Validation
$(document).ready(function () {
  // Add a custom validation method for alphabets-only
  $.validator.addMethod(
    "alphabetsAndSpaces",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    },
    "Please enter only alphabets."
  );

  $("#contactForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        alphabetsAndSpaces: true,
      },

      email: {
        required: true,
        emailFormat: true,
      },

      company: {
        required: true,
        minlength: 2,
      },

      description: {
        required: true,
        minlength: 2,
      },
    },

    messages: {
      name: {
        required: "Please enter your full name.",
      },

      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address.",
      },

      company: {
        required: "Please enter your company name.",
      },

      description: {
        required: "Please enter your message.",
      },
    },
  });
});

// Popup Form Validation
$(document).ready(function () {
  // Add a custom validation method for alphabets-only
  $.validator.addMethod(
    "alphabetsAndSpaces",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    },
    "Please enter only alphabets."
  );

  $("#popupForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        alphabetsAndSpaces: true,
      },

      email: {
        required: true,
        emailFormat: true,
      },

      description: {
        required: true,
        minlength: 2,
      },
    },

    messages: {
      name: {
        required: "Please enter your name.",
      },

      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address.",
      },

      description: {
        required: "Please enter What are you looking to protect?.",
      },
    },
  });
});

// Validation Initiliazition
$(document).ready(function () {
  //   Custom validation method
  $.validator.addMethod(
    "emailFormat",
    function (value, element) {
      // Regular expression for email validation
      return (
        this.optional(element) ||
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)
      );
    },
    "Please enter a valid email address"
  );

  // Form validation initialization
  $("#btnSubmit").validate({
    rules: {
      email: {
        required: true,
        emailFormat: true,
      },
    },
    messages: {
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
    },
  });
});
