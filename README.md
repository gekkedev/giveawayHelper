# Giveaway Killer (a.k.a. Giveaway Enhancer)
This script enhances the popular [Steam key giveaway site helper](https://github.com/Citrinate/giveawayHelper) by automatically logging in or solving tasks. It also removes banners/popups if a giveaway site excessively uses them. Therefore it does not interfere with the Giveaway Helper. Using both of them is higly recommended.

**Disclaimer: Any usage of this script may violate the Terms of Service of the sites it runs on. It is absolutely meant to do that. Use at your own risk.**

## Supported Sites
<table>
  <thead>
    <tr>
      <td rowspan="2" width="444px" valign="bottom"><strong>Site</strong></td>
      <td colspan="3" width="443px" align="center"><strong>Features</strong></td>
    </tr>
    <tr>
      <td align="center"><strong>Banner/Popup removal</strong></td>
      <td align="center"><strong>Auto-login</strong></td>
      <td align="center"><strong>Automatic task solving</strong></td>
    </tr>
  </thead>
  <tbody>
    <tr><td>Steam OpenID Onsite-login</td><td align="center">-</td><td align="center">✔</td><td align="center">-</td></tr>
    <tr><td>DogeBundle</td><td align="center">-</td><td align="center">✔</td><td align="center">-</td></tr>
    <tr><td>DupedOrNot</td><td align="center">✔</td><td align="center">✔</td><td align="center">planned</td></tr>
    <tr><td>SteamGifts</td><td align="center">✔</td><td align="center">✔</td><td align="center">-</td></tr>
    <tr><td>Indiegala</td><td align="center">✔</td><td align="center">-</td><td align="center">✔</td></tr>
    <tr><td>Marvelousga</td><td align="center">✔</td><td align="center">✔</td><td align="center">partly done</td></tr>
    <tr><td>GiftyBundle</td><td align="center">-</td><td align="center">✔</td><td align="center">planned</td></tr>
    <tr><td>GiveawayHopper</td><td align="center">✔</td><td align="center">✔</td><td align="center">planned</td></tr>
    <tr><td>Giveaway.su</td><td align="center">✔</td><td align="center">✔</td><td align="center">✔</td></tr>
    <tr><td>Simplo.gg</td><td align="center">✔</td><td align="center">✔</td><td align="center">partly done</td></tr>
    <tr><td>Cubicbundle</td><td align="center">-</td><td align="center">✔</td><td align="center">-</td></tr>
    <tr><td>TreasureGiveaways</td><td align="center">-</td><td align="center">✔</td><td align="center">✔</td></tr>
    <tr><td>GoldenGiveaways</td><td align="center">-</td><td align="center">✔</td><td align="center">✔</td></tr>
    <!--
    <tr><td>ChubbyKeys</td><td align="center">✔</td><td></td><td></td></tr>
    <tr><td>Embloo</td><td align="center">✔</td><td></td><td></td></tr>
    <tr><td>GetKeys</td><td align="center">✔</td><td></td><td align="center">✔</td></tr>
    <tr><td>Ghame.ru</td><td align="center">✔</td><td></td><td></td></tr>
    <tr><td>Gleam.io (<a href="https://raw.githubusercontent.com/Citrinate/giveawayHelper/master/images/gleam.png">preview</a>)</td><td align="center">✔</td><td align="center">✔</td><td align="center">✔</td></tr>
    <tr><td>HRK</td><td align="center">✔</td><td></td><td></td></tr>
    <tr><td>Key Champions</td><td align="center">✔</td><td></td><td></td></tr>
    <tr><td>Prys.ga</td><td align="center">✔</td><td></td><td></td></tr>
    <tr><td>Steam Friends</td><td align="center">✔</td><td></td><td></td></tr>
    <tr><td>Who's Gaming Now?!</td><td align="center">✔</td><td></td><td></td></tr>
    -->
  </tbody>
</table>
When taking a closer look at giveaway websites, turned out that at least GiveawayHopper, GiftyBundle, Marvelousga and DupedOrNot were made "with love"(not at all) by the same person, as even their bugs are the same and the markup has the same custom class names and IDs. Simplo.gg is somewhere looking familiar but according to credits only partly involved. Looks like someone resold a very poorly made Gleam clone script over and over. For us, this just makes it easier to automate stuff.


## Installation
1. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) (for Chrome) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) (for Firefox)
2. Go [here](https://raw.githubusercontent.com/gekkedev/giveawayHelperEnhancer/master/giveawayHelperEnhancer.user.js)
3. Click "Install"

By default, the script will auto-update every 24 hours.  If an update adds support for a new giveaway site, then you may see a notficiation asking for permission before the auto-update can complete.
