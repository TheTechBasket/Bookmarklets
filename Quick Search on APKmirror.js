javascript: var regeX = /(?<=[?&]id=)[^&\n]+/g,
getGPSURL = location.href,
video_id, match = getGPSURL.match(regeX);
if (match) {
var url = "https://www.apkmirror.com/?s=" + escape(match) + "&post_type=app_release&searchtype=apk";
(w = open(url, "w", "location=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=500,height=800,modal=yes,dependent=yes")) ? setTimeout("w.focus()", 1E3): location = url
} else alert(" That's Not a Valid Google Play Store URL, \n Need URL like this \n https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox")