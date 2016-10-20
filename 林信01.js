/**
 * Created by lenovo on 2016/10/17.
 */
var handle={
    init:function(){
        //设置自适应尺寸
        this.adjust();
        this.toggle();

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
        var divs=document.getElementsByClassName("flexWrap")[0].children;
        for(var i=0;i<divs.length;i++){
            handle.addEventHandler(divs[i],"mouseover",handle.show);
            handle.addEventHandler(divs[i],"mouseout",handle.hidden)
        }
    },
    /*屏幕兼容*/
    adjust:function(){
        document.getElementsByTagName("HTML")[0].style.fontSize=
            (18/1366)*(document.documentElement.clientWidth)+"px";
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
    }
}