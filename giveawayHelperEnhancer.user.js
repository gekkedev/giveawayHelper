// ==UserScript==
// @name         Giveaway Helper Enhancer
// @namespace    https://github.com/gekkedev/giveawayHelperEnhancer
// @version      0.3.1
// @description  Enhances the popular Steam key giveaway site helper
// @author       gekkedev
// @match        *://*.marvelousga.com/*
// @match        *://*.dupedornot.com/*
// @match        *://*.indiegala.com/*
// @match        *://*.dogebundle.com/*
// @match        *://*.giveaway.su/*
// @match        *://*.steamgifts.com/*
// @match        *://*.simplo.gg/*
// @match        *://*.giveawayhopper.com/*
// @match        *://*.giftybundle.com/*
// @match        *://*.cubicbundle.com/*
// @match        *://*.steamcommunity.com/openid/login*
// @grant        none
// @updateURL https://raw.githubusercontent.com/gekkedev/giveawayHelperEnhancer/master/giveawayHelperEnhancer.user.js
// @downloadURL https://raw.githubusercontent.com/gekkedev/giveawayHelperEnhancer/master/giveawayHelperEnhancer.user.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @run-at document-end
// ==/UserScript==

(function() {
    jQuery.noConflict(); //to prevent i.e. broken buttons when a site uses jquery too
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
    * 			This is a selector for a link which has to be visited in order to get forwarded to the login page.
    *
    *		clickables: Array of String
    * 			These are CSS Selectors which will be buttons to be clicked (in ascending order). Some may not be clickable but each click that doesn't need to be done is already a success.
    *
    */
    var removePopups = (function(){
        console.log("removing popups!");
        removeElement("a[id^='popup']");
    });
    var fakeClickLinks = function() {
        $("form[action*='verify_click.php']").trigger("submit");
    };
    var solveGamehagUsernameCheck = function() {
        //"Kruemel" //some random user, just pick another one from the ranklist in case they block this user ;-)
    };
    var config = [
        {
            hostname: "marvelousga.com",
            ads: true,
            autologin: "a[href='?login']",
            //clickables: ["button[type=submit][name!=sg][id!=submit]"],
            //autosolve: "'div.collapse* button'"
            trigger: [removePopups, fakeClickLinks, solveGamehagUsernameCheck]
        },
        {
            hostname: "dupedornot.com",
            ads: true,
            autologin: "a[href='?login']",
            trigger: [removePopups]
        },
        {
            hostname: "dogebundle.com",
            ads: false,
            autologin: "a[href*='?page=login']"
        },
        {
            hostname: "indiegala.com",
            ads: true,
            clickables: ["button#close-socials"],
            custom: function() {$('#myModal-givform').modal('show');}
        },
        {
            hostname: "giveaway.su",
            ads: false,
            autologin: "a.steam-login"
        },
        {
            hostname: "simplo.gg",
            ads: true,
            autologin: "div.steam-button a",
            clickables: ["w-div[role=dialog] span"]
        },
        {
            hostname: "steamgifts.com",
            ads: false, //not removing ads due to not being excessively sponsored
            autologin: "a.nav__sits"
        },
        {
            hostname: "chubbykeys.com",
            ads: false
        },
        {
            hostname: "giveawayhopper.com",
            ads: false,
            autologin: "a[href='?login']"
        },
        {
            hostname: "giftybundle.com",
            ads: false,
            autologin: "a[href='?login']"
        },
        {
            hostname: "cubicbundle.com",
            ads: false,
            autologin: "a.no-login"
        },
        {
            hostname: "steamcommunity.com",
            ads: false,
            clickables: ["input[type='submit']"]
        }
    ];
    scanForElement = function(ident) {
        console.log("found " + ident + " " + $(ident).length + " time(s)");console.log($(ident));
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
    var visitLink = (function(ident){
        window.location.replace($(ident).attr("href"));
    });
    var removeGoogleAds = (function(){
        console.log("removing google ads!");
        hideElement("ins[class*='adsbygoogle']");
    });
    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    for(var i = 0; i < config.length; i++) {
        var site = config[i];

        if(document.location.hostname.split(".").splice(-2).join(".") == site.hostname) {
            if (site.ads) {
                removeGoogleAds();
                //removePopups();
                //add other ad services here if known
            }
            if (site.autologin !== undefined) {
                if (scanForElement(site.autologin)) {
                    console.log('performing autologin');
                    visitLink(site.autologin);
                }
            }
            if (site.clickables !== undefined) {
                if (site.clickables.length > 0) {
                    for(var j = 0; j < site.clickables.length; j++) {
                        if ($.isArray(site.clickables[j])) {
                            j = getRandomInt(0, site.clickables[j].length);
                            console.log("picking the entry " + j);
                        }
                        clickElement(site.clickables[j]);
                    }
                }
            }
            if (site.trigger !== undefined) {
                for(var j = 0; j < site.trigger.length; j++) {
                    site.trigger[j]();
                }
            }
            if (site.custom !== undefined) {
                site.custom();
            }
        }
    }
})();
