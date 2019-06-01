$(function() { 
    $.ajax({ 
        type: 'GET',
        url : "/reservation/dup",
        success : function(data) { 
            console.log("여기로 왔다는 것이다~~", data); 
        }
    }); 

    $('#start').prop('disabled', true);
    $('#room').change(function() {
        if($("#datepicker").val() != "" ){
            $('#start').removeAttr('disabled');
        }
    });
    $('#datepicker').change(function() {
        if($("#room option").index($("#room option:selected")) != 0 ){
            $('#start').removeAttr('disabled');
        }
    });

    if($("#datepicker").val() != "" && $("#room option").index($("#room option:selected")) != 0 ) {

    }
    
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
        if(ed <= st) {
            $('#submit').prop('disabled', true);
            alert("종료시간이 시작시간보다 빠릅니다. 다시 설정하세요")
        } else{
            if($("#room option").index($("#room option:selected")) == 0 ||
            $("#start option").index($("#start option:selected")) == 0 ||
            $("#end option").index($("#end option:selected")) == 0 ||
            $("#numOfPp option").index($("#numOfPp option:selected")) == 0 ||
            $("#datepicker").val() == ""|| 
            $("#purpose option").index($("#purpose option:selected")) == 0){
                $('#submit').prop('disabled', true);    
            } else {
                $('#submit').removeAttr("disabled");
            };
        }
    });
});