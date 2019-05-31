$(function() {  
    var $opt = $('#start').find('option');
    $('#start').change(function() {
        $('#end option').each(function() {
            $(this).removeAttr("disabled");
        });
        var val = $("#start option:selected").val();
        for(var i=0; i<=val; i++) {
            var str = "select#end option[value="+i+"]"
            $(str).prop('disabled',true);
        }
    });
});