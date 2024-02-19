 function hideHome(){
    const homeSect = document.getElementById('body-container');
    const homeVanish = homeSect.classList.add('hidden');
    return homeVanish;

}
function showPurchase(){
    const successPart = document.getElementById('success-part').classList.remove('hidden');
    return successPart;
}

function play(){
    hideHome();
    showPurchase();
}

function continueHome(){
    const againHome = document.getElementById('body-container').classList.remove('hidden')
    const vanishSuccessPage = document.getElementById('success-part').classList.add('hidden');
    const lastUpdate = againHome + vanishSuccessPage;
    return lastUpdate
}
    