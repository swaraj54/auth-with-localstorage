

window.onload = function () {
    // alert("Window loaded!")

    var products = JSON.parse(localStorage.getItem("products"));

    var divFromHtml = document.getElementById("screen");

    var array = [];

    for (var i = 0; i < products.length; i++) {
        array += `<div><img src="${products[i].image}" alt='proImage' /><br/><h1>${products[i].name}</h1><br/><p>${products[i].price}</p></div>`
    }
    divFromHtml.innerHTML = array;
}