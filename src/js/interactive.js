/**
 * ================================================================================
 * Shadow CSS Interactivity
 * --------------------------------------------------------------------------------
 * Author:      Andrew Hosgood
 * Version:     0.9.0
 * Date:        02/07/2014
 * ================================================================================
 */

jQuery(
	function( $ ) {
		/* ===================================================== TREE NAVIGATION ===================================================== */
		$( 'ul.tree.shdw-interactive' ).on( 'click', 'li',
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
	}
);