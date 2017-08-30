app.controller("BlogController",["$scope",function(e){$(function(){$("#switch-view").click(function(){$(this).find("button").toggleClass("active"),$(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4")})})}]),app.controller("NavbarController",["$scope","SEOService","$location",function(e,t,o){$(".hamburger").click(function(){$(this).toggleClass("is-active")}),t.setSEO({title:"Chris Finney Web Developer",image:"http://"+o.host()+"/img/pictures/Headshot.jpg",url:o.url(),description:"A Full Stack Web Developer from Birmingham, AL"})}]),app.controller("WelcomeController",["$scope",function(e){function t(e){if("next"===e)t=$(".selected").next();else if("prev"==e)t=$(".selected").prev();else var t=e;var o=$(t).next(),s=$(t).prev(),l=$(s).prev(),n=$(o).next();$(t).removeClass().addClass("selected"),$(s).removeClass().addClass("prev"),$(o).removeClass().addClass("next"),$(n).removeClass().addClass("nextRightSecond"),$(l).removeClass().addClass("prevLeftSecond"),$(n).nextAll().removeClass().addClass("hideRight"),$(l).prevAll().removeClass().addClass("hideLeft")}$("#nav-icon3").click(function(){$(this).toggleClass("open")}),$(document).keydown(function(e){switch(e.which){case 37:t("prev");break;case 39:t("next");break;default:return}e.preventDefault()}),$("#carousel div").click(function(){t($(this))}),$("#prev").click(function(){t("prev")}),$("#next").click(function(){$("#prev").removeAttr("disabled"),t("next")})}]),angular.module("finney.factories",["ngResource"]).factory("static",["$resource",function(e){return e("http://localhost:3000/api/static/")}]),angular.module("finney.services",[]).constant("baseURL","http://localhost:3000/").service("SEOService",["$rootScope",function(e){this.setSEO=function(t){e.seo={};for(var o in t)e.seo[o]=t[o]}}]),app.controller("BlogController",["$scope",function(e){$(function(){$("#switch-view").click(function(){$(this).find("button").toggleClass("active"),$(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4")})})}]),app.controller("NavbarController",["$scope","SEOService","$location",function(e,t,o){$(".hamburger").click(function(){$(this).toggleClass("is-active")}),t.setSEO({title:"Chris Finney Web Developer",image:"http://"+o.host()+"/img/pictures/Headshot.jpg",url:o.url(),description:"A Full Stack Web Developer from Birmingham, AL"})}]),app.controller("WelcomeController",["$scope",function(e){function t(e){if("next"===e)t=$(".selected").next();else if("prev"==e)t=$(".selected").prev();else var t=e;var o=$(t).next(),s=$(t).prev(),l=$(s).prev(),n=$(o).next();$(t).removeClass().addClass("selected"),$(s).removeClass().addClass("prev"),$(o).removeClass().addClass("next"),$(n).removeClass().addClass("nextRightSecond"),$(l).removeClass().addClass("prevLeftSecond"),$(n).nextAll().removeClass().addClass("hideRight"),$(l).prevAll().removeClass().addClass("hideLeft")}$("#nav-icon3").click(function(){$(this).toggleClass("open")}),$(document).keydown(function(e){switch(e.which){case 37:t("prev");break;case 39:t("next");break;default:return}e.preventDefault()}),$("#carousel div").click(function(){t($(this))}),$("#prev").click(function(){t("prev")}),$("#next").click(function(){$("#prev").removeAttr("disabled"),t("next")})}]),angular.module("finney.factories",["ngResource"]).factory("static",["$resource",function(e){return e("http://localhost:3000/api/static/")}]),angular.module("finney.services",[]).constant("baseURL","http://localhost:3000/").service("SEOService",["$rootScope",function(e){this.setSEO=function(t){e.seo={};for(var o in t)e.seo[o]=t[o]}}]),app.controller("BlogController",["$scope",function(e){$(function(){$("#switch-view").click(function(){$(this).find("button").toggleClass("active"),$(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4")})})}]),app.controller("NavbarController",["$scope","SEOService","$location",function(e,t,o){$(".hamburger").click(function(){$(this).toggleClass("is-active")}),t.setSEO({title:"Chris Finney Web Developer",image:"http://"+o.host()+"/img/pictures/Headshot.jpg",url:o.url(),description:"A Full Stack Web Developer from Birmingham, AL"})}]),app.controller("WelcomeController",["$scope",function(e){function t(e){if("next"===e)t=$(".selected").next();else if("prev"==e)t=$(".selected").prev();else var t=e;var o=$(t).next(),s=$(t).prev(),l=$(s).prev(),n=$(o).next();$(t).removeClass().addClass("selected"),$(s).removeClass().addClass("prev"),$(o).removeClass().addClass("next"),$(n).removeClass().addClass("nextRightSecond"),$(l).removeClass().addClass("prevLeftSecond"),$(n).nextAll().removeClass().addClass("hideRight"),$(l).prevAll().removeClass().addClass("hideLeft")}$("#nav-icon3").click(function(){$(this).toggleClass("open")}),$(document).keydown(function(e){switch(e.which){case 37:t("prev");break;case 39:t("next");break;default:return}e.preventDefault()}),$("#carousel div").click(function(){t($(this))}),$("#prev").click(function(){t("prev")}),$("#next").click(function(){$("#prev").removeAttr("disabled"),t("next")})}]),angular.module("finney.factories",["ngResource"]).factory("static",["$resource",function(e){return e("http://localhost:3000/api/static/")}]),angular.module("finney.services",[]).constant("baseURL","http://localhost:3000/").service("SEOService",["$rootScope",function(e){this.setSEO=function(t){e.seo={};for(var o in t)e.seo[o]=t[o]}}]);
app.controller("BlogController",["$scope",function(e){$(function(){$("#switch-view").click(function(){$(this).find("button").toggleClass("active"),$(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4")})})}]),app.controller("NavbarController",["$scope","SEOService","$location",function(e,t,o){$(".hamburger").click(function(){$(this).toggleClass("is-active")}),t.setSEO({title:"Chris Finney Web Developer",image:"http://"+o.host()+"/img/pictures/Headshot.jpg",url:o.url(),description:"A Full Stack Web Developer from Birmingham, AL"})}]),app.controller("WelcomeController",["$scope",function(e){function t(e){if("next"===e)t=$(".selected").next();else if("prev"==e)t=$(".selected").prev();else var t=e;var o=$(t).next(),s=$(t).prev(),l=$(s).prev(),n=$(o).next();$(t).removeClass().addClass("selected"),$(s).removeClass().addClass("prev"),$(o).removeClass().addClass("next"),$(n).removeClass().addClass("nextRightSecond"),$(l).removeClass().addClass("prevLeftSecond"),$(n).nextAll().removeClass().addClass("hideRight"),$(l).prevAll().removeClass().addClass("hideLeft")}$("#nav-icon3").click(function(){$(this).toggleClass("open")}),$(document).keydown(function(e){switch(e.which){case 37:t("prev");break;case 39:t("next");break;default:return}e.preventDefault()}),$("#carousel div").click(function(){t($(this))}),$("#prev").click(function(){t("prev")}),$("#next").click(function(){$("#prev").removeAttr("disabled"),t("next")})}]),angular.module("finney.factories",["ngResource"]).factory("static",["$resource",function(e){return e("http://localhost:3000/api/static/")}]),angular.module("finney.services",[]).constant("baseURL","http://localhost:3000/").service("SEOService",["$rootScope",function(e){this.setSEO=function(t){e.seo={};for(var o in t)e.seo[o]=t[o]}}]);
app.controller('BlogController', ["$scope", function ($scope) {
    $(function(){
        $("#switch-view").click(function(){
          $(this).find("button").toggleClass("active");
          $(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4");
        });
      });
}]);
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
app.controller("WelcomeController", ['$scope',
        function ($scope) {
            $('#nav-icon3').click(function () {
	    	$(this).toggleClass('open');
	});

function moveToSelected(element) {
        if (element === "next") {
            var selected = $(".selected").next();
        } else if (element == "prev") {
            var selected = $(".selected").prev();
        } else {
            var selected = element;
        }

        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();

        $(selected).removeClass().addClass("selected");

        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");

        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");

        $(nextSecond).nextAll().removeClass().addClass('hideRight');
        $(prevSecond).prevAll().removeClass().addClass('hideLeft');

	}
//keyboard events
    $(document).keydown(function (e) {
        switch (e.which) {
        case 37: // left
				moveToSelected('prev');
				break;

			case 39: // right
				moveToSelected('next');
				break;

			default:
				return;
		}
		e.preventDefault();
	});

	$('#carousel div').click(function () {
		moveToSelected($(this));
	});
	
	$('#prev').click(function () {
		moveToSelected('prev');
	});

	$('#next').click(function () {
		$('#prev').removeAttr('disabled')
		moveToSelected('next');
	});
}
]);
angular.module("finney.factories", ["ngResource"])

    .factory("static", ["$resource", function ($resource) {
        return $resource("http://localhost:3000/api/static/");
    }])
angular.module('finney.services', [])
    .constant("baseURL", "http://localhost:3000/")

    .service('SEOService', ['$rootScope', function ($rootScope) {
        this.setSEO = function (data) {
            $rootScope.seo = {};
            for (var p in data) {
                $rootScope.seo[p] = data[p];
            }
        }
    }]);
app.controller('BlogController', ["$scope", function ($scope) {
    $(function(){
        $("#switch-view").click(function(){
          $(this).find("button").toggleClass("active");
          $(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4");
        });
      });
}]);
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
app.controller("WelcomeController", ['$scope',
        function ($scope) {
            $('#nav-icon3').click(function () {
	    	$(this).toggleClass('open');
	});

function moveToSelected(element) {
        if (element === "next") {
            var selected = $(".selected").next();
        } else if (element == "prev") {
            var selected = $(".selected").prev();
        } else {
            var selected = element;
        }

        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();

        $(selected).removeClass().addClass("selected");

        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");

        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");

        $(nextSecond).nextAll().removeClass().addClass('hideRight');
        $(prevSecond).prevAll().removeClass().addClass('hideLeft');

	}
//keyboard events
    $(document).keydown(function (e) {
        switch (e.which) {
        case 37: // left
				moveToSelected('prev');
				break;

			case 39: // right
				moveToSelected('next');
				break;

			default:
				return;
		}
		e.preventDefault();
	});

	$('#carousel div').click(function () {
		moveToSelected($(this));
	});
	
	$('#prev').click(function () {
		moveToSelected('prev');
	});

	$('#next').click(function () {
		$('#prev').removeAttr('disabled')
		moveToSelected('next');
	});
}
]);
angular.module("finney.factories", ["ngResource"])

    .factory("static", ["$resource", function ($resource) {
        return $resource("http://localhost:3000/api/static/");
    }])
angular.module('finney.services', [])
    .constant("baseURL", "http://localhost:3000/")

    .service('SEOService', ['$rootScope', function ($rootScope) {
        this.setSEO = function (data) {
            $rootScope.seo = {};
            for (var p in data) {
                $rootScope.seo[p] = data[p];
            }
        }
    }]);
app.controller('BlogController', ["$scope", function ($scope) {
    $(function(){
        $("#switch-view").click(function(){
          $(this).find("button").toggleClass("active");
          $(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4");
        });
      });
}]);
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
app.controller("WelcomeController", ['$scope',
        function ($rootScope,$location,$stateParams, $anchorScroll) {
            $('#nav-icon3').click(function () {
	    	$(this).toggleClass('open');
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState){
        if($stateParams.scrollTo){
          $location.hash($stateParams.scrollTo);
          $anchorScroll();

function moveToSelected(element) {
        if (element === "next") {
            var selected = $(".selected").next();
        } else if (element == "prev") {
            var selected = $(".selected").prev();
        } else {
            var selected = element;
        }

        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();

        $(selected).removeClass().addClass("selected");

        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");

        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");

        $(nextSecond).nextAll().removeClass().addClass('hideRight');
        $(prevSecond).prevAll().removeClass().addClass('hideLeft');

	}
//keyboard events
    $(document).keydown(function (e) {
        switch (e.which) {
        case 37: // left
				moveToSelected('prev');
				break;

			case 39: // right
				moveToSelected('next');
				break;

			default:
				return;
		}
		e.preventDefault();
	});

	$('#carousel div').click(function () {
		moveToSelected($(this));
	});
	
	$('#prev').click(function () {
		moveToSelected('prev');
	});

	$('#next').click(function () {
		$('#prev').removeAttr('disabled')
		moveToSelected('next');
	});
}
    })
}
]);
angular.module("finney.factories", ["ngResource"])

    .factory("static", ["$resource", function ($resource) {
        return $resource("http://localhost:3000/api/static/");
    }])
angular.module('finney.services', [])
    .constant("baseURL", "http://localhost:3000/")

    .service('SEOService', ['$rootScope', function ($rootScope) {
        this.setSEO = function (data) {
            $rootScope.seo = {};
            for (var p in data) {
                $rootScope.seo[p] = data[p];
            }
        }
    }]);