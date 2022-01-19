function throwFunction() {
    const message = document.getElementById("message");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try { 
      if(x == "")  throw "is Empty";
      if(isNaN(x)) throw "not a number";
      if(x > 120)   throw "Geather than 120";
      if(x < 100)  throw "less than 100";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
  }