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
    */
    var config = [
        {
            hostname: "marvelousga.com",
            ads: true
        },
        {
            hostname: "chubbykeys.com",
            ads: false
        }
    ];
    var removeGoogleAds = (function(){
        $("ins[class*='adsbygoogle']").hide();
        console.log("removed google ads!");
    });
    for(var i = 0; i < config.length; i++) {
        var site = config[i];

        if(document.location.hostname.split(".").splice(-2).join(".") == site.hostname) {
            if (site.ads) {
                removeGoogleAds();
                //add other ad services here if known
            }
        }
    }
})();
