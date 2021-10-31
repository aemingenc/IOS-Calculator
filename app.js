const numbers =document.getElementsByClassName("numbers")[0];
const down =document.getElementsByClassName("screen__down")[0];
const up =document.getElementsByClassName("screen__up")[0];

numbers.addEventListener("click",(e)=>{
    if(e.target.className==="number"){
      down.innerText += e.target.innerText;
    }
    if(e.target.className==="zero"){
        if(down.innerText==="0"){}
         else{
             down.innerText +="0"
         }}
    if(e.target.className ==="comma"){
        if(down.innerText===""){}
        else if(down.innerText.includes(".")){}
        else {
            down.innerText +=".";
        }}
    if(e.target.className==="remove"){
        down.innerText=""
        up.innerText=""
    }    
    if(e.target.className === "fas fa-arrow-left"||e.target.className==="arrow"){
        if(down.innerText ===""){}
        else{
        const array = down.innerText.split("");
        console.log(array);
        array.splice((array.length-1),1);
        down.innerText=array.join("");
    }}
    if(e.target.className==="negative"){
        if(down.innerText===""){
            down.innerText="-";
        }
        else if(down.innerText==="-"){
            down.innerText="";
        }
        else{
        down.innerText=parseFloat(down.innerText)*-1;
    }}
    if(e.target.className==="fas fa-plus"|| e.target.className==="plus"){
        if(down.innerText ===""&&up.innerText===""){}
        else if(up.innerText.includes("-")){
            up.innerText=Number(up.innerText.split(" ")[0])-Number(down.innerText)+" +";
            down.innerText="";
        }
        else if(up.innerText.includes("x")){
            up.innerText=Number(up.innerText.split(" ")[0])*Number(down.innerText)+" +";
            down.innerText="";
        }
        else if(up.innerText.includes("/")){
            up.innerText=Number(up.innerText.split(" ")[0])/Number(down.innerText)+" +";
            down.innerText="";
        }
        
        else if(!down.innerText==""&&up.innerText===""){
            up.innerText=down.innerText+" +";
            down.innerText=""
        }
        else if(up.innerText.includes("+")&&!down.innerText==""){
            
            up.innerText=Number(up.innerText.split(" ")[0])+Number(down.innerText)+" +";
            down.innerText="";
        }}
        if(e.target.className==="fas fa-minus"|| e.target.className==="minus"){
            if(down.innerText ===""&&up.innerText===""){}
            else if(up.innerText.includes("+")){
                up.innerText=Number(up.innerText.split(" ")[0])+Number(down.innerText)+" -";
                down.innerText="";
            }
            else if(up.innerText.includes("x")){
                up.innerText=Number(up.innerText.split(" ")[0])*Number(down.innerText)+" -";
                down.innerText="";
            }
            else if(up.innerText.includes("/")){
                up.innerText=Number(up.innerText.split(" ")[0])/Number(down.innerText)+" -";
                down.innerText="";
            }
            else if(!down.innerText==""&&up.innerText===""){
                up.innerText=down.innerText+" -";
                down.innerText=""
            }
            else if(up.innerText.split(" ")[1]==="-"&&!down.innerText==""){
                
                up.innerText=Number(up.innerText.split(" ")[0])-Number(down.innerText)+" -";
                down.innerText="";
            }}
        if(e.target.className==="fas fa-times"|| e.target.className==="times"){
            if(down.innerText ===""&&up.innerText===""){}
            else if(up.innerText.includes("-")){
                up.innerText=Number(up.innerText.split(" ")[0])-Number(down.innerText)+" x";
                down.innerText="";
            }
            else if(up.innerText.includes("+")){
                up.innerText=Number(up.innerText.split(" ")[0])+Number(down.innerText)+" x";
                down.innerText="";
            }
            else if(up.innerText.includes("/")){
                up.innerText=Number(up.innerText.split(" ")[0])/Number(down.innerText)+" x";
                down.innerText="";
            }
            else if(!down.innerText==""&&up.innerText===""){
                up.innerText=down.innerText+" x";
                down.innerText=""
            }
            else if(up.innerText.includes("x")&&!down.innerText==""){
                
                up.innerText=Number(up.innerText.split(" ")[0])*Number(down.innerText)+" x";
                down.innerText="";
            }}  
        if(e.target.className==="fas fa-divide"|| e.target.className==="divide"){
            if(down.innerText ===""&&up.innerText===""){}
            else if(up.innerText.includes("-")){
                up.innerText=Number(up.innerText.split(" ")[0])-Number(down.innerText)+" /";
                down.innerText="";
            }
            else if(up.innerText.includes("x")){
                up.innerText=Number(up.innerText.split(" ")[0])*Number(down.innerText)+" /";
                down.innerText="";
            }
            else if(up.innerText.includes("+")){
                up.innerText=Number(up.innerText.split(" ")[0])+Number(down.innerText)+" /";
                down.innerText="";
            }
            else if(!down.innerText==""&&up.innerText===""){
                up.innerText=down.innerText+" /";
                down.innerText=""
            }
            else if(up.innerText.includes("/")&&!down.innerText==""){
                
                up.innerText=Number(up.innerText.split(" ")[0])/Number(down.innerText)+" /";
                down.innerText="";
            }}
            
        if(e.target.className==="fas fa-equals"|| e.target.className==="equal"){
            if(up.innerText.includes("+")&&!down.innerText==""){
                down.innerText=Number(up.innerText.split(" ")[0])+Number(down.innerText);
                up.innerText="";
            }
            if(up.innerText.includes("-")&&!down.innerText==""){
                down.innerText=Number(up.innerText.split(" ")[0])-Number(down.innerText);
                up.innerText="";
            }
            if(up.innerText.includes("x")&&!down.innerText==""){
                down.innerText=Number(up.innerText.split(" ")[0])*Number(down.innerText);
                up.innerText="";
            }
            if(up.innerText.includes("/")&&!down.innerText==""){
                down.innerText=Number(up.innerText.split(" ")[0])/Number(down.innerText);
                up.innerText="";
            }
        }           
            
        
    




});
