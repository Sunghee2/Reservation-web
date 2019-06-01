$(function() { 
    $( "#datepicker" ).datepicker({
        altFormat: "yy-mm-dd"
    });
    $('#datepicker').change(function() {
        var dt = $("#datepicker").val();
        console.log('dt = ', dt)
    });

});