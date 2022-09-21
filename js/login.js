window.addEventListener("load",() => {
    
    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
        
    };
    
        
    
    
    let botton = document.getElementById(`btn-ingreso`);
    console.log(botton.value);
    
    botton.addEventListener("click", function(){
        let inputemail = document.querySelector(`#email`).value ;
        let inputcontraseña = document.querySelector(`#password`).value ;
     localStorage.setItem("nombre", inputemail);
     

        
        console.log(inputcontraseña)
        
        if(  !inputcontraseña || !inputemail){
            showAlertError();
        }
        else{
             
            window.location = "menu.html"
        };
        

      /*  let  dato = localStorage.getItem("nombre");
        let contenedor = document.querySelector("#containermail");
        console.log(dato);
    */
    
    });});
    
    
    
    
    
    