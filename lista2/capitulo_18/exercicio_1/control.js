const selectableImg = document.getElementsByClassName('container-img')

const imgPrincipal = document.getElementById('img-principal')

for(i = 0; i < selectableImg.length; i++) {
    selectableImg[i].addEventListener("click", changeImg( path ))
}

function changeImg( path ) {
    imgPrincipal.src = path
}