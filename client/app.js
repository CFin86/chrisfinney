var app = angular.module("finney", ["ui.router",  "ngResource", "finney.services", "finney.factories"]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $uiViewScrollProvider.useAnchorScroll();
    $stateProvider
        .state('welcome', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'views/mainHeader.html',
                    controller: 'NavbarController'
                },
                'content': {
                    templateUrl: 'views/welcome.html',
                    controller: 'WelcomeController'
                },
                'sidenav@welcome': {
                    templateUrl: 'views/sidenav.html'
                },
                'footer': {
                    templateUrl: 'views/mainFooter.html'
                }
            }
        })
        .state('resume', {
            url: '/resume',
            views: {
                'header': {
                    templateUrl: 'views/mainHeader.html',
                    controller: 'NavbarController'
                },
                'content': {
                    templateUrl: 'views/resume.html',
                    controller: 'WelcomeController'
                },
                'sidenav@resume': {
                    templateUrl: 'views/sidenav.html'
                },
                'footer': {
                    templateUrl: 'views/footer.html'
                }
            }
        })
        .state('portfolio', {
            url: '/portfolio',
            views: {
                'header': {
                    templateUrl: 'views/mainHeader.html',
                    controller: 'NavbarController'
                },
                'content': {
                    templateUrl: 'views/portfolio.html',
                    controller: 'WelcomeController'
                },
                'sidenav@portfolio': {
                    templateUrl: 'views/sidenav.html'
                },
                'footer': {
                    templateUrl: 'views/footer.html'
                }
            }
        })
        .state('covstore', {
            url: '/covstore',
            views: {
                'header': {
                    templateUrl: 'views/mainHeader.html',
                    controller: 'NavbarController'
                },
                'content': {
                    templateUrl: 'views/covstore.html',
                    controller: 'WelcomeController'
                },
                'sidenav@covstore': {
                    templateUrl: 'views/sidenav.html'
                },
                'footer': {
                    templateUrl: 'views/footer.html'
                }
            }
        })
        .state('trimr', {
            url: '/trimr',
            views: {
                'header': {
                    templateUrl: 'views/mainHeader.html',
                    controller: 'NavbarController'
                },
                'content': {
                    templateUrl: 'views/trimrNew.html',
                    controller: 'WelcomeController'
                },
                'sidenav@trimr': {
                    templateUrl: 'views/sidenav.html'
                },
                'footer': {
                    templateUrl: 'views/footer.html'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
});
