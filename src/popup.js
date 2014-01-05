function onTableauLinkClick(e) {

	var props = { 'url': e.target.href };

	e.preventDefault();
	
	if (e.ctrlKey) {
		props['active'] = e.altKey;
		chrome.tabs.create(props);
	}
	else
		chrome.tabs.update(props);

	window.close();			
}

document.addEventListener('DOMContentLoaded', function(){	
	var links = document.querySelectorAll('a');
	console.log(links.length);
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', onTableauLinkClick);
	}
});