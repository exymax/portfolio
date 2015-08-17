$(document).ready(function(){
	
		var profileHolder = $("#profile-holder"), bioHolder = $("#bio-holder"), ex = $("#ex"), linksWrapper = $("#links-wrapper"), works = $("#works"),
		bioCSS = {
			"display": "block",
			"width" : "100%",
			"height" : "35%",
			"opacity" : "1",
			"bottom" : "0"
		},
		profileCSS = {
			"display": "block",
			"width" : "100%",
			"height" : "65%",
			"opacity" : "1",
			"top" : "0"
		}
		
	setTimeout(function() {
		ex.removeClass("fabAppear").css({
			"transform":"scale(1)"
		});
	}, 2400);
		
	
	var MaterialAnim = {

		profileAppear: function() {
			profileHolder.css({
				"display": "block"
			}).animate({
				top: 0,
				opacity: 1
			}, 400);

		},

		profileDisappear: function () {
			profileHolder.animate({
				top: "40px",
				opacity: 0
			}, {
				duration: 400,
				complete: function() {
					profileHolder.css({
						"display": "none"
					});
				}
			});
		},

		bioAppear: function () {
			bioHolder.css({
				"display": "block"
			}).animate({
				bottom: 0,
				opacity: 1
			}, 400);
		},

		bioDisappear: function() {
			bioHolder.animate({
				bottom: "-65px",
				opacity: 0
			}, {
				duration: 400,
				complete: function() {
					bioHolder.css({
						"display": "none"
					});
				}
			});
		},
		
		worksAppear: function() {
			works.css({
				"display": "block"
			}).animate({
				top: 0,
				opacity: 1
			}, 400);
		},
		
		worksDisappear: function() {
			works.animate({
				top: "40px",
				opacity: 0
			}, {
				diration: 400,
				complete: function() {
					works.css({
						"display": "none"
					})
				}
			});
		}

	};
	
	setTimeout(function() {
		MaterialAnim.profileAppear();
		MaterialAnim.bioAppear();
	}, 800);
	
	$(".btn-ripple").on("mousedown", function(e) {
		var offsets = $(this).offset(),
			cursorLeft = e.pageX - offsets.left,
			cursorTop = e.pageY - offsets.top;
		$(this).append("<div class='ripple'></div>");
		var ripple = $(this).children(".ripple");
		ripple.css({
			"top": cursorTop+"px",
			"left": cursorLeft+"px"
		});
		setTimeout(function() {
			ripple.remove();
		}, 350)
	});
	
	setTimeout(function() {
		$("#ripple-circle").remove();
	}, 1000);
	
	ex.on("click", function() {
			setTimeout(function() {
				profileHolder.css("overflow", "hidden");
			}, 250);
			$(this).addClass("fabToLinks");
			setTimeout(function() {
				ex.css({
					"background" : "rgba(20, 20, 20, .9)",
					"background-repeat" : "no-repeat",
					"transform" : "scale(25)",
					"-webkit-transform" : "scale(25)"
				}).removeClass("fabToLinks");
				linksWrapper.fadeIn("fast");
				bioHolder.css("z-index", "15");
			}, 800);

			setTimeout(function() {
				linksWrapper.append('<div id="close-links" class="showClose"></div>');
			}, 1000);

	});
	
	linksWrapper.on("click", "#close-links", function () {
		$(this).fadeOut("fast").remove();
		setTimeout(function () {
			linksWrapper.fadeOut("fast");
		}, 200);
		setTimeout(function () {
			profileHolder.removeAttr("style").css(profileCSS);
		}, 600);
		
		setTimeout(function() {
			bioHolder.css(bioCSS);
		}, 750);
		
		setTimeout(function () {
			ex.addClass("linksToFab").on("animationend", function() {
				$(this).removeAttr("style").css("transform", "scale(1)").removeClass("linksToFab");
			});
		}, 120);
	});
	
	$("#go-to-works").click(function() {
		MaterialAnim.profileDisappear();
		MaterialAnim.bioDisappear();
		//setTimeout(function() {
		MaterialAnim.worksAppear();
		//}, 350);
	});
	
	$("#back-arrow").click(function() {
		MaterialAnim.worksDisappear();
		delay(MaterialAnim.profileAppear(), 200);
		delay(MaterialAnim.bioAppear(), 300);
	});
	
});
