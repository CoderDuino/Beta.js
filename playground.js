/* ß
 *  ßetaJ∆
 *    ß
 * 
 * Beta.js is a handfull of helpfull stuff for html and javascript
 *
 * Test out ßetaJ∆ code here
 *
 */


ß.o("Pi ^ 2: "+ß.m("PI * PI")+"<br>", 0);
ß.o("4+3*!0/2^4: "+ß.m("4+3*!0/2^4")+"<br><br>", 0);

ß.o("Random String 15chars long: "+ß.ra.string(15)+"<br>", 0);
ß.o("Random Dice Number: "+ß.ra.dice()+"<br><br>", 0);

ß.o("Body elements: "+ß.e("body")+"<br><br>", 0);
ß.o(`<font id="fontElem" style="color:blue;visible:block;">This is An Element</font><br><button onclick="ß.v('fontElem', !(ß.v('fontElem', 0, 1)), 0)">Hide</button></br>`, 0);

// Size Diff
// ß.o("Pi ^ 2: "+ß.m("PI * PI"), 0);
// document.getElementById("playgroundtest").innerHTML = String("Pi ^ 2: "+String(eval("3.141592653589793 * 3.141592653589793")))