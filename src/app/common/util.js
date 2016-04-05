
//ÏÔÊ¾»òÒþ²Ø¶¯»­
function showAndHide(attr,time){
    $(attr).show();
    setTimeout(function () {
        $(attr).hide();
    }, time);
}

//ÒÆ³ýsession
function removeSession(name){
    window.sessionStorage.removeItem(name);
}