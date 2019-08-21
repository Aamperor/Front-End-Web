特性：1.元素“浮动”，脱离文档流，不会对其他元素的定位造成影响，
		但是不脱离文本流（影响文字的展现）
	  2.对自身的影响: 形成“块”（BFC),可以设置宽高
						位置在尽量往上靠的前提下尽量往左（右）靠
	  3.对兄弟元素的影响：上面贴非float元素；
						  旁边贴float元素
						  不影响其它块级元素的位置
						  影响其它块级元素内部文本
	  4.对父级元素的影响： 从布局上“消失”
						   高度塌陷（解决方法：给父元素设置overflow: auto/hidden;
												用其它元素撑起父级元素的高度，假设父级的一个class为container,在CSS中设置
												.container::after{
													content: "aaa";
													clear: both;
													display: block;
													height: 0;
													visibility: hidden;  /*或者将content设置为空格就可以不写visibility*/
													}
	  5.经典两栏布局    .left{
								float: left;
								width: npx;
								}
						.right{
								margin-left: npx;
								}
		三栏布局
						.left{
								float: left;
								width: npx;
						}
						.middle{
								margin-left: npx;
								margin-right: mpx;
						}
						.right{
								float: right;
								width: mpx;
						}
						/*但是要注意由于float是尽量向上靠的，所以如果在HTML中把right写在middle后面会导致right靠在middlede 
						/*下面而不是右边，为了避免这种情况我们需要把left和right都写在middle的前面
						/*同时也可以用position: absolute来替换左边的float,但是由于absolute是完全脱离文档流的所以一般不这么写
	  6.inline-block布局下两个块之间的间隙消除办法：
			1）将父级元素的font-size设置为0,然后在子元素中分别单独设置font-size
			2)