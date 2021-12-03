window.addEventListener("load", () => {
    let main = document.querySelector("main");
    let h2 = document.querySelector("h2");
    let a = document.querySelector("a");
    let p = document.querySelector("p");
    let nombreUsuario = prompt("Ingrese su nombre:");
    let body = document.querySelector("body");
    if (nombreUsuario) {
      h2.innerText += " " + nombreUsuario;
    } else {
      h2.innerText += " Invitado";
    }
    h2.style.textTransform = "uppercase";
  
    a.style.color = "#E51B3E";
  
    let fondoDePantalla = confirm("Deseas colocar un fondo de pantalla?");
  
    if (fondoDePantalla) {
      body.classList.add("fondo");
    } else {
      body.classList.add(null);
    }
  
    for (let i = 0; i < p.length; i++) {
      if (i % 2 == 0) {
        p[i].classList.add("destacadoPar");
      } else {
        p[i].classList.add("destacadoImpar");
      }
    }
  
    main.display = "block";
  });