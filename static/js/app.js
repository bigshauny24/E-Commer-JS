$.get('../../components/header.html', function(res){
  //console.log(res);
  $('#nav').html(res);
})

//add to cart takes in an ID to identify which product is being added
function addToCart(id){
  console.log(id);
}
