//related to picker3.ui
var page = sm("do_Page");
var app = sm("do_App");
var storage = sm("do_Storage");
var open = require("open");
var nf = sm("do_Notification");
var root = ui("$");
//遮罩显示
var animMaskShow = mm("do_Animator");
var propsMS = {bgColor:"000000AA"};
animMaskShow.append(320,propsMS,"EaseOut");
//面板显示
var animPanelShow = mm("do_Animator");
var propsPS = {y:734};
animPanelShow.append(320,propsPS,"EaseOut");
//遮罩隐藏
var animMaskHide = mm("do_Animator");
var propsMH = {bgColor:"00000000"};
animMaskHide.append(320,propsMH,"EaseOut");
//面板隐藏
var animPanelHide = mm("do_Animator");
var propsPH = {y:1334};
animPanelHide.append(320,propsPH,"EaseOut");

//picker
var labtit = ui("do_Label_2");
var pickerbg = ui("pickerbg");//遮罩
var btnsure = ui("do_Button_1");//确定按钮
var pickerbox = ui("do_ALayout_1");
var picker1 = ui("do_Picker_1");//picker
var listpicker = mm("do_ListData");


root.on("picker1",function(data){
	labtit.text = data[0].title;//标题
	picker1.index = data[0].ppos;//picker index
	
	listpicker.removeAll();
	
	pickerbg.visible = true;
	pickerbg.animate(animMaskShow);
	pickerbox.animate(animPanelShow);
	//
	listpicker.addData(data[1]);
	picker1.bindItems(listpicker);
	picker1.refreshItems();
	
	deviceone.pcdata = data[1];
});
//确定事件

btnsure.on("touch",function(){
	pickerbox.animate(animPanelHide);
	pickerbg.animate(animMaskHide,function(){
		pickerbg.visible = false;
		var dindi = picker1.index;
		var findd = deviceone.pcdata;
		var ftxt = findd[dindi];
		var fd = [dindi,ftxt];
		root.fire("picker1f",fd);
	});
});


//遮罩事件
pickerbg.on("touch","",300,function(){
	pickerbox.animate(animPanelHide);
	pickerbg.animate(animMaskHide,function(){
		pickerbg.visible = false;
	});
});


//防穿透
pickerbox.on("touch",function(){})