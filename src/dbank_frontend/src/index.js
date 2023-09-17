import {dbank_backend} from "../../declarations/dbank_backend";

window.addEventListener("load",Update()
);

document.querySelector("form").addEventListener("submit",async function (event) {

   event.preventDefault();
  console.log("Working");
  const button=event.target.querySelector("#submit-btn");

    const inputAmount=parseFloat(document.getElementById("input-amount").value);
    const outputAmount=parseFloat(document.getElementById("withdrawal-amount").value);
    button.setAttribute("disabled",true);


  if(document.getElementById("input-amount").value.length !=0)
  {
    await dbank_backend.topUP(inputAmount);
  }
    if(document.getElementById("withdrawal-amount").value !=0)
    {
      await dbank_backend.withDraw(outputAmount);
    }
    dbank_backend.compound();
    Update();
    document.getElementById("input-amount").value="";
    document.getElementById("withdrawal-amount").value="";
    button.removeAttribute("disabled");

})
async function Update() {
  const currentAmount=await dbank_backend.checkBalance();
    document.getElementById("value").innerText=Math.round(currentAmount*100)/100;
}