$('ul li:eq(0),ul li:eq(1),ul li:eq(2),ul li:eq(3),ul li:eq(4)').show();mui.init({swipeBack: false,pullRefresh: {container: '#pullrefresh',down: {callback: pulldownRefresh},up: {contentrefresh: '正在加载...',callback: pullupRefresh}}});
function pulldownRefresh() {setTimeout(function() {document.location.reload();mui('#pullrefresh').pullRefresh().endPulldownToRefresh();}, 1000);}
function pullupRefresh(){setTimeout(function() {var k=0;for(var i=3;i<num;i++){console.log('i:'+i);var isHidden= $("ul li:eq("+i+")").is(":hidden");if(isHidden){$("ul li:eq("+i+")").show();k=k+1;console.log('K:'+k);if(k==5){break;}}}mui('#pullrefresh').pullRefresh().endPullupToRefresh((i+1>=num));}, 1000);}
$(function () {$(".dingwei").on('tap',function () {var index = $(".dingwei").index(this);$(".hfmb").eq(index).show();});});
$(function () {$(".qux").on('tap',function () {var index = $(".qux").index(this);$(".hfmb").eq(index).hide();});});
$(function () {$("#xly").on('tap',function () {$("#lymb").show();});});
$(function () {$(".quxiao").on('tap',function () {$("#lymb").hide();});});
$('.fas').click(function(){var index = $(".fas").index(this);var msgid=$(".dwid").eq(index).text();var repliedid=$(".dwnameid").eq(index).text();var message=$(".huifu").val();$(".huifu").val("");$.ajax({type: "POST",url:sendmsg_api,xhrFields:{withCredentials: true},dataType: "JSON",data: {"messageid":msgid,"repliedid":repliedid,"message":message,"operate":3},success:function(data){mui.toast(data.msg);if(data.code==0){document.location.reload();window.parent.frames[2].location.reload();}},});});
$('.fasong').click(function(){var message=$(".liuyanneirong").val();$(".liuyanneirong").val("");$.ajax({type: "POST",url: replymsg_api,xhrFields:{withCredentials: true},dataType: "JSON",data: {"message":message,"operate":4},success:function(data){mui.toast(data.msg);if(data.code==0){document.location.reload();window.parent.frames[2].location.reload();}},})});