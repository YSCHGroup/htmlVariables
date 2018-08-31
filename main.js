
window.onload = initHtmlVars;

/*  SCRIPT SETTINGS  */
hv_looping = false;

/*  DEFAULT SETTINGS  */
hv_rate = 100;

function initHtmlVars() {
    hv_loop();
}

function hv_loop() {
    if (!hv_looping) {
        hv_looping = true;
        // Code...
        var globVars = Object.entries(window);
        var htmlTags = document.getElementsByTagName("hv");

        for (var i = 0; i < globVars.length; i++) {
            var key = globVars[i][0];
            var val = globVars[i][1];

            if (typeof val == "number" || typeof val == "string" || typeof val == "boolean" || val == undefined || val == null) {
                for (var j = 0; j < htmlTags.length; j++) {
                    var tagKey = htmlTags[j].getAttribute("key");
                    var tagDefault = htmlTags[j].getAttribute("default");

                    if (tagKey == key) {
                        if (val != null && val != undefined && val != "") {
                            if (htmlTags[j].innerHTML != val) {
                                htmlTags[j].innerHTML = val;
                            }
                        }
                        else if(tagDefault != null) {
                            htmlTags[j].innerHTML = tagDefault;
                        }
                    }
                }
            }
        }

        // Repeat...
        setTimeout(function () {
            hv_looping = false;
            hv_loop();
        }, hv_rate);
    }
}
