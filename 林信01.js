/**
 * Created by lenovo on 2016/10/17.
 */
var handle={
    init:function(){
        //设置自适应尺寸
        this.adjust();
        this.toggle();

        //事件绑定
        this.showNav();

    },
    /*兼容性添加事件监听函数*/
    addEventHandler: function(element,event,handler){
        if(element.attachEvent){
            element.attachEvent("on"+event,handler);
        }
        else if(element.addEventListener){
            element.addEventListener(event,handler,true);
        }
        else{
            element["on"+event]=handler;
        }
    },
    /*鼠标移入div显示隐藏信息,移出隐藏*/
    toggle:function(){
        var flexWrap = document.getElementsByClassName("flexWrap");
        if(divs != undefined){
            var divs = flexWrap[0].children;
            for(var i=0;i<divs.length;i++){
                handle.addEventHandler(divs[i],"mouseover",handle.show);
                handle.addEventHandler(divs[i],"mouseout",handle.hidden)
            }  
        }
    },
    /*屏幕兼容*/
    adjust:function(){
        var clientWidth = document.documentElement.clientWidth;
        var fontSize = (18/1366)*(document.documentElement.clientWidth);
        document.getElementsByTagName("HTML")[0].style.fontSize=
            (clientWidth<=768?16:fontSize)+"px";
    },
    /*显示*/
    show:function(e){
        var event=e?e:window.event;
        var src= event.currentTarget;
        src.lastChild.style.display="block";
    },
    /*隐藏*/
    hidden:function(e){
        var event=e?e:window.event;
        var src= event.currentTarget;
        src.lastChild.style.display="none";
    },

    /*导航栏下拉*/
    showNav:function(){
        var showNavBtn = document.getElementById("list");
        if(showNavBtn != undefined){
            showNavBtn.addEventListener('click', function(){
                var nav = document.getElementsByTagName("nav")[0];
                var computedStyle = window.getComputedStyle(nav, "");
                if(computedStyle.display == "none"){
                    nav.style.display="block";
                }else {
                    nav.style.display="none";
                }
            });
        }        
    }
}