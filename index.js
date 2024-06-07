function filterPrompts() {
    var input = document.getElementById('searchInput').value.toUpperCase();
    var prompts = document.getElementsByClassName('prompt');
    var sorry = document.getElementsByClassName('sorry')
    for (var i = 0; i < prompts.length; i++) {
        var h3 = prompts[i].getElementsByTagName('h3')[0];
        if (h3.innerHTML.toUpperCase().indexOf(input) > -1) {
            prompts[i].style.display = "";
        } else {
            prompts[i].style.display = "none";
        }

    }

}
// external js: flickity.pkgd.js
