MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    // console.log(mutations);
	$('html *').replaceText( /fightcade:\/\/(challenge\-[0-9]{4}\-[0-9]{10,11}[.][0-9]{2}\@[a-z0-9_]{1,8})/g, '<a href="fightcade://$1">$1</a>' );
	$('html *').replaceText( /(challenge\-[0-9]{4}\-[0-9]{10,11}[.][0-9]{2}\@[a-z0-9_]{1,8})/g, '<a href="fightcade://$1">$1</a>' );
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
    subtree: true,
    attributes: true,
    childList: true,
    characterData: true,
    attributeOldValue: true,
    characterDataOldValue: true
});

$('html *').replaceText( /fightcade:\/\/(challenge\-[0-9]{4}\-[0-9]{10,11}[.][0-9]{2}\@[a-z0-9_]{1,8})/g, '<a href="fightcade://$1">$1</a>' );
$('html *').replaceText( /(challenge\-[0-9]{4}\-[0-9]{10,11}[.][0-9]{2}\@[a-z0-9_]{1,8})/g, '<a href="fightcade://$1">$1</a>' );
