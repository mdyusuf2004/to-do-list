/javascript/ var ul = document.getElementById("place") var input = document.getElementById("imput") function add() {
    var list = document.createElement("tr") list.innerHTML = imput.value + "completedelete" ul.append(list)
}

function del(event) {
    event.target.parentElement.remove()
}

function comp(event) {
    event.target.parentElement.style.backgroundColor = "green";
}