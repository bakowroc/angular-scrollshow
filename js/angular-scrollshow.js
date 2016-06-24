/* 

    Name:       scrollshow
    
    Desc:       Applying a simple slide to an element while an user reaches it by scrolling a window browser.
    
    Author:     bakowroc
    
    Date:       21.06.2016
    
    Ver:        Beta 1.2
    
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


    /*SlideToBottom*/
    function slideToBottomDefault(handler) {
        angular.element(handler)
            .css('opacity', '0')
            .css('transform', 'translateY(-200px)');
    }

    function slideToBottom(handler, time) {
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


    /*SlideToRight*/
    function slideToRightDefault(handler) {
        angular.element(handler)
            .css('opacity', '0')
            .css('transform', 'translateX(50%)');

    }

    function slideToRight(handler, time) {
        angular.element(handler)
            .css('opacity', '1')
            .css('transform', 'translateX(0%)')
            .css('transition', time + 's linear');
    }


    /*Execute an animate choice*/
    function chooseAnimate(choice, handler, time) {
        if (choice == 'top')
            slideToTop(handler, time);
        else if (choice == 'bottom')
            slideToBottom(handler, time);
        else if (choice == 'left')
            slideToLeft(handler, time);
        else if (choice == 'right')
            slideToRight(handler, time);
        else if (choice = 'none')
            return 0;

    }

    function chooseAnimateDefault(choice, handler) {
        if (choice == 'top')
            slideToTopDefault(handler);
        else if (choice == 'bottom')
            slideToBottomDefault(handler);
        else if (choice == 'left')
            slideToLeftDefault(handler);
        else if (choice == 'right')
            slideToRightDefault(handler);
        else if (choice = 'none')
            return 0;
    }

    /*Add a class*/
    function addMyClass(handler, myClass) {
        angular.element(handler).addClass(myClass);
    }

    var app = angular.module('scrollshow', []);
    app.directive("scrollshow", function ($window, $timeout) {
        return function (scope, element, attrs) {
            angular.element($window).bind("scroll", function () {
                var thisElement = element[0];
                var alreadyScrolled = false;
                var animateType = 'top'; //default animateType if not given
                var animateTime = 0.3; //default animateTime if not given
                var fixedWidth = 0; //default fix for width calculate if animate is top or bottom
                var delayTime = 0.5; //default animate-class-time if not given
                var myClass = null;
                var changeClassAnimate = false;
                var height = Math.round(thisElement.getBoundingClientRect().top) - $window.innerHeight;
                if (attrs.animateClass != undefined) {
                    myClass = attrs.animateClass;
                    if (attrs.animateClassTime != undefined) {
                        delayTime = attrs.animateClassTime;
                        delayTime *= 1000;
                    }
                    changeClassAnimate = true;
                }
                if (attrs.animateTime != undefined) {
                    animateTime = attrs.animateTime;
                }
                if (attrs.animateType != undefined) {
                    animateType = attrs.animateType;
                }
                if (animateType == 'top')
                    fixedWidth = 200;
                else if (animateType == 'bottom')
                    fixedWidth = -200;
                height -= fixedWidth; //if upper if/else changes fixedWidth value it calculate total height
                if (!alreadyScrolled)
                    chooseAnimateDefault(animateType, thisElement); //Execute an default settings for an animate
                if (height <= 0) {
                    chooseAnimate(animateType, thisElement, animateTime); //Execute an animate
                    if (changeClassAnimate)
                        $timeout(function () {
                            addMyClass(thisElement, myClass)
                        }, delayTime);
                    alreadyScrolled = true; // don't change any on scroll if element has been showed once
                }
                scope.$apply();
            });
        };
    });
})();