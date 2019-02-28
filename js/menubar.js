$(document).ready(function(){
  // Slide animation for index navbar
  $(".slide").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({
      scrollTop: ($(aid).offset().top - 50)
    }, 'slow');
  });

  // Calendar setup on request page
  $("#Calendar1").datepicker();
  $("#Calendar1").datepicker("setDate", new Date());
  $("#Calendar2").datepicker();
  $("#Calendar2").datepicker("setDate", new Date());

  $("#test").attr("value", $("#Calendar1").val() + " - " + $("#Calendar2").val());

  var dateFormat = "mm/dd/yy";
  var startDate = "";
  var endDate = "";
  Calendar1 = $("#Calendar1")
    .datepicker()
    .on("change", function() {
      startDate = $(this).val();
      Calendar2.datepicker("option", "minDate", getDate($(this).val()));
      $("#test").attr("value", startDate + " - " + endDate);
    });
    Calendar2 = $("#Calendar2").datepicker()
    .on("change", function() {
      endDate = $(this).val();
      Calendar1.datepicker("option", "maxDate", getDate($(this).val()));
      $("#test").attr("value", startDate + " - " + endDate);
    });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element);
    } catch (error) {
      date = null;
    }
    return date;
  }
});
