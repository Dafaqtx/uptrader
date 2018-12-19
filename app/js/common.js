$(function() {
	
	function tabs(item) {
		let $item       = $(item);
		let listItems   = $('.type-tabs__item');
		let index       = listItems.index($item);
		let tabsItem    = $('.type-tabs__item');
		let tabsContent = $('.type-tabs__content');

		tabsItem.removeClass('type-tabs__item--active');
		$item.addClass('type-tabs__item--active');

		tabsContent.removeClass('type-tabs__content--active');
		$('.type-tabs__content:eq(' + index + ')').addClass('type-tabs__content--active');

	}

	$('.type-tabs__item').on('click', function(e) {
		tabs(this);
	});


})
