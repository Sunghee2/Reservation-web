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
        }
    });
});