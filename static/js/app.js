//create global cart variable, TODO: change to firebase later
var cart = [];



$.get('../../components/header.html', function(res){
  //console.log(res);
  $('#nav').html(res);
})


//show all products passed in
function showProducts(res){
  console.log(res.prodcts);
  //intializing hgml to be put into products section
  let html = '';

  for (let i = 0; i < res.products.length; i++) {
    //if i is 0 or divisable by 3, start new row
    if (i == 0 || i % 3 ==0){
      html += '<div class="row">'
    }
    html += `<div class="col-md-4">
    <div class="card">
      <div class="card-img-top">
        <img class="card-img" src="${res.products[i].imageURL}" alt="Placeholder" />
      </div>
      <div class="card-title">${res.products[i].title}</div>
      <div class="card-subtitle">$${res.products[i].price}</div>
      <div class="card-text">${res.products[i].description}</div>
      <button onClick="addToCart(${res.products[i].id})"class="btn btn-primary">add to cart</button>
    </div>
    </div>`

//add one to i because indexig starts at 0, end row after cards have been created
    if ((i+1) %3 == 0){
      html += '</div>';
    }
  }

  //add html vriabl to products section
  $('#products').html(html);
}

//get all products and call showProducts function
$.get('../../products.json', showProducts)




//add to cart takes in an ID to identify which product is being added
function addToCart(id){
  //console.log(id);

  $.get('../../products.json', function(res){
    for(let i = 0; i < res.products.length; i++){
    if (id == res.products[i].id) {
      cart.push(res.products[i]);
      break;
     }
    }
  });


  setTimeout(showCart, 50);
}
 function removeFromCart(id){
   // console.log(id);


   for (let i = 0; i < cart.length; i++) {
     if (id == cart[i].id) {
       //splice params = starting index, num to remove, inject vars
       cart.splice(i, 1);
       break;
     }
   }
   setTimeout(showCart, 50);
 }

 function showCart(){
   //initialize html string to put into cart later
   let html = '';


   for (let i = 0; i < cart.length; i++) {
     //console.log(cart[i]);
    html += `<tr>
    <th scope="row">1</th>
     <td>${cart[i].title}</td>
    <td>$${cart[i].price}</td>
    <td>
    <button onClick="removeFromCart(${cart[i].id})" class="btn btn-danger"></button>
    </td>
    </tr>`;
   }

   //inject html variable into cart body
   $('#cart-products').html(html);
 }

 showCart();

 //add sleeper timer to use in between adding to showCart
