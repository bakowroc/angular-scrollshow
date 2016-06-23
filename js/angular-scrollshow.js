/* 

    Name:       scrollshow
    
    Desc:       Applying a simple slide to an element while an user reaches it by scrolling a window browser.
    
    Author:     bakowroc
    
    Date:       21.06.2016
    
    Ver:        Beta 1.0
    
*/


(function () {

    /*Define animates */

    /*SlideToTop*/
    function slideToTopDefault(handler) {
        angular.element(handler)
            .css('opacity', '0')
            .css('transform', 'translateY(200px)');
    }

    function slideToTop(handler, time) {
        angular.element(handler)
            .css('opacity', '1')
            .css('transform', 'translateY(0px)')
            .css('transition', time + 's linear');
    }

    /*SlideToLeft*/
    function slideToLeftDefault(handler) {
        angular.element(handler)
            .css('opacity', '0')
            .css('transform', 'translateX(-50%)');

    }

    function slideToLeft(handler, time) {
        angular.element(handler)
            .css('opacity', '1')
            .css('transform', 'translateX(0%)')
            .css('transition', time + 's linear');
    }


    /*Execute a choice*/
    function chooseAnimate(choice, handler, time) {
        if (choice == 'top')
            slideToTop(handler, time);
        else if (choice == 'left')
            slideToLeft(handler, time);

    }

    function chooseAnimateDefault(choice, handler) {
        if (choice == 'top')
            slideToTopDefault(handler);
        else if (choice == 'left')
            slideToLeftDefault(handler);

    }
    var app = angular.module('scrollshow', []);
    app.directive("scrollshow", function ($window) {
        return function (scope, element, attrs) {
            var alreadyScrolled = false;
            angular.element($window).bind("scroll", function () {
                var thisElement = element[0];
                if (attrs.animateTime != undefined) {
                    var animateTime = attrs.animateTime;
                } else var animateTime = 0.3; //default animateTime if not given
                if (attrs.animateType != undefined) {
                    var animateType = attrs.animateType;
                } else var animateType = 'top'; //default animateType if not given
                /*set the start position of the element before reach it by scroll (only for bottom or top fix)*/
                var fixedWidth = 0;
                if (animateType == 'top')
                    fixedWidth = 200;
                else if (animateType == 'bottom')
                    fixedWidth = -200;
                var height = Math.round(thisElement.getBoundingClientRect().top) - fixedWidth - $window.innerHeight;
                if (!alreadyScrolled)
                    chooseAnimateDefault(animateType, thisElement); //Execute an default settings for animate
                if (height <= 0) {
                    chooseAnimate(animateType, thisElement, animateTime); //Execute an animate
                    alreadyScrolled = true; // don't change any on scroll if element has been showed once
                }
                scope.$apply();
            });
        };
    });
})();