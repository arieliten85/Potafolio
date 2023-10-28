



  window.addEventListener("DOMContentLoaded", ()=>{


    document.querySelector( ".porfolio .porfolio_contenedor .capa p").style="color: white;transition: 0.2s;"
    document.body.style="background-color: var(--bs-light);transition: 0.5s;"
    const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
    const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
    const titulos = document.querySelectorAll("h2")
    const parrafos  = document.querySelectorAll("p")
    const canvas =  document.querySelector("#home")
    const root = document.querySelector(":root");
    const container = document.getElementsByClassName("theme-container")[0];
    const themeIcon = document.getElementById("theme-icon");
      
    //Valor iniciar 
    let theme = "dark"

   
    // Consulto al Local storage si tiene un MODE
    const istheme = localStorage.getItem("MODO")
    // Si tiene uno ya cargado, lo aplica
    if(istheme!==null){


    switch (istheme) {
      case "dark":
        setLight();
        
        break;
      case "light":
        setDark();
        
        break;
    }
    }



       
  //Boton MODO
  container.addEventListener("click", setTheme);

  function setTheme() {

    //Guardo el valor en el LOCAL STORAGE 
    localStorage.setItem("MODO", container.classList[1].substring(7))
    //Renombro la variable inicial por el que guarden el el LOCAL STORAGE
    theme = localStorage.getItem("MODO")

   



    switch (theme) {
      case "dark":
        setLight();
        theme = "light";
        break;
      case "light":
        setDark();
        theme = "dark";
        break;
    }
  }



  //Funciones de cambio de MODO
  function setLight() {
    root.style.setProperty(
      "--bs-light",
      "#303c47"
    );
    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");

  

      parrafos.forEach(item =>{
        item.style="color: white;transition: 0.2s;"
      })

      canvas.style="background-color: black;transition: 0.2s;"

   
      
      titulos.forEach(item =>{
        item.style="color: #c3b5b5;transition: 0.2s;"
      })

    

      themeIcon.classList.remove("change");
    }, 300);


  

    themeIcon.classList.add("change");
    themeIcon.src = sun;
  }

  function setDark() {
    root.style.setProperty("--bs-light", "white");
    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
     
      parrafos.forEach(item =>{
      if (!item.id.includes("footer")){
        item.style="color: #212529;transition: 0.2s;"
       }
       
      })
   
      canvas.style="background-color: #21229;transition: 0.2s;"
      //masthead.style="background:red;;transition: 0.2s;"

      titulos.forEach(item =>{
        item.style="color:5 #21229;transition: 0.2s;"
      })
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;

    
  }

  
 

  });


 