/**
 * ================================================================================
 * Arable Interactivity
 * --------------------------------------------------------------------------------
 * Author:	  Andrew Hosgood
 * Version:	 0.9.0
 * Date:		02/07/2014
 * ================================================================================
 */

jQuery(
	function( $ ) {
		/* ===================================================== TREE NAVIGATION ===================================================== */
		$( 'ul.tree.arable-interactive' ).on( 'click', 'li',
			function( e ) {
				e.stopPropagation();
				$( this ).children( 'ul' ).toggleClass( 'open' );
			}
		).on( 'click', 'li ul',
			function( e ) {
				e.stopPropagation();
				$( this ).find( '> li ul' ).toggleClass( 'open' );
			}
		).on( 'click', 'li a',
			function( e ) {
				e.stopPropagation();
			}
		).addClass( 'interactive' );

		if( !window.isFontAvailable( 'Helvetica Neue' )
				&& !window.isFontAvailable( 'HelveticaNeue' )
				&& !window.isFontAvailable( 'Helvetica' ) ) {
			$( 'head' ).append( '<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800" type="text/css" rel="stylesheet">' );
		}
	}
);

/**
 * Checks if a font is available to be used on a web page.
 *
 * @param {String} fontName The name of the font to check
 * @return {Boolean}
 * @license MIT
 * @copyright Sam Clarke 2013
 * @author Sam Clarke <sam@samclarke.com>
 */
(function (document) {
	var calculateWidth, monoWidth, serifWidth, sansWidth, width;
	var body		  = document.body;
	var container	 = document.createElement('div');
	var containerCss  = [
		'position:absolute',
		'width:auto',
		'font-size:128px',
		'left:-99999px'
	];

	// Create a span element to contain the test text.
	// Use innerHTML instead of createElement as it's smaller
	container.innerHTML = '<span style="' + containerCss.join(' !important;') + '">' +
	Array(100).join('wi') +
	'</span>';
	container = container.firstChild;

	calculateWidth = function (fontFamily) {
		container.style.fontFamily = fontFamily;

		body.appendChild(container);
		width = container.clientWidth;
		body.removeChild(container);

		return width;
	};

	// Pre calculate the widths of monospace, serif & sans-serif
	// to improve performance.
	monoWidth  = calculateWidth('monospace');
	serifWidth = calculateWidth('serif');
	sansWidth  = calculateWidth('sans-serif');

	window.isFontAvailable = function (fontName) {
		return monoWidth !== calculateWidth(fontName + ',monospace') ||
		sansWidth !== calculateWidth(fontName + ',sans-serif') ||
		serifWidth !== calculateWidth(fontName + ',serif');
	};
})(document);
