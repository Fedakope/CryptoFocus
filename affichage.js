
function Display() {

}



function InjectExchange() {
	document.getElementById("injecthere").innerHTML = ""
	console.log("Je suis dans la fonction InjectExchange")
	if (sessionStorage.getItem("tableauExchange")==null)
		var tableauExchange = []
	else
		var tableauExchange=JSON.parse(sessionStorage.getItem("tableauExchange"))

	console.log(tableauExchange)

	

	for (var i=0; i < tableauExchange.length;i++)
	{
		var p = tableauExchange[i];
		console.log("exchange " + i + " " + p.Name)
		document.getElementById("injecthere").innerHTML += `<div class="exchange"> <p> Nom de l'exchange : ${p.Name} </p> <a href=addasset.html> ajouter asset pour ${p.Name} </a> </div class="exchange">`;
	}
}

function InjectAsset() {
	document.getElementById("testbox").innerHTML = ""
	console.log("Je suis dans la fonction InjectAsset")
	if (sessionStorage.getItem("tableauAsset")==null)
		var tableauAsset = []
	else
		var tableauAsset=JSON.parse(sessionStorage.getItem("tableauAsset"))

	console.log(tableauAsset)

	

	for (var i=0; i < tableauAsset.length;i++)
	{
		var q = tableauAsset[i];
		console.log("asset " + i + " " + q.Exchange)
		document.getElementById("testbox").innerHTML += `<p>  ${q.Quantity} ${q.Coin} sur ${q.Exchange} valant ${q.Totaleuro} </p>`
	}
}
