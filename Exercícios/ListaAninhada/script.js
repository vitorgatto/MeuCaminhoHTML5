(function inicio() {
    let projectButt = document.getElementById('projectList').style.display=''
    let backEndBut = document.getElementById('backEndButton').style.display='none'
    let appBut = document.getElementById('appButton').style.display= "none";
    let configButt = document.getElementById('configButton').style.display='none';
    let frontEndButt = document.getElementById('frontEndButton').style.display='none';
    let appList = document.getElementById('appList').style.display='none';
    let configList = document.getElementById('configList').style.display='none';
    let publicList = document.getElementById('publicList').style.display='none';
    let publicButt = document.getElementById('publicButton').style.display='none'
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
function closeProject() {
    let projectButt = document.getElementById('projectList').style.display=''
    let backEndBut = document.getElementById('backEndButton').style.display='none'
    let appBut = document.getElementById('appButton').style.display= "none";
    let configButt = document.getElementById('configButton').style.display='none';
    let frontEndButt = document.getElementById('frontEndButton').style.display='none';
    let appList = document.getElementById('appList').style.display='none';
    let configList = document.getElementById('configList').style.display='none';
    let publicList = document.getElementById('publicList').style.display='none';
    let publicButt = document.getElementById('publicButton').style.display='none'
}