function displayPost(posts) {
            posts.forEach(post => {
                // console.log(post);                
                let product = document.createElement('div');
                product.classList.add('col');
                product.innerHTML = `             
                        <div class="card shadow-sm">
                            <div class="row">                            
                        <div class="overlay-image col-12">
                                <img src="image/${post.image}" alt="product for user" class="width100 image" >
                                <div class="hover ">
                                <div class="text-center col-12">
                                    <button type="button" class="btn btn-dark btn-sm mt-5 w-50" onclick="location.href='/product-details-${post.productid}'">VIEW DETAIL</button>
                                </div>
                                <div class="text-center">
                                    <button type="button" class="btn btn-dark btn-sm mt-3 w-50" onclick="location.href='#'">ADD TO CART</button>
                                </div>
                            </a>
                        </div>                               
                            <div class="card-body text-center">
                                <small class="text-muted">${post.brand}</small>
                                <p class="card-text">${post.title}</p>
                                <small class="text-muted">$ ${post.price}.00</small>
                            </div>
                        </div>
                        <div class="col-12 position-absolute text-center seeblockajax${post.productid} " style="visibility:hidden;">
                            <div class="row seeblockajaxshild">
                                <div class="col-12">
                                    <button class="btn mb-4">VIEWS DETAILS</button>
                                </div>
                                <div class="col-12">
                                    <button class="btn mx-auto my-0 ">ADD TO CARDS</button>
                                </div>
                            </div>
                        </div>
                    </div>`
                document.getElementById('reponse').appendChild(product);
            });
        }
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var response = JSON.parse(xhr.responseText);
                console.log(response);
                displayPost(response);
            }
        };
        xhr.open('GET', 'products.txt',true);
xhr.send();