$(document).ready(function(){
    let item = $('.item'),
        period = $('.period0 p'),
        period1= $('.period1 p'),
        per = $('.period0'),
        per1 = $('.period1'),
        price = $('.flower-price span')
        buttons = $('.item-button')
        buttonsSpan = $('span')
        curentPrice1 = +$(price[0]).text().replace(/\s/g, "");
        curentPrice2 = +$(price[1]).text().replace(/\s/g, "");
        curentPrice3 = +$(price[2]).text().replace(/\s/g, "");
        mas = [curentPrice1, curentPrice2,curentPrice3 ]
    let total;
    let m = 0;
    let itemInfoSpan = $('.flower-info span');
    let flowerInfo = $('.flower-info');

//scroll Block
    $('.item-button').on('click', function(){
        $('.body').addClass('fixed')
        $('.popup').fadeIn(300);
    });
    $('.cross').on('click', function(){
        $('.body').removeClass('fixed');
        $('.popup').fadeOut(300);
        $('html, body').scrollTop($("#options").offset().top);
        /*$('html, body').animate({
                scrollTop: $(".sell-block").offset().top
        },500) */
    });
    $(".pageDown").click(function (){
        $('html, body').animate({
            scrollTop: $(".how-it-work").offset().top
        }, 500);
    });
    $(".nav-item:nth-child(1) a").click(function (){
        $('html, body').animate({
            scrollTop: $(".how-it-work").offset().top
        }, 500);
    });
    $(".nav-item:nth-child(2) a, .scrollTo").click(function (){
        $('html, body').animate({
            scrollTop: $(".options").offset().top
        }, 500);
    });
    $(".nav-item:nth-child(3) a").click(function (){
        $('html, body').animate({
            scrollTop: $(".facilities").offset().top
        }, 1000);
    });
//scroll Block
    $('.periods').on('click', function(event){
        let target = event.target;
        
        for(let k = 0; k < item.length; k++){
            if($(target).hasClass("p") && period[k] == target ){  
                $(per).removeClass('active');
                $(per[k]).addClass('active');
                $(per1).removeClass('active');
                $(per1[k]).addClass('active');
                m = k;
            };
        };
        if (m == 0){
            text1 = curentPrice1;
            text2 = curentPrice2;
            text3 = curentPrice3;
            $(price[0]).text(text1);
            $(price[1]).text(text2);
            $(price[2]).text(text3);
            $(price[3]).text(text1)
            $(price[4]).text(text2)
            $(price[5]).text(text3)
            $(itemInfoSpan).text(4 + ' букета')
            $('.item-button').text('Оформить на месяц')
        };
        if (m == 1){
            text1 = (curentPrice1 - 6) * 3;
            text2 = (curentPrice2 - 13) * 3 + 1;
            text3 = (curentPrice3 - 16) * 3;
            $(price[0]).text(text1);
            $(price[1]).text(text2);
            $(price[2]).text(text3);
            $(price[3]).text(text1)
            $(price[4]).text(text2)
            $(price[5]).text(text3)
            $(itemInfoSpan).text(4 * 3 + ' букетов')
            $('.item-button').text('Оформить на 3 месяца')
        };
        if (m == 2){
            text1 = (curentPrice1 - 19) * 6;
            text2 = (curentPrice2 - 24) * 6;
            text3 = (curentPrice3 - 29) * 6;
            $(price[0]).text(text1);
            $(price[1]).text(text2);
            $(price[2]).text(text3);  
            $(price[3]).text(text1)
            $(price[4]).text(text2)
            $(price[5]).text(text3)
            $(itemInfoSpan).text(4 * 6 + ' букета')
            $('.item-button').text('Оформить на полгода')
        };
    });
    let itemInfo = $('.flower-info')
    $('.periods').on('click', function(event){
        let target = event.target;
        tot = total
        let n
        for(let k = 0; k < item.length; k++){
            if($(target).hasClass("p") && period1[k] == target ){  
                $(per).removeClass('active');
                $(per[k]).addClass('active');
                $(per1).removeClass('active');
                $(per1[k]).addClass('active');
                 n = k;
            };
        };
        
        if (n == 0){
            text1 = curentPrice1;
            text2 = curentPrice2;
            text3 = curentPrice3;
            $(price[0]).text(text1);
            $(price[1]).text(text2);
            $(price[2]).text(text3);
            $(price[3]).text(text1)
            $(price[4]).text(text2)
            $(price[5]).text(text3)
            $('.total-money').text($(price[m]).text()); 
            $(itemInfoSpan).text(4 + ' букета')
            $('.popup-info').text($(itemInfo[m]).text())
            $('.item-button').text('Оформить на месяц')
        };
        if (n == 1){
            text1 = (curentPrice1 - 6) * 3;
            text2 = Math.round((curentPrice2 - 13 + 0.33) * 3) ;
            text3 = (curentPrice3 - 16) * 3;
            $(price[0]).text(text1);
            $(price[1]).text(text2);
            $(price[2]).text(text3);
            $(price[3]).text(text1)
            $(price[4]).text(text2)
            $(price[5]).text(text3)
            $('.total-money').text($(price[m]).text());
            $(itemInfoSpan).text(4 * 3 + ' букетов')
            $('.popup-info').text($(itemInfo[m]).text())
            $('.item-button').text('Оформить на 3 месяца')
        };
        if (n == 2){
            text1 = (curentPrice1 - 19) * 6;
            text2 = (curentPrice2 - 24) * 6;
            text3 = (curentPrice3 - 29) * 6;
            $(price[0]).text(text1);
            $(price[1]).text(text2);
            $(price[2]).text(text3); 
            $(price[3]).text(text1)
            $(price[4]).text(text2)
            $(price[5]).text(text3) 
            $('.total-money').text($(price[m]).text());
            $(itemInfoSpan).text(4 * 6 + ' букета')
            $('.popup-info').text($(itemInfo[m]).text())
            $('.item-button').text('Оформить на полгода')
        };
    });
    

    $('.options').on('click', function(event){
        let mainFlower = $('.main-flower img')
        let target = event.target;
        let flower = $('.flower-item img');
        let background = $('.main-flower');
        let flowerTitle = $('.flower-title')
        for(let k = 0; k < item.length; k++){
            if($(target).hasClass("item-button") && buttons[k] == target){
                m = k;
                let mainFl = mainFlower[m];
                flower.attr('src', $(mainFl).attr('src'));
                let money = $(price[m]).text();
                $('.total-money').text(money);
                total = mas[m];
                $('.flower .category').text($(flowerTitle[m]).text())
                $('.popup-info').text($(itemInfo[m]).text());
                let formFlowerBackground = background[m];
                $('.flower-item').css("background-color", $(formFlowerBackground).css("background-color"));
            };
        };
    });
});
