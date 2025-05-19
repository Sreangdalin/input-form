var i = 0;
var j = 0;
const MAX_LIMIT = 5;
function addrow(event) {
  event.preventDefault();
  if (i < MAX_LIMIT) {
      i++;
      const newInput = document.createElement("div");
      newInput.innerHTML = `<input id="show2${i}" class="add">`;
      document.getElementById("show2").appendChild(newInput);

   
      newInput.querySelector("input").addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
              e.preventDefault();
          }
      });
  } else {
      alert("Cannot add more than 5 rows");
  }
}

function addrow1(event) {
  event.preventDefault();
  if (j < MAX_LIMIT) {
      j++;
      const newInput = document.createElement("div");
      newInput.innerHTML = `<input id="show1${j}" class="add1">`;
      document.getElementById("show1").appendChild(newInput);

      newInput.querySelector("input").addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
              e.preventDefault();
          }
      });
  } else {
      alert("Cannot add more than 5 rows");
  }
}


function saveData() {
  i++;
    const txt1 = document.getElementById("text1").value;
    localStorage.setItem("text1", txt1);
    const txt2 = document.getElementById("text2").value;
    localStorage.setItem("text2", txt2);


    const txt3a = document.getElementById("text3-1").value;
    localStorage.setItem( "text3-1", txt3a);
    const txt3b = document.getElementById("text3-2").value;
    localStorage.setItem( "text3-2", txt3b);
    const txt3c = document.getElementById("text3-3").value;
    localStorage.setItem( "text3-3", txt3c);


    const txt4a = document.getElementById("text4-1").value;
    localStorage.setItem("text4-1", txt4a);
    const txt4b = document.getElementById("text4-2").value;
    localStorage.setItem("text4-2", txt4b);
    const txt4c = document.getElementById("text4-3").value;
    localStorage.setItem("text4-3", txt4c);


    const txt5a = document.getElementById("text5-1").value;
    localStorage.setItem("text5-1", txt5a);
    const txt5b = document.getElementById("text5-2").value;
    localStorage.setItem("text5-2", txt5b);
    const txt5c = document.getElementById("text5-3").value;
    localStorage.setItem("text5-3", txt5c);

    const inputs1 = document.querySelectorAll(".add1");
    const values1 = [];
    inputs1.forEach(input => {
        if (input.value.trim() !== "") {
            values1.push(input.value);
        }
    });
    localStorage.setItem("show1", JSON.stringify(values1));

    const inputs = document.querySelectorAll(".add");
    const values = [];
    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            values.push(input.value);
        }
    });
    localStorage.setItem("show2", JSON.stringify(values));
    window.location.href = "output.html";

    newInput.querySelector("input").addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
          e.preventDefault();
      }
    });
}
function removeEmptyElement(id) {
  const element = document.getElementById(id);
  if (element && (!element.innerText.trim() || element.innerText === "null")) {
      element.remove();
  }
}



  const txt1 = localStorage.getItem("text1");
  if (txt1) {
    document.getElementById("output").innerText =  txt1;
  } else {
    document.getElementById("output").innerText = "null";
  }
  const txt2 = localStorage.getItem("text2");
  if (txt2) {
    document.getElementById("output2").innerText =  txt2;
  } else {
    document.getElementById("output2").innerText = "null";
  }


  const txt3a = localStorage.getItem("text3-1");
  if (txt3a) {
    document.getElementById("output3-1").innerText =  txt3a;
  } else {
    document.getElementById("output3-1").innerText = "null";
  }
  const txt3b = localStorage.getItem("text3-2");
  const output3b = document.getElementById("output3-2");
  if (txt3b) {
    output3b.innerText =  txt3b;
  } else if (output3b) {
    output3b.remove();
  }
const txt3c = localStorage.getItem("text3-3");
const output3c = document.getElementById("output3-3");
if (txt3c) {
  output3c.innerText = txt3c;
} else if (output3c) {
  output3c.remove();
}


  const txt4a = localStorage.getItem("text4-1");
  if (txt4a) {
    document.getElementById("output4-1").innerText =  txt4a;
  } else {
    document.getElementById("output4-1").innerText = " "; 
  }
  const txt4b = localStorage.getItem("text4-2");
  const output4b = document.getElementById("output4-2");
  if (txt4b) {
    output4b.innerText =  txt4b;
  } else if (output4b) {
    output4b.remove();
  }
  const txt4c = localStorage.getItem("text4-3");
  const output4c = document.getElementById("output4-3");
  if (txt4c) {
    output4c.innerText = txt4c;
  } else if (output4c) {
    output4c.remove();
  }


  const txt5a = localStorage.getItem("text5-1");
  if (txt5a) {
    document.getElementById("output5-1").innerText =  txt5a;
  } else {
    document.getElementById("output5-1").innerText = "null";
  }
  const txt5b = localStorage.getItem("text5-2");
  const output5b = document.getElementById("output5-2");
  if (txt5b) {
    output5b.innerText =  txt5b;
  } else if (output5b) {
    output5b.remove();
  }
  const txt5c = localStorage.getItem("text5-3");
  const output5c = document.getElementById("output5-3");
  if (txt5c) {
    output5c.innerText = txt5c;
  } else if (output5c) {
    output5c.remove();
  }
  
  const values = JSON.parse(localStorage.getItem("show1"));
    const show1 = document.getElementById("show1");
    if (values && values.length > 0) {
      values.forEach((val,) => {
        if (val.trim() !== ""){
          const p = document.createElement("p");
          p.textContent = val;
          show1.appendChild(p);
        }
      });
    } else {
      show1.innerText = " ";
    }
    const add = JSON.parse(localStorage.getItem("show2"));
    const show2 = document.getElementById("show2");

    if (add && add.length > 0) {
      add.forEach((val,) => {
        if (val.trim()!==""){
          const p = document.createElement("p");
          p.textContent = val;
        show2.appendChild(p);
        }
      });
    } else {
      show2.innerText = " ";
    }


    
    function removePrintButton() {
    const printButton = document.getElementById("print");
    if (printButton) {
        printButton.remove();
    }
    window.print(); 
}

  