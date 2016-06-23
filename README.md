# angular-scrollshow
Add a smooth animation on scroll when an element is showed

# How to use it?
1. Add 'angular-scrollshow.js' to your head section
2. Inject directive by adding 'scrollshow' to your angular.module
3. Done

Now you can add it to any element you want

# How does it work?

You can apply it by any way you want to (classes / attrs / elements etc) but I recommend using an attr method.

So first of all you have to add a 'scrollshow' to your element. It adds a default options (originally animate-type => slide top and animate-time => 0.3s; you can change it any time, just edit a couple firs lines in source code)

This method gives you an additional options, including different time and type of animation. You can also add your css class. Just do as written below

 - animate-time="" just type your time in seconds
 - animate-type="" use one from lis below

* ``` top ``` Element slides from below to top
* ``` left ``` Element slides from right to left
* ```class-[your_class] ``` Adding [your_class] as an efect on scroll


For example:

```

<div slideshow animate-type="left"></div> // gives you a slide left effect with default time
<div slideshow></div> // default options for all effects
<div slideshow animate-time="0.1"></div> // gives you a default slide top effect but with your own time set

```
