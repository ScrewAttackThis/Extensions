try {
	var theme = localStorage.getItem('theme');

	if (theme == null) {
		$('html').attr('lang', 'en');
	} else {
		$('html').attr('lang', theme);
	}
} catch (e) {
	alert(e.Message);
}

$(document).ready(function () {
	//url(http://a.thumbs.redditmedia.com/YPSvxNJWfsGq58Wf.png)
	$('div.side div.usertext-body .md a[href="http://www.reddit.com/r/Diablo"]').click(function (e) {
		e.preventDefault();
		changeTheme('en');
	});
	$('div.side div.usertext-body .md a[href="http://dd.reddit.com/r/Diablo"]').click(function (e) {
		e.preventDefault();
		changeTheme('dd');
	});
});

function changeTheme(themeName)
{
	try {
		$('html').fadeOut('fast', function () {
			$('html').attr('lang', themeName);
			localStorage.removeItem('theme');
			localStorage.setItem('theme', themeName);
			$('html').fadeIn('fast');
		});
	}
	catch (e) {
		alert(e.Message);
	}
}