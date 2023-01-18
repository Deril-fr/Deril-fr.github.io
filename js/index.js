/**
 * 
 * @param {string} location 
 */

function changeCurrentLocation(location) {
  // rewrite the current URL to the new location
    window.history.replaceState({}, '', location.replace("#", ""));
    document.querySelector("#content").innerHTML = location.replace("#", "");
}

window.addEventListener("hashchange", function () {
    // get the new URL
    var newLocation = window.location.hash;
    // change the current location
    changeCurrentLocation(newLocation);
    });

window.addEventListener("load", function () {
    // get the current URL
    var currentLocation = window.location.hash || window.location.pathname;
    // change the current location
    changeCurrentLocation(currentLocation);
    });
