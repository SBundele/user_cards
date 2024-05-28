let user = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

const container = document.getElementById('container')

function createUserCard(userDetail){
    const div = document.createElement("div") 

    div.className = "card"
    div.innerHTML = `
    <p><span>Name:</span> ${userDetail.name}<p> 
    <p><span>Email:</span> ${userDetail.email}<p> 
    <button onclick="addToCart(${userDetail.id})">Add to Cart</button>`;

    container.append(div);
}

function addToCart(userId){
  let cart = JSON.parse(localStorage.getItem('cart')) || []

  let userDetail = user.find((users) => users.id === userId)
  
  let userAlreadyInCart = cart.find((user) => user.id === userId)

  if (userAlreadyInCart){
    userAlreadyInCart.quantity++
  } else{
    cart.push({...userDetail, quantity: 1})
  }
  
  localStorage.setItem("cart", JSON.stringify(cart))

  alert("User is added to cart")
}


user.forEach((users) => createUserCard(users))
