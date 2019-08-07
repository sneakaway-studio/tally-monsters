"use strict";

let timer,
	mids = [],
	currentIndex = 0,
	currentMid = 0,
	currentMonster = {};

$(document).ready(function() {
	getMids();
	// start timer
	timer = setInterval(changeMonster, 3500);
	// show first one
	changeMonster();
});

function getMids() {
	for (var key in MonstersById.data) {
		mids.push(key);
	}
}

function changeMonster() {

	// pick monster...
	var found = false;
	// that has status == 1
	while (!found) {
		// currentMonster = randomObjProperty(MonstersById.data);
		// get current mid
		currentMid = mids[currentIndex];
		// get current monster
		currentMonster = MonstersById.data[currentMid];
		if (parseInt(currentMonster.status) >= 2) {
			found = true;
		} else {
			// remove this one
			delete MonstersById.data[currentMid];
			// increment
			currentIndex++;
		}
	}
	console.log("currentMid=" + currentMid, "currentMonster=" + JSON.stringify(currentMonster));

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

	// is the gradient id saved in the monster data?
	if (currentMonster.gradient && GradientsByMid.data[currentMonster.gradient]) {
		gradient = GradientsByMid.data[currentMonster.gradient];
		gradientArr = gradient.hex.split(",");
	}
	// or is the mid in the gradient IDs?
	else if (GradientsByMid.data[currentMid] && GradientsByMid.data[currentMid].hex) {
		gradient = GradientsByMid.data[currentMid];
		gradientArr = gradientArr.hex.split(",");
	}

	// create gradient
	gradientStr += "linear-gradient(0deg, " +
		gradientArr[0] + " 0%," +
		gradientArr[1] + " 45%," +
		gradientArr[0] + " 100%)";

	$("body").css({
		"background": gradientStr
	});
	$(".palette").html(returnPaletteBoxes(paletteArr));

	createTaxonomyCrumbs(currentMonster, palette);


	$(".name").html(currentMonster.name + " monster <sup>cp:" + currentMonster.cp + "</sup>");

	$(".tags").html("This tracker is found on websites containing: " + currentMonster.tags.replace(/,/g, ", "));

	// set monster img
	$('.monster-sprite').css({
		'background-image': 'url( monsters-400h/' + currentMonster.mid + '-anim-sheet.png'
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
		getMids(); // regenerate mids
		currentIndex = 0;
	}

}
