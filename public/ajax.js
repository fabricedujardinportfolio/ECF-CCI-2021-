function displayPost(posts) {
            posts.forEach(post => {
                // console.log(post);
                let product = document.createElement('div');
                product.classList.add('col');
                product.innerHTML = `             
                        <div class="card shadow-sm">
                        <a href="/product-details-${post.productid}">
                            <div>
                                <img src="image/${post.image}" alt="product for user" class="width100"></div>
                                <title>PRODUCT</title>
                            </div>                            
                            </a>
                            <div class="card-body text-center">
                                <small class="text-muted">${post.brand}</small>
                                <p class="card-text">${post.title}</p>
                                <small class="text-muted">$ ${post.price}.00</small>
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