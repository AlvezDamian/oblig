
document.addEventListener("DOMContentLoaded", function(){
    const ORDER_ASC_BY_NAME = "AZ";
    const ORDER_DESC_BY_NAME = "ZA";
    const ORDER_BY_PROD_COUNT = "Cant.";
    let currentCategoriesArray = [];
    let currentSortCriteria = 0;
    let minCount = 0;
    let maxCount = 0;
    
    
    
    let ident = 
    datos = [];
    getJSONData(PRODUCTS_URL).then( objeto =>{
        if(objeto.status == "ok"){
            productos = objeto.data.products
            datos = objeto.data.products
            console.log(datos);
            insertardatos(datos); 
        } else { alert("ha ocurrido un error") }
        
    })});

    
    function insertardatos(array){
        
        let contenido = "";
        array.forEach(element =>{
            contenido += `
            <div class="list-group-item list-group-item-action cursor-active" onclick="ventana(${element.id})">
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
        });}
        
        
        document.querySelector("#clearRangeFilter").addEventListener("click",function(){
            insertardatos(datos);
        })
        
        document.querySelector("#rangeFilterCount").addEventListener("click",function(){
            minCount = document.querySelector("#rangeFilterCountMin").value 
            maxCount = document.querySelector("#rangeFilterCountMax").value
            console.log(maxCount) 
            console.log(minCount) 
            console.log(datos)
            let filtro = datos.filter(product =>(((minCount == 0) || (minCount != 0 && parseInt(product.cost) >= minCount))&&
            ((maxCount == 0) || (maxCount != 0 && parseInt(product.cost) <= maxCount))));
            console.log(filtro)
            
            insertardatos(filtro)
        });
        
        
        document.querySelector("#sortAsc").addEventListener("click",function(){
            console.log(datos)
            datos.sort(function(a,b){
                if(a.cost > b.cost){
                    return 1
                }
                if(a.cost < b.cost){
                    return -1
                }
                return 0;
            })
            insertardatos(datos);
        })
        
        document.querySelector("#sortDesc").addEventListener("click",function(){
            
            datos.sort(function(a,b){
                if(b.cost > a.cost){
                    return 1
                }
                if(b.cost < a.cost){
                    return -1
                }
                return 0;
            })
            insertardatos(datos);
        })
        
        
        document.querySelector("#sortByCount").addEventListener("click",function(){
            datos.sort( function(a,b){
                return (parseInt(b.soldCount) - parseInt(a.soldCount))
                
            })
            insertardatos(datos)
            
        })
        
     
        
        let array = ["uno","dos","tres"]
        array.sort()
        console.log(array);
        
        
        
        
        
        
        