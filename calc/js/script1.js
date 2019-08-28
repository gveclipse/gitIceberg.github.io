$(document).ready(function(){
$('.pic-nav img').click(function(){
	var url=$(this).attr('src');
	$(this).parent().parent().find('.main-pic').attr('src',url);
});
var allwd=$('.slides').width();
$('.slide').width(allwd);
var wd=Math.ceil($('.slide').width());
var lg=$('.slide').length;console.log(wd,lg);
$('.wrapper').width(wd*lg);
$('.mini').click(function(){
	var cnt=0;$('.mini').removeClass('act');
	$(this).addClass('act');
	var eq=$(this).index();
	cnt=cnt-eq*wd;
	$('.wrapper').animate({left:cnt},500);
});
$('.arr-r').click(function(){
	var cnt=$('.wrapper').position().left;
	var eq=-(cnt/wd);var mini=$('.mini').width()+9;
	var miniLeng=$('.mini').length;
	if(cnt-wd<=-(wd*lg)){}else{
		$('.wrapper').animate({left:cnt-wd},500);
		$('.mini').removeClass('act');
		$('.mini').eq(eq+1).addClass('act');
		if(eq>(miniLeng-5)){eq=miniLeng-5;}
		$('#cnt-mini').animate({left:-mini*eq},500);
	}
});
$('.arr-l').click(function(){
	var cnt=$('.wrapper').position().left;
	var eq=-(cnt/wd);
	var mini=$('.mini').width()+9;
	var miniLeng=$('.mini').length;
	if(cnt>=0){}else{
		$('.wrapper').animate({left:cnt+wd},500);
		$('.mini').removeClass('act');
		$('.mini').eq(eq-1).addClass('act');
		console.log(eq,miniLeng);
		if(eq<2){eq=2;}
		if(eq>(miniLeng-5)){eq=miniLeng-5+2;}
		console.log(eq,miniLeng);
		$('#cnt-mini').animate({left:-mini*(eq-2)},500);
	}
});
/*Цитаты*/
var mass = ['«Лучше» важнее, <div class="pl">чем «дешевле»</div>','Полиграфия <div class="pl">требует профессионализма</div>','Безграничные <div class="pl">рекламные возможности</div>', 'Хорошая полиграфия <div class="pl">живет долго</div>', 'Покажите ваш <div class="pl">бизнес лицом</div>', 'Красота <div class="pl">не станет макулатурой</div>'];
var x = mass.length;
var i = 0;
setInterval(function(){
	i++;
	if(i == x) {i = 0};
	var txt = mass[i];
	$('.slogan').fadeOut(300);
	setTimeout( function(){
		$('.slogan').html(txt); 
	},350);
	$('.slogan').delay(400).fadeIn(300);
},5000);
});