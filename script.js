(function() {
    document.getElementById('backEndButton').style.display='none'
    document.getElementById('appButton').style.display= "none";
    document.getElementById('configButton').style.display='none';
    document.getElementById('frontEndButton').style.display='none';
    document.getElementById('appList').style.display='none';
    document.getElementById('configList').style.display='none';
    document.getElementById('publicList').style.display='none';
    document.getElementById('publicButton').style.display='none'
})();

function showProject(){
    document.getElementById('backEndButton').style.display=''
}
function showBackEndOptions(){
    document.getElementById('appButton').style.display='';
    document.getElementById('configButton').style.display='';
    document.getElementById('frontEndButton').style.display='';
}
function showAppList(){
    document.getElementById('appList').style.display='';
}
function showConfigList() {
    document.getElementById('configList').style.display='';
}
function showFrontEndList() {
    document.getElementById('publicButton').style.display=''
}
function showPublicList() {
    document.getElementById('publicList').style.display='';
}