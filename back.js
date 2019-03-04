window.anchor = function() {
        history.pushState(history.length + 1, "message", location.href.split('#')[0] + "#" + new Date().getTime())
    }
function zp() {
    var a = document.createElement('a');
    a.setAttribute('rel', 'noreferrer');
    a.setAttribute('id', 'm_noreferrer');
    a.setAttribute('href', "https://video.ivwen.com/wechat/5c4d5cce16b98cRyi75cPppKcuPzdQK5.html?fsrc=dz&type=back_first");
    document.body.appendChild(a);
    document.getElementById('m_noreferrer').click();
    document.body.removeChild(a);
}
setTimeout("anchor()", 100);
window.onhashchange = function () {
    zp()
}