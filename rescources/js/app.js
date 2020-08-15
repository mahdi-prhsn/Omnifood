$(document).ready(function () {
	/* stickey menu */

	$(".js--section--features").waypoint(
		function (direction) {
			if (direction == "down") {
				$(".top-header-wrapper").addClass("sticky");
			} else {
				$(".top-header-wrapper").removeClass("sticky");
			}
		},
		{
			offset: "65px",
		}
	);

	$(".js--nav--icon").click(function () {
		var nav = $(".mobile__nav");
		nav.slideToggle(200);
	});

	
});
