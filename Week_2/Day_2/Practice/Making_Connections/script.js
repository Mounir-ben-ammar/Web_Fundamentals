function changeName(name) {
    var element = document.querySelector (name)
    document.getElementById("name").innerHTML = "Mounir ben Ammar";
}


function remove() {
    const element = document.getElementById("remove");
    element.remove();
  }

  function increase(id){
    var element = document.querySelector(id);
    element.innerText=parseInt(element.innerText) +1 ; 


}

function decrease(id){
    var element = document.querySelector(id);
    element.innerText=parseInt(element.innerText) -1 ; 


}



