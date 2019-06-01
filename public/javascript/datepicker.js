$(function() { 
    $( "#datepicker" ).datepicker({
        dateFormat: "yy-mm-dd",
        minDate: 0,
        showOn: "button", //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
        buttonImage: "/images/_ionicons_svg_ios-calendar.svg", //버튼 이미지 경로
        buttonImageOnly: true
    });
});