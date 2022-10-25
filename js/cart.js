

const Contenedor = document.getElementById("contenedorCarro");
let item = [];

console.log(productos)

getJSONData("https://japceibal.github.io/emercado-api/user_cart/25801.json").then(itemApi =>{
    if(itemApi.status == `ok`){
         item = itemApi.data.articles
         /*mostrarItem(item[0])*/
    }else{
        alert("Ocurrió un error")
    }
})

item.push(localStorage.getItem("objeto"));
console.log(item)

productos.forEach(producto => {
  if(producto.id in localStorage){
    item.push(localStorage.getItem(producto.id))
  }
  
});



 /*function mostrarItem(item){  
    Contenedor.innerHTML = `
    <div class="card mb-3" style="max-width: 1200px; max-height: 130px;" id="carditem">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${item.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.currency}${item.unitCost}</p>
        <p class="card-text"></p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <p class="card-text">Cantidad</p>
        <p class="card-text"><input type="number" id="inputItem" name="productCostInput" class="form-control" id="starsnumber" placeholder="" required="" value="1"
        min="1" max=""></p>
      </div>
    </div>

  </div>
</div>

<div class="form-check">
<h4>Tipo de envio</h4>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Premium 2 a 5 dias (15%)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Express 5 a 8 dias(7%)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Standar 12 a 15 dias (5%)
  </label>
</div>

<div class="col-6">
  <label for="exampleFormControlInput1" class="form-label">Calle</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Avenida Gral flores">
</div>
<div class="col-2">
  <label for="exampleFormControlTextarea1" class="form-label">numero</label>
  <input type="number" class="form-control" id="exampleFormControlInput2" >
</div>
<div class="col-6">
  <label for="exampleFormControlTextarea1" class="form-label">Esquina</label>
  <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="Corrales">
</div>


<footer id="footer">
    <div>
        <h5>Subtotal = ${item.currency}${(item.unitCost)}</h5>
    <div>
    </footer>
        
    `
 
    let imput = document.getElementById("inputItem")
imput.addEventListener("click", function(){

    
   let footer = document.getElementById("footer") 
    let multiplicador = imput.value
    let subtototal =`
    
    <div>
        <h5>Subtotal = ${item.currency}${(item.unitCost)*multiplicador}</h5>
    <div>
`
    footer.innerHTML = subtototal;

})
    
}*/


