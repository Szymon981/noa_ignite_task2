function visibilityHandler(){
    let visibility = document.getElementById('refactor-to-do-list');
    if(visibility.style.visibility === 'hidden') {
        visibility.style.visibility = 'visible';
    } else {
        visibility.style.visibility = 'hidden';
    }
}
