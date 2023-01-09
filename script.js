let screen = document.getElementById("screen");
let buttons =document.querySelectorAll("button");
let screenValue ="";

for(let item of buttons){
    item.addEventListener("click",(e)=>{
        let buttonText = e.target.innerText;
        
        if(buttonText == "x"){
            buttonText="*";
            screenValue = screenValue+buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == "C"){
            screenValue = " "
            screen.value = screenValue;
        }
        else if(buttonText == "="){
            try{
          screen.value = eval(screenValue);
          screenValue = screen.value;
            }
            catch(error){
               alert("only numbers are allowed");
              
            }
        }
        else{
            screenValue = screenValue+buttonText;
            screen.value = screenValue;
        }
    })
}



    document.addEventListener("keyup",(e)=>{
        let pressedKey = e.key;
        
         if(pressedKey == "="  || pressedKey == "Enter"){
            try{
          screen.value = eval(screenValue);
          screenValue = screen.value;
            }
            catch(error){             
               alert("only numbers are allowed");
              
            }
        }
        else if(pressedKey == "Backspace"){
            screen.value = screenValue.substring(0,screen.value.length *1 -1)
            screenValue = screen.value;
        }  
        else{
            screen.value = screenValue+pressedKey;
            screenValue = screenValue+pressedKey
        }
    })

