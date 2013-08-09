// Allow the user to turn comments off
$('.comments-toggle').on('click', function(event){
	$('span.com').toggle();
});

// Call prettprint manually
prettyPrint();

// Shine up the HTML:: calls
var $html_elements = $("span.pln:contains('HTML')").removeClass('pln').addClass('typ');
var $url_elements = $("span.pln:contains('URL')").removeClass('pln').addClass('typ');

