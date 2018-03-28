var isActive = false;

chrome.storage.onChanged.addListener(function(changes, area) {
    if (area == "local" && "isActive" in changes) {
        isActive = changes.isActive.newValue;
    }
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
            var url = details.url;
            if (shouldModifyQuery(url)) {
                var redirectUrl = "https://www.google.at/search?q=" + getParameterByName('q', url) + "+-AngularJS";
                return {redirectUrl: redirectUrl};
            }
    },
    {urls: ["https://www.google.at/*"]},
    ["blocking"]
);

function shouldModifyQuery(url) {
    return isActive && checkIfUrlMatches(url);
}

function checkIfUrlMatches(url) {
    return !url.match(/\+-AngularJS/) && url.match(/^https:\/\/www\.google\.at\/search.*/);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}