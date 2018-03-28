document.addEventListener("DOMContentLoaded", function() {
    startUp();
});

function startUp() {
    chrome.storage.local.get(['isActive'], function(result) {
        createButton("hdtb-msb", result.isActive);

        if(result.isActive) {
            addIndicator("sfbgg");
            stripSuffixFromInput("lst-ib");
        }
    });
}

function createButton(toolbarId, isActive) {
    // Toolbar
    var toolBar = document.getElementById(toolbarId);
    var toolBarLeftItems = toolBar.childNodes[1];

    // Button
    var node = document.createElement("a");
    node.setAttribute("role", "button");
    node.setAttribute("id", "idcaajs");
    node.setAttribute("class", "idcaajs");
    if(isActive) {
        node.classList.add("active");
        node.setAttribute("data-is-active", "true");
    } else {
        node.setAttribute("data-is-active", "false");
    }

    var textnode = document.createTextNode("AngularJS");
    node.appendChild(textnode);

    // Add Button to Toolbar
    toolBarLeftItems.insertBefore(node, toolBarLeftItems.firstChild);

    // Add Event-Listiner
    node.addEventListener("click", function() {
        var isActive = node.getAttribute('data-is-active') === 'true';
        chrome.storage.local.set({isActive: !isActive}, function() {
            window.location.href = window.location.href.replace('+-AngularJS','');
        });
    }, false);
}

function addIndicator(elementClass) {
    var element = document.getElementsByClassName(elementClass)[0];
    element.classList.add('idcaajs-indicator');
}

function stripSuffixFromInput(inputId) {
    var input = document.getElementById(inputId);
    input.value = input.value.replace(' -AngularJS','');
}
