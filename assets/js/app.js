$(function(){

	// Allow the user to turn comments off
	$('.comments-toggle').on('click', function(event){
		$('span.com').toggle();
	});

	// Call prettprint manually
	prettyPrint();

	// Shine up the HTML:: calls
	var $html_elements = $("span.pln:contains('HTML')").removeClass('pln').addClass('typ');
	var $url_elements = $("span.pln:contains('URL')").removeClass('pln').addClass('typ');
	var $url_elements = $("span.pln:contains('SSH')").removeClass('pln').addClass('typ');
	var $url_elements = $("span.pln:contains('DB')").addClass('typ');

	// Allow the user to search for stuff on the page
	// thanks to the jquery highlight plugin here:
	// http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
	var search = function(){
		var $searchValue = $.trim($('#search').val());

		if ($searchValue === "" || $searchValue === undefined || $searchValue === null)
		{
			event.preventDefault();
			return false;
		}

		// Get the existing number of values that are highlighted
		var $values = $('span .highlight');

		// If the search value is the same between more than one submit, go!
		// btw, global variables are the best, aren't they?!
		if (window.searchValue === $searchValue && $values.length > 0)
		{
			// global fuckin' iterator, man
			if (window.searchIterator == null || window.searchIterator == $values.length)
			{
				window.searchIterator = 0;
			}

			// dat jquery animate
			$('html, body').animate({
				scrollTop: $($values[window.searchIterator]).offset().top - 50
			}, 10);

			// self-explaining code ftw
			window.searchIterator++;
		}

		// global state anyone?
		window.searchValue = $searchValue;

		// re-highlight in case something's changed
		// this is probably a pretty expensive DOM call but yolo
		$("span").removeHighlight();
		$("span").highlight($searchValue);
	};

	// I made this so it doesn't have to be a form event
	// form events append their stuff to the uri
	$('#search').on('keypress', function(event){
		if (event.which == 13)
		{
			search();
		}
	});

	// No form event to clutter the uri with
	// your search terms
	$('#search-button').click(search);

	// Focus the user's cursor to the search box on page load
	$('#search').focus();

	// To the top functionality
	$('#top-button').on('click', function(event){
		$('html, body').animate({scrollTop: 0}, "medium");
		return false;
	});

	// Initialize foundation, or else!
	$(document).foundation();

});

