 //$(function(){  
//	var t;   //图片轮播
//	var index=0;
//	t=setInterval(play,2000)//添加定时器，循环调用
//	function play(){
//		index++;
//		if(index>4){
//			index=0
//		}
//		$("#zho_1_1 li").eq(index).fadeIn().siblings().fadeOut();
//	}
//  });

 //循环显示图片广告
 $(function(){
      $("#zho_99 li:eq(0)").addClass("over");  //初始化第一个数字
        var index = 1;  //索引值
        function img(){
            //循环到第四张图片时，index赋值0，从第一张图片重新循环
            if(index>4){
                index=0;
            }
            $("#zho_1_1 li:eq("+(index-1)+")").fadeOut();  //淡出
            $("#zho_1_1 li:eq("+index+")").fadeIn();   //淡入
            $("#zho_99 li:eq("+index+")").addClass("over");
            $("#zho_99 li:eq("+index+")").siblings().removeClass();
            index++;
        }
        //添加定时器，循环调用
       var i = setInterval(img,2000);
        //悬浮数字时显示对应图片
        $("#zho_99 li").hover(function(){
            var num = $(this).index();    //获取当前元素的索引值
            $("#zho_1_1 li:eq("+num+")").siblings().fadeOut();
            $("#zho_1_1 li:eq("+num+")").fadeIn();
            $("#zho_99 li:eq("+num+")").addClass("over");
            $("#zho_99 li:eq("+num+")").siblings().removeClass();
            clearInterval(i);   //清除定时器
            index = num+1;
        },function(){
            //再次调用定时器
            i=setInterval(img,2000);
        });

});

//侧边栏
 $(document).ready(function(){
        $("#nav li span").mouseover(function(){
            var index= $("#nav li span").index(this);
            $("#nav li:eq("+index+") span~p").show();
            $("#nav li:eq("+index+") span").css("background-color","#c81623");
        }).click(function(){
            $("p").hide();
            $("#nav li span").css("background-color","#7a6e6e");
        })
    });
//潮流
$(document).ready(function(){
	$("#ggg").click(function(){
		$("#bbb").show();
		$("#bbbb").hide();
	})
	$("#gggg").click(function(){
		$("#bbbb").show();
	})
})

//时间
$(document).ready(function(){
	 function time(){
        var date = new Date();
        var YY =date.getFullYear();
        var MM = date.getMonth()+1;
        var DD = date.getDate();
        var hh = date.getHours();
        var mm = date.getMinutes();
        var d;
        if(hh<12){   
            d="上午好";
        }else if(hh>12 && hh<18){
            d="下午好";
        }
        else{
            d="晚上好";
        }
        document.getElementById("reda").innerHTML=YY+"年"+MM+"月"+DD+"日<br/>"+hh+"点"+mm+"分<br/>"+d+"!欢迎来到时尚服装";
    }
    time();
}) 

//分类
$(document).ready(function(){
	   $("#felei_2 dt").hover(function(){
            $(this).next("dd").show();
//          $("#felei_2 dt").toggle("xxx");
 },function(){
            $("dt").next("dd").hide();
	   })
})

//关闭广告
$(document).ready(function(){
	$("#timg_2 a").click(function(){
            $(".timg").hide();
        })
})
  