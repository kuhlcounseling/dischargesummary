// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("dinput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("added").appendChild(li);
  }
  document.getElementById("dinput").value = "";

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Change other to specific value 
function otheroption() {
    var element = document.getElementById('choices')
    var selectedoption = element.value 
    var container = document.getElementById('other-container');

    // clear previous textbox
    container.innerHTML = '';
    
    if (selectedoption == "other") {
        var textbox = document.createElement('input') ;
        textbox.type = 'text';
        textbox.placeholder = 'Enter reason';
        textbox.style.width = "400px"
        container.appendChild(textbox);

    }
}

function datereader(){
    const today = new Date()

}

function autoexpand() {
    const textarea = document.querySelector(".textarea");

    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
}