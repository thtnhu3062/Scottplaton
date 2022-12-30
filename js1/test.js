console.log("yoooo")

fakeHTML = ''
food = ['Salted Caramel', 'Orange Wine', 'Vegan Queso']
for (let i =0; i < food.length; i++) {
    f = food[i]
    fakeHTML += '<div class="a">' + f + '</div>'
}
console.log(fakeHTML)

function myFunction() {
  console.log("print")
  document.getElementById("confirm-modal").classList.add("show")
}