//移动函数
function movefunc(){
    var container = document.getElementsByClassName("banner")[0];
    //获取滚动容器的初始状态，用parseInt()取整
    var oldLef = parseInt(banner.style.left);
    //获取一张图片的宽度作为每次移动的距离
    var oneImgWidth = banner.children[0].offsetWidth;
    var newLeft = oldLeft - oneImgWidth;
    //修改滚动容器的左距离，最后记得加上px
    banner.style.left = newLeft + "px";
}

function autoRunImg(){
    var main = document.getElementsByClassName("banner")[0];
    var timer = null;
    //获取图片的总宽度
    var banner = document.getElementsByClassName("banner")[0];
    var imgWidth1 = banner.children[0].offsetWidth;
    var imgWidth2 = banner.children[1].offsetWidth;
    var imgWidth3 = banner.children[2].offsetWidth;
    var sumWidth =  imgWidth1 + imgWidth2 + imgWidth3;
    //使用定时器来创建自滚动函数
    function runAuto(){
    //800毫秒执行一次滚动函数
    timer = setInterval(function(){
        movefunc();
        if(parseInt(banner.style.left) <= -sumWidth){
            banner.style.left = "0px";
        }
    },800);
    }
    runAuto();
    //绑定鼠标事件
    main.onmouseover = function(){
        clearInterval(timer);
    }
    main.onmouseout = function(){
        runAuto();
    }
}
autoRunImg();

/*可重用移动函数*/
function movement(offset){
    var banner = document.getElementsByClassName("banner")[0];
    var oldLeft = parseInt(banner.style.left);
    var newLeft = oldLeft + offset;
    banner.style.left = newLeft + "px";
}

/*左右箭头绑定点击事件*/
function clickTriangle(){
    /*获取元素*/
    var leftTriangle = document.getElementsByClassName("left-triangle")[0];
    var rightTriangle = document.getElementsByClassName("right-triangle")[0];
    var banner = document.getElementsByClassName("banner")[0];
    var oneImgWidth = banner.children[0].offsetWidth;
    /*箭头绑定点击事件*/
    leftTriangle.onclick = function(){
        /*宽度要调整*/
        movement(oneImgWidth);
    }
    rightTriangle.onclick = function(){
        movement(-oneImgWidth);
    }
}

/*圆点绑定点击事件*/
function clickDots(){
    var banner = document.getElementsByClassName("banner")[0];
    var dots = document.getElementsByClassName("dots")[0];
    var oneImgWidth = banner.children[0].offsetWidth;
    for(var i = 0;i < dots.length;i++){
        (function(n){
            dots[n].onclick = function(){
                banner.style.left = -n*oneImgWidth + "px";
            }
        })(i);
    }
}

/*圆点高亮*/
function showDots(target){
    var dots = document.getElementsByClassName("dots")[0];
    for(var i =0;i <dots.length;i++){
        if(i != target){
            /*为什么是dots而不是dot*/
            dots[i].classlist.remove("active");
        }
        else{
            dots[i].classlist.add("active");
        }
    }
}
