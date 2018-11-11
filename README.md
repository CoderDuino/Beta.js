# Beta.js
Beta.js is a small library to shorten common tasks.

## Beta.js Input/Output
```
//Advanced Print  Modes: 0,Append String to Document.body 1,Log to console 2,Send user notification 3,Set document.body to string
ß.o(<string>,<output mode>) 

//Set element view  Modes:0,Set View 1,Return View
ß.v(<element name>,<u=block:0,none:1>,<mode>)

//Search for element (Returns Element)
ß.er(<element name,id,tag name,class name>)

// Store and retrieve from json storage in localstorage
ß.s(<db value>,<db key>,<database name>)
ß.r(<db key>,<database name>)
```
## Math & Variables
```
//Run complex math
ß.m(<string expression>)

//Random  Options: d,Dice Random n,Number Random s,String Random
ß.ra.<d,n,s>(<n,Maxnum s,String Length>)

//Run JS Code
ß.rr(<code string>)

//Search Global Variables and return value
ß.g(<varname string>)

//Returns Library Info
ß.i

//Strip String
ß.st(<input string>,0,<End Strip boolean>)

//Delete Variable
ß.d(<varname>)

//Reassign a variable to regular variable
ß.rv(<varname>)

//Reassign Constant var
ß.rc(<varname>)

//Remove Char at position returns output string
ß.rcc(<input string>,<position int>)
```
