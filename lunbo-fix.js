function autoRunImg(){
    var main = document.getElementsByClassName("main")[0];
    var banner = document.getElementsByClassName("banner")[0];
    console.log(banner);
    var index = 0; //图片标记
    var timer = null;
    var imgNum = banner.children.length;
    var leftTriangle = document.getElementsByClassName("left-triangle")[0];
    var rightTriangle = document.getElementsByClassName("right-triangle")[0];
    var dots = document.getElementsByClassName("dots")[0].children;

    //高亮显示圆点
    function showDots(target){
        var dot = dots;
        for(var i = 0;i < dot.length;i++){
            if(i == target){
                dot[i].classList.add("active");//当前图片圆点高亮显示
            }
            else{
                dot[i].classList.remove("active");
            }
        }
    }

    //可复用移动函数
    function movement(offset){
        var curLeft = 0;
        if(index == 0){
            curLeft = 0;
        }
        else{
            for(var a = 0;a < index;a++){
                curLeft += (banner.children[a].offsetWidth);
            }
        }
        
        var newLeft = curLeft + offset;
        banner.style.left = -newLeft + "px";
    }

    //绑定鼠标事件
    main.onmouseover = function(){
        clearInterval(timer); //鼠标进入停止滚动
    }
    main.onmouseout = function(){
        runAuto(); //鼠标离开继续滚动
    }

    //点击箭头
    function clickTriangle(){
        leftTriangle.onclick = function(){
            if(index > 0){ //如果当前不是第一张图片,left应该设置为当前图片之前的所有图片的宽度
                var oldLeft = parseInt(banner.style.left);
                banner.style.left = oldLeft + banner.children[index].offsetWidth + "px";
            }
            else{//当前为第一张图片，点击后返回最后一张图片
                var sumWidth = 0;
                for(var num = 0;num <= imgNum - 2;num++){
                    sumWidth = sumWidth + banner.children[num].offsetWidth;
                }
                banner.style.left = -sumWidth + "px";
            }
            index = index - 1;
            if (index < 0){
                //index小于0则要返回最后一张
                index = imgNum - 1;
            }
            //高亮显示圆点
            showDots(index);
        }
        rightTriangle.onclick = function(){
            if(index < imgNum - 1){ //如果当前不是最后一张
                var oldLeft = parseInt(banner.style.left);
                banner.style.left = oldLeft - banner.children[index].offsetWidth + "px";
            }
            else{//当前为最后一张图片要返回第一张图片,left直接设置为0
                banner.style.left = 0;
            }
            index = index + 1;
            if(index > imgNum - 1){
                index = 0;
            }
            showDots(index);
        }

    }
    clickTriangle();

    //点击圆点跳转到指定图片
    function clickDots(){
        for(var i = 0; i <dots.length;i++){
            (function(n){
                dots[n].onclick = function(){
                    var sumWidth = 0;
                    for(var num = 0;num < n;num++){
                        
                        sumWidth = sumWidth + banner.children[num].offsetWidth;
                    }
                    banner.style.left = -sumWidth + "px";
                    index = n;
                    showDots(index);
                }
            })(i);
        }
        return index;
    }
    clickDots();
    //自动轮播部分
    function runAuto(){
        timer = setInterval(function(){
            var offset;
            offset = banner.children[index].offsetWidth;
            movement(offset);
            index = index + 1;
            if(index >= imgNum){
                banner.style.left = "0px";
                index = 0;
            }
            showDots(index);

        },500)
    }
    runAuto();

}
window.onload = autoRunImg();