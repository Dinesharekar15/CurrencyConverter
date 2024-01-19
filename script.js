
const from=document.querySelector(".from")
const to=document.querySelector("to")
const exchange_btn=document.querySelector(".exchange-btn")
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")
const msg=document.querySelector(".msg")


    for(currCode in countryList){
        let newOption=document.createElement("option")
        newOption.innerText=currCode
        newOption.value=currCode
        if(from.name==="from"&&currCode==="USD"){
            newOption.selected="selected"
        }
       
        from.appendChild(newOption)
    }
    from.addEventListener("change",(evt)=>{
        updateFlage(evt.target);
    })
