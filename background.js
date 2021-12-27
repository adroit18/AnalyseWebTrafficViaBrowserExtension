(function(){

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) { alert("Hello Blocked");return {cancel: true}; },
        {urls: ["*://www.evil.com/*"]},
        ["blocking"]
    );
})()