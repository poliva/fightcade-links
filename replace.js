$('html *').replaceText( /fightcade:\/\/(challenge\-[0-9]{4}\-[0-9]{10,11}[.][0-9]{2}\@[a-z0-9_]{1,8})/g, '<a href="fightcade://$1">$1</a>' );
$('html *').replaceText( /(challenge\-[0-9]{4}\-[0-9]{10,11}[.][0-9]{2}\@[a-z0-9_]{1,8})/g, '<a href="fightcade://$1">$1</a>' );
