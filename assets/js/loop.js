"use strict";

let test = false,
	timer,
	mids = [],
	staticIndex = -1,
	minIndex = 0,
	maxIndex = 0,
	currentIndex = 0,
	currentMid = 0,
	currentMonster = {},
	preloadImagesArr = [];

$(document).ready(function() {
	getMids();
	// preload
	preload(preloadImagesArr);
	// start timer
	timer = setInterval(changeMonster, 10000); // 3500
	// show first one
	changeMonster();
});




function preload(imageArray, index) {
	index = index || 0;
	if (imageArray && imageArray.length > index) {
		var img = new Image();
		img.onload = function() {
			preload(imageArray, index + 1);
		};
		// console.log(imageArray[index]);
		img.src = imageArray[index];
		$('.preload').append("geg<img src='" + imageArray[index] + "'>");
	}


}

function getMids() {
	for (var key in MonstersById.data) {
		if (MonstersById.data[key].status == 2) {
			mids.push(key);
			preloadImagesArr.push('monsters/monsters-full/' + MonstersById.data[key].mid + '-anim-sheet.png');
		}
	}
	maxIndex = mids.length;
	if (test) {
		// set max in slider
		$('#slider').attr("min", minIndex);
		$('#slider').attr("max", maxIndex);
		$('.slider-wrapper').css({
			"display": "block"
		});
	}
}

function changeMonster() {
	try {

		// pick monster...
		var found = false;
		// that has status == 1
		while (!found) {
			// random
			// currentMonster = randomObjProperty(MonstersById.data);

			// testing (with slider)
			if (staticIndex >= 0) currentIndex = staticIndex;

			// get current mid
			currentMid = mids[currentIndex];
			// testing
			// currentMid = 218; // flower pot
			// get current monster
			currentMonster = MonstersById.data[currentMid];
			if (parseInt(currentMonster.status) >= 2) {
				found = true;
			} else {
				// remove this one
				// delete MonstersById.data[currentMid];
				// increment
				currentIndex++;
			}
		}
		// console.log("currentMid=" + currentMid, "currentMonster=" + JSON.stringify(currentMonster));

		// update slider
		$("#slider").val(currentIndex);

		let palette = {},
			paletteArr = [];

		// if palette set in monster then use it
		if (prop(PalettesByName.data[currentMonster.palette])) {
			palette = PalettesByName.data[currentMonster.palette];
			paletteArr = palette.hex;
		}
		// else look to see if parent is set
		else if (prop(PalettesByTier1Id.data[currentMonster.tier1id])) {
			palette = PalettesByTier1Id.data[currentMonster.tier1id];
			paletteArr = palette.hex;
		}


		let gradient = {},
			gradientArr = [],
			gradientStr = "";

		// is the mid in the gradient IDs?
		if (GradientsByMid.data[currentMid] && GradientsByMid.data[currentMid].hex1) {
			gradient = GradientsByMid.data[currentMid];
			gradientArr = [gradient.hex1, gradient.hex2];
		} else {
			gradientArr = ['#000', '#000'];
		}

		// create gradient
		gradientStr += "linear-gradient(0deg, " +
			gradientArr[0] + " 0%," +
			gradientArr[1] + " 45%," +
			gradientArr[0] + " 100%)";

		// set background color behind gradient
		$("body").css({
			"background": gradientArr[0]
		});
		// set gradient over background color
		$("#presentation").css({
			"background": gradientStr
		});

		// fill palette colors
		$(".palette").html(returnPaletteBoxes(paletteArr));

		createTaxonomyCrumbs(currentMonster, palette);


		$(".name").html(currentMonster.name + " monster <sup>cp:" + currentMonster.cp + "</sup>");

		let attacks = "",
			div = "";
		for (let i = 0; i < 4; i++) {
			let attack;
			// make sure tally doesn't already have that attack

			attack = randomObjProperty(Attacks.data);
			let img = "sword-pixel-13sq.png";
			if (attack.type == "defense")
				img = "shield-pixel-13sq.png";
			attacks += div + "<img src='assets/img/" + img + "'>" + attack.name;
			div = " ";
		}

		// default link color
		let linkColor = gradientArr[1];
		// if
		if (gradient.links) linkColor = gradient.links;

		let t =
			"<div class='monster-details'>" +
			"<div>IAB Content Taxonomy ID: " + currentMid + "</div>" +
			"<div>Advertising keywords: <span style='color:" + linkColor + "'>" + currentMonster.tags.replace(/,/g, ", ") + "</span>" + "</div>" +

			"<div class='attacks'>Attacks: " + attacks + "</div>" +
			"</div>";

		$(".tags").html(t);

		// set monster img
		$('.monster-sprite').css({
			'background-image': 'url("monsters/monsters-full/' + currentMonster.mid + '-anim-sheet.png' + '")'
		});

		// set background random color
		// original colors
		//let colors = ["75ec57", "6050f4", "a295f5", "6050f4", "d83e3f", "b5851f", "d83e3f", "71cdb7", "6a44ad"];
		// colors from the speed of thinking containers 20190213
		//colors = ["ff6854", "ff6854", "95e5f1", "6872ff", "ff68dd", "ff7156", "ff9c5b", "ff9c5b", "4e71cf"];
		//var bgColor = colors[Math.floor(Math.random() * colors.length)];
		//$('body').css('background', '#' + bgColor);


		// increase index
		if (++currentIndex >= mids.length) {
			currentIndex = 0;
		}
	} catch (err) {
		console.error(err);
	}
}


// make clickable for fullscreen
$(document).on("click", "#showFullScreen", function(){
	toggleFullscreen();
});
$('#slider').on('input', function() {
	staticIndex = $(this).val();
	changeMonster();
});
