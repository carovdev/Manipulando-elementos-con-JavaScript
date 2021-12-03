


window.onload = function(){
  let body = document.querySelector('body');
  let moviesListTitulo = document.querySelector('.moviesListTitulo');
  let fondo = document.querySelector('body')
  let modoOscuro= prompt("¿Desea modo oscuro?");
      
  fondo.addEventListener('mousemove', () => {
    if (modoOscuro ) {
      body.style.backgroundColor = '#7f7f7f'
      body.classList.add('fondoMoviesList');
      moviesListTitulo.style.color = 'white';
      moviesListTitulo.style.backgroundColor = 'teal';
    }
      
  })
  
  moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
  moviesListTitulo.style.padding = '20px';

}
