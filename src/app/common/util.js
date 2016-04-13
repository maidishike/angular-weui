
//显示或隐藏动画
function showAndHide(attr,time){
    $(attr).show();
    setTimeout(function () {
        $(attr).hide();
    }, time);
}

//移除session
function removeSession(name){
    window.sessionStorage.removeItem(name);
}