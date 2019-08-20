1.<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
2.移动设备的浏览器默认viewport一般设置为980px或者1024px
3.windows对象的devicePixelRatio属性，定义为设备物理像素和独立像素的比例。CSS中的px可以看作设备的独立像素，
也就是说CSS中的1px并不等于设备的1px,比如缩放就会改变CSS中的1px所代表的物理像素
4.移动设备的三个viewport：1)layout viewport浏览器默认的视口，可以通过document.documentElement.clientWidth来获取
						  2)visual vieport浏览器可视区域的大小，通过window.innerWidth来获取
						  3)ideal viewport移动设备的理想视口，即CSS中的宽度，不需要用户缩放和横向滚动条就能正常查
						  看网站的所有内容