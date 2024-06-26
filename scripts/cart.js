document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
        container.innerHTML = '<p style="text-align: center; width: 100%;">Your Cart is empty</p>'
        return
    }

    container.setAttribute('class','user-grid')

    function addUser(user) {
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <p><span>Name:</span> ${user.name}</p>
        <p><span>Email:</span> ${user.email}</p>
        <p><span>Quantity:</span> ${user.quantity}</p>
        <button onclick="removeUser(${user.id})">Delete</button>
    `;
      container.append(div);
    }

    cart.forEach((element) => {
      addUser(element);
    });
})


function removeUser(userId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter((item) => item.id !== userId);

  localStorage.setItem("cart", JSON.stringify(cart));

  location.reload()
}
