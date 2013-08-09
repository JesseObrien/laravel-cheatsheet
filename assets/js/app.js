// Allow the user to turn comments off
$('.comments-toggle').on('click', function(event){
	$('span.com').toggle();
});

// Call prettprint manually
prettyPrint();

// Shine up the HTML:: calls
var $elements = $("span.pln:contains('HTML')").removeClass('pln').addClass('typ');

