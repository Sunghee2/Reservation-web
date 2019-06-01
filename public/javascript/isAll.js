var isall = function(){
    if($("#room option").index($("#room option:selected")) == 0 ||
    $("#start option").index($("#start option:selected")) == 0 ||
    $("#end option").index($("#end option:selected")) == 0 ||
    $("#numOfPp option").index($("#numOfPp option:selected")) == 0 ||
    $("#purpose option").index($("#purpose option:selected")) == 0 ||
    $("#datepicker").val() == "" 
    ){
        $('#submit').prop('disabled', true);    
    } else {
        $('#submit').removeAttr("disabled");
    };
}
$(function() {
    $('#room').bind('change', isall);
    $('#start').bind('click', isall);
    $('#end').bind('change', isall);
    $('#numOfPp').bind('change', isall);
    $('#purpose').bind('change', isall);
    $('#datepicker').bind('change', isall);
    console.log($("#datepicker").val())
});