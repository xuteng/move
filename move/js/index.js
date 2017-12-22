var option = {
	on: {
		slideChange: function() {
			var _index = this.activeIndex;
			switch (_index) {
				case 0:
					$('.wrapper').removeClass('next');
					break;
				case 1:
					(function() {
						$('.s22').addClass('active')
						$('.s25').addClass('active')
						$('.s27').addClass('active')
						setTimeout(function() {
							$('.s24').addClass('active')
						}, 2000)

					})();
					break;
				case 2:
					(function() {
						$('.s36').addClass('active')
					})();
					break;
				case 3:
					(function() {
						$('.s41').addClass('active')
					})();
					break;
				case 4:
                    (function() {
                        $('.s52').addClass('active')
                    })();
                    break;
				case 5:
					(function() {
						setTimeout(function() {
							$('.s63').addClass('active')
						}, 500)
					})();
					break;
				case 6:
					(function() {
						setTimeout(function() {
							$('.s72').addClass('active')
						}, 200)
						setTimeout(function() {
							$('.s73').addClass('active')
						}, 800)
					})();
					break;
				case 7:
				(function() {
					$('.m-text').addClass('active');
					setTimeout(function() {
						$('.hua:last').addClass('active')
					}, 800)
					$('.egg').css({
						left: '6rem',
						bottom: '5.46875rem'
					}).animate({
						left: '3.34375rem',
						bottom: '4.6875rem',
						width: '.8rem'
					}, 100, function() {
						$('.egg').animate({
							left: '.375rem',
							bottom: '.15625rem',
							width: '2.421875rem'
						}, 400)
					});
				})();
					break;
				default:
					break
			}
		},
	},
}
var mySwiper
var audio1 = document.getElementById("train")
var audio2 = document.getElementById("bg")
audio1.onended = function(){
	this.setAttribute('src','audio/Ragtime Festival (Alternative Version).mp3')
	this.play();
}
$(document).ready(function() {
	//图片预加载
    var _all = $(".wrapper").find("*"),_arr = [],t_img,isLoad = true,rg = new RegExp("url"),_imgs = $(".wrapper").find("img"),
        fn = function(){ 
        	$(".loading").addClass('hide');
			init();
        };
    //TODO 环境变量
    var _pathIndex = window.location.href.lastIndexOf('/')+1;

    _all.each(function(){
        if(rg.test($(this).css("background-image"))){
            var _url = $(this).css("background-image");
            var _img = new Image();
            _url = _url.replace(/url\(|\)/g,"");
            _url = _url.replace(/\"/g,"");
            _img.src=_url;
            _arr.push(_img);
        }
    });
    _imgs.each(function(){
    	//TODO 环境变量
        var _url = window.location.href.substring(0,_pathIndex)+$(this).attr("src");
        var _img = new Image();
        _img.src=_url;
        _arr.push(_img);
    });
    
    function isImgLoad(callback){
        $(_arr).each(function(){
            if(this.width === 0){
                isLoad = false;
                return false;
            }
        });
        if(isLoad){
            clearTimeout(t_img);
            callback();
        }else{
            isLoad = true;
            t_img = setTimeout(function(){
                isImgLoad(callback);
            },1000);
        }
    }
    isImgLoad(fn);
});

function init(){
	$(".loading").addClass('hide');
	mySwiper = new Swiper('.container',option)
	audio1.play()
	$('.train').addClass('out');
	$('.text-wrapper').addClass('active');
	setTimeout(function(){
		$('.hua:first').addClass('active')

	},500)
	$('.egg').click(function(){
		$('.mask').slideDown('300', function() {
			$('.s84').addClass('active')
		});
	})
}
//必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效 
document.addEventListener("WeixinJSBridgeReady", function () { 
    audio1.play();
}, false); 


