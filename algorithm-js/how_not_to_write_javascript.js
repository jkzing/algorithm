/*
 * slow loop and faster loop
 */
var arr = [1, 2, 3, 4, 5, 9];

//slow one
for(var i = 0; i < arr.length; i++) {
    console.log("do something");
}

//faster ones
var l = arr.length;
for(var i = l - 1; i >= 0; --i) {
    console.log("do something");
}

var it = arr.length;
while(it--) {
    console.log("do something");
}


/*
 * complicated switch structure
 */
var node = getElementById('hello');

//ordinary one
switch (node.tagName) {
  case goog.dom.TagName.APPLET:
  case goog.dom.TagName.AREA:
  case goog.dom.TagName.BR:
  case goog.dom.TagName.COL:
  case goog.dom.TagName.FRAME:
  case goog.dom.TagName.HR:
  case goog.dom.TagName.IMG:
  case goog.dom.TagName.INPUT:
  case goog.dom.TagName.IFRAME:
  case goog.dom.TagName.ISINDEX:
  case goog.dom.TagName.LINK:
  case goog.dom.TagName.NOFRAMES:
  case goog.dom.TagName.NOSCRIPT:
  case goog.dom.TagName.META:
  case goog.dom.TagName.OBJECT:
  case goog.dom.TagName.PARAM:
  case goog.dom.TagName.SCRIPT:
  case goog.dom.TagName.STYLE:
    return false;
}
return true;

//advanced one
var takesChildren = {};
takesChildren[goog.dom.TagName.APPLET] = 1;
takesChildren[goog.dom.TagName.AREA] = 1;
takesChildren[goog.dom.TagName.BR] = 1;
takesChildren[goog.dom.TagName.COL] = 1;
takesChildren[goog.dom.TagName.FRAME] = 1;
takesChildren[goog.dom.TagName.HR] = 1;
takesChildren[goog.dom.TagName.IMG] = 1;
takesChildren[goog.dom.TagName.INPUT] = 1;
takesChildren[goog.dom.TagName.IFRAME] = 1;
takesChildren[goog.dom.TagName.ISINDEX] = 1;
takesChildren[goog.dom.TagName.LINK] = 1;
takesChildren[goog.dom.TagName.NOFRAMES] = 1;
takesChildren[goog.dom.TagName.NOSCRIPT] = 1;
takesChildren[goog.dom.TagName.META] = 1;
takesChildren[goog.dom.TagName.OBJECT] = 1;
takesChildren[goog.dom.TagName.PARAM] = 1;
takesChildren[goog.dom.TagName.SCRIPT] = 1;
takesChildren[goog.dom.TagName.STYLE] = 1;
return !takesChildren[node.tagName];
return !takesChildren.hasOwnProperty(node.tagName); //this would be better