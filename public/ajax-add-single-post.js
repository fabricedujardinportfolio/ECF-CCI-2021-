let url1 = "/product-details-1";
let url2 = "/product-details-2";
let url3 = "/product-details-3";
let url4 = "/product-details-4";
let url5 = "/product-details-5";
let url6 = "/product-details-6";

let postid = 0;

console.log(window.location.pathname);
if (url1 == window.location.pathname) {
    postid = 0;
}
if (url2 == window.location.pathname) {
    postid = 1;
}
if (url3 == window.location.pathname) {
    postid = 2;
}
if (url4 == window.location.pathname) {
    postid = 3;
}
if (url5 == window.location.pathname) {
    postid = 4;
}
if (url6 == window.location.pathname) {
    postid = 5;
}

console.log(postid);

function displayPost(item) {
    console.log(item);
    let product = document.createElement('div');
    product.classList.add('container');
    product.innerHTML = `
    <div class="container">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <nav aria-label="breadcrumb ">
                <ol class="breadcrumb place-content-center">
                    <li class="breadcrumb-item"><a href="/" class="text-dark"><strong>HOME</strong></a></li>
                    <li class="breadcrumb-item" aria-current="page"><strong>PLATES</strong></li>
                    <li class="breadcrumb-item active" aria-current="page">${item.title}</li>
                </ol>
            </nav>
        </div>
        <div class="col-3"></div>
    </div>
</div>
<div class="container">
    <div class="row mt-5" >
    <div class="col"></div>
            <div class="col-12 col-md-6 ">
                <img src="image/${item.image}"  class="sizeimg" >
            </div>
            <div class="col-12 col-md-5">
                <div class="container-fluid h-100 ">
                    <div class="col-12 border-bottom-gray h-65 text-center">
                        <small class="position font-size-small text-muted"> <strong>${item.brand}</strong> </small>
                        <h2 class="position font-size-h2 ">${item.title}</h2>
                        <small class="position font-size-small text-muted">$${item.price}.00</small>
                        <p class="position text-muted">${item.description}</p>
                    </div>
                    <div class="row mt-5">
                        <div class="col-2"></div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col-6 bg-color ">
                                    <div id="result" class="text-center text-white margin35"><strong>0</strong></div>
                                </div>
                                <div class="col-5">
                                    <div onclick="plus()" class="bg-color-2 text-center" style="margin: 0 0px 10px 0;">
                                        <span>+</span></div>
                                    <div onclick="moin()" class="bg-color-2 text-center"><span>-</span> </div>
                                </div>
                            </div>
                        </div>
                        <div class=" col-5">
                            <button class="h-100 w-100 bg-dark text-white">ADD TO CART</button>
                        </div>
                        <div class=" col-1"></div>
                    </div>
                </div>
            </div>
            </div></div>`
    document.getElementById('reponse').appendChild(product);
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var response = JSON.parse(xhr.responseText);
        displayPost(response[postid]);
    }
};
xhr.open('GET', 'products.txt', true);
xhr.send();