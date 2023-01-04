var additem = document.getElementById('addtocart');
additem.addEventListener("click", addToCart);

function addToCart(){
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout', total);
    document.querySelector('#checkout').innerHTML=total;
}