document.addEventListener("DOMContentLoaded", function(){
    datos = [];
    getJSONData(PRODUCTS_URL).then( objeto =>{
        if(objeto.status == "ok"){
            datos = objeto.data.products
            console.log(datos);
            insertardatos(datos); 
        } else { alert("ha ocurrido un error") }
        
    })});
    function insertardatos(array){
        let contenido = "";
        array.forEach(element => {
            contenido += `
            <div class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${element.image}" alt="${element.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${element.name}</h4>
                            <small class="text-muted"> Precio :${element.currency}${element.cost}</small>
                            <small class="text-muted"> Vendidos:${element.soldCount}</small>

                        </div>
                        <p class="mb-1">${element.description}</p>
                    </div>
                </div>
            </div>
            `
            document.querySelector("#contenedor").innerHTML = contenido;
        });
    }


