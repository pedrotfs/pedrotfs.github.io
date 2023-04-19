$(document).ready(() => {
    /* sticky navigation */
    $(".js-about").waypoint((direction) => {
        if(direction == "down") {
            $("nav").addClass("sticky")
        } else {
            $("nav").removeClass("sticky")
        }
    }, {
        offset:"120px;"
    })
    
    $(".js--nav-icon").click(() => {
        var nav = $(".js-main-navigation")
        nav.slideToggle(200)
        var icon = $(".js--nav-icon i")
        if(icon.hasClass("ion-navicon-round")) {
            icon.addClass("ion-close-round")
            icon.removeClass("ion-navicon-round")
        } else {
            icon.addClass("ion-navicon-round")
            icon.removeClass("ion-close-round")
        }
    })


})