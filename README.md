# I Don't Care About AngularJS

This chrome extension filters out AngularJS Google search results.
It does it by appending "-AngularJS" to every Google query.

The AngularJS Button in the Bar underneath the searchbar turns the filter on or off. The red bar at the top indicates if the filter is activated.

Note: per default it works for `at` Top-Level-Domains

## How to Install

1. Download the source code
2. Unzip it and put it in a folder, where you won't accidentally delete it.
3. Go to the url `chrome://extensions` in Google Chrome
4. Activate Developer Mode
5. Click `Load Unpacked` and choose the according folder in which you saved the source code earlier.

## Modifiy Top-Level-Domain (TLD)

Go to `manifest.js` and `background.js `and change every occurring `at` to your desired TLD.
 
## Roadmap

- allow configurable TLD