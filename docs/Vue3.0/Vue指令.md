### 内容渲染
#### v-text
```html
<p v-text="number">25</p>
<!--data:{number:12}-->
```
<p>12</p>

***
#### {{}}

```html
<p>number : {{number}}</p>
<!--data:{number:12}-->
```
<p>number : 12</p>

***
#### v-html
同v-text，但是会渲染html标签

***
### 属性绑定
#### v-bind
在需要绑定的属性前面加上“v-bind:”，使其="属性名"即可
```html
<img v-bind:src="imgSrc" />
<!--data:{src:img.png}-->
```

***
#### :
" v-bind: " 可以简写为 " : "

***
### 事件绑定
#### v-on
```html
<h3>count 的值为：{{count}}</h3>
<!-- 语法格式为 v-on:事件名称="事件处理函数的名称" -->
<button v-on:click="addCount">+1</button>
```
原生DOM对象的==onclick, oninput, onkeyup==等原生事件应替换为：
==v-on:click, v-on:input, v-on:keyup==

***
### 双向绑定

***
### 条件渲染

***
### 列表渲染

***

