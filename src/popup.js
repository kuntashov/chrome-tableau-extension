function onTableauLinkClick(e) {
	
	/* Ctrl+Click opens new tab automatically. */
	if (e.ctrlKey) 
		return;

	/* Just open clicked item in current window. */
	e.preventDefault();

	chrome.tabs.executeScript(null, {code:"window.location='" + e.target.href + "';"});

	window.close();			
}

document.addEventListener('DOMContentLoaded', function(){	
	var links = document.querySelectorAll('a');
	console.log(links.length);
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', onTableauLinkClick);
	}
});