=== TEN - Video catcher ===
Contributors: oOXimOo
Tags: YouTube, Embed, Video, Playlist, Thumbnail, preview, Dailymotion
Requires at least: 2.0
Tested up to: 3.2.1
Stable tag: 1.3.1

TEN - Video Catcher allow to embed Youtube and Dailymotion videos easily. That's the lightest plugin you can find for Wordpress.

== Screenshots ==
None

== Description ==

TEN - Video Catcher allow to embed Youtube and Dailymotion videos easily. The greatest advantage of this plugin is that your webpage will not nead three minutes to load ! That's the lightest plugin you can find for Wordpress

It works with all the current YouTube or Dailymotion API parameters, including HD video, and produces XHTML valid output. It also, unlike many others similar plugins, works with videos with certain characters within their ID (e.g. double dashes).

Over the coming instructions I'll take you through the various ways to embed video.

To embed any Youtube or Dailymotion video what you have to do is very easy ! You just have to insert one of the following code:
[dailymotion]VIDEO_ID[/dailymotion]
[youtube]VIDEO_ID[/youtube]

You can also specify one or two options for the video size:

[youtube width=640 height=480]VIDEO_ID[/youtube]
[dailymotion height=480]VIDEO_ID[/dailymotion]

Replacing 'VIDEO_ID' by the id of the video than you can find in the shraring url.
The Youtube url seams to http://www.youtube.com/watch/?v=VIDEO_ID
The Dailymotion url seams to http://www.dailymotion.com/video/VIDEO_ID
So, you just have to copy and past the VIDEO_ID.

Technicaly, the code that you insert in your article is replace thinks to JQuery - Javascript by an <object> tag. JQuery library is required

== Parameters ==

Since V 2.1
=width= (optional): set the width of the video
=height= (optional): set the height of the video

In PHP file : You can define the main width and height of yours videos like that : 
$('#content').youtubeInsert({
    width : 600
    height : 450
});
unit is Pixel.

== Installation ==

1. Upload the zip file from the Plugin menu in Wordpress or
   Upload the entire `TEN-video-catcher` folder to your `wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.

== Frequently Asked Questions ==

= How do I find the ID of a video? =

If you play a YouTube video, look at the URL - it will probably looks something like this...

`http://www.youtube.com/watch?v=L5Y4qzc_JTg`

The video ID is the list of letters and numbers after `v=`, in this case `L5Y4qzc_JTg`.

If it's a dailymotion video, the URL looks like to...

`http://www.dailymotion.com/video/xlsc12_batman-arkham-city-notre-test-video_videogames`

You have two way to define de ID of the video.

First, the easier is to copy all characters after the last /, the result is : `xlsc12_batman-arkham-city-notre-test-video_videogames`

Second, you can clear the video's title to get the ID, like that : `xlsc12`

= How can I get help or request possible changes =

Feel free to report any problems, or suggestions for enhancements, to me either via [my contact form](http://www.toutestnet.fr/nous-contacter "Contact us") or on the upgrade presentation [the plugins upgrade](http://www.toutestnet.fr/plugin-wordpress-youtube-insertme-devient-ten-video-catcher "TEN - Video catcher").

== Changelog ==  
  
## 2.1 ##
* The plugin is renamed youtube-insertMe is now : TEN - Video catcher
* You can now insert dailymotion videos
* Option added : width (optional)
* Option added : height (optional)

## 1.0 ##
* Initial release

== Upgrade Notice ==
## 2.1 ##
* The plugin is renamed youtube-insertMe is now : TEN - Video catcher
* Option added : width (optional)
* Option added : height (optional)

## 1.0 ##
* Initial release
