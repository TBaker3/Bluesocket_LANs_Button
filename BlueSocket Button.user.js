// ==UserScript==
// @name         BlueSocket Button
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Opens sites corresponding BlueSocket controller.
// @author       Zachary Kitcher
// @fixed.by     Thomas Baker
// @match        https://vselect.com/*?goto=bblancircuits&locid=*
// @updateURL    https://github.com/ZKitcher/Bluesocket_LANs_Button/raw/master/BlueSocket%20Button.user.js
// ==/UserScript==


(function() {

    var btn = document.createElement("BUTTON");
    var Space = document.createElement("TD");

    var anchor = document.getElementsByClassName("bbutton")[8].parentNode;
    var parent = anchor.parentNode;

    var indexLocGroup = document.getElementsByName("locgroup")[0].selectedIndex;
    var optionLocGroup = document.getElementsByName("locgroup")[0].options;
    var locGroupString = optionLocGroup[indexLocGroup].text;
    var cheetahTest = "Cheetah";

    var BSSelection, BSString, optionBSSelection, indexBSSelection

    btn.innerHTML = "Bluesocket Controller";
    btn.className = "bbutton";
    btn.style.width = '150px';
    Space.style.width = '3px';

    if (locGroupString.toLowerCase().indexOf(cheetahTest.toLowerCase()) != -1 ) {
        parent.insertBefore(Space, anchor);
        parent.insertBefore(btn, Space);
    }

    btn.addEventListener ("click", function() {
        BSSelection = document.getElementsByClassName("vselect-dropdown")[0];
        if (BSSelection.value == 2){
            indexBSSelection = document.getElementsByClassName("vselect-dropdown")[0].selectedIndex;
            optionBSSelection = document.getElementsByClassName("vselect-dropdown")[0].options;
            BSString = optionBSSelection[indexBSSelection].text;
            BSString = BSString.replace(/\D+/g, "");
            window.open("https://162.220.73." + BSString + ":3000/");
        }
        else if
            (BSSelection.value > 2){
            indexBSSelection = document.getElementsByClassName("vselect-dropdown")[0].selectedIndex;
            optionBSSelection = document.getElementsByClassName("vselect-dropdown")[0].options;
            BSString = optionBSSelection[indexBSSelection].text;
            BSString = BSString.replace(/\D+/g, "");
            window.open("https://162.220.74." + BSString + ":3000/");
        }
        else
        {
            window.open("https://i.imgflip.com/2ybxhk.jpg");
        };
    });
})();
