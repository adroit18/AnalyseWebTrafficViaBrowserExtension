# InternetHealth
Chrome Extension

**chrome.webrequest**
1. onBeforeRequest (optionally synchronous) : event is sent before any TCP connection. Can be used to **cancel or redirect requests**.
2. onBeforeSendHeaders (optionally synchronous) : Fires when a request is about to occur and the initial headers have been prepared. **Add, modify, and delete request headers**. **Event can be used to cancel the request.**
3. onSendHeaders : The event is triggered before the headers are sent to the network and after extensions have had chance to modify request headers, presents final version. It **does not allow modifying or cancelling the request.**
4. onHeadersReceived (optionally synchronous) : Fires each time that an HTTP(S) response header is received. Due to redirects and authentication requests this can happen multiple times per request. **Allows extensions to add, modify, and delete response headers, such as incoming Content-Type headers.** Caching directives are processed before this event is triggered, so modifying headers such as Cache-Control has no influence on the browser's cache. **It also allows you to cancel or redirect the request.** 
5. onAuthRequired (optionally synchronous) : Fires when a request requires authentication of the user. **This can also be used to cancel the request.**
6. onBeforeRedirect : Fires when a redirect is about to be executed. A redirection can be triggered by an HTTP response code or by an extension. **This event is informational** and handled asynchronously. **It does not allow you to modify or cancel the request.**
7. onResponseStarted : **Fires when the first byte of the response body is received.** **This event is informational** and handled asynchronously. **It does not allow modifying or cancelling the request.**
8. onCompleted : Fires when a request has been processed successfully.
9. onErrorOccurred : Fires when a request could not be processed successfully.
