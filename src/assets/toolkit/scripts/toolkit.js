// Load Map on Contact and New to Church Pages
$(function(){
  if($('body').is('.contact, .new')){
    require("script!./leaflet.js");
  }
});

require("script!./modernizr.js");
//require("script!./fontfaceobserver.js");
require("script!./collapsible.js");
require("script!./video.js");
require("script!./navigation.js");
