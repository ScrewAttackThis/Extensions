$(document).ready(function () {
	var releaseDate = new Date('15 May 2012');
	$('.titlebox .usertext-body .md p:contains(Diablo 3 release):first').html('<strong>Diablo 3 releases in:</strong><div id="countdown"></div>');
	//$('.titlebox .usertext-body .md p').has('a[href="/openProg"]').countdown({ until: releaseDate, compact: true, format: 'dHMS', timezone: -7});
	$('#countdown').countdown({ until: releaseDate, compact: true, format: 'dHMS', timezone: -7 });
});