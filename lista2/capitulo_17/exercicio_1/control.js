const linhas = document.getElementsByTagName('tr')

for( i = 0; i < linhas.length; i++ ) {
    if( i%2 == 0 ) {
        linhas[i].style.backgroundColor = "green"
    } else {
        linhas[i].style.backgroundColor = "yellow"
    }
}