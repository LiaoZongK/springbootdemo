$(function(){

	
	$("#BtnPopMsg").click(function(){
		$(".pop-form").fadeToggle("fast");
		$(this).toggleClass("active")
	})

	$(".pop-form .btn-close").click(function(){
		$(this).parent().parent().fadeOut("fast");
		$("#BtnPopMsg").removeClass("active")
	})


	$(".step-list .item-tt .btn-folder").click(function(){
		$(this).parent().next(".item-cc").slideToggle("fast");
		$(this).toggleClass("active")
	})

	$(".tree-box .item-tt .btn-folder").click(function(){
		$(this).parent().next(".item-cc").slideToggle("fast");
		$(this).parent().toggleClass("active")
	})

	$(".btn-checkbox").click(function(){
		if($(this).parent('.item-tt').hasClass("has")){
		}else{
			
			if($(this).hasClass("active")){
				$(this).removeClass("active")
				$(this).parent().removeClass("cho")
			}else{
				$(".step-list .btn-checkbox").removeClass("active")
				$(".step-list .item-tt").removeClass("active")
				$(this).addClass("active")
				$(this).parent().addClass("cho")
			}
		}
	})
	
	

	$(".fix-box li a").click(function(){
		$(this).parent().addClass("active").siblings().removeClass("active")
	})

	$(".btn-handle").click(function(){
		if($(this).hasClass("active")){
			$(this).text("展开")
			$(this).removeClass("active")
			$(this).parent().next(".folder-content").hide()
		}else{
			$(this).text("收起")
			$(this).addClass("active")
			$(this).parent().next(".folder-content").show()
		}
	})
	
	$(".btn_zks").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active")
			$(this).parent().next(".file-list").hide()
		}else{
			$(this).addClass("active")
			$(this).parent().next(".file-list").show()
		}
	})
	
	
	$('.item-tt a.btn-blue.btn-xs').click(function(){
		$(this).siblings('.box_rukou').toggle(100).parent().parent().siblings().find('.box_rukou').hide();
	})

	//弹窗有触发动作
	$(".Select").click(function() {
		if ($(this).attr("checked")) {
			$(this).parent().parent().next("p").show()
		} else {
			$(this).parent().parent().next("p").hide()
		}
	});
	
	//弹窗
	$('.win_tc .btn_close_w').click(function(){
		$(this).parent().addClass('none');
		$('.dark').addClass('none');
		$('body').css('overflow','auto');
	})
	
	$('.btn_win_close').click(function(){
		$(this).parent().parent().addClass('none');
		$('.dark').addClass('none');
		$('body').css('overflow','auto');
	})
	$('.btn_tc_a').click(function(){
		$('.dark').removeClass('none');
		$('body').css('overflow','hidden');
		$('#box_tc_a').removeClass('none');
	})
	$('.btn_close_farther').click(function(){
		$(this).parent().addClass('none');
	})
	 
	//流程图弹窗
	$('.win_tc_lct a.btn_close').click(function(){
		$(this).parent().addClass('none');
		$('.dark').addClass('none');
	})
	$('.win_tc_lct a.btn_win_close').click(function(){
		$(this).parent().parent().addClass('none');
		$('.dark').addClass('none');
	})
	$('.btn_tc_a, .btn_tc_b, .btn_tc_c, .btn_tc_d').click(function(){
		$('.dark').removeClass('none');
	})
	$('.btn_tc_a').click(function(){
		$('.box_tc_a').removeClass('none');
	})
	$('.btn_tc_b').click(function(){
		$('.box_tc_b').removeClass('none');
	})
	$('.btn_tc_c').click(function(){
		$('.box_tc_c').removeClass('none');
	})
	$('.btn_tc_d').click(function(){
		$('.box_tc_d').removeClass('none');
	})
	
	$('.tabs_a li').click(function () {
        $(this).addClass('on').siblings('li').removeClass('on');

        var arr = $(this).parent().find('li');
        var idx = 0;
        for (var i = 0; i < arr.length; i++) {
            if ($(arr[i]).hasClass('on')) {
                idx = i;
                break;
            }
        }
        $('.tabs_a_cons').children('.tabs_a_con').addClass('none');
        $('.tabs_a_cons').children('.tabs_a_con').eq(idx).removeClass('none');
    });
	$('.tabs_b li').click(function () {
        $(this).addClass('on').siblings('li').removeClass('on');

        var arr = $(this).parent().find('li');
        var idx = 0;
        for (var i = 0; i < arr.length; i++) {
            if ($(arr[i]).hasClass('on')) {
                idx = i;
                break;
            }
        }
        $(this).parent().parent().siblings('.tabs_cons').children('.tabs_con').addClass('none');
        $(this).parent().parent().siblings('.tabs_cons').children('.tabs_con').eq(idx).removeClass('none');
    });
	
	//操作指南菜单
	
	$(".body_czzn .menu .menu_two li").click(function(){
		$('.body_czzn .menu li').removeClass('on');
		$(this).addClass('on').parent().parent().addClass('on');
	})
	$(".body_czzn .menu .menu_one>li").click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.body_czzn .menu .menu_two').hide();
		$(this).find('.menu_two').show();
	})
	
	//select选择	
	$('.cho_fs a').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
		var gwap = $(this).html()
		$(this).parent().parent().siblings('.bt').text( gwap );
    });
	$('.btn_cho').click(function () {
        $(this).parent().parent().toggleClass('cho');
    });
})