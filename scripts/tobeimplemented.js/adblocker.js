//These values need to be stored in LocalSyncStorage and Updated in realtime.


const defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://*.googleadservices.com/*",
	"*://*.partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
     "*://*.zedo.com/*",
     "*://youtube.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(function(details) { return { cancel: true }},{ urls: defaultFilters }, ["blocking"] )