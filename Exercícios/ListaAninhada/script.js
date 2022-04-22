(function() {
    hideAll();
})();

function hideAll() {
    document.getElementById('backEndButton').style.display='none';
    document.getElementById('appButton').style.display= "none";
    document.getElementById('configButton').style.display='none';
    document.getElementById('frontEndButton').style.display='none';
    document.getElementById('appList').style.display='none';
    document.getElementById('configList').style.display='none';
    document.getElementById('publicList').style.display='none';
    document.getElementById('frontendList').style.display='none';
    document.getElementById('publicButton').style.display='none';
}

/** 
 * @param {*} htmlComponent  
 * Check display property on htmlComponent and toggle visibility. 
 */
function toggleEfect(htmlComponent) {
    if (htmlComponent.style.display == 'none' ) { 
        htmlComponent.style.display = 'block';
    } else {
        htmlComponent.style.display = 'none';
    };
}

/**
 * @param {*} htmlComponent  - toggle display of htmlComponent to block
 */
function hideEffect(htmlComponent) { 
    htmlComponent.style.display = 'none';
}

function toggleProject(){
    const backEndButton = document.getElementById('backEndButton');

    toggleEfect(backEndButton)

    // Hide Childrens
    if(backEndButton.style.display == 'none') { 
        const appButton = document.getElementById('appButton');
        const configButton = document.getElementById('configButton');
        const frontendButton = document.getElementById('frontEndButton');
        const publicButton = document.getElementById('publicButton');
        const appList = document.getElementById('appList');
        const configList = document.getElementById('configList');
        const frontendList = document.getElementById('frontendList');
        const publicList = document.getElementById('publicList');

        hideEffect(appList);
        hideEffect(configList);
        hideEffect(frontendList);
        hideEffect(publicList);
    
        hideEffect(publicButton);
        hideEffect(appButton);
        hideEffect(configButton);
        hideEffect(frontendButton);
        hideEffect(frontendList);
    }
}

function toggleBackEndOptions(){
    const appButton = document.getElementById('appButton');
    const configButton = document.getElementById('configButton');
    const frontendButton = document.getElementById('frontEndButton');

    toggleEfect(appButton);
    toggleEfect(configButton);
    toggleEfect(frontendButton);

    // Hide Childrens
    if(appButton.style.display == 'none') {
        const appList = document.getElementById('appList');
        const configList = document.getElementById('configList');
        const frontendList = document.getElementById('frontendList');
        const publicList = document.getElementById('publicList');
        const publicButton = document.getElementById('publicButton');

        hideEffect(appList);
        hideEffect(configList);
        hideEffect(frontendList);
        hideEffect(publicList);
        hideEffect(publicButton);
    }
}

function toggleAppList(){
    const appList = document.getElementById('appList');

    toggleEfect(appList);
}

function toggleConfigList() {
    const configList = document.getElementById('configList');

    toggleEfect(configList);
}

function toggleFrontEndList() {
    const frontendList = document.getElementById('frontendList');
    const publicButton = document.getElementById('publicButton');

    toggleEfect(frontendList);
    toggleEfect(publicButton);
    
    if(publicButton.style.display == 'none') { 
        const publicList = document.getElementById('publicList');
        
        hideEffect(publicList);
    }
}

function togglePublicList() {
    const publicList = document.getElementById('publicList');

    toggleEfect(publicList);
}