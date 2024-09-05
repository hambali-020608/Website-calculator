const display=document.getElementById("display")

const handleclick=(params)=>{
    if (params === "="){
        display.value=eval(display.value)
    }else if(params ==="C"){
        display.value=""
    }
    
    else{
        display.value += params
    }
    
}