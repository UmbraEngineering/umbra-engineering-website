
// 
// Wide sub-menu dropdown
// 
// Author: James Brumond <james@jbrumond.me> (http://www.jbrumond.me)
// 

(function(window, document, $, _) {
	
	// 
	// Expose the NavMenu class
	// 
	window.NavMenu = NavMenu;

	// 
	// NavMenu constructor
	// 
	function NavMenu(elem, sideMenu) {
		if (typeof elem === 'string') {
			elem = $(elem);
		}

		if (typeof sideMenu === 'string') {
			sideMenu = $(sideMenu);
		}

		this.$elem = elem;
		this.$sideMenu = sideMenu;

		this.initSubmenus();
		this.highlightCurrentPage();
	}

	// 
	// Handles sub-menu initializing
	// 
	NavMenu.prototype.initSubmenus = function() {
		this.$items = this.$elem.children('li');
		
		// Handle show/hide on hover
		this.$items.each(function() {
			var $item = $(this);
			var $submenu = $item.find('ul');
			var $submenuItems = $submenu.find('li');

			// No point continuing if there are no sub-menu items
			if (! $submenuItems.length) {return;}

			// Make sure sub-menu items have the correct width
			var widthPercent = 99.8 / $submenuItems.length;
			$submenuItems.css('width', widthPercent + '%');
		});
	};

	// 
	// Highlight the current page on the main nav as well as the side-menus
	// 
	NavMenu.prototype.highlightCurrentPage = function() {
		// Get the pathname
		var uri = location.pathname;
		if (uri.charAt(0) !== '/') {
			uri = '/' + uri;
		}

		// Get the root section for main nav selection
		var root = uri.split('/')[1];

		// Get the first segment of the path and find the correct navigation link to highlight
		this.$items.each(function() {
			var $link = $(this).children('a');
			var href = $link.attr('href');
			if (href.split('/')[1] === root) {
				$link.addClass('selected');
			}
		});

		// If there is no sidenav, we are done
		if (! this.$sideMenu.length) {return;}

		// Find the submenu link that matches
		this.$sideMenu.find('a').each(function() {
			var $link = $(this);
			var href = $link.attr('href');
			if (href === uri) {
				$link.addClass('selected');
			}
		});
	};

}(window, document, jQuery, _));