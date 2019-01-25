function input_check() {
    var result = true;

    $("#number_error").empty();

    // number 代入 
    var number = $("#number").val();

    if (number.length > 3) {
        $("#number_error").html("<i class='fa fa-exclamation-circle'></i> 在庫数より多く注文することはできません。");
        result = false;
    } else if (number.length < 0) {
        $("#number_error").html("<i class='fa fa-exclamation-circle'></i> 個数は1以上を入力してください。");
        result = false;
    } else if (!number.matchmatch(/^[0-9]+$/)) {
        $("#number_error").html("<i class='fa fa-exclamation-circle'></i> 個数は数値を入力してください。");
    }

    return result;

};