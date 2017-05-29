$(function() {
	$('.mygallery').jCarouselLite({
	btnNext:'.snext',
	btnPrev:'.sprev',
		visible: 1,
		easing:'easeOutBack',
		speed:1000
	});
	$.ajaxSetup({type:'get',dataType:'jsonp'});
	$.ajax({
	url:'http://district.x10.bz/top5.json',
	jsonpCallback:'top5',
	success: function(data){
		$.each(data,function(i,value){
		$('#HTML3 .widget-content ul li.jinslist .pdc').eq(i).addClass(value[3]);
		$('#HTML3 .widget-content ul li.jinslist .jinmeta').eq(i).append(value[2]);
		$('#HTML3 .widget-content ul li.jinslist a.poplink').eq(i).append(value[0]);
		$('#HTML3 .widget-content ul li.jinslist a.poplink').eq(i).attr('href',value[1]);
		$('#HTML3 .widget-content ul li.jinslist a.poplink').eq(i).attr('title',value[0]);
		});
	}
	});
});