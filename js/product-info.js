
let listaCarrito=[];
let newItem ="";

document.addEventListener("DOMContentLoaded", function(){
  
  let datos = [];
  let data = [];
  getJSONData(PRODUCT_INFO_URL).then( objeto =>{
    if(objeto.status == "ok"){
      datos.push(objeto.data)
      let item = objeto.data;
      insertarDatos(datos[0]);
      
      newItem = {
        nombre: item.name,
        moneda: item.currency,
        costo: item.cost,
        img: item.images[0],
        id: item.id
      };
      console.log(newItem);
    } else{ alert("ha ocurrido un error")
  };
}).then(
  getJSONData(PRODUCT_INFO_COMMENTS_URL).then( objeto2 =>{
    if(objeto2.status == "ok"){
      data = objeto2.data
      insertarcoments(data);
    } else{ alert("ha ocurrido un error al cargar los comentarios")}
    
  }));
});




const insertarDatos = (objeto)=>{
  
  let contenido =`
  <div class="row">
  <h3 class="mb-1">${objeto.name}</h3><hr>
  <ul>
  <li class="listaProduct">Precio <br>
  <small class="text-muted">${objeto.currency}${objeto.cost}</small>
  </li>
  <li class="listaProduct">Descripción
  <br>
  <small class="text-muted">${objeto.description}</small></li>
  <li class="listaProduct">Categoría <br>
  <small class="text-muted">${objeto.category}</small></li>
  <li class="listaProduct">Cantidad vendidos <br>
  ${objeto.soldCount}
  </li>
  </ul><br>
  
  <div class="container">
  <div class ="row">
  <div class="col-8">
  
  <h4 style="text-align: center;">Imagenes Ilustrativas</h4>
  
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-item active" data-bs-interval="2000">
  <img src="${objeto.images[0]}" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item" data-bs-interval="2000">
  <img src="${objeto.images[1]}" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item" data-bs-interval="2000">
  <img src="${objeto.images[2]}" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item" data-bs-interval="2000">
  <img src="${objeto.images[3]}" class="d-block w-100" alt="...">
  </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
  </button>
  </div>
  <button type="button" class="btn btn-success" id="prodnumero${objeto.id}">Añadir al carrito</button>
  
  </div> 
  <div class="col-4" >
  <h5> Poductos relacionados</h5>
  <div class="card" style="width: 13rem;">
  <img src="${objeto.relatedProducts[0].image}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${objeto.relatedProducts[0].name}</h5>
  <p class="btn btn-primary" onclick="ventana(${objeto.relatedProducts[0].id})">ir al producto</p>
  </div>
  </div>
  <div class="card" style="width: 13rem;">
  <img src="${objeto.relatedProducts[1].image}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${objeto.relatedProducts[1].name}</h5>
  <p  class="btn btn-primary" onclick="ventana(${objeto.relatedProducts[1].id})">ir al producto</p>
  </div>
  </div>
  
  
  </div>
  </div>
  </div>
  `
  
  document.querySelector("#container2").innerHTML = contenido;
  document.getElementById(`prodnumero${objeto.id}`).addEventListener(`click`, agregarAlcarrito);
};
const insertarcoments = (array) =>{
  let content = [];
  for( i = 0; i < array.length; i++){
    content += `
    
    <div class="list-group-item list-group-item-action cursor-active">
    <div class="row">
    <div class="col">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">${array[i].user}-<small class="text-muted">${array[i].dateTime}-</small></h5><br>
    </div>
    <p class="mb-1">${array[i].description}</p>
    <p class="mb-1">${stars(array[i].score)}${starsBlack(array[i].score)}</p>
    
    </div>
    </div>
    </div>
    `
    document.querySelector("#container3").innerHTML = content;
    
  }};
  const stars =(score) =>{
    let template = [];
    for(e=0; e< score; e++){
      
      template +=`<span class="fa fa-star checked"></span>`;
    }
    return template;
  }
  const starsBlack = (score) =>{
    let templateBlack = [];
    for(a=0; (score + a)< 5; a++){
      
      templateBlack +=`<span class="fa fa-star"></span>`;
    }
    return templateBlack;     }
    
    const agregarAlcarrito =()=>{
      let yaAgregado = false;

      if(localStorage.getItem(`carrito`) !== null){
        listaCarrito = JSON.parse(localStorage.getItem(`carrito`))
        console.log(listaCarrito)
        
        listaCarrito.forEach(item => {
          if(item.nombre === newItem.nombre){
            console.log("nombre igual")
            yaAgregado = true
          }
        })
        if(!yaAgregado){
          console.log("no encontro coincidencia")
          listaCarrito.push(newItem)
        }
      } else{
        listaCarrito.push(newItem)
      }

      localStorage.setItem(`carrito`,JSON.stringify(listaCarrito));
    };
    
    
    
    
    
    
    
    
    
    
    