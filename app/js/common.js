$(function() {

	const getWidth = function() {
		return $(window).width();
	}
	
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

	function mobileChose(item) {
		let width = getWidth();

		if ( width < 1200 ) {
			let $item       = $(item);
			let outBlock    = $item.find('.hero__resonse');
	
			if ( !$(item).hasClass('hero-item__wrapper--active') ) {
				$(item).addClass('hero-item__wrapper--active');
				outBlock.slideDown();
				
			} else {
				$(item).removeClass('hero-item__wrapper--active');
				outBlock.slideUp();
			}

			if ($(".hero-item__wrapper--active").length === 0) {
				$('.hero').removeClass('hero--height');
			} else {
				$('.hero').addClass('hero--height');
			}

		}
	}

	$('.type-tabs__item').on('click', function(e) {
		tabs(this);
	});

	$('.hero-item__wrapper').on('click', function() {
		mobileChose(this);
	});


})
