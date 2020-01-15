$(function(){ 
    var winWidth = $(window).width();
    var aniMode = "pc"
    if(winWidth <= 767){
        aniMode = "mobile";
    }
//main total screen control
    var controller = new ScrollMagic.Controller();
//ani_0-------------------------------------------------------------------------------------------------------------------------------------//
    var mainTxt1 = new TweenMax.fromTo(".headingArea .title", .8, {y:"50%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut});    
    var mainTxt2 = new TweenMax.fromTo(".headingArea .desc", .8, {y:"50%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.3});
    var mainTxt3 = new TweenMax.fromTo(".anchor .mTitle .title", .8, {y:"50%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut});    
    var mainTxt4 = new TweenMax.fromTo(".anchor .mTitle .desc", .8, {y:"50%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.3});
    var mainTxt5 = new TweenMax.staggerFromTo(".anchor .list .eAction", .8, {y:"20%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut}, 0.1);
//ani_1-------------------------------------------------------------------------------------------------------------------------------------//    
    var tween1;    
    if(aniMode == "pc"){
    	tween1 = new TweenMax.staggerFromTo("#function .list .eAction", .8, {y:"20%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, onComplete:completeEventPc}, 0.1);
        var add = 0;
        function completeEventPc(){ 
            add++;
            if(add == 2){
                var mTween1 = new TweenMax.staggerFromTo("#function .mTitle .eAction", 1, {x:"-5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut}, 0.3);
                $('#function .txtLink').addClass('eMotion');
            }
        }        
    }else{
        tween1 = new TweenMax.fromTo("#function .title", .8, {y:"70%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, onComplete:completeEventMobile});
        function completeEventMobile(){
            tween2 = new TweenMax.staggerFromTo("#function .list .eAction", .8, {y:"20%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut}, 0.1); 
        }
    }
    var scene1 = new ScrollMagic.Scene({
        'triggerElement': '#function .mTitle',
        'triggerHook': 1,
        'offset': 50,
        'reverse': false
    })
    .on("start", function(e){
        if(aniMode == "mobile"){
        	var mTween2 = new TweenMax.fromTo("#function .desc", .8, {y:"15%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.3}); 
            $('#function .txtLink').addClass('eMotion');
        }
    })
    .setTween(tween1)
    .addTo(controller)    
//ani_2-------------------------------------------------------------------------------------------------------------------------------------//
    var tween3, tween4;
    if(aniMode == "pc"){    
        tween3 = new TweenMax.fromTo("#global .thumbBox", .8, {x:"3%", y:"3%", autoAlpha:0}, {x:"0%", y:"0%", autoAlpha:1, ease:Sine.easeOut, onComplete:completeEventPc1});
        function completeEventPc1(){
            tween4 = new TweenMax.staggerFromTo("#global .eAction", 1, {x:"-5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut}, 0.3);
            $('#global .txtLink').addClass('eMotion');
        }
    }else{
        tween3 = new TweenMax.fromTo("#global .title", .8, {y:"70%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, onComplete:completeEventMobile1});
        function completeEventMobile1(){
            tween4 = new TweenMax.fromTo("#global .thumbBox", .8, {x:"3%", y:"3%", autoAlpha:0}, {x:"0%", y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.2});
        }
    }
    var scene2 = new ScrollMagic.Scene({
        'triggerElement': '#global .mTitle',
        'triggerHook': 1,
        'offset': 50,
        'reverse': false
    })
    .on("start", function(e){
        if(aniMode == "mobile"){
        	var mTween2 = new TweenMax.fromTo("#global .desc", .8, {y:"10%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.3}); 
            var mTween3 = new TweenMax.fromTo("#global .explain", .8, {y:"30%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.6});
            $('#global .txtLink').addClass('eMotion');
        }
    })
    .setTween(tween3)
    .addTo(controller)
//ani_3-------------------------------------------------------------------------------------------------------------------------------------//    
    var tween5, tween6;
    if(aniMode == "pc"){
    	tween5 = new TweenMax.fromTo("#infra .infraItem .title", .8, {y:"5%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeIn});    
    }else{
        tween5 = new TweenMax.fromTo("#infra .mTitle .title", .8, {y:"50%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut});    
    }
    var scene3 = new ScrollMagic.Scene({
        'triggerElement': '#infra .mTitle',
        'triggerHook': 1,
        'offset': 50,
        'reverse': false
    })
    .on("start", function(e){
        if(aniMode == "pc" || winWidth > 540){
            var listAni = new TweenMax.fromTo("#infra .infraItem", .5, {autoAlpha:0}, {autoAlpha:1, ease:Sine.easeOut});
            var listAni1 = new TweenMax.fromTo("#infra .infraItem .security", .5, {x:"10%", y:"-10%", autoAlpha:0}, {x:"0%", y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.5});
            var listAni2 = new TweenMax.fromTo("#infra .infraItem .backup", .5, {x:"10%", y:"0%", autoAlpha:0}, {x:"0%", y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.6});
            var listAni3 = new TweenMax.fromTo("#infra .infraItem .server", .5, {x:"10%", y:"10%", autoAlpha:0}, {x:"0%", y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.7});    
            var listAni4 = new TweenMax.fromTo("#infra .infraItem .monitoring", .5, {x:"-50%", y:"10%", autoAlpha:0}, {x:"-50%", y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.8});
            var listAni5 = new TweenMax.fromTo("#infra .infraItem .lag", .5, {x:"-10%", y:"10%", autoAlpha:0}, {x:"0%", y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.9});
            var listAni6 = new TweenMax.fromTo("#infra .infraItem .domestic", .5, {x:"-10%", y:"0%", autoAlpha:0}, {x:"0%", y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:1});
           	if(aniMode != "pc" && winWidth > 540){
                var mTween4 = new TweenMax.fromTo("#infra .mTitle .desc", .8, {y:"15%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.3});
                var mTween5 = new TweenMax.fromTo("#infra .infraItem .title", .8, {y:"5%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeIn});    
            	var listAni7 = new TweenMax.fromTo("#infra .infraItem .foreign", .5, {x:"-10%", y:"-10%", autoAlpha:0}, {x:"0%", y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:1.1});
            }else{
                var listAni7 = new TweenMax.fromTo("#infra .infraItem .foreign", .5, {x:"-10%", y:"-10%", autoAlpha:0}, {x:"0%", y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:1.1, onComplete:completeEvent2});
            }
        }else{
            var mTween4 = new TweenMax.fromTo("#infra .mTitle .desc", .8, {y:"15%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.3});
            var mTween5 = new TweenMax.fromTo("#infra .infraItem", .8, {y:"10%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.6});
        }    
    })
    .setTween(tween5)
    .addTo(controller)    
    
    if(aniMode == "pc"){
        function completeEvent2(){
            var tween6 = new TweenMax.staggerFromTo("#infra .eAction", 1, {x:"-5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut}, 0.3);        
        }
    }
//ani_4-------------------------------------------------------------------------------------------------------------------------------------//      
    var mainTxt6 = new TweenMax.fromTo("#service .gCenter .title", .8, {y:"50%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, onComplete:completeEvent3});    
    var mainTxt7 = new TweenMax.fromTo("#service .gCenter .desc", .8, {y:"50%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.3});
    var tween7 = new TweenMax.fromTo("#service .mTable", .8, {y:"10%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.4});
    
    var len = $('#service .mTable .eAction').length,
        interval,
        addInterval = 0;
    
    function completeEvent3(){
    	interval = setInterval(function(){ tableAniEvent(); }, 150);
    }
    
    function tableAniEvent(){
        $('#service .mTable .eAction').eq(addInterval).addClass('positive');
        if(addInterval >= (len-1)){
            clearInterval(interval);
        }
        addInterval++;
    }    
    var arr2=[mainTxt6, mainTxt7, tween7];
    for(var k=0; k<arr2.length; k++){
        var scene4 = new ScrollMagic.Scene({
            'triggerElement': '#service .mTitle',
            'triggerHook': 1,
            'offset': 100,
            'reverse': false
        })
        .setTween(arr2[k])
        .addTo(controller)    
    }
//ani_5-------------------------------------------------------------------------------------------------------------------------------------//          
    //var tween8 = new TweenMax.fromTo("#service .gLeft .title", .8, {y:"50%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.2});
    var tween9 = new TweenMax.fromTo("#service .btnNormal", .8, {y:"50%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.4});
    var tween10 = new TweenMax.fromTo("#service .infoBoxArea", .8, {y:"10%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.6, onComplete:completeEvent4});
    
    function completeEvent4(){
    	$('#service .btnNormal').addClass('animation');
    }
    
    var arr3=[tween9, tween10];
    for(var n=0; n<arr3.length; n++){
        var scene5 = new ScrollMagic.Scene({
            'triggerElement': '#service .mInfoBox',
            'triggerHook': 1,
            'offset': 0,
            'reverse': false
        })
        .setTween(arr3[n])
        .addTo(controller)    
    }
//ani_6-------------------------------------------------------------------------------------------------------------------------------------//     
    var tween11;
    if(aniMode == "pc"){
    	tween11 = new TweenMax.staggerFromTo("#step .mTitle .eAction", 1, {y:"40%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut}, 0.2);       
    }else{
        tween11 = new TweenMax.fromTo("#step .mTitle .title ", 1, {y:"70%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut}, 0.2);       
    }
    
    var scene6 = new ScrollMagic.Scene({
        'triggerElement': '#step .mTitle',
        'triggerHook': 1,
        'offset': 50,
        'reverse': false
    })
    .on("start", function(e){
        if(aniMode == "mobile"){
        	var mTween6 = new TweenMax.fromTo("#step .mTitle .desc", .8, {y:"15%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.3}); 
        }
    })
    .setTween(tween11)
    .addTo(controller)   
//ani_7-------------------------------------------------------------------------------------------------------------------------------------//
    var tween13, tween14;
    var tween12 = new TweenMax.fromTo("#step .eAction1 .thumb", .5, {x:"5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut});
    
    var scene7 = new ScrollMagic.Scene({
        'triggerElement': '#step .eAction1',
        'triggerHook': 1,
        'offset': 50,
        'reverse': false
    })
    .on("start", function(e){
        //document.styleSheets[0].addRule('#step .eAction1:before','background:#ff0000');        
        if(aniMode == "pc"){
        	tween13 = new TweenMax.fromTo("#step .eAction1 .info .label", .5, {x:"-30%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.3});
    		tween14 = new TweenMax.staggerFromTo("#step .eAction1 .info .eAction", .5, {x:"-5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.5}, 0.1);	
        }else{
            tween13 = new TweenMax.fromTo("#step .eAction1 .info .label", .5, {x:"-30%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut});
    		tween14 = new TweenMax.staggerFromTo("#step .eAction1 .info .eAction", .5, {x:"-5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.2}, 0.1);	
        }
    })
    .setTween(tween12)
    .addTo(controller)
//ani_8-------------------------------------------------------------------------------------------------------------------------------------//
    var tween15 ,tween16, tween17;
    if(aniMode == "pc"){
    	tween15 = new TweenMax.fromTo("#step .eAction2 .thumb", .5, {x:"-5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut});
    }else{
        tween15 = new TweenMax.fromTo("#step .eAction2 .thumb", .5, {x:"5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut});
    }
    
    var scene8 = new ScrollMagic.Scene({
        'triggerElement': '#step .eAction2',
        'triggerHook': 1,
        'offset': 100,
        'reverse': false
    })
    .on("start", function(e){
        if(aniMode == "pc"){
            tween16 = new TweenMax.fromTo("#step .eAction2 .info .label", .5, {x:"30%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.3});
            tween17 = new TweenMax.staggerFromTo("#step .eAction2 .info .eAction", .5, {x:"5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.5}, 0.1);	
        }else{
            tween16 = new TweenMax.fromTo("#step .eAction2 .info .label", .5, {x:"-30%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut});
            tween17 = new TweenMax.staggerFromTo("#step .eAction2 .info .eAction", .5, {x:"-5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.2}, 0.1);	
        }
    })
    .setTween(tween15)
    .addTo(controller)
//ani_9-------------------------------------------------------------------------------------------------------------------------------------//    
    var tween19, tween20;
    var tween18 = new TweenMax.fromTo("#step .eAction3 .thumb", .5, {x:"5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut});
    
    var scene9 = new ScrollMagic.Scene({
        'triggerElement': '#step .eAction3',
        'triggerHook': 1,
        'offset': 100,
        'reverse': false
    })
    .on("start", function(e){
        if(aniMode == "pc"){
            tween19 = new TweenMax.fromTo("#step .eAction3 .info .label", .5, {x:"-30%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.3});
            tween20 = new TweenMax.staggerFromTo("#step .eAction3 .info .eAction", .5, {x:"-5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.5}, 0.1);	
        }else{
            tween19 = new TweenMax.fromTo("#step .eAction3 .info .label", .5, {x:"-30%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut});
            tween20 = new TweenMax.staggerFromTo("#step .eAction3 .info .eAction", .5, {x:"-5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.2}, 0.1);	
        }
    })
    .setTween(tween18)
    .addTo(controller)
//ani_10-------------------------------------------------------------------------------------------------------------------------------------//    
    var tween21, tween22, tween23;
    if(aniMode == "pc"){
    	tween21 = new TweenMax.fromTo("#step .eAction4 .thumb", .5, {x:"-5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut});
    }else{
        tween21 = new TweenMax.fromTo("#step .eAction4 .thumb", .5, {x:"5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut});
    }
    
    var scene10 = new ScrollMagic.Scene({
        'triggerElement': '#step .eAction4',
        'triggerHook': 1,
        'offset': 100,
        'reverse': false
    })
    .on("start", function(e){
        if(aniMode == "pc"){
            tween22 = new TweenMax.fromTo("#step .eAction4 .info .label", .5, {x:"30%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.3});
            tween23 = new TweenMax.staggerFromTo("#step .eAction4 .info .eAction", .5, {x:"5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.5}, 0.1);
        }else{
            tween22 = new TweenMax.fromTo("#step .eAction4 .info .label", .5, {x:"-30%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut});
            tween23 = new TweenMax.staggerFromTo("#step .eAction4 .info .eAction", .5, {x:"-5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.2}, 0.1);
        }
    })
    .setTween(tween21)
    .addTo(controller)
//ani_11-------------------------------------------------------------------------------------------------------------------------------------//    
    var tween24, tween25, tween26;
    if(aniMode == "pc"){
    	tween24 = new TweenMax.fromTo("#step .eAction5 .info .label", .5, {autoAlpha:0}, {autoAlpha:1, ease:Sine.easeOut});
    }else{
        tween24 = new TweenMax.fromTo("#step .eAction5 .info .label", .5, {x:"-30%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut});
    }
    
    var scene11 = new ScrollMagic.Scene({
        'triggerElement': '#step .eAction5',
        'triggerHook': 1,
        'offset': 100,
        'reverse': false
    })
    .on("start", function(e){
        if(aniMode == "pc"){
            tween25 = new TweenMax.fromTo("#step .eAction5 .info .title", .5, {y:"5%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.2});
            tween26 = new TweenMax.fromTo("#step .eAction5 .thumb", .5, {y:"5%", autoAlpha:0}, {y:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.4});	
        }else{
            tween25 = new TweenMax.fromTo("#step .eAction5 .info .title", .5, {x:"-5%", autoAlpha:0}, {x:"0%", autoAlpha:1, ease:Sine.easeOut, delay:0.2});
        }
    })
    .setTween(tween24)
    .addTo(controller)    
    
    
    //icon scroll
    var iconHover = $('.anchor .list .link');
    if(iconHover.length >= 1){
        var offsetNum = -50;
        var widthWin = $(window).width();
        if(widthWin > 990){
            offsetNum = -70;
        }
        iconHover.click(function(e){
            var thisId = $(this).attr('href');        
            $(thisId).velocity('scroll', { duration: 700, offset: offsetNum, mobileHA: false, easing: 'easeInSign' });
        });
    }
});





