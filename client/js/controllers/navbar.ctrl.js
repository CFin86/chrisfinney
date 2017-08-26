app.controller("NavbarController", ['$scope', 'SEOService', '$location',
    function ($scope, SEOService, $location) {
        $(".hamburger").click(function () {
            $(this).toggleClass("is-active");
        });
    

    SEOService.setSEO({
        title: 'Chris Finney Web Developer',
        image: '/img/pictures/Headshot.jpg',
        url: $location.url(),
        description: 'A Full Stack Web Developer from Birmingham, AL'
    })
    
    Skype.ui({
        "name": "chat",
        "element": "SkypeButton_Call_cfin86_1",
        "participants": ["cfin86"],
        "imageColor": "blue",
        "imageSize": 50
        })
    }
]);