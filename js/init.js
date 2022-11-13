const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = `https://japceibal.github.io/emercado-api/cats_products/`+localStorage.getItem("catID")+".json";
const PRODUCT_INFO_URL = `https://japceibal.github.io/emercado-api/products/`+localStorage.getItem("ProductID")+`.json`;
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/"+localStorage.getItem("ProductID")+`.json`;
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const storage =  localStorage.getItem("catID")

/*let carroDeCompra =[];
let carrito = [];
console.log("carritonew"+carroDeCompra);
function Agregarcarrito(prod){
  localStorage.setItem(`${prod.name}`, JSON.stringify(prod));
  let item = localStorage.getItem(`${prod.name}`);
  carroDeCompra.push(item )
  console.log(carroDeCompra);
  

};*/





let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
};
let dato = localStorage.getItem("nombre");
let contenedor = document.querySelector("#containermail")
console.log(dato);
 
contenedor.innerHTML = `${dato}`

function ventana(id) {
  localStorage.setItem("ProductID", id);
   window.location = "product-info.html"
   
}



