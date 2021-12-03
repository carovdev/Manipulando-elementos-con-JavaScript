window.addEventListener('load',() => {
    let section = document.querySelector("section");
    let h1 = document.querySelector("h1");
    let articulo = document.querySelector("article");
  
    h1.innerText='AGREGAR PELICULAS';
    h1.classList.add('titulo');
    articulo.classList.add('fondoTransparente');
    section.classList.add('fondoCRUD');
  });