/*
    código de las categorías
    novedades: 100
    Productos Destacados: 101
    Lo más visto: 102

*/

//  VARIABLES GLOBALES
categoryProduct = ["Novedades", "Productos Destacados", "Lo más visto"];

let products = [
  [ 
    id= "001",
    idCategory= 101,
    title= "Memoria Ram",
    description= "Memoria Ram DDR4 16GB",
    price= "4.500",
    urlImg= "assets/img/setup.jpg",
    start= "5"
  ],
  [ 
    id= "002",
    idCategory= 101,
    title= "Memoria Ram",
    description = "Memoria Ram DDR4 16GB",
    price= "4.500",
    urlImg= "assets/img/setup.jpg",
    start= "5"
  ],
  [ 
    id= "003",
    idCategory= 101,
    title= "Memoria Ram",
    description= "Memoria Ram DDR4 16GB",
    price= "4.500",
    urlImg= "assets/img/setup.jpg",
    start= "5"
    ],
];



let producDesctados = document.getElementById("producDesctados");

products.forEach((product, index) =>{
    producDesctados.innerHTML +=`
            <div class="card-product">
            <div class="card-header">
                <img src="assets/img/setup.jpg" alt="">
            </div>

            <div class="card-content">
                <h3>Memoria Ram</h3>
                <p>Memoria Ram DDR4 16GB</p>
                <p>$ 4.500</p>

            </div>
            <div class="card-footer">
                <p class="product-icon">
                    <span>
                        <i  class="far fa-eye"></i>
                        <i onclick="addCard(${index})" id="cart-shopping" class="fas fa-shopping-cart"></i>
                        <i class="fas fa-share-alt"></i>
                    </span>
                </p>
                <p class="product-start">
                    <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </span>
                </p>
            </div>

        </div>
    `
})


//  DECLARACIÓN DE LAS FUNCIONES

let productCard = []; //array que guarda de manera temporal los productos que selcciona el usuario 
if(JSON.parse(localStorage.getItem('product-card'))){
    productCard = JSON.parse(localStorage.getItem('product-card'));
    console.log('productos del storage', productCard);
}
function addCard(i){
    productCard = [...productCard, products[i]];
    console.log(productCard);
    localStorage.setItem('product-card', JSON.stringify(productCard));
    // console.log(products[i]);
}

function showCard(){

    console.log("se ejecuta show");
    addProducModal();
}



function addProducModal(){
    let modalProducts = document.getElementById("modal-products");
    let modalContainer = document.getElementById("modal-container");
    const StorgeProducts = JSON.parse(localStorage.getItem('product-card'));
    StorgeProducts.forEach(product =>{
        // console.log(product); 
            modalProducts.innerHTML += `
            <div class="modal-product">
                <img src="${product[5]}" alt="">
                <div class="product-description">
                    <h4>${product[2]} <i class="fas fa-times"></i></h4>
                    <p>${product[3]}</p>
                    <p>${product[4]}</p>
                    <p><input type="number" value="1" min="1"> </p>
                </div>
            </div>
            `
    }); 
    modalContainer.style.display = "block"; 
}