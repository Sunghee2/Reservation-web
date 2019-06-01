var isall1 = function(){
    if($("#room option").index($("#room option:selected")) == 0 ||
    $("#datepicker").val() == "" 
    ){
        $('#next').prop('disabled', true);    
    } else {
        $('#next').removeAttr("disabled");
    };
}
var isall2 =  function(){
    if($("#start option").index($("#start option:selected")) == 0 ||
    $("#end option").index($("#end option:selected")) == 0 ||
    $("#numOfPp option").index($("#numOfPp option:selected")) == 0 ||
    $("#purpose option").index($("#purpose option:selected")) == 0
    ){
        $('#submit').prop('disabled', true);    
    } else {
        $('#submit').removeAttr("disabled");
    };
}
$(function() {
    $('#room').bind('change', isall1);
    $('#datepicker').bind('change', isall1);
    $('#start').bind('click', isall2);
    $('#end').bind('change', isall2);
    $('#numOfPp').bind('change', isall2);
    $('#purpose').bind('change', isall2);
});