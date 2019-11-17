$(document).ready(function(){


  var playlist = [{
      title:"Music Name",
      artist:"",
      mp3:"music.mp3",
	  /*下面是海报*/
      poster: "poster.png"
    }];
	

  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});
