/*-----------------------------------------------------------------------------
>>> GOOGLE ANALYTICS
-----------------------------------------------------------------------------*/

if (chrome.runtime.getManifest().version === chrome.runtime.getManifest().version_name) {
    var version = chrome.runtime.getManifest().version,
        _gaq = _gaq || [];

    _gaq.push(['_setAccount', 'UA-88354155-1']);
    _gaq.push(['_setSessionCookieTimeout', 86400000]);

    (function() {
        var ga = document.createElement('script'),
            s = document.getElementsByTagName('script')[0];

        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = 'https://ssl.google-analytics.com/ga.js';
        s.parentNode.insertBefore(ga, s);
    })();

    _gaq.push(['_trackPageview', '/popup-' + version, 'started']);
}