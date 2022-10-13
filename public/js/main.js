//GLOBAL

var products = [];
var cartItems = [];

//DIVS
var fruitDIV = document.getElementById("friutDIV");
var juiceDIV = document.getElementById("juiceDIV");
var saladDIV = document.getElementById("saladDIV");

//information

var FRUIT = [
    {name:'Apple', price:1},
    {name:'Plantain', price:1},
    {name:'Mango', price:1},
    {name:'Strawberry', price:1},
    {name:'Kiwi', price:1},
    {name:'Banana', price:1},

];
var JUICE = [
    {name:'juice #1', price:10},
    {name:'juice #2', price:12},
    {name:'juice #3', price:11},
]

var SALAD = [
    {name:'salad #1', price:11},
    {name:'salad #2', price:12},
    {name:'salad #3', price:13},
]


//HTML

function HTMLfruitProducts(con) {
    let URL = '../images/fruites/fruite${con}.jpeg';
    let btn = 'btnFruit${con}';
    return 
          <div class="col-md-4">
                 <div class="card md-4 shadow-sm">
            <img class="card-img-top" style="height: 14rem;" src="${URL}" alt="card image cap" />
            <div class="card-body">
                <i style="color: orange;" class="fa fa-star"></i>
                <i style="color: orange;" class="fa fa-star"></i>
                <i style="color: orange;" class="fa fa-star"></i>
                <i style="color: orange;" class="fa fa-star"></i>
                <i style="color: orange;" class="fa fa-star"></i>
                <p class="card-text"> ${FRUIT[CON-1].name}</p>
                <p class="card-text">Price: ${FRUIT[CON-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" 
                        onclick="cart2('${FRUIT[con-1].name}','${FRUIT[con-1].price}','${URL}','${con}','${btn}',">
                            <a style="color: inherit;" href="/cart">Buy</a>
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" 
                        onclick="cart('${FRUIT[con-1].name}','${FRUIT[con-1].price}','${URL}','${con}','${btn}',">
                           add  to cart
                        </button>
                    </div>
                    <small class="txt-muted">Free shipping</small>
                </div>
            </div>
          </div>
    </div>

}
function HTMLfruitProducts(con) {
    let URL = '../images/fruites/juice${con}.jpeg';
    let btn = 'btnJuice${con}';
    return 
          <div class="col-md-4">
            <div class="card md-4 shadow-sm">
            <img class="card-img-top" style="height: 14rem;" src="${URL}" alt="card image cap" />
            <div class="card-body">
                <i style="color: orange;" class="fa fa-star"></i>
                <i style="color: orange;" class="fa fa-star"></i>
                <i style="color: orange;" class="fa fa-star"></i>
                <i style="color: orange;" class="fa fa-star"></i>
                <i style="color: orange;" class="fa fa-star"></i>
                <p class="card-text"> ${JUICE[CON-1].name}</p>
                <p class="card-text">Price: ${JUICE[CON-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" 
                        onclick="cart2('${JUICE[con-1].name}','${JUICE[con-1].price}','${URL}','${con}','${btn}',">
                            <a style="color: inherit;" href="/cart">Buy</a>
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" 
                        onclick="cart('${JUICE[con-1].name}','${JUICE[con-1].price}','${URL}','${con}','${btn}',">
                           add  to cart
                        </button>
                    </div>
                    <small class="txt-muted">Free shipping</small>
                </div>
            </div>
          </div>
     </div>
}

function HTMLfruitProducts(con) {
    let URL = '../images/fruites/salad${con}.jpeg';
    let btn = 'btnJuice${con}';
    return 
          <div class="col-md-4">
            <div class="card md-4 shadow-sm">
            <img class="card-img-top" style="height: 14rem;" src="${URL}" alt="card image cap" />
            <div class="card-body">
                <i style="color: orange;" class="fa fa-star"></i>
                <i style="color: orange;" class="fa fa-star"></i>
                <i style="color: orange;" class="fa fa-star"></i>
                <i style="color: orange;" class="fa fa-star"></i>
                <i style="color: orange;" class="fa fa-star"></i>
                <p class="card-text"> ${SALAD[CON-1].name}</p>
                <p class="card-text">Price: ${SALAD[CON-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" 
                        onclick="cart2('${SALAD[con-1].name}','${SALAD[con-1].price}','${URL}','${con}','${btn}',">
                            <a style="color: inherit;" href="/cart">Buy</a>
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" 
                        onclick="cart('${SALAD[con-1].name}','${SALAD[con-1].price}','${URL}','${con}','${btn}',">
                           add  to cart
                        </button>
                    </div>
                    <small class="txt-muted">Free shipping</small>
                </div>
            </div>
          </div>
     </div>
}

//ANIMATION

function animation(){
    const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,


    });
    toast({
        type: 'success',
        title: 'addedd to shopping cart',
    });
}

//cart  function

function cart(name,price,url,con,btncart) {
    var item = {
        name: name,
        price:price,
        url:url,
    }
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products= JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML= '[${products.length}]';
        document.getElementById(btncart).style.display= 'none';
        animation();

    }
    function cart(name,price,url,con,btncart) {
        var item = {
            name: name,
            price:price,
            url:url,
        }
        cartItems.push(item);
        let storage= JSON.parse(localStorage.getItem("cart"));
        if (storage==null) {
            products.push(item);
            localStorage.setItem("cart", JSON.stringify(products));
        } else {
            products= JSON.parse(localStorage.getItem("cart"));
            products.push(item);
            localStorage.setItem("cart", JSON.stringify(products));
          
        }
        products= JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML= '[${products.length}]';
        document.getElementById(btncart).style.display= 'none';
}
//RENDER
function render(params) {
    
}
(()=>{
    for (let index = 1; index <= 6; index++) {
      fruitDIV.innerHTML += '${HTMLfruitProduct(index)}';
    }
    for (let index = 1; index <= 6; index++) {
        juiceDIV.innerHTML += '${HTMLjuiceProduct(index)}';
        saladDIV.innerHTML += '${HTMLsaladProduct(index)}';
      }
      if (localStorage.getItem("cart")==null) {
        fruit
      } else {
        products= JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML= '[${products.length}]';
      }
})();
}