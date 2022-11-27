1. 导入vue.js的script脚本文件
2. 在页面中声明一个将要被vue所控制的DOM区域
3. 创建vm实例对象（vue实例对象）
```html
<body>
	<!-- 2. -->
	<div id="app">{{username}}</div><!--View-->
	<!-- 1. -->
	<script src="vue.js"></script>
	<script>
		<!-- 3. -->
		<!--ViewModel-->
		const vm = new Vue({
			<!--View-->
			el: '#app',
			<!--Model-->
			data: {
			username:'zs'
			}
		})
	</script>
</body>
```
