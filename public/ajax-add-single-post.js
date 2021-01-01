let url1  = "/product-details-1";
let url2  = "/product-details-2";
let url3  = "/product-details-3";
let url4  = "/product-details-4";
let url5  = "/product-details-5";
let url6  = "/product-details-6";

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

console.log(postid)

function displayPost(postid) {
            postid.forEach(post => {
                // console.log(post);
                let product = document.createElement('div');
                product.classList.add('col');
                product.innerHTML = `             
                        <div class="card shadow-sm">
                        <a href="/product-details-${post.productid[0]}">
                            <div>
                                <img src="image/${post.image[0]}" alt="product for user" class="width100"></div>
                                <title>PRODUCT</title>
                            </div>                            
                            </a>
                            <div class="card-body text-center">
                                <small class="text-muted">${post.brand[0]}</small>
                                <p class="card-text">${post.title[0]}</p>
                                <small class="text-muted">$ ${post.price[0]}.00</small>
                            </div>
                    </div>`
                document.getElementById('reponse').appendChild(product);
            });
        }
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var response = JSON.parse(xhr.responseText);
                displayPost(response);
            }
        };
        xhr.open('GET', 'products.txt',true);
xhr.send();