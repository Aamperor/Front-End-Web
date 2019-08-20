<!--背景颜色-->
color-names，rgb,hex#RRGGBB,hsl(hue,saturation,lightness),rgba,hsla
<!--背景-->
background:color image repeat attachment position;
background-attachment:fixed/scroll
<!--背景尺寸-->
background-size: auto 原始尺寸
                 length 设置宽高
                 percentage 以父元素为对照
                 cover 布满容器，可能会伸缩或裁剪
                 contain 保证背景图全部可见        
<!--线性渐变-->
background:linear-gradient(to top,)
第一个参数是方向，可以使用top或者to bottom top以及角度0deg等,如果省略就是上到下
0deg/360deg 从下到上
90deg 左到右
180deg 上到下
270deg/-90deg 右到左
45deg 左下到右上
第二个参数是颜色，也可以使用多个颜色和范围控制(top, blue 20%,red 50%)
<!--径向渐变-->
backgroud:radial-gradient()
第一个参数中第一个为半径，如果省略就默认从中间开始的圆形，传一个值为半径，串两个值为椭圆的xy轴半径，也可以传关键字closest-side/closest-corner/farthest-side/farthest-corner,或者at bottom之类
第二个参数中第二个为形状，可以省略，circle/ellipse,如果第一个参数定义了长短轴，而第二个参数为circle则不起作用
还可以circle at 0px 0px 表示圆心在左上角,或者circle at 25% 25%
<!--兼容问题-->
添加私有前缀；
IE9以下使用渐变滤镜
filter:progid:DXImageTransform.Microsoft.gradient(startcolorstr=blue,endcolorstr=red,gradientType=1)
<!--特殊效果-->
1.进度条动画
2.立体球
3.网格线
多背景叠加，网格线

<!--雪碧图-->
1.gulp实现
2.webpack实现
图标的偏移是相反的，相对于容器而不是图片position:-px
<!--多分辨率适配-->
base64优化性能，图片体积会变为原来的三分之四，CSS本身的文件大小也会变大，增大了解码的开销，一般用于小图标，比如loading的图标
<!--字体图标-->