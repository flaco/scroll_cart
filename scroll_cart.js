if (window.XMLHttpRequest) {
	var SC = {}
	SC.o = $('#order_column .order');
	SC.t = SC.o.offset().top;
	SC.m = $(".main").height();
	SC.mo = SC.m - SC.o.height();
	SC.ms = (SC.mo + SC.t);

	scrollIt = function(w){
		SC.w = $(window).scrollTop();
		if (SC.t <= SC.w && SC.w <= SC.ms) {
			SC.o.addClass('fixed');
			SC.o.css({'position': 'fixed', 'top': '0px', 'left': ($(".main").offset().left + 714) + 'px','margin-top': '0px' });
		} else if (SC.w >= SC.ms) {
			SC.o.removeClass('fixed');
			SC.o.css({'position': 'absolute','top': 'auto', 'left': 'auto','margin-top': SC.mo});
		} else {
			SC.o.removeClass('fixed');
			SC.o.css({'position': 'absolute','top': 'auto', 'left': 'auto','margin-top': '0px'});
		};	
	}

	$(window).scroll(function(){
		scrollIt();
	});
}
