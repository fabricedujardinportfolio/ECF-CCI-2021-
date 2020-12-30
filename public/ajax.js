function displayPost(posts) {
            posts.forEach(post => {
                // console.log(post);
                let product = document.createElement('div');
                product.classList.add('col');
                product.innerHTML = `             
                        <div class="card shadow-sm">
                            <div>
                                <img src="image/${post.image}" alt="product for user" class="width100"></div>
                                <title>${post.title}</title>
                            </div>
                            <div class="card-body">
                                <span>${post.brand}</span>
                                <p class="card-text">${post.description}</p>
                                <small class="text-muted">${post.price}</small>
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

//                 // <p> UserID = ${post.userId}</p>
//                 // <p> PostID = ${post.id}</p>
//                 // <h2>${post.title}</h2>
//                 // <div>${post.body}</div>

// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     console.log(this);
// }

// xhr.open('GET', '../json/products.txt', true);
// xhr.send();