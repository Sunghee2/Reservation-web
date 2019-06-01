$(function() {  
    $('#end').prop('disabled', true);
    $('#start').change(function() {
        $('#end').removeAttr('disabled');
        $('#end option').each(function() {
            $(this).removeAttr("disabled");
        });
        var val = $("#start option:selected").val();
        for(var i=0; i<=val; i++) {
            var str = "select#end option[value="+i+"]"
            $(str).prop('disabled',true);
        }

        var st = $("#start option:selected").val();
        var ed = $("#end option:selected").val();
        console.log('st = ', st)
        console.log('ed = ', ed)
        if(ed <= st) {
            $('#submit').prop('disabled', true);
            alert("종료시간이 시작시간보다 빠릅니다. 다시 설정하세요")
        } else{
            if($("#room option").index($("#room option:selected")) == 0 ||
            $("#start option").index($("#start option:selected")) == 0 ||
            $("#end option").index($("#end option:selected")) == 0 ||
            $("#numOfPp option").index($("#numOfPp option:selected")) == 0 ||
            $("#datepicker option").index($("#datepicker option:selected")) == ""|| 
            $("#purpose option").index($("#purpose option:selected")) == 0){
                $('#submit').prop('disabled', true);    
            } else {
                $('#submit').removeAttr("disabled");
            };
        }
    });
});