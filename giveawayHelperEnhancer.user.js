// ==UserScript==
// @name         Giveaway Helper Enhancer
// @namespace    https://github.com/gekkedev/giveawayHelperEnhancer
// @version      0.1
// @description  Enhances the popular Steam key giveaway site helper
// @author       gekkedev
// @match        *://*.marvelousga.com/index.php
// @grant        none
// @updateURL https://raw.githubusercontent.com/gekkedev/giveawayHelperEnhancer/master/giveawayHelperEnhancer.user.js
// @downloadURL https://raw.githubusercontent.com/gekkedev/giveawayHelperEnhancer/master/giveawayHelperEnhancer.user.js
// ==/UserScript==

(function() {
    if(document.location.hostname.split(".").splice(-2).join(".") == "marvelousga.com") {
        $("ins[class*='adsbygoogle']").remove();
    }
})();
