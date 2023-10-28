
  let check = document.querySelector("#switch-shadow")


  check.addEventListener("click",()=>{

    if(check.checked===true){
        location.href="en/index.html"

    }else{
        location.href="../index.html"
    }

  })
  
  
  
  const btnElmCont = document.querySelector('.button-container');
  
  btnElmCont?.addEventListener('click', function () {
    btnElmCont.classList.toggle('on');
  });
  