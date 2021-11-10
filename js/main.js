/*Canvas*/
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
cvs.width = 960;
cvs.height = 480;
var cnt = 0;
var game = 1;
var time = 0;
var frame = 0;
var cc = cnt;
var cg = game;
/*Canvas*/

/*Key*/
window.addEventListener("keydown", keyd)
window.addEventListener("keyup", keyu)
var inkey = new Array();
function keyd(e) {inkey[e.keyCode] = true}
function keyu(e) {inkey[e.keyCode] = false}
/*Key*/

/*Player*/
var playerR = new Image();
var playerL = new Image();
playerR.src = "./obj/playerR.png";
playerL.src = "./obj/playerL.png";
var x = 0;
var xspeed = 2;
var y = 0;
var vy = 0;
var jumpheight = 2;
var jump = true;
var isjump = true;
var deathcnt = 0;
var cx = x;
var cy = y;
var cs = 0;
var cvy = vy;
var spawn=true;
var playerturn=0;
var hitboxX = 20;
var hitboxY = 25;
/*Player*/

/*enemy*/
var enemy = new Image();
enemy.src = "./obj/enemy.png";
var espeed = new Array();
var enemyX = new Array();//
var enemyY = new Array();//
var enemyturn = new Array();
var enemyjump = new Array();
var enemyV = new Array();
var cejump = new Array();
var ceturn = new Array();
var cex = new Array();
var cey = new Array();
var cev = new Array();
var ces = new Array();
var espawn = true;
/*enemy*/

/*bg*/
var background = new Image();
var background1 = new Image();
background.src = "./obj/background.png";
background1.src = "./obj/background1.png";
/*bg*/

/*Map*/
var key=false;
var ck = key;
var cp=false;
var map = new Array();
var screen = 0;
var once=true;
var spawn=true;
var co = once;
var mapchip = new Image();
makemap(screen);

function makemap(s) {
if (s==0){
once=true;
espawn = true;
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[22,00,00,00,00,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22],//00
	[22,00,00,00,00,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22],//01
	[22,11,09,00,22,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22],//02
	[22,22,22,22,22,05,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22],//03
	[00,00,00,00,00,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22],//04
	[00,00,00,00,00,00,05,05,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22],//05
	[00,00,00,00,00,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22],//06
	[00,00,00,00,00,00,00,00,05,05,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22],//07
	[00,00,00,00,00,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,24],//08
	[00,00,00,00,00,00,05,05,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,24],//09
	[00,00,00,00,00,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,24],//10
	[00,00,00,00,00,00,00,00,05,05,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,24],//11
	[00,00,10,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22],//12
	[02,02,02,02,02,02,02,03,24,24,04,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,34,00,00,35,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
else if (s==1){
once=true;
espawn = true;
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[22,22,22,22,22,22,22,22,24,24,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//00
	[22,08,00,00,00,00,00,26,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//01
	[22,05,05,00,00,00,00,26,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//02
	[22,00,00,00,00,00,00,26,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//03
	[22,23,23,23,23,05,05,22,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//04
	[22,00,00,23,00,00,09,21,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//05
	[22,05,05,23,00,00,00,22,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//06
	[22,00,23,00,00,05,05,26,00,20,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//07
	[24,00,00,00,00,00,00,26,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//08
	[24,00,00,05,65,05,22,22,23,23,23,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//09
	[24,00,00,00,06,00,22,22,22,22,22,22,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//10
	[24,00,00,00,06,00,00,00,00,22,22,24,08,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//11
	[22,00,00,00,06,00,26,26,12,00,11,00,22,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//12
	[02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
else if (s==2){
once=true;
espawn = true;
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//00
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//01
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//02
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//03
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//04
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//05
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//06
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//07
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//08
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//09
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//10
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//11
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//12
	[02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
else if (s==3){
once=true;
espawn = true;
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//00
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//01
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//02
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//03
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//04
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//05
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//06
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//07
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//08
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//09
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//10
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//11
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//12
	[02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
}
/*Map*/


//-----------------------------------------------------------------------------------------------//
function start() {
if (cnt == 0) {
	startse = new Audio("./sud/se/tyouetu.mp3");gaov = new Audio("./sud/se/yattenai.mp3");getk = new Audio("./sud/se/oyaa.mp3");getc = new Audio("./sud/se/nanda.mp3");bgm = new Audio("./sud/bgm/超越神力.mp3");clear = new Audio("./sud/se/syoco.mp3");startse.play();
	document.getElementById("startbtn").remove();
	cnt = 1;
	starttimer();
	upd()
}


function upd(){
if (once) {bgm.play()}
if (screen==0) ctx.drawImage(background,0,0,960,480);
if (screen==1) ctx.drawImage(background1,0,0,960,480);

/*BLOCK*/
if (once&amp;&amp;espawn) {enemyX = [];enemyY = [];enemyturn = [];enemyjump = [];enemyV = [];}
var ladderX = new Array();//
var ladderY = new Array();//
var bridgeX = new Array();//
var bridgeY = new Array();//
var spikeX = new Array();//
var spikeY = new Array();//
var blocksX = new Array();//
var blocksY = new Array();//
var slopeRX = new Array();//
var slopeRY = new Array();//
var slopeLX = new Array();//
var slopeLY = new Array();//
var waterX = new Array();//
var waterY = new Array();//
var sandX = new Array();//
var sandY = new Array();//
var jumperX = new Array();//
var jumperY = new Array();//
var keyX = new Array();//
var keyY = new Array();//
var keyBX = new Array();//
var keyBY = new Array();//
var cpX = new Array();
var cpY = new Array();
if (playerturn==0) {ctx.drawImage(playerR,x,y,32,32)}
else if (playerturn==1) {ctx.drawImage(playerL,x,y,32,32)};
for (var my=0; my&lt;map.length; my++){for (var mx=0; mx&lt;map[my].length; mx++){
/*dirt*/	if (map[my][mx] === 1) {ctx.drawImage( mapchip, 0, 0, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*grass1*/	if (map[my][mx] === 2) {ctx.drawImage( mapchip, 32, 0, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*grass2*/	if (map[my][mx] === 3) {ctx.drawImage( mapchip, 64, 0, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*grass3*/	if (map[my][mx] === 4) {ctx.drawImage( mapchip, 96, 0, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*bridge*/	if (map[my][mx] === 5) {ctx.drawImage( mapchip, 0, 32, 32, 32, 32*mx, 32*my, 32, 32 );bridgeX.push(mx*32);bridgeY.push(my*32)}
/*ladder*/ if (map[my][mx] === 6) {ctx.drawImage( mapchip, 32, 32, 32, 32, 32*mx, 32*my, 32, 32 );ladderX.push(mx*32);ladderY.push(my*32)}
/*WbridgeW*/	if (map[my][mx] === 65) {ctx.drawImage( mapchip, 0, 32, 32, 32, 32*mx, 32*my, 32, 32 );bridgeX.push(mx*32);bridgeY.push(my*32)}
/*WladderW*/ 	if (map[my][mx] === 65) {ctx.drawImage( mapchip, 32, 32, 32, 32, 32*mx, 32*my, 32, 32 );ladderX.push(mx*32);ladderY.push(my*32)}
/*jumper*/ if (map[my][mx] === 7) {ctx.drawImage( mapchip, 96, 32, 32, 32, 32*mx, 32*my, 32, 32 );jumperX.push(mx*32);jumperY.push(my*32)}
/*key*/ if (map[my][mx] === 8&amp;&amp;key) {ctx.drawImage( mapchip, 0, 64, 32, 32, 32*mx, 32*my, 32, 32 );keyX.push(mx*32);keyY.push(my*32)}
/*keyB*/ if (map[my][mx] === 9&amp;&amp;!key) {ctx.drawImage( mapchip, 32, 64, 32, 32, 32*mx, 32*my, 32, 32 );keyBX.push(mx*32);keyBY.push(my*32)}
/*player*/	if (map[my][mx] === 10&amp;&amp;once&amp;&amp;spawn) {x=32*mx, y=32*my;cx=x;cy=y}
/*enemy*/ 	if (map[my][mx] === 11&amp;&amp;once&amp;&amp;espawn) {enemyX.push(mx*32);enemyY.push(my*32);enemyturn.push(true);enemyjump.push(true);enemyV.push(0);espeed.push(0.8);}
/*-cp-*/	if (map[my][mx] === 13&amp;&amp;!cp==true) {ctx.drawImage( mapchip, 64, 32, 32, 32, 32*mx, 32*my, 32, 32 );cpX.push(mx*32);cpY.push(my*32)}
/*slopeR*/ 	if (map[my][mx] === 14) {ctx.drawImage( mapchip, 128, 32, 32, 32, 32*mx, 32*my, 32, 32 );slopeRX.push(mx*32);slopeRY.push(my*32)}
/*slopeL*/ 	if (map[my][mx] === 15) {ctx.drawImage( mapchip, 160, 32, 32, 32, 32*mx, 32*my, 32, 32 );slopeLX.push(mx*32);slopeLY.push(my*32)}
/*slopeDR*/ 	if (map[my][mx] === 16) {ctx.drawImage( mapchip, 192, 32, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*slopeDL*/ 	if (map[my][mx] === 17) {ctx.drawImage( mapchip, 224, 32, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*spikeA*/ if (map[my][mx] === 21) {ctx.drawImage( mapchip, 64, 64, 32, 32, 32*mx, 32*my, 32, 32 );spikeX.push(mx*32);spikeY.push(my*32)}
/*blockA*/ if (map[my][mx] === 22) {ctx.drawImage( mapchip, 96, 64, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*spikeB*/ if (map[my][mx] === 23&amp;&amp;!key) {ctx.drawImage( mapchip, 128, 64, 32, 32, 32*mx, 32*my, 32, 32 );spikeX.push(mx*32);spikeY.push(my*32)}
/*blockB*/ if (map[my][mx] === 24&amp;&amp;!key) {ctx.drawImage( mapchip, 160, 64, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*spikeC*/ if (map[my][mx] === 25&amp;&amp;key) {ctx.drawImage( mapchip,192, 64, 32, 32, 32*mx, 32*my, 32, 32 );spikeX.push(mx*32);spikeY.push(my*32)}
/*blockC*/ if (map[my][mx] === 26&amp;&amp;key) {ctx.drawImage( mapchip,224, 64, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*waterB*/ if (map[my][mx] === 27) {ctx.drawImage( mapchip, 160, 0, 32, 32, 32*mx, 32*my, 32, 32 );waterX.push(mx*32);waterY.push(my*32)}
/*waterT*/ if (map[my][mx] === 28) {ctx.drawImage( mapchip, 128, 0, 32, 32, 32*mx, 32*my, 32, 32 );waterX.push(mx*32);waterY.push(my*32)}
/*sandT*/ if (map[my][mx] === 29) {ctx.drawImage( mapchip, 224, 0, 32, 32, 32*mx, 32*my, 32, 32 );sandX.push(mx*32);sandY.push(my*32)}
/*sandB*/ if (map[my][mx] === 30) {ctx.drawImage( mapchip, 192, 0, 32, 32, 32*mx, 32*my, 32, 32 );sandX.push(mx*32);sandY.push(my*32)}
/*dirtR*/ 	if (map[my][mx] === 31) {ctx.drawImage( mapchip, 0, 96, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*dirtL*/ 	if (map[my][mx] === 32) {ctx.drawImage( mapchip, 32, 96, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*dirtB*/ 	if (map[my][mx] === 33) {ctx.drawImage( mapchip, 96, 96, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*dirtLB*/ 	if (map[my][mx] === 34) {ctx.drawImage( mapchip, 128, 96, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*dirtRB*/ 	if (map[my][mx] === 35) {ctx.drawImage( mapchip, 64, 96, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
}}
/*BLOCK*/


if (inkey[39]) {x=x+xspeed;playerturn=0}
if (inkey[37]) {x=x-xspeed;playerturn=1}
if (inkey[32]&amp;&amp;!jump) {vy=-0.5;jump=true;isjump=true}
if (isjump&amp;&amp;inkey[32]&amp;&amp;vy&gt;-(jumpheight)) {vy=vy-0.20} else {isjump=false}
jump=true


/*cp*/
for (var i=0;i&lt;cpY.length;i++) {
	if (
	y+hitboxY&gt;cpY[i]&amp;&amp;
	y&lt;cpY[i]&amp;&amp;
	x&lt;cpX[i]+hitboxX-2&amp;&amp;
	x&gt;cpX[i]-hitboxX+2
	) {cp=true;savecp()}
	else if (
	y&gt;cpY[i]&amp;&amp;
	y-hitboxY&lt;cpY[i]&amp;&amp;
	x&lt;cpX[i]+hitboxX-2&amp;&amp;
	x&gt;cpX[i]-hitboxX+2
	) {cp=true;savecp()}
if (x&gt;cpX[i]-hitboxY&amp;&amp;cpX[i]&gt;x&amp;&amp;y&gt;cpY[i]-hitboxY&amp;&amp;cpY[i]+hitboxY&gt;y) {cp=true;savecp()}
else if (x&gt;cpX[i]&amp;&amp;cpX[i]+hitboxY&gt;x&amp;&amp;y&gt;cpY[i]-hitboxY&amp;&amp;cpY[i]+hitboxY&gt;y) {cp=true;savecp()}
}
/*cp*/

/*block*/
for (var i=0;i&lt;blocksY.length;i++) {
	if (
	!inkey[32]&amp;&amp;
	y+hitboxY+0.00001&gt;blocksY[i]&amp;&amp;
	y&lt;blocksY[i]&amp;&amp;
	x&lt;blocksX[i]+hitboxX-2&amp;&amp;
	x&gt;blocksX[i]-hitboxX+2
	) {y=blocksY[i]-hitboxY;jump=false;vy=0}
	else if (
	y+hitboxY&gt;blocksY[i]&amp;&amp;
	y&lt;blocksY[i]&amp;&amp;
	x&lt;blocksX[i]+hitboxX-2&amp;&amp;
	x&gt;blocksX[i]-hitboxX+2
	) {y=blocksY[i]-hitboxY;jump=false;vy=0}
	else if (
	y&gt;blocksY[i]&amp;&amp;
	y-hitboxY&lt;blocksY[i]&amp;&amp;
	x&lt;blocksX[i]+hitboxX-2&amp;&amp;
	x&gt;blocksX[i]-hitboxX+2
	) {y=blocksY[i]+hitboxY;vy=0}
if (x&gt;blocksX[i]-hitboxX&amp;&amp;blocksX[i]&gt;x&amp;&amp;y&gt;blocksY[i]-hitboxX&amp;&amp;blocksY[i]+hitboxX&gt;y) {x=blocksX[i]-hitboxX}
else if (x&gt;blocksX[i]&amp;&amp;blocksX[i]+hitboxX&gt;x&amp;&amp;y&gt;blocksY[i]-hitboxX&amp;&amp;blocksY[i]+hitboxX&gt;y) {x=blocksX[i]+hitboxX}
}
/*block-------------------------------------------------------------------------------------------*/

/*slopeR*/
for (var i=0;i&lt;slopeRY.length;i++) {
	if (
	y+hitboxY+(x-slopeRX[i])-5&gt;slopeRY[i]&amp;&amp;
	y&lt;slopeRY[i]&amp;&amp;
	x&lt;slopeRX[i]+hitboxX&amp;&amp;
	x&gt;slopeRX[i]-hitboxX
	) {y=slopeRY[i]-(x-slopeRX[i])-hitboxX;jump=false;vy=0}
}
/*slopeR-------------------------------------------------------------------------------------------*/

/*slopeL*/
for (var i=0;i&lt;slopeLY.length;i++) {
	if (
	y+hitboxY-(x-slopeLX[i])-5&gt;slopeLY[i]&amp;&amp;
	y&lt;slopeLY[i]&amp;&amp;
	x&lt;slopeLX[i]+hitboxX&amp;&amp;
	x&gt;slopeLX[i]-hitboxX
	) {y=slopeLY[i]+(x-slopeLX[i])-hitboxX;jump=false;vy=0}
}
/*slopeL-------------------------------------------------------------------------------------------*/

/*spike*/
for (var i=0;i&lt;spikeY.length;i++) {
	if (
	y+hitboxY&gt;spikeY[i]&amp;&amp;
	y&lt;spikeY[i]&amp;&amp;
	x&lt;spikeX[i]+hitboxX-2&amp;&amp;
	x&gt;spikeX[i]-hitboxX+2
	) {game=0}
	else if (
	y&gt;spikeY[i]&amp;&amp;
	y-hitboxY&lt;spikeY[i]&amp;&amp;
	x&lt;spikeX[i]+hitboxX-2&amp;&amp;
	x&gt;spikeX[i]-hitboxX+2
	) {game=0}
if (x&gt;spikeX[i]-hitboxX&amp;&amp;spikeX[i]&gt;x&amp;&amp;y&gt;spikeY[i]-hitboxX&amp;&amp;spikeY[i]+hitboxX&gt;y) {game=0}
else if (x&gt;spikeX[i]&amp;&amp;spikeX[i]+hitboxX&gt;x&amp;&amp;y&gt;spikeY[i]-hitboxX&amp;&amp;spikeY[i]+hitboxX&gt;y) {game=0}
}
/*spike-------------------------------------------------------------------------------------------*/
	
/*enemy*/
for (var i=0;i&lt;enemyY.length;i++) {
enemyjump[i]=true
for (var j=0;j&lt;blocksY.length;j++) {
	if (
	enemyY[i]+32.000001&gt;blocksY[j]&amp;&amp;
	enemyY[i]&lt;blocksY[j]&amp;&amp;
	enemyX[i]&lt;blocksX[j]+31&amp;&amp;
	enemyX[i]&gt;blocksX[j]-31
	) {enemyY[i]=blocksY[j]-32;enemyjump[i]=false;enemyV[i]=0}
	else if (
	enemyY[i]&gt;blocksY[j]&amp;&amp;
	enemyY[i]-32&lt;blocksY[j]&amp;&amp;
	enemyX[i]&lt;blocksX[j]+31&amp;&amp;
	enemyX[i]&gt;blocksX[j]-31
	) {enemyY[i]=blocksY[j]+32;enemyV[i]=0}
if (enemyX[i]&gt;blocksX[j]-32&amp;&amp;blocksX[j]&gt;enemyX[i]&amp;&amp;enemyY[i]&gt;blocksY[j]-32&amp;&amp;blocksY[j]+32&gt;enemyY[i]) {if (enemyturn[i]==true){enemyturn[i]=false} else {enemyturn[i]=true}}
else if (enemyX[i]&gt;blocksX[j]&amp;&amp;blocksX[j]+32&gt;enemyX[i]&amp;&amp;enemyY[i]&gt;blocksY[j]-32&amp;&amp;blocksY[j]+32&gt;enemyY[i]) {if (enemyturn[i]==true){enemyturn[i]=false} else {enemyturn[i]=true}}
}
	ctx.drawImage(enemy, enemyX[i], enemyY[i], 32, 32 );
	if (
	y+hitboxY&gt;enemyY[i]&amp;&amp;
	y&lt;enemyY[i]&amp;&amp;
	x&lt;enemyX[i]+hitboxX-2&amp;&amp;
	x&gt;enemyX[i]-hitboxX+2
	) {game=0}
	else if (
	y&gt;enemyY[i]&amp;&amp;
	y-hitboxY&lt;enemyY[i]&amp;&amp;
	x&lt;enemyX[i]+hitboxX-2&amp;&amp;
	x&gt;enemyX[i]-hitboxX+2
	) {game=0}
if (x&gt;enemyX[i]-hitboxX&amp;&amp;enemyX[i]&gt;x&amp;&amp;y&gt;enemyY[i]-hitboxX&amp;&amp;enemyY[i]+hitboxX&gt;y) {game=0}
else if (x&gt;enemyX[i]&amp;&amp;enemyX[i]+hitboxX&gt;x&amp;&amp;y&gt;enemyY[i]-hitboxX&amp;&amp;enemyY[i]+hitboxX&gt;y) {game=0}
if (enemyjump[i]) {enemyY[i]=enemyY[i]+enemyV[i];enemyV[i]=enemyV[i]+0.05}
if (enemyturn[i]) {enemyX[i]=enemyX[i]+espeed[i]} else if (!enemyturn[i]) {enemyX[i]=enemyX[i]-espeed[i]}
}
/*enemy-------------------------------------------------------------------------------------------*/

/*bridge*/
for (var i=0;i&lt;bridgeY.length;i++) {
	if (
	!inkey[32]&amp;&amp;
	y+hitboxY+0.00001&gt;bridgeY[i]&amp;&amp;
	y+hitboxY-5&lt;bridgeY[i]&amp;&amp;
	x&lt;bridgeX[i]+hitboxX-2&amp;&amp;
	x&gt;bridgeX[i]-hitboxX+2
	) {y=bridgeY[i]-hitboxY;jump=false;vy=0}
	else if (
	y+hitboxY&gt;bridgeY[i]&amp;&amp;
	y+hitboxY-5&lt;bridgeY[i]&amp;&amp;
	x&lt;bridgeX[i]+hitboxX-2&amp;&amp;
	x&gt;bridgeX[i]-hitboxX+2
	) {y=bridgeY[i]-hitboxY;jump=false;vy=0}
}
/*bridge-------------------------------------------------------------------------------------------*/

/*ladder*/
for (var i=0;i&lt;ladderY.length;i++) {
	if (
	inkey[40]&amp;&amp;
	y+hitboxY&gt;ladderY[i]&amp;&amp;
	y&lt;ladderY[i]&amp;&amp;
	x&lt;ladderX[i]+hitboxX-2&amp;&amp;
	x&gt;ladderX[i]-hitboxX+2
	) {y++;jump=false;vy=0}
	else if (
	inkey[38]&amp;&amp;
	y+hitboxY&gt;ladderY[i]&amp;&amp;
	y&lt;ladderY[i]&amp;&amp;
	x&lt;ladderX[i]+hitboxX-2&amp;&amp;
	x&gt;ladderX[i]-hitboxX+2
	) {y--;jump=false;vy=-1}
}
/*ladder-------------------------------------------------------------------------------------------*/

/*jumper*/
for (var i=0;i&lt;jumperY.length;i++) {
	if (
	y+hitboxY&gt;jumperY[i]&amp;&amp;
	y&lt;jumperY[i]&amp;&amp;
	x&lt;jumperX[i]+hitboxX-2&amp;&amp;
	x&gt;jumperX[i]-hitboxX+2
	) {y--;vy=-5}
	else if (
	y&gt;jumperY[i]&amp;&amp;
	y-hitboxY&lt;jumperY[i]&amp;&amp;
	x&lt;jumperX[i]+hitboxX-2&amp;&amp;
	x&gt;jumperX[i]-hitboxX+2
	) {y--;vy=-5}
if (x&gt;jumperX[i]-hitboxX&amp;&amp;jumperX[i]&gt;x&amp;&amp;y&gt;jumperY[i]-hitboxX&amp;&amp;jumperY[i]+hitboxX&gt;y) {y--;vy=-5}
else if (x&gt;jumperX[i]&amp;&amp;jumperX[i]+hitboxX&gt;x&amp;&amp;y&gt;jumperY[i]-hitboxX&amp;&amp;jumperY[i]+hitboxX&gt;y) {y--;vy=-5}
}
/*jumper-------------------------------------------------------------------------------------------*/

/*key*/
for (var i=0;i&lt;keyY.length;i++) {
	if (
	y+hitboxY&gt;keyY[i]&amp;&amp;
	y&lt;keyY[i]&amp;&amp;
	x&lt;keyX[i]+hitboxX-2&amp;&amp;
	x&gt;keyX[i]-hitboxX+2
	) {key=false;getk.play()}
	else if (
	y&gt;keyY[i]&amp;&amp;
	y-hitboxY&lt;keyY[i]&amp;&amp;
	x&lt;keyX[i]+hitboxX-2&amp;&amp;
	x&gt;keyX[i]-hitboxX+2
	) {key=false;getk.play()}
if (x&gt;keyX[i]-hitboxX&amp;&amp;keyX[i]&gt;x&amp;&amp;y&gt;keyY[i]-hitboxX&amp;&amp;keyY[i]+hitboxX&gt;y) {key=false;getk.play()}
else if (x&gt;keyX[i]&amp;&amp;keyX[i]+hitboxX&gt;x&amp;&amp;y&gt;keyY[i]-hitboxX&amp;&amp;keyY[i]+hitboxX&gt;y) {key=false;getk.play()}
}
/*key-------------------------------------------------------------------------------------------*/


/*keyB*/
for (var i=0;i&lt;keyBY.length;i++) {
	if (
	y+hitboxY&gt;keyBY[i]&amp;&amp;
	y&lt;keyBY[i]&amp;&amp;
	x&lt;keyBX[i]+hitboxX-2&amp;&amp;
	x&gt;keyBX[i]-hitboxX+2
	) {key=true;getk.play()}
	else if (
	y&gt;keyBY[i]&amp;&amp;
	y-hitboxY&lt;keyBY[i]&amp;&amp;
	x&lt;keyBX[i]+hitboxX-2&amp;&amp;
	x&gt;keyBX[i]-hitboxX+2
	) {key=true;getk.play()}
if (x&gt;keyBX[i]-hitboxX&amp;&amp;keyBX[i]&gt;x&amp;&amp;y&gt;keyBY[i]-hitboxX&amp;&amp;keyBY[i]+hitboxX&gt;y) {key=true;getk.play()}
else if (x&gt;keyBX[i]&amp;&amp;keyBX[i]+hitboxX&gt;x&amp;&amp;y&gt;keyBY[i]-hitboxX&amp;&amp;keyBY[i]+hitboxX&gt;y) {key=true;getk.play()}
}
/*keyB-------------------------------------------------------------------------------------------*/

/*water*/
for (var i=0;i&lt;waterY.length;i++) {
	if (
	inkey[32]&amp;&amp;
	y+hitboxY&gt;waterY[i]&amp;&amp;
	y&lt;waterY[i]&amp;&amp;
	x&lt;waterX[i]+hitboxX-2&amp;&amp;
	x&gt;waterX[i]-hitboxX+2
	) {y=y-0.3;vy=-1;jump=false}
if (inkey[32]&amp;&amp;x&gt;waterX[i]-hitboxX&amp;&amp;waterX[i]&gt;x&amp;&amp;y&gt;waterY[i]-hitboxX&amp;&amp;waterY[i]+hitboxX&gt;y) {y=y-0.3;vy=-1;jump=false}
else if (inkey[32]&amp;&amp;x&gt;waterX[i]&amp;&amp;waterX[i]+hitboxX&gt;x&amp;&amp;y&gt;waterY[i]-hitboxX&amp;&amp;waterY[i]+hitboxX&gt;y) {y=y-0.3;vy=-1;jump=false}
}
/*water-------------------------------------------------------------------------------------------*/

/*sand*/
for (var i=0;i&lt;sandY.length;i++) {
	if (
	inkey[32]&amp;&amp;
	y+hitboxY&gt;sandY[i]&amp;&amp;
	y&lt;sandY[i]&amp;&amp;
	x&lt;sandX[i]+hitboxX-2&amp;&amp;
	x&gt;sandX[i]-hitboxX+2
	) {vy=1;jump=false}
if (inkey[32]&amp;&amp;x&gt;sandX[i]-hitboxX&amp;&amp;sandX[i]&gt;x&amp;&amp;y&gt;sandY[i]-hitboxX&amp;&amp;sandY[i]+hitboxX&gt;y) {vy=1;jump=false}
else if (inkey[32]&amp;&amp;x&gt;sandX[i]&amp;&amp;sandX[i]+hitboxX&gt;x&amp;&amp;y&gt;sandY[i]-hitboxX&amp;&amp;sandY[i]+hitboxX&gt;y) {vy=1;jump=false}
}
/*sand-------------------------------------------------------------------------------------------*/

if (jump) {y=y+vy;vy=vy+0.05}

once=false;
spawn=false;
espawn=false;

if (y&gt;480) {game=0;}

if (game==0) {loadcp();deathcnt++;document.getElementById("death").innerHTML = "death:"+deathcnt}


function frm() {
frame++
console.log(frame);document.getElementById("framecnt").innerHTML = "frame["+frame+"]";
if (game==1) {window.requestAnimationFrame(upd)}
}
setTimeout(frm,6);

if (x&gt;930&amp;&amp;3&gt;screen) {screen++;x=0;makemap(screen)} else if (x&gt;930){game=2}
if (x&lt;0&amp;&amp;0&lt;screen) {screen--;x=930;makemap(screen)} else if (x&lt;0) {x=0}
/*GAMEOVER*/
if (game==3) {bgm.pause();gaov.play();document.getElementById("TEXT").innerHTML = "ゲームオーバー";document.getElementById("cplo").remove();}
if (game==2) {bgm.pause();clear.play();document.getElementById("TEXT").innerHTML = "クリア Time["+time+"]";}
};
};

function savecp() {
spawn=false;
espawn=false;
	getc.play()
	cx = x;
	cy = y;
	cvy = vy;
	ck = key;
	cc = cnt;
	cg = game;
	co = once;
	cs = screen;

	cejump = enemyjump;
	ceturn = enemyturn;
	cex = enemyX;
	cey = enemyY;
	cev = enemyV;
	ces = espeed;

}

function loadcp(){
	x = cx;
	y = cy;
	vy = cvy;
	key = ck;
	cnt = cc;
	game = cg;
	once = co;
	screen = cs;
	enemyjump = cejump
	enemyturn = ceturn
	enemyX = cex
	enemyY = cey
	enemyV = cev
	espeed = ces
	document.getElementById("TEXT").innerHTML = "";
	game = 1;
	makemap(screen)
}


function starttimer() {function s1(){time++;document.getElementById("timer").innerHTML = "time["+time+"]";console.log(time);setTimeout(s1,1000)}s1();}
