function showAndHide(attr,time){
    $(attr).show();
    setTimeout(function () {
        $(attr).hide();
    }, time);
}