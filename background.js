(function(){

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) { 
// sample details Response
// {"frameId":0,"initiator":"https://www.google.com","method":"GET","parentFrameId":-1,"requestId":"6066",
// "tabId":119,"timeStamp":1640678770893.6729,"type":"script",
// "url":"https://www.gstatic.com/og/_/js/k=og.qtm.en_US.Jn6hD4pATtI.O/rt=j/m=qabr,qgl,q_dnp,qdid,qcwid,qapid/exm=qaaw,qadd,qaid,qein,qhaw,qhbr,qhch,qhga,qhid,qhin,qhpr/d=1/ed=1/rs=AA2YrTsYklP8lcczE-ijd6RDYU_tD3G0Ag"}
            if(details.url.includes("https://www.google.com")){
                return {redirectUrl: "https://www.fb.com"};
            } else if(details.url.includes("evil")){
                return {cancel: true}; 
            }
        },
        {urls: ["*://*/*"]},
        ["blocking"]
    );
})()

