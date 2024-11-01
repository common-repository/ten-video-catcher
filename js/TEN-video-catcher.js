/* 
 * Youtube Insert Me
 * By Maxime ORIOL
 * maxime.oriol@gmail.com
 *
 * @require  >= jquery V 1.4.2
 */

(function($) {
    $.fn.tenVideoCatcher = function(options) {
        var elt = this;
        var setting = {
            title : "YouTube and Dailymotion videos player",
            className : "TEN-player",
            width : 640,
            height : 390
        };
        $.extend(setting, options);

        var content = $(elt).html();
        //Catch all Youtube and Dailymotion videos
        var reg = /\[(youtube|dailymotion)(.*)\]([a-z0-9_ -]+)\[\/(youtube|dailymotion)\]/gi;
        var matches = content.match(reg);

        if (matches != null) { //If there is video to insert
            $.each(matches, function(index, code) {
                code.match(reg);
                var videoType = RegExp.$1;
                var videoStyle = RegExp.$2;
                var videoId = RegExp.$3;
                videoId = videoId.replace(" ", "");
                var videoURL = null;

                if (videoType == "youtube") {
                    videoURL = "http://www.youtube.com/embed/"+videoId;
                }
                else if (videoType == "dailymotion") {
                    videoURL = "http://www.dailymotion.com/embed/video/"+videoId;
                }
                
				//isset is used to keep the aspect ratio
				var isset = new Array();
				isset['width'] = false;
				isset['height'] = false;
				
                if (videoStyle != "" && videoStyle != null) {
					//Catch width and Height of videos
                    var regStyleW = /width=([0-9]+)(px)?/gi;
                    matcheWidth = regStyleW.exec(videoStyle);
                    var regStyleH = /height=([0-9]+)(px)?/gi;
                    matcheHeight = regStyleH.exec(videoStyle);
                    
                    //If Width is defined
                    if (matcheWidth != null) {
                        console.log("Width : " + matcheWidth[1]);
                        setting.width = matcheWidth[1];
                        isset['width'] = true;
                    }
                    //If Height is defined
                    if (matcheHeight != null) {
                        console.log("Height : " + matcheHeight[1]);
                        setting.height = matcheHeight[1];
                        isset['height'] = true;
                    }
                    
                    if (isset['width'] && !isset['height']) {
						setting.height = Math.round((390/640)*setting.width);
					} else if (!isset['width'] && isset['height']) {
						setting.width = Math.round((640/390)*setting.height);
					}
                    
                }
				//HTML code to embed
                var htmlToEmbed = "<object type='text/html' data='"+videoURL+"'";
                htmlToEmbed += " style='width:"+setting.width+"px;height:"+setting.height+"px;'></object>";

                content = content.replace(code, htmlToEmbed);
                $(elt).html(content);
            });
        }
    };
})(jQuery);
