
	$(window).scroll(function () {
	var windowScrollTop = $(this).scrollTop();

	if(windowScrollTop>705){
	    $('#trigger').addClass('light');
	}
	else {
	    $('#trigger').removeClass('light');
	}
	if(windowScrollTop>760){
	   $('#trigger').removeClass('light');
	}

	if(windowScrollTop>1750){
	   $('#trigger2').addClass('skillsprog');
	}
	else{
		 $('#trigger2').removeClass('skillsprog');
	}
	if(windowScrollTop>1970){
	   $('#trigger2').removeClass('skillsprog');
	}

	if(windowScrollTop>3150){
	   $('.final').addClass('spaceship_me');
	}
	else{
	   $('.final').removeClass('spaceship_me');
	}
	if(windowScrollTop>3900){
	   $('.final').removeClass('spaceship_me');
	}
	});



//elementos aparecem/desaparecem conforme o scroll
// $(window).scroll(function(){
// 	var windowWidth = $(this).width();
// 	var windowHeight = $(this).height();
// 	var windowScrollTop = $(this).scrollTop();

	// effect - No1
// 	if(windowScrollTop>850){
// 		$('.moon').css('display','none');
// 	}
// 	else{
// 		$('.moon').css('display','block');
// 	}
// });


// parallax das estrelas

// $('#scene').parallax({
// 	calibrateX: false,
// 	calibrateY: true,
// 	invertX: false,
// 	invertY: true,
// 	limitX: false,
// 	limitY: false,
// 	scalarX: 5, //velocidade
// 	scalarY: 5,
// 	frictionX: 0.3, //smooth
// 	frictionY: 1,
// 	originX: 0.0,
// 	originY: 0.0
// });


function fly(){

	$(function () { // wait for document ready
		var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 100,	y: -20},
						{x: 300,	y: 10}
					]
			},
			looping : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 510,	y: 60},
						{x: 620,	y: -60},
						{x: 500,	y: -100},
						{x: 380,	y: 20},
						{x: 500,	y: 60},
						{x: 580,	y: 20},
						{x: 680,	y: 15}
					]
			},
			leave : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 780,	y: 20},
						{x: 800,	y: 130},
						{x: $(window).width() + 300,	y: -100},
					]
			}
		};
		// init controller
		//var controller = new ScrollMagic.Controller({vertical: false}); -> scroll horizontal
		var controller = new ScrollMagic.Controller();
		//controller.addScene(scene);

		// aviao voa e faz loops
		var tween = new TimelineMax()
			.add(TweenMax.to($("#plane"), 1, {css:{scale:2, bezier:flightpath.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#plane"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#plane"), 1, {x:750, y:-50, ease:Power1.easeInOut}))

		
		var scene = new ScrollMagic.Scene({
			//triggerElement: "#trigger", //a cena começa qd se alcança o trigger
			reverse: true,
			duration: 450, // durante o tempo da height da janela
			offset: 350 //começa depois de fazer scroll x px
		})
		.setPin("#target") //o elemento q queremos q faça a animaçao
		.setTween(tween);

		

		//spaceship with me
		var me_tween = new TimelineMax()
		.add(TweenMax.to($("#spaceshipme"), 2, {css:{scale:3, bezier:flightpath.leave}, ease:Power1.easeInOut}));

		var me_scene = new ScrollMagic.Scene({
			//triggerElement: "#run", //a cena começa qd se alcança o trigger
			reverse: true,
			duration: 800, // durante o tempo da height da janela
			offset: 2600 //começa depois de fazer scroll x px
		})
		.setTween(me_tween);

		//nave das skills
		var spaceship_tween = new TimelineMax()
		.add(TweenMax.to($("#target2"), 2, {scale:1, x:800, y:90, ease:Power1.easeInOut}))


		var scene2 = new ScrollMagic.Scene({
			//triggerElement: ".planets",
			reverse: true,
			duration: 250, // faz animaçao durante o scroll de x px
			offset: 1500 //começa depois de fazer scroll x px
		})
		.setTween(spaceship_tween);

		//foguetao das skills 
		var skills_tween = new TimelineMax()
		.add(TweenMax.to($("#skills"), 2, {x:900, y:-80, ease:Power1.easeInOut}))


		var skills_scene = new ScrollMagic.Scene({
			//triggerElement: ".planets",
			reverse: true,
			duration: 350, // faz animaçao durante o scroll de x px
			offset: 2200 //começa depois de fazer scroll x px
		})
		.setTween(skills_tween);

		//cometa 
		var cometa_tween = new TimelineMax()
		.add(TweenMax.to($("#cometa"), 2, {x:1600, y:580, ease:Power1.easeInOut}))
		.add(TweenMax.to($("#cometa"), 1, {scale:0.5, opacity:0, ease:Power1.easeInOut}));


		var cometa_scene = new ScrollMagic.Scene({
			//triggerElement: ".planets",
			reverse: true,
			duration: 350, // faz animaçao durante o scroll de x px
			offset: 1850 //começa depois de fazer scroll x px
		})
		.setTween(cometa_tween);



		//entrada dos planetas
		// var planet_tween = new TimelineMax()
			
		// 	.add(TweenMax.to($("#planet2"), 2, {scale:2, x:400, y:-30, ease:Power2.easeInOut}))		
		// 	.add(TweenMax.to($("#planet3"), 2, {scale:2, x:800, y:-105, ease:Power1.easeInOut}))
		// 	.add(TweenMax.to($("#planet4"), 2, {scale:2, x:1100, y:-5, ease:Power1.easeInOut}))
		// 	.add(TweenMax.to($("#planet5"), 2, {scale:1, x:550, y:-30, ease:Power2.easeInOut}))	
		// 	.add(TweenMax.to($("#planet6"), 2, {x:850, y:15, ease:Power2.easeInOut}))
		// 	.add(TweenMax.to($("#planet7"), 2, {x:1000, y:-30, ease:Power2.easeInOut}));

		// var planet_scene = new ScrollMagic.Scene({
		// 	//triggerElement: "#planet_trigger",
		// 	reverse: true,
		// 	duration: 400, // faz animaçao durante o scroll de x px
		// 	offset: 950 //começa depois de fazer scroll x px
		// })
		// .setTween(planet_tween);

		//aterragem do foguetão
	// 	var rocket_tween = new TimelineMax()
	// 	 .add(TweenMax.to($(".rocket"), 0.5, { y:-10, ease:Back.easeIn}));//movimento lançar

	// 	var rocket_scene = new ScrollMagic.Scene({
	// 	triggerElement: "#rocket_trigger",
	// 	reverse: true,
	// 	duration: 100, // faz animaçao durante o scroll de x px
	// 	offset: 10 //começa depois de fazer scroll x px
	// })
	// .setTween(rocket_tween);

		//elememtos aparecem/desaparecem
		// var ets = new ScrollMagic.Scene({triggerElement: "#trigger4"})
		// 			// trigger a velocity opaticy animation
		// 			.setVelocity("#et", {opacity: 0}, {duration: 400})


		//foguetao. chamas
		// var images = [
		// "/wp-content/themes/cenas/images/rocket1-05.png",
		// "/wp-content/themes/cenas/images/rocket2-05.png",
		// "/wp-content/themes/cenas/images/rocket3-05.png"
		// 	];
		// 	var obj = {curImg: 0};

		// 	var seq_tween = TweenMax.to(obj, 0.5,
		// 	{
		// 			curImg: images.length - 1,	// animate propery curImg to number of images
		// 			roundProps: "curImg",				// only integers so it can be used as an array index
		// 			repeat: 3,									// repeat 3 times
		// 			immediateRender: true,			// load first image automatically
		// 			ease: Linear.easeNone,			// show every image the same ammount of time
		// 			onUpdate: function () {
		// 			  $("#run").attr("src", images[obj.curImg]); // set the image source
		// 			}
		// 	});

		// 	var sequence = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 800})
		// 			.setTween(seq_tween);

		//sequencia boneca
		var images = [
		"images/motion-02.png",
		"images/motion-03.png",
		"images/motion-04.png",
		"images/motion-05.png",
		"images/motion-04.png",
		"images/motion-05.png"
			];
			var obj = {curImg: 0};

			var sequence_doll = TweenMax.to(obj, 0.05,
			{
					curImg: images.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",				// only integers so it can be used as an array index
					repeat: 0,									// repeat 3 times
					immediateRender: true,			// load first image automatically
					ease: Linear.easeOut,			// show every image the same ammount of time
					onUpdate: function () {
					  $("#doll").attr("src", images[obj.curImg]); // set the image source
					}
			});

			var doll = new ScrollMagic.Scene({duration: 1200})
					.setTween(sequence_doll);

			//queda
			var doll_tween = new TimelineMax()
		 	.add(TweenMax.to($("#doll"), 0.5, { y:100, ease:Circ.easeOut}));//movimento lançar

			var doll_scene = new ScrollMagic.Scene({
			reverse: true,
			duration: 230, // faz animaçao durante o scroll de x px
			offset: 400 //começa depois de fazer scroll x px
			})
			.setTween(doll_tween);

			//doll disappears
			var opacity_tween = new TimelineMax()
		 	.add(TweenMax.to($("#doll"), 2, {opacity:0, ease:Power1.easeInOut}));

			var opacity_scene = new ScrollMagic.Scene({
			reverse: true,
			duration: 80, // faz animaçao durante o scroll de x px
			offset: 700 //começa depois de fazer scroll x px
			})
			.setTween(opacity_tween);

			//aumenta lua
			// var fall_tween = new TimelineMax()
			// .add(TweenMax.to($("#doll"), 2, {scale:2}));

			// var fall_scene = new ScrollMagic.Scene({
			// reverse: true,
			// duration: 100, // faz animaçao durante o scroll de x px
			// offset: 300 //começa depois de fazer scroll x px
			// })
			// .setTween(fall_tween);

		//background fixed and absolute
		var back_tween = new TimelineMax()
			.add(TweenMax.to($(".stretch"), 2, { y:-900, ease:Power1.easeOut}));

		var back_scene = new ScrollMagic.Scene({
			//triggerElement: "#planet_trigger",
			reverse: true,
			duration: 2000, // faz animaçao durante o scroll de x px
			offset: 600 //começa depois de fazer scroll x px
		})
		.setTween(back_tween);

		controller.addScene([
  		scene,
  		scene2,
  		skills_scene,
  		cometa_scene,
  		// ets,
  		//planet_scene,
  		//rocket_scene,
  		//sequence,
  		doll,
  		doll_scene,
  		//fall_scene,
  		back_scene,
  		opacity_scene,
  		me_scene

		]);

	});

}
