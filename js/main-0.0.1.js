var proData=[{
	intr:'项目简介：该项目是一个在线进行信息安全等级保护测评的平台。',
	resp:'我主要负责该项目的前后端开发。该项目前端部分遵循了AMD规范，在开发过程中主要用到了HTML、CSS、JavaScript、JQuery等技术。后端开发符合MVC框架，使用的开发语言是Java，数据库为Oracle。版本控制SVN。'
},{intr:'项目简介：本项目是一个Android系统下的即时问答App。用户提交问题后，系统将问题推送到关注该领域的用户的手机上。用户回答问题会获得相应奖励',
	resp:'我主要负责该项目的前端开发。该项目开发过程中主要用到了HTML、CSS、JavaScript等技术，前端框架为JQuery Mobile。'
},{intr:'项目简介：该项目是Android平台上的时间管理APP。用户可以在34枚硬币法，番茄法等5种已经被证明过有效的时间管理方法中选择一个来管理时间。',
	resp:'我主要负责该项目的前端开发。该项目前端开发过程中主要用到了HTML、CSS、JavaScript等技术。'
}]

var schoData=['2011年4月 获福建省教育机器人大赛二等奖 我负责机器人的编码工作',
'2013年5月 获云南大学软件学院创新基金3000元',
'2013年9月 获云南大学软件学院二等奖学金',
'2013年11月 获“Intel杯”软件创新大赛优秀奖',
'2014年4月 获“挑战者杯”云南大学银奖']

var actiData=['2011年12月 获云南大学冬季校运会跳远第四名',
'2012年9月 担任云南大学软件学院团委科创中心竞赛部部长',
'2013年9月 担任云南大学软件学院团委副书记兼科创中心主任',
'2014年4月 获云南大学“云大杯”足球赛冠军']

$(document).on('mousewheel', function(ev) {
	if(ev.originalEvent.wheelDelta<-100)
		focus($('.nav ul li:eq('+scroll(true)+')'));
	else if(ev.originalEvent.wheelDelta>100) focus($('.nav ul li:eq('+scroll(false)+')'));;
});
function scroll(down, num){
	var n=0
	for(var i=0;i<$('section').length;i++){

		if($('section:eq('+i+')').css('display')=='block'){//这个地方可以替换为('section:visible') 不过因为需要取出i所以还是暂时这样。
			
			if(num===i) return i;
			if(num!=null)
				n=num;
			else if(down)
				if(i+1>=$('section').length)
					return i;
				else
				n=i+1;
			else if(i-1<0)
					return i;
				else n=i-1;
			$('section:eq('+i+') article').hide();
			$('section:eq('+i+')').slideUp(800);
			$('section:eq('+n+')').slideDown(800);
			$('section:eq('+n+') article').show(1000,function(){
				$('section:eq('+i+') article').hide();
			});
			console.log($('section:eq('+n+')'));
			return n;
		}
	}
};

	$('.nav ul li').hover(function(){
		$(this).find('span').css('opacity',1);
	},function(){
		$(this).find('span').css('opacity',0);
	});

	$('.nav ul li').click(function(){
		focus($(this));
		for(var i=0;i<$('.nav ul li').length;i++)
			if($('.nav ul li:eq('+i+')').hasClass('focus')){
				console.log(i);
				scroll(true,i);
			};
		});

	function focus(ob){
		$('.nav ul li').removeClass('focus');
		$('.nav ul li').addClass('blur')
		ob.removeClass('blur');
		ob.addClass('focus');
	}


function init(){
	$('article[id=info-con]').fadeTo(1000,1);
}

$('#proj-con .hexagon').hover(function(){
	console.log(parseInt($(this).attr('data-pro')));
	switch(parseInt($(this).attr('data-pro'))){
		case 0:showTip(0);break;
		case 1:showTip(1);break;
		case 2:showTip(2);break;
	}
},function(){
	$('#proj-con .tip').hide();
});

function showTip(num){
	$('#proj-con .tip #intr').text(proData[num].intr);
	$('#proj-con .tip #resp').text(proData[num].resp);
	if(num==0) $('#proj-con .tip').css('top','40%');
	else $('#proj-con .tip').css('top','80%');
	$('#proj-con .tip').show();
}

$('#scho-con .chart .chart-block').hover(function(){
	switch(parseInt($(this).attr('data-scho'))){
		case 0:$('#scho-con .chart .arrow-left').text(schoData[0]);break;
		case 1:$('#scho-con .chart .arrow-left').text(schoData[1]);break;
		case 2:$('#scho-con .chart .arrow-left').text(schoData[2]);break;
		case 3:$('#scho-con .chart .arrow-left').text(schoData[3]);break;
		case 4:$('#scho-con .chart .arrow-left').text(schoData[4]);break;
	}
	$('#scho-con .chart .arrow-left').css('display','block');
	var position=$(this).offset();
	position.left+=155;
	$('#scho-con .chart .arrow-left').offset(position);
},function(){
	$('#scho-con .chart .arrow-left').hide();
});

$('#acti-con .chart .chart-block').hover(function(){
	switch(parseInt($(this).attr('data-acti'))){
		case 0:$('#acti-con .chart .arrow-left').text(actiData[0]);
		case 1:$('#acti-con .chart .arrow-left').text(actiData[1]);
		case 2:$('#acti-con .chart .arrow-left').text(actiData[2]);
		case 3:$('#acti-con .chart .arrow-left').text(actiData[3]);
	}
	$('#acti-con .chart .arrow-left').css('display','block');
	var position=$(this).offset();
	position.left+=155;
	$('#acti-con .chart .arrow-left').offset(position);
},function(){
	$('#acti-con .chart .arrow-left').hide();
});
