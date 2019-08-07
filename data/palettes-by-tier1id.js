"use strict";

var PalettesByTier1Id = (function() { 

var data = 
{"1":{"tier1id":"1","name":"PM-001-automotive","tier1":"#74037f","tier2":"#92048e","tier3":"#b305a0","tier4":"#d307b0","hex":"#2cda00,#ffa0e9,#d300b8,#68007e,#e3cb2b,#9fa7b2,#6e7681,#4d5257,#2f2f2f","Adobe link to library":"https://adobe.ly/2X0UKTe","# in category":"8"},"42":{"tier1id":"42","name":"PM-042-books-and-literature","tier1":"#003c51","tier2":"#00526b","tier3":"#006e8d","tier4":"#0086ab","hex":"#121a1e,#081e29,#0d364a,#075377,#177896,#058eb8,#c6ad44,#edc000,#d5000b,#5b0509","Adobe link to library":"https://adobe.ly/2WYH9a6","# in category":"3","Notes (in bold are reused palettes)":"Use PM-132-education"},"52":{"tier1id":"52","name":"PM-052-business-and-finance","tier1":"#0d7f54","tier2":"#0a9962","tier3":"#05b974","tier4":"#01d282","hex":"#353535,#fbfbfb,#f413bc,#aa4388,#d513f4,#f4e713,#42da82,#31a8cb","Adobe link to library":"https://adobe.ly/2FpZBT6","# in category":"32"},"110":{"tier1id":"110","name":"PM-110-power-and-energy-industry","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#400037,#14fcff,#30a4b2,#ff14c5,#d9229b,#ec381a,#db14ff,#ece51a","Adobe link to library":"https://adobe.ly/2XcPvyW","# in category":"1","Notes (in bold are reused palettes)":"Exception within category, also some of this palette in 274-home-garden"},"123":{"tier1id":"123","name":"PM-123-careers","tier1":"#003c51","tier2":"#00526b","tier3":"#006e8d","tier4":"#0086ab","hex":"#121a1e,#081e29,#0d364a,#075377,#177896,#058eb8,#c6ad44,#edc000,#d5000b,#5b0509","Adobe link to library":"https://adobe.ly/2WYH9a6","# in category":"3","Notes (in bold are reused palettes)":"Use PM-132-education"},"132":{"tier1id":"132","name":"PM-132-education","tier1":"#003c51","tier2":"#00526b","tier3":"#006e8d","tier4":"#0086ab","hex":"#121a1e,#081e29,#0d364a,#075377,#177896,#058eb8,#c6ad44,#edc000,#d5000b,#5b0509","Adobe link to library":"https://adobe.ly/2WYH9a6","# in category":"17"},"150":{"tier1id":"150","name":"PM-150-events-and-attractions","tier1":"#f74229","tier2":"#f9672c","tier3":"#fc9731","tier4":"#febd34","hex":"#6939ac,#48daa3,#ec391a,#f9c900,#4d7bbd,#f6717b,#fdfaf1,#998579,#696362","Adobe link to library":"https://adobe.ly/2Fo2F1R","# in category":"35"},"186":{"tier1id":"186","name":"PM-186-family-and-relationships","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#6939ac,#48daa3,#ec391a,#f9c900,#4d7bbd,#f6717b,#fdfaf1,#998579,#696362","Adobe link to library":"https://adobe.ly/2Fo2F1R","# in category":"13","Notes (in bold are reused palettes)":"Use PM-150-events-and-attractions"},"201":{"tier1id":"201","name":"PM-201-fine-art","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#121a1e,#081e29,#0d364a,#075377,#177896,#058eb8,#c6ad44,#edc000,#d5000b,#5b0509","Adobe link to library":"https://adobe.ly/2WYH9a6","# in category":"8","Notes (in bold are reused palettes)":"Use PM-132-education"},"210":{"tier1id":"210","name":"PM-210-food-drink","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#494949,#6a6a6a,#463260,#518d47,#69b74b,#69b74b,#69b74b,#69b74b,#74ffc4,#6ee966,#6ee966,#69437b","Adobe link to library":"https://adobe.ly/2WXT4oz","# in category":"12"},"223":{"tier1id":"223","name":"PM-223-healthy-living","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#494949,#6a6a6a,#463260,#518d47,#69b74b,#69b74b,#69b74b,#69b74b,#74ffc4,#6ee966,#6ee966,#69437b","# in category":"15","Notes (in bold are reused palettes)":"Use PM-210-food-drink"},"239":{"tier1id":"239","name":"PM-239-hobbies-interests","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#988b00,#ffe900,#240844,#5300e3,#4a0039,#69004b,#e200a0","Adobe link to library":"https://adobe.ly/2Zof7Gv","# in category":"34"},"274":{"tier1id":"274","name":"PM-274-home-garden","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#F7E639,#F0A100,#21753E,#129740,#14ca29,#359acd,#2a2a91","Adobe link to library":"https://adobe.ly/2Fa6cRE","# in category":"11","Notes (in bold are reused palettes)":"Indoor objects: use PM-110-power-and-energy-industry, Outdoor objects: use PM-677-camping"},"286":{"tier1id":"286","name":"PM-286-medical-health","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#313031,#484f55,#418fb0,#59bc96,#eff4fa,#d4d5da,#b0b4b7,#787772","Adobe link to library":"https://adobe.ly/2Zkmwqm","# in category":"13","Notes (in bold are reused palettes)":"Same as PM-596-technology-computing"},"324":{"tier1id":"324","name":"PM-324-movies","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#e2190e,#ffffff,#f3af1f,#555555,#3d3d3d,#76b43a,#419bfa,#c1c1c1","Adobe link to library":"https://adobe.ly/2ZGh8hC","# in category":"13"},"338":{"tier1id":"338","name":"PM-338-music-and-audio","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#400037,#14fcff,#30a4b2,#ff14c5,#d9229b,#ec381a,#db14ff,#ece51a","Adobe link to library":"https://adobe.ly/2XcPvyW","# in category":"19","Notes (in bold are reused palettes)":"Use PM-110-power-and-energy-industry"},"379":{"tier1id":"379","name":"PM-379-news-and-politics","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#030303,#fbfbfd,#d1d1d1,#969696,#5e5e5e,#63fbf0,#ed0000","Adobe link to library":"https://adobe.ly/2Y9YnCY","# in category":"9"},"391":{"tier1id":"391","name":"PM-391-personal-finance","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#353535,#fbfbfb,#f413bc,#aa4388,#d513f4,#f4e713,#42da82,#31a8cb","Adobe link to library":"https://adobe.ly/2FpZBT6","# in category":"30","Notes (in bold are reused palettes)":"Use PM-052-business-and-finance"},"422":{"tier1id":"422","name":"PM-422-pets","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#8e4169,#ff613c,#ff7d63,#ffa542,#fceddb,#447a64,#36ada0,#59b984,#3d61a4,#3d5882,#3d5882","Adobe link to library":"https://adobe.ly/2Yo0jf0","# in category":"9"},"432":{"tier1id":"432","name":"PM-432-pop-culture","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#6939ac,#48daa3,#ec391a,#f9c900,#4d7bbd,#f6717b,#fdfaf1,#998579,#696362","Adobe link to library":"https://adobe.ly/2Fo2F1R","# in category":"1","Notes (in bold are reused palettes)":"Use PM-150-events-and-attractions"},"441":{"tier1id":"441","name":"PM-441-real-estate","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#0c2c5b,#5fadd1,#f41182,#f68838,#37b08a,#98d241,#e93c4a,#ffffff","Adobe link to library":"https://adobe.ly/2X4oD5c","# in category":"11","Notes (in bold are reused palettes)":"Use 552-style-fashion"},"453":{"tier1id":"453","name":"PM-453-religion-spirituality","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#006a94,#0078c2,#1d8eff,#fffff5,#fff5cf,#ffd5a1,#c685cb,#976bad,#999191,#555555,#3d3d3d","Adobe link to library":"https://adobe.ly/2M3KaEV","# in category":"10"},"464":{"tier1id":"464","name":"PM-464-science","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#161714,#636165,#8a898e,#95a43f,#bed336,#e6ff44,#eae400,#f8c200,#f18c20,#ef4138","Adobe link to library":"https://adobe.ly/2RgcxzH","# in category":"8"},"473":{"tier1id":"473","name":"PM-473-shopping","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#002157,#005b7f,#005b7f,#7a0026,#7b0046,#f9ad81,#a36209,#422f78,#8560a8,#662b6f,#4b0049,#32004b,#111111","Adobe link to library":"https://adobe.ly/2XlJvUU","# in category":"9"},"483":{"tier1id":"483","name":"PM-483-sports","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#272798,#4c5fc5,#f55409,#e6932c,#305723,#469628,#90c053,#ffffff,#969494,#555555,#3d3d3d","Adobe link to library":"https://adobe.ly/2IZlZUk","# in category":"55"},"552":{"tier1id":"552","name":"PM-552-style-fashion","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#0c2c5b,#5fadd1,#f41182,#f68838,#37b08a,#98d241,#e93c4a,#ffffff","Adobe link to library":"https://adobe.ly/2X4oD5c","# in category":"41"},"596":{"tier1id":"596","name":"PM-596-technology-computing","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#313031,#484f55,#418fb0,#59bc96,#eff4fa,#d4d5da,#b0b4b7,#787772","Adobe link to library":"https://adobe.ly/2Zkmwqm","# in category":"43","Notes (in bold are reused palettes)":"Or PM-110-power-and-energy-industry"},"640":{"tier1id":"640","name":"PM-640-television","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#030303,#fbfbfd,#d1d1d1,#969696,#5e5e5e,#63fbf0,#ed0000","Adobe link to library":"https://adobe.ly/2Y9YnCY","# in category":"11","Notes (in bold are reused palettes)":"Same as PM-379-news-and-politics (anaglyph)"},"653":{"tier1id":"653","name":"PM-653-travel","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#cb3416,#f17139,#b6b6b6,#5bd6fa,#1f4fbc,#548380,#2c7383,#8cdbc8,#374346","Adobe link to library":"https://adobe.ly/2FogUnu","# in category":"20"},"677":{"tier1id":"677","name":"PM-677-camping","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#F7E639,#F0A100,#21753E,#129740,#14ca29,#359acd,#2a2a91","Adobe link to library":"https://adobe.ly/2Fa6cRE","# in category":"1","Notes (in bold are reused palettes)":"Exception within category, connects to 274-home-garden"},"680":{"tier1id":"680","name":"PM-680-video-gaming","tier1":"#","tier2":"#","tier3":"#","tier4":"#","hex":"#8f003b,#dd3641,#ff6c00,#fbca61,#647cf9,#84a2ff,#8849e1,#9d6ee0","Adobe link to library":"https://adobe.ly/2WHvvAm","# in category":"18"}}; 

return { data: data }; 

})(); 
