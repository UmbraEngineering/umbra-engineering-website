
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
	function NavMenu(elem) {
		if (typeof elem === 'string') {
			elem = $(elem);
		}

		this.$elem = elem;
		this.initSubmenus();
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
			var widthPercent = Math.floor(99 / $submenuItems.length);
			$submenuItems.css('width', widthPercent + '%');
		});
	};

}(window, document, jQuery, _));