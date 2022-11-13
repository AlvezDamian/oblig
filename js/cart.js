const contenedorCarrito = document.getElementById("contenedorCarrito");
let contenidoCarrito = JSON.parse(localStorage.getItem(`carrito`))
let inputsCantidades = [];
let parrafosItems = [];

document.addEventListener(`DOMContentLoaded`,()=>{
  contenidoCarrito.forEach(element => { 
    mostrarProds(element);
  });
  inputsCantidades = document.querySelectorAll(`#contenedorCarrito input`);
  parrafosItems = document.querySelectorAll(`#contenedorCarrito P`);
  const formDatos = document.getElementById(`formDatos`);
  const formCheck = document.getElementById(`formCheck`);
  const botonPago = document.getElementById(`botonPago`);
  const modal = document.getElementById(`modalpago`);

modal.addEventListener("click", e =>{
  if(e.target.tagName == "INPUT" && e.target.type === `radio`){
    inputsTarjeta =  document.querySelectorAll(`#divTarjeta input`);
    inputCuenta = document.getElementById(`nroCuenta`);
   
    switch(e.target.id){
      case `radioTarjeta`:
        inputCuenta.disabled = true
        inputsTarjeta.forEach(campo =>{
          campo.disabled = false
        })
        break;
      case `radioCuenta`: 
      inputsTarjeta.forEach(campo =>{
        campo.disabled = true;
        inputCuenta.disabled = false;
      })
      break;
    }
  }
})
formDatos.addEventListener('submit', function (event) {
  let añadirPago = document.getElementById(`botonPago`)
  if(!formDatos.checkValidity()||!formCheck.checkValidity()||!formPago.checkValidity){
    event.preventDefault()
    event.stopPropagation()
  }
  if(!formPago.checkValidity()){
     añadirPago.classList.remove(`is-valid`);
     añadirPago.classList.add(`is-invalid`);
  }else{
    añadirPago.classList.remove(`is-invalid`);
    añadirPago.classList.add(`is-valid`);
  };
  formDatos.classList.add('was-validated')
  formCheck.classList.add('was-validated')
  formPago.classList.add('was-validated')
}, false);

 refreshSubtT();
  contenedorCarrito.addEventListener(`click`,(e)=>{
  if(e.target.tagName === `INPUT`){
    parrafosItems.forEach(parrafo =>{
      const preciounit = parseInt(parrafo.innerHTML)
      if(parrafo.title === e.target.name){
         
        let valorUnit = document.getElementById(`h${parrafo.id}`)
        let actualizarSubt = (parseInt(valorUnit.innerHTML)*e.target.value)
        let nuevoSubt = document.getElementById(`${parrafo.id}`)
        nuevoSubt.innerHTML = actualizarSubt
      }
    })
    refreshSubtT()
   }

 })
});
let valorSubt


  formCheck.addEventListener("click",e =>{
    let small = document.getElementById(`sSubt1`)
    let hTotal = document.getElementById(`sSubt2`);
    let hValor = parseInt(small.innerHTML)
    if (e.target.tagName === "INPUT"){
      console.log(parseInt(hTotal.innerHTML))
      switch(e.target.id){
        case "flexRadioDefault1":
              hTotal.innerHTML = (hValor*0.15)+hValor
        break;
        case "flexRadioDefault2":
          hTotal.innerHTML = (hValor*0.07)+hValor
    break;
    case "flexRadioDefault3":
      hTotal.innerHTML = (hValor*0.05)+hValor
break;
      }
    }
  })
 
const refreshSubtT = ()=> {
  let subtTvalue = 0
  parrafosItems = document.querySelectorAll(`#contenedorCarrito P`);
  let containerSubtT = document.getElementById(`subtT`);
  let containerTotal = document.getElementById(`total`);
  parrafosItems.forEach(parrafo =>{
    subtTvalue += parseInt(parrafo.innerHTML)
  })
  valorSubt = subtTvalue
  containerSubtT.innerHTML= `Subtotal General: usd$<small id="sSubt1">${subtTvalue}</small>`
  containerTotal.innerHTML =`Total : usd$<small id="sSubt2">${subtTvalue}</small>`;
}

const mostrarProds = (element)=>{    
  if(element.moneda === "UYU"){
    element.costo = (element.costo/40)
  }
  let contenido =`<div class="card mb-3 itemCarro">
  <div class="row g-0">
    <div class="col-md-4 ">
      <img src="${element.img}" class="img-fluid rounded-start itemCarro" alt="...">
    </div>
    <div class="col-md-2 body-cart">
        <h5 class="card-title">${element.nombre}</h5>
    </div>
    <div class="col-md-2 body-cart">
       <h5 class="card-title" id="hp${element.id}">${element.costo}</h5>
    </div>
    <div class="col-md-2 body-cart">
      <input type="number" id="input${element.id}" name="${element.nombre}"min=1 value=1>
    </div> 
    <div class="col-md-2 body-cart" id="div${element.id}">
      <p id="p${element.id}" title="${element.nombre}">${(element.costo)}</p>
    </div>
  </div>
</div>`
contenedorCarrito.innerHTML += contenido;
};




