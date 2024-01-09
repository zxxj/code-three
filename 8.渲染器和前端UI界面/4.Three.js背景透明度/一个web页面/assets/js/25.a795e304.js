(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{348:function(a,t,s){"use strict";s.r(t);var e=s(7),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"webgl渲染器基础设置-锯齿模糊、背景颜色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgl渲染器基础设置-锯齿模糊、背景颜色"}},[a._v("#")]),a._v(" WebGL渲染器基础设置(锯齿模糊、背景颜色)")]),a._v(" "),t("p",[a._v("一般实际开发，threejs的WebGL渲染器需要进行一些通用的基础配置，本节课给大家简单介绍下,比如渲染模糊或锯齿问题。")]),a._v(" "),t("h3",{attrs:{id:"渲染器锯齿属性-antialias"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染器锯齿属性-antialias"}},[a._v("#")]),a._v(" 渲染器锯齿属性"),t("code",[a._v(".antialias")])]),a._v(" "),t("p",[a._v("设置渲染器锯齿属性"),t("code",[a._v(".antialias")]),a._v("的值可以直接在参数中设置，也可通过渲染器对象属性设置。")]),a._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" renderer "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("THREE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("WebGLRenderer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("antialias")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("或")]),a._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("renderer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("antialias "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),t("h3",{attrs:{id:"设备像素比window-devicepixelratio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设备像素比window-devicepixelratio"}},[a._v("#")]),a._v(" 设备像素比"),t("code",[a._v("window.devicePixelRatio")])]),a._v(" "),t("p",[a._v("如果你有web前端基础，应该了解"),t("code",[a._v("window")]),a._v("对象，"),t("strong",[a._v("设备像素比")]),t("code",[a._v(".devicePixelRatio")]),a._v("是window对象的一个属性，该属性的值和你的硬件设备"),t("strong",[a._v("屏幕")]),a._v("相关，不同硬件设备的屏幕"),t("code",[a._v("window.devicePixelRatio")]),a._v("的值可能不同，可能就是1、1.5、2.0等其它值。")]),a._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 不同硬件设备的屏幕的设备像素比window.devicePixelRatio值可能不同")]),a._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'查看当前屏幕设备像素比'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("devicePixelRatio"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"设置设备像素比-setpixelratio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置设备像素比-setpixelratio"}},[a._v("#")]),a._v(" 设置设备像素比"),t("code",[a._v(".setPixelRatio()")])]),a._v(" "),t("p",[a._v("如果你遇到你的canvas画布输出模糊问题，注意设置"),t("code",[a._v("renderer.setPixelRatio(window.devicePixelRatio)")]),a._v("。")]),a._v(" "),t("p",[a._v("注意：注意你的硬件设备设备像素比"),t("code",[a._v("window.devicePixelRatio")]),a._v("刚好是1，那么是否执行"),t("code",[a._v(".setPixelRatio()")]),a._v("不会有明显差异，不过为了适应不同的硬件设备屏幕，通常需要执行该方法。")]),a._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取你屏幕对应的设备像素比.devicePixelRatio告诉threejs,以免渲染模糊问题")]),a._v("\nrenderer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setPixelRatio")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("devicePixelRatio"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"设置背景颜色-setclearcolor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置背景颜色-setclearcolor"}},[a._v("#")]),a._v(" 设置背景颜色"),t("code",[a._v(".setClearColor()")])]),a._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("renderer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setClearColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x444444")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//设置背景颜色")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);