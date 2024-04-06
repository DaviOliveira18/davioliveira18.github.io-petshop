function addToCart(event) {

  alert('chegou aqui, prod adicionado');
    const product = event.target.parentNode;
    const productName = product.querySelector('h3').innerText;
    const productImage = product.querySelector('img').src;
    const productPrice = product.querySelector('p:nth-child(3)').innerText;
  
    console.log(productName);
    console.log(productImage);
    console.log(productPrice);

    // Cria um objeto para representar o produto
    const productData = {
      name: productName,
      image: productImage,
      price: productPrice
    };
  
    // Obtém o carrinho atual do armazenamento local ou cria um novo array vazio
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Adiciona o produto ao carrinho
    cart.push(productData);
  
    // Salva o carrinho atualizado de volta no armazenamento local
    localStorage.setItem('cart', JSON.stringify(cart));
}
  
  const buyButtons = document.querySelectorAll('.btnComprar');
  
  buyButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });



