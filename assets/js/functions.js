"use strict";


// PROJECT



// return a monster (or monster's parent) palette
function returnPaletteData(monster) {
	try {
		let paletteObj = {},
			paletteArr = [];

		// if palette set in monster then use it
		if (prop(monster.palette) && prop(PalettesByName.data[monster.palette])) {
			paletteObj = PalettesByName.data[monster.palette];
			paletteArr = paletteObj.hex;
		}
		// else look to see if parent is set
		else if (prop(PalettesByTier1Id.data[monster.tier1id])) {
			paletteObj = PalettesByTier1Id.data[monster.tier1id];
			paletteArr = paletteObj.hex;
		}
		// console.log(currentMonster, "paletteArr", paletteArr);

		return [paletteObj, paletteArr];

	} catch (err) {
		console.error(err);
	}
}

// return palette colors
function returnPaletteBoxes(palette) {
	try {
		console.log("returnPaletteBoxes() [1]",palette);
		if (palette == undefined) return "";
		var arr = palette.split(","),
			str = "";
				console.log("returnPaletteBoxes() [2]",arr);
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == undefined) continue;
			str += '<span class="palette-box" style="background-color:' + arr[i] + '"> </span>';
		}
			console.log("returnPaletteBoxes() [3]",str);
		return str;
	} catch (err) {
		console.error(err);
	}
}

// return breadcrumb-formatted taxonomy
function createTaxonomyCrumbs(monster, palette) {
	try {
		let str = "",
			svg1, svg2, svg3, svg4;
		if (monster.tier1) {
			str += "<span class='tier1 tier-text' style='background:" + palette.tier1 + "'>" + monster.tier1 + "</span>";
			str += "<span id='tier1svg'></span>";
		}
		if (monster.tier2) {
			str += "<span class='tier2 tier-text' style='background:" + palette.tier2 + "'>" + monster.tier2 + "</span>";
			str += "<span id='tier2svg'></span>";
		}
		if (monster.tier3) {
			str += "<span class='tier3 tier-text' style='background:" + palette.tier3 + "'>" + monster.tier3 + "</span>";
			str += "<span id='tier3svg'></span>";
		}
		if (monster.tier4) {
			str += "<span class='tier4 tier-text' style='background:" + palette.tier4 + "'>" + monster.tier4 + "</span>";
			str += "<span id='tier4svg'></span>";
		}
		// finish last span
		str += "</span>";
		// add html string
		$(".taxonomy").html(str);
		// once elements are on page add svgs
		if (monster.tier1) {
			svg1 = SVG('tier1svg').size(20, 30).polygon('0,0 8,15 0,30').fill(palette.tier1);
		}
		if (monster.tier2) {
			svg2 = SVG('tier2svg').size(20, 30).polygon('0,0 8,15 0,30').fill(palette.tier2);
			$('#tier1svg').css({
				'background': palette.tier2
			}); // add background color to previous svg
		}
		if (monster.tier3) {
			svg3 = SVG('tier3svg').size(20, 30).polygon('0,0 8,15 0,30').fill(palette.tier3);
			$('#tier2svg').css({
				'background': palette.tier3
			}); // add background color to previous svg
		}
		if (monster.tier4) {
			svg4 = SVG('tier4svg').size(20, 30).polygon('0,0 8,15 0,30').fill(palette.tier4);
			$('#tier2svg').css({
				'background': palette.tier3
			}); // add background color to previous svg
		}


	} catch (err) {
		console.error(err);
	}
}


// return a string of the taxonomy
function returnTaxonomy(monster, palette) {
	try {
		var str = "";
		if (monster.tier1) str += "<span style='padding:3px;background:" + palette.tier1 + "'>" + monster.tier1 + "</span>";
		if (monster.tier2) str += "<span style='padding:3px;background:" + palette.tier2 + "'>" + monster.tier2 + "</span>";
		if (monster.tier3) str += "<span style='padding:3px;background:" + palette.tier3 + "'>" + monster.tier3 + "</span>";
		if (monster.tier4) str += "<span style='padding:3px;background:" + palette.tier4 + "'>" + monster.tier4 + "</span>";
		return str;
	} catch (err) {
		console.error(err);
	}
}

// return a string of the taxonomy
function returnTaxonomyIds(monster) {
	try {
		var arr = [];
		if (monster.tier1id) arr.push(monster.tier1id);
		if (monster.tier2id) arr.push(monster.tier2id);
		if (monster.tier3id) arr.push(monster.tier3id);
		if (monster.tier4id) arr.push(monster.tier4id);
		return arr.join(" : ");
	} catch (err) {
		console.error(err);
	}
}




function returnGradientStr(arr) {
	try {
		var str = "";
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == undefined) break;
			if (i > 0) str += "\t";
			str += '<span style="background-color:' + arr[i] + '">' + arr[i] + '</span>';
		}
		return str;
	} catch (err) {
		console.error(err);
	}
}

function returnGradientArr(palette, select) {
	try {
		if (palette == undefined) return "";
		var arr = palette.split(","),
			str = "";
		if (select == "random")
			//return [arr[Math.floor(Math.random() * arr.length)], arr[Math.floor(Math.random() * arr.length)]];
			return [randomHex(), randomHex()];
	} catch (err) {
		console.error(err);
	}
}


function randomHex() {
	let r = Math.floor(Math.random() * 255),
		g = Math.floor(Math.random() * 255),
		b = Math.floor(Math.random() * 255);
	return rgbToHex(r, g, b);
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}



/**
 *	Make ele fullscreen
 */
function toggleFullscreen(eleStr = '#presentation') {
	// if already full screen; exit
	if (
		document.fullscreenElement ||
		document.webkitFullscreenElement ||
		document.mozFullScreenElement ||
		document.msFullscreenElement
	) {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}
	// else go fullscreen
	else {
		let element = $(eleStr).get(0);
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		} else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		}
	}
}


(function() {
	var mouseTimer = null,
		cursorVisible = true;

	function disappearCursor() {
		mouseTimer = null;
		document.body.style.cursor = "none";
		cursorVisible = false;
	}

	document.onmousemove = function() {
		if (mouseTimer) {
			window.clearTimeout(mouseTimer);
		}
		if (!cursorVisible) {
			document.body.style.cursor = "default";
			cursorVisible = true;
		}
		mouseTimer = window.setTimeout(disappearCursor, 1000);
	};
})();



//  GENERAL

var randomObjProperty = function(obj) {
	try {
		var keys = Object.keys(obj);
		return obj[keys[keys.length * Math.random() << 0]];
	} catch (err) {
		console.error(err);
	}
};

function prop(obj) {
	try {
		if (typeof obj !== 'undefined' && obj && obj !== null) return true;
		else return false;
	} catch (err) {
		console.error(err);
	}
}
