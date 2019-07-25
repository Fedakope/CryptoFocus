// SAVE EXCHANGE
function SaveExchange() {
	sessionStorage.setItem("tableauExchange", JSON.stringify(exchangeList));
	console.log("echanges saved")
}


// LOAD EXCHANGE
function LoadExchange() {
	var loadedexchange = JSON.parse(sessionStorage.getItem("tableauExchange"));
	return loadedexchange		
};

// exchangeList = LoadExchange();

// comme exchangeList ne veut pas changer je mets dans exchangeList2 : 
//window.onload = function() {
exchangeList = LoadExchange()
//}

// exchangeList2 = LoadExchange();



// SAVE ASSET 
function SaveAsset() {
	sessionStorage.setItem("tableauAsset", JSON.stringify(assetList));
	console.log("asset saved")
}

// LOAD ASSET
function LoadAsset() {
	var loadedasset = JSON.parse(sessionStorage.getItem("tableauAsset"));
	return loadedasset		
};

// assetList = LoadAsset();
// comme assetList ne veut pas changer je mets dans assetList2 : 

assetList = LoadAsset()
