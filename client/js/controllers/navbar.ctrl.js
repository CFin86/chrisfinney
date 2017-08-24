app.controller("NavbarController", ['$scope', 'SEOService', '$location',
    function ($scope, SEOService, $location) {
        $(".hamburger").click(function () {
            $(this).toggleClass("is-active");
        });
    

    SEOService.setSEO({
        title: 'Chris Finney Web Developer',
        image: 'http://' + $location.host() + '/img/pictures/Headshot.jpg',
        url: $location.url(),
        description: 'A Full Stack Web Developer from Birmingham, AL'
    })
    }
]);