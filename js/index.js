$(function(){
	$(".bj").click(function(){
		if ($(this).attr('class')=='bj'){
			$(this).attr('class','ys');
			$(this).css('color','#0078d2');
		}else{
			$(this).attr('class','bj');
			$(this).css('color','#666666');
		}
	})
	/*第一部分tab切换*/
	$(".inone_left li").mouseover(function(){
		var index=$(this).index();
	    $(this).attr('class',"inone_last").siblings('li').attr('class','');
	    $(".inone_right").eq(index).show().siblings(".inone_right").hide();
	})
	$(".inone_lefta li").mouseover(function(){
	    var index=$(this).index();
	    $(this).attr('class',"inone_last").siblings('li').attr('class','');
	    $(".inone_righta").eq(index).show().siblings(".inone_righta").hide();
	})
	/*内容标题时间*/
	var time=null;
	time=setInterval(function(){
		var left_time='';
		var dates=new Date();
		var month=dates.getMonth()+1;
		var left_time=left_time+dates.getFullYear()+'-';
		var left_time=left_time+month+'-';
		var left_time=left_time+dates.getDate()+'&nbsp;';
		var left_time=left_time+dates.getHours()+':';
		var left_time=left_time+dates.getMinutes()+'&nbsp;';
		var today = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');  
		var left_time =left_time+today[dates.getDay()]; 
		$(".inleft_time").html(left_time);
	},1)
	/*内容标题开关*/
	$(".inarticle_kai").click(function(){
		$(".inarticle_kai").css("display","none");
		$(".inarticle_guan").css("display","block");
	})
	$(".inarticle_guan").click(function(){
		$(".inarticle_guan").css("display","none");
		$(".inarticle_kai").css("display","block");
	})
	$(".inarticle_kai1").click(function(){
		$(".inarticle_kai1").css("display","none");
		$(".inarticle_guan1").css("display","block");
	})
	$(".inarticle_guan1").click(function(){
		$(".inarticle_guan1").css("display","none");
		$(".inarticle_kai1").css("display","block");
	})
	/*数据筛选下拉框*/
	$('.inleft_data').click(function(){
		$('.inleft_xia').attr('class','inleft_data')
		$(".inleft_one").css('display','block')
	})
	$('.inone_qr').click(function(){
		$(".inleft_one").css('display','none')
		$(".inleft_data").attr('class','inleft_xia')
	})
	$(".inright_three span").click(function(){
	    var index=$(this).index();
	    $(this).attr('class',"inright_tab").siblings('span').attr('class','');
	    $(".inthree_con").eq(index).show().siblings(".inthree_con").hide();
	})
	/*返回顶部*/
	var speed=400;
	$(".fh").click(function(){
		$('html,body').animate({
	    	scrollTop:'0px'
	    },
	    speed);
	});
	/*底部*/
	$(".infoot_zkai").click(function(){
		$(".infoot_zkai").css('display','none');
		$(".infoot_nava").css('display','block');
		$(".infoot_guan").css("display",'block');
	})
	$(".infoot_guan").click(function(){
		$(".infoot_zkai").css('display','block');
		$(".infoot_nava").css('display','none');
		$(".infoot_guan").css("display",'none');
	})
	/*right_tab*/
	$(".ca_yib").click(function(){
		if ($(this).attr('class')=='ca_yib'){
			$(this).attr('class','ca_yiba');
		}else{
			$(this).attr('class','ca_yib');
		}
	})
	$(".ca_zy").click(function(){
		if ($(this).attr('class')=='ca_zy'){
			$(this).attr('class','ca_zya');
		}else{
			$(this).attr('class','ca_zy');
		}
	})
	$(".ca_fczy").click(function(){
		if ($(this).attr('class')=='ca_fczy'){
			$(this).attr('class','ca_fczya');
		}else{
			$(this).attr('class','ca_fczy');
		}
	})
	$(".right_daone li").click(function(){
		var index=$(this).index();
	    $(this).attr('class',"right_days").siblings('li').attr('class','');
	    $(".right_dacon").eq(index).show().siblings(".right_dacon").hide();
	})
	/*ca_one下拉*/
	$(".ca_onto").click(function(){
		$(".ca_bj").attr('class','ca_bjt');
		$(".ca_onbo").animate({
			height:'112px'
		},500)
	})
	$(".ca_onto").hover(function(){
		$(".ca_bjt").attr('class','ca_bj');
		$(".ca_onbo").animate({
			height:'50px'
		},500)
	})
	$(".ca_onbo span").click(function(){
		var index=$(this).index();
		if($(".ca_onbo span").
		eq(index).attr('a')=='jia'){
			$(this).css('border','1px solid #e6e6e6');
		}else{
			$(".ca_onbo span").
		eq(index).attr('a','jia').
		css('border','1px solid red').
		siblings().attr('a','').
		css('border','1px solid #e6e6e6');
		}
		

		/*alert($(".ca_onbo span").eq(index).css('border-color'))

	    if ($(".ca_onbo span").eq(index).css('border-color')=='rgb(230,230,230)'){
	    	$(".ca_onbo span").eq(index).css('border-color','#000');
	    }else{
	    	$(".ca_onbo span").eq(index).css('border-color','#e6e6e6');
	    }*/
	})
	/*ca_one下拉*/
	$(".ca_onto1").click(function(){
		$(".ca_bj1").attr('class','ca_bjt1');
		$(".ca_onbo1").animate({
			height:'112px'
		},500)
	})
	$(".ca_onto1").hover(function(){
		$(".ca_bjt1").attr('class','ca_bj1');
		$(".ca_onbo1").animate({
			height:'50px'
		},500)
	})
	$(".ca_onbo1 span").click(function(){
	    $(this).css('border','1px solid #000');
	})
	/*ca_one下拉*/
	$(".ca_onto2").click(function(){
		$(".ca_bj2").attr('class','ca_bjt2');
		$(".ca_onbo2").animate({
			height:'112px'
		},500)
	})
	$(".ca_onto2").hover(function(){
		$(".ca_bjt2").attr('class','ca_bj2');
		$(".ca_onbo2").animate({
			height:'50px'
		},500)
	})
	$(".ca_onbo2 span").click(function(){
	    $(this).css('border','1px solid #000');
	})
	/*左边下拉*/
	$(".dc_gj").click(function(){
		if($(this).siblings('ul').css("display")=="none"){
			$(this).siblings("ul").slideDown(200).children('li');
		}else{
			$(this).siblings("ul").slideUp(500);
		} 
		$(this).parents(".dc_lb").siblings(".dc_lb").children("ul").slideUp(200); 
	})
	$(".dc_con li").click(function(){
		var index=$(this).index();
	    $(this).attr('class',"dc_wzi").siblings('li').attr('class','');
	    $(".dc_cona").eq(index).show().siblings(".dc_cona").hide();
	})
	/*dc_right*/
	$(".qu_title1 li").click(function(){
		var index=$(this).index();
	    $(this).attr('class',"pu_bj1").siblings('li').attr('class','');
	    $(".qu_con1").eq(index).show().siblings(".qu_con1").hide();
	})
	/*qu_title*/
	$(".ma_contit li").click(function(){
		var index=$(this).index();
	    $(this).attr('class',"ma_bock").siblings('li').attr('class','');
	    $(".ma_con").eq(index).show().siblings(".ma_con").hide();
	})
	/*maconent*/
	$(".in_ul li").click(function(){
	    $(this).attr('class',"in_ys").siblings('li').attr('class','');
	})
	$(".in_left li").click(function(){
	    $(this).attr('class',"in_bj").siblings('li').attr('class','');
	})
	$(".in_three li").click(function(){
	    $(this).attr('class',"in_back").siblings('li').attr('class','');
	})
	$(window).scroll(function(){
	   if ($(this).scrollTop() > 450) {
			$(".fh").css("display","block");
		}else{
			$(".fh").css("display","none");
	   }
	})
	$(".right_two li").mouseenter(function(){
		var index=$(this).index();
	    $(".right_one img").eq(index).show().siblings(".right_one img").hide();
	})
	$(".right_twoa li").mouseenter(function(){
		var index=$(this).index();
	    $(".right_onea img").eq(index).show().siblings(".right_onea img").hide();
	})
	$(".right_twob li").mouseenter(function(){
		var index=$(this).index();
	    $(".right_oneb img").eq(index).show().siblings(".right_oneb img").hide();
	})
	$(".right_twoc li").mouseenter(function(){
		var index=$(this).index();
	    $(".right_onec img").eq(index).show().siblings(".right_onec img").hide();
	})
	$(".right_twod li").mouseenter(function(){
		var index=$(this).index();
	    $(".right_oned img").eq(index).show().siblings(".right_oned img").hide();
	})
})
/*焦点事件*/
$(document).ready(function(){
	jQuery.focusblur=function(focusid){
		var focusblurid=$(focusid);
		var defval=focusblurid.val();
		focusblurid.focus(function(){
			var thisval=$(this).val();
			if(thisval==defval){
				$(this).val("");
			}
		});
		focusblurid.blur(function(){
			var thisval=$(this).val();
			if(thisval==""){
				$(this).val(defval);
			}
		});
	}; 
	$.focusblur(".data_sz");
	$.focusblur("#hello1");
}); 
/*外汇计算器*/
function submitWHJUQ_C(_s){
	var _H = ["USDJPY", "USDCHF", "GBPUSD", "EURUSD", "USDHKD", "AUDUSD", "USDCAD", "USDCNY", "USDSGD", "USDMOP", "NZDUSD"];
	var _I = _s["selectWHJUQ_from"].value;
	var _J = _s["selectWHJUQ_to"].value;
	var _K = "USD" == _I ? 1 : (window["hq_str_" + _I].split(","))[8] * 1;
	var _L = "USD" == _I ? "美元" : ((window["hq_str_" + _I].split(","))[9]).replace("美元","");
	if (("_EURUSD_GBPUSD_AUDUSD_").indexOf(_I) != -1) {
		_K = 1 / _K;
	}
	var _J = _s["selectWHJUQ_to"].value;
	var _M = "USD" == _J ? 1 : (window["hq_str_" + _J].split(","))[8] * 1;
	var _N = "USD" == _J ? "美元" : ((window["hq_str_" + _J].split(","))[9]).replace("美元","");
	if ("_EURUSD_GBPUSD_AUDUSD_".indexOf(_J) != -1) {
		_M = 1 / _M;
	}
	_s["inputWHJUQ_to"].value = (_s["inputWHJUQ_from"].value * 1 / _K * _M).toFixed(2);
	document.getElementById("spanWHJUQ_C").innerHTML = "当前汇率：" + _L + "兑" + _N + " " + (_M / _K).toFixed(4);
	return false;
}