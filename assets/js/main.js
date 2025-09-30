// ACTIVE NAV STYLING

$(".nav li a").each(function(){
	if(this.href == window.location.href) {
		$(this).addClass("active");
	}
});

// LIGHTBOX: SIGN-UP

$('.button-signup-trigger').magnificPopup({
  type:'inline',
  midClick: true,
  fixedContentPos: true
});