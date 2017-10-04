// ==UserScript==
// @name         Giveaway Helper Enhancer
// @namespace    https://github.com/gekkedev/giveawayHelperEnhancer
// @version      0.2
// @description  Enhances the popular Steam key giveaway site helper
// @author       gekkedev
// @match        *://*.marvelousga.com/*
// @match        *://*.dupedornot.com/*
// @match        *://*.indiegala.com/giveaways*
// @match        *://*.indiegala.com/store*
// @match        *://*.indiegala.com/auctions*
// @match        *://*.indiegala.com/givmessage*
// @match        *://*.indiegala.com/trades*
// @match        *://*.steamcommunity.com/openid/login*
// @grant        none
// @updateURL https://raw.githubusercontent.com/gekkedev/giveawayHelperEnhancer/master/giveawayHelperEnhancer.user.js
// @downloadURL https://raw.githubusercontent.com/gekkedev/giveawayHelperEnhancer/master/giveawayHelperEnhancer.user.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @run-at document-end
// ==/UserScript==

(function() {
    /**
    * Determine what to do for this page based on what's defined in the "config" variable
    *
    * 		hostname: String
    *			The hostname of the site we're setting the config for. Must be the same as what's defined
    *			as @match in the metadata block above.
    *
    *		googleads: Boolean
    * 			This tells us if the site we visit has ads (this refers to banners of any size). We'll then trigger the removal function for that.
    *
    *		autologin: String
    * 			This is a selector for a clickable button/link which has to be clicked in order to get forwarded to the login page.
    *
    *		clickables: Array of String
    * 			These are CSS Selectors which will be buttons to be clicked (in ascending order). Some may not be clickable but each click that doesn't need to be done is already a success.
    *
    */
    var config = [
        {
            hostname: "marvelousga.com",
            ads: true,
            autologin: "a[href='?login'] button"
        },
        {
            hostname: "dupedornot.com",
            ads: true,
            autologin: "a[href='?login'] button"
        },
        {
            hostname: "indiegala.com",
            ads: true,
            clickables: ["button#close-socials", "a#redeemBtn"]
        },
        {
            hostname: "chubbykeys.com",
            ads: false
        },
        {
            hostname: "steamcommunity.com",
            ads: false,
            clickables: ["input[type='submit']"]
        }
    ];
    scanForElement = function(ident) {
        console.log("found " + ident + " " + $(ident).length + " time(s)");
        if ($(ident).length >= 1) {
            return true;
        } else {
            console.log('cannot find ' + ident);
            return false;
        }
    };
    hideElement = function(ident) {
        if (scanForElement(ident)) {
            $(ident).hide();
        }
    };
    removeElement = function(ident) {
        if (scanForElement(ident)) {
            $(ident).remove();
        }
    };
    var clickElement = function(ident) {
        if (scanForElement(ident)) {
            $(ident).click();
        }
    };
    var removeGoogleAds = (function(){
        console.log("removing google ads!");
        hideElement("ins[class*='adsbygoogle']");
    });
    var removePopups = (function(){
        console.log("removing popups!");
        removeElement("a[id^='popup']");
    });
    for(var i = 0; i < config.length; i++) {
        var site = config[i];

        if(document.location.hostname.split(".").splice(-2).join(".") == site.hostname) {
            if (site.ads) {
                removeGoogleAds();
                removePopups();
                //add other ad services here if known
            }
            if (site.autologin !== undefined) {
                console.log('performing autologin');
                clickElement(site.autologin);
            }
            if (site.clickables !== undefined) {
                if (site.clickables.length > 0) {
                    for(var j = 0; j < site.clickables.length; j++) {
                        clickElement(site.clickables[j]);
                    }
                }
            }
        }
    }
})();
