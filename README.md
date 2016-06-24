# angular-scrollshow
Add a smooth animation on scroll when an element is showed

# How to use it?
1. Add 'angular-scrollshow.js' to your head section
2. Inject directive by adding 'scrollshow' to your angular.module
3. Done!

Now you can add it to any element you want

# How does it work?

You can apply it by any way you want to (classes / attrs / elements etc) but I recommend using an attr method.

So first of all you have to add a 'scrollshow' to your element. It adds a default options (originally animate-type ='top' and animate-time ='0.3'; you can change it any time, just edit a couple lines in source code)

Every animation has smooth opacity change from 0 to 1

This method gives you an additional options, including different time and type of animation. You can also add your css class. Just do it as written below

 - animate-time="" type your time in seconds
 - animate-type="" use one from list below

* ``` top ``` Element slides from below to top
* ``` bottom ``` Element slides from top to bottom
* ``` right ``` Element slides form left to right
* ``` left ``` Element slides from right to left
* ``` none ``` Turning off declared animation

 - animate-class"[your_class]" add [your_class] as an efect on scroll
 - animate-class-time="" add a delay time for add class (in seconds)

This method also gives you a string variable called 'scrollshowVarSet' which returns you an element tag name (e.g. p.class#id) while you reach an element and returns 'false' while you leave it (by default). Use

- var-set="" to set a way of return this variable
* ```set``` Default state, as described upper
* ```reach``` Returns element tag name while element reeached but doesn't change after leaving it
* ```leave``` Returns only 'false' while leaving an element
* ``` none ``` Doesn't return you any state


For example:

```

<div slideshow animate-type="left"></div> // gives you a slide left effect with default time
<div slideshow></div> // default options for all effects
<div slideshow animate-time="0.1"></div> // gives you a default slide top effect but with your own time set

```
