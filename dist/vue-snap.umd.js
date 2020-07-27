!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("seamless-scroll-polyfill/dist/esm/Element.scrollBy"),require("core-js/modules/es.array.find-index"),require("core-js/modules/es.array.from"),require("core-js/modules/es.array.map"),require("core-js/modules/es.string.iterator"),require("lodash.debounce")):"function"==typeof define&&define.amd?define(["exports","seamless-scroll-polyfill/dist/esm/Element.scrollBy","core-js/modules/es.array.find-index","core-js/modules/es.array.from","core-js/modules/es.array.map","core-js/modules/es.string.iterator","lodash.debounce"],t):t((e=e||self).VueSnap={},e.Element_scrollBy,null,null,null,null,e.debounce)}(this,(function(e,t,s,i,r,n,o){"use strict";o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;var a="undefined"==typeof document||"undefined"==typeof window,l=!a;a||"scrollBehavior"in document.documentElement.style||t.polyfill();function c(e,t,s,i,r,n,o,a,l,c){"boolean"!=typeof o&&(l=a,a=o,o=!1);const d="function"==typeof s?s.options:s;let u;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,r&&(d.functional=!0)),i&&(d._scopeId=i),n?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(n)},d._ssrRegister=u):t&&(u=o?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),u)if(d.functional){const e=d.render;d.render=function(t,s){return u.call(s),e(t,s)}}else{const e=d.beforeCreate;d.beforeCreate=e?[].concat(e,u):[u]}return s}const d={props:{navigationArrows:{type:Boolean,default:!0}},data:function(){return{boundLeft:!0,boundRight:!1,slidesWidth:[],wrapperScrollWidth:0,wrapperVisibleWidth:0,currentPage:0,currentPos:0,maxPages:0,step:1}},mounted:function(){this.calcWrapperWidth(),this.calcSlidesWidth(),this.calcMaxPages(),l&&(this.$refs.vsWrapper.addEventListener("scroll",o(this.eventScroll,100)),window.addEventListener("resize",o(this.eventResize,410),!1))},beforeDestroy:function(){l&&(this.$refs.vsWrapper.removeEventListener("scroll",o(this.eventScroll,100)),window.removeEventListener("resize",o(this.eventResize,410),!1))},methods:{calcBounds:function(){this.boundLeft=0===this.currentPos,this.boundRight=this.wrapperScrollWidth-this.wrapperVisibleWidth===this.currentPos},calcWrapperWidth:function(){this.wrapperScrollWidth=this.$refs.vsWrapper.scrollWidth,this.wrapperVisibleWidth=this.$refs.vsWrapper.offsetWidth},calcSlidesWidth:function(){var e=Array.from(this.$refs.vsWrapper.childNodes);this.slidesWidth=e.map((function(e){return{offsetLeft:e.offsetLeft,width:e.offsetWidth}}))},calcCurrentPosition:function(){var e=this;this.currentPos=this.$refs.vsWrapper.scrollLeft,this.currentPage=this.slidesWidth.findIndex((function(t){var s,i,r,n=t.offsetLeft;return s=n,i=e.currentPos,r=1,Math.abs(s-i)<=r})),-1===this.currentPage&&(this.currentPage=this.maxPages)},calcMaxPages:function(){var e=this.wrapperScrollWidth-this.wrapperVisibleWidth;this.maxPages=this.slidesWidth.findIndex((function(t){return t.offsetLeft>e}))-1},calcNextWidth:function(e){var t=e>0?this.currentPage:this.currentPage+e;return this.slidesWidth[t].width*e},eventScroll:function(){this.calcCurrentPosition(),this.calcBounds()},eventResize:function(){this.calcWrapperWidth(),this.calcSlidesWidth(),this.calcCurrentPosition(),this.calcBounds(),this.calcMaxPages()},changeSlide:function(e){var t=-1===e&&this.boundLeft,s=1===e&&this.boundRight;if(!t&&!s){var i=this.calcNextWidth(e);this.scroll(i)}},scroll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$refs.vsWrapper.scrollBy({left:e,behavior:"smooth"})}}};var u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vs-carousel"},[s("div",{ref:"vsWrapper",staticClass:"vs-carousel__wrapper"},[e._t("default")],2),e._v(" "),e.navigationArrows?e._t("navigation",[s("button",{directives:[{name:"show",rawName:"v-show",value:!e.boundLeft,expression:"!boundLeft"}],staticClass:"\n        vs-carousel__navigation\n        vs-carousel__navigation--left\n      ",attrs:{"aria-label":"Slide left"},on:{click:function(t){return e.changeSlide(-1)}}},[e._v("\n      ←\n    ")]),e._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:!e.boundRight,expression:"!boundRight"}],staticClass:"\n        vs-carousel__navigation\n        vs-carousel__navigation--right\n      ",attrs:{"aria-label":"Slide right"},on:{click:function(t){return e.changeSlide(1)}}},[e._v("\n      →\n    ")])]):e._e()],2)};u._withStripped=!0;const h=c({render:u,staticRenderFns:[]},void 0,d,void 0,!1,void 0,!1,void 0,void 0,void 0);var f=function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"vsSlide",staticClass:"vs-carousel__slide",attrs:{tabindex:"0"}},[this._t("default")],2)};f._withStripped=!0;const p=c({render:f,staticRenderFns:[]},void 0,{},void 0,!1,void 0,!1,void 0,void 0,void 0);var v={install:function(e){e.component("carousel",h),e.component("slide",p)}};e.Carousel=h,e.Slide=p,e.default=v,Object.defineProperty(e,"__esModule",{value:!0})}));