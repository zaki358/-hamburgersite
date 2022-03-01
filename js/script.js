jQuery( function( $ ) {
	$( ".js-menu--open" ).on( "click", function() {
		//$( this ).toggleClass( "is-open" );
		$( ".p-menu" ).addClass( "is-open" );
		$( "body" ).addClass( "is-open" );
		$( ".c-layer--sidebar" ).addClass( "is-open" );

	} );
	$( ".js-menu--close" ).on( "click", function() {
		$( ".p-menu" ).removeClass( "is-open" );
		$( "body" ).removeClass( "is-open" );
		$( ".c-layer--sidebar" ).removeClass( "is-open" );
	} );
} );