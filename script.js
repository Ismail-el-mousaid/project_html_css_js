

function calculer()
{
    if(principal.value < 1){
        alert("Le montant doit être une quantité positive")
        principal.focus()
        return
    }

    let interest = principal.value * years.value * rate.value / 100;
    yearInFuture = new Date().getFullYear() + parseInt(years.value);
    result = document.getElementById("result")
    result.innerHTML = "<p>Si vous déposez <mark>"+ principal.value +"</mark>,<br>un taux d'intérêt de <mark>" + rate.value + "%</mark>.<br>Vous recevrez un montant de <mark>"+interest+"</mark>,<br>dans l'année <mark>"+yearInFuture+"</mark></p>";

}


function refreshCurseur(){
	rate.value
	document.getElementById("rateLabel").innerText = rate.value + "%"}


	finishPage = () =>{
	    var rate = document.getElementById("rate");
	    var principal = document.getElementById("principal");
	    var years = document.getElementById("years");
	    years = document.getElementById("years");
	    for(i=1; i<=10; i++){
	    	let element = document.createElement("option")
	    	element.innerText = i
	    	element.setAttribute("value", i)
	    	years.appendChild(element)
	    }
}
