(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(8510)}])},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},u=t(6273),c=t(387),i=t(7190);var l={};function f(e,n,t,r){if(e&&u.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),s=a.default.useMemo((function(){var n=r(u.resolveHref(o,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?u.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,y=e.replace,h=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var w=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,m=r(i.useIntersection({rootMargin:"200px"}),2),E=m[0],_=m[1],O=a.default.useCallback((function(e){E(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,E]);a.default.useEffect((function(){var e=_&&t&&u.isLocalURL(p),n="undefined"!==typeof g?g:o&&o.locale,r=l[p+"%"+d+(n?"%"+n:"")];e&&!r&&f(o,p,d,{locale:n})}),[d,p,_,g,t,o]);var L={ref:O,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:c}))}(e,o,p,d,y,h,b,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u.isLocalURL(p)&&f(o,p,d,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof g?g:o&&o.locale,M=o&&o.isLocaleDomain&&u.getDomainLocale(d,k,o&&o.locales,o&&o.domainLocales);L.href=M||u.addBasePath(u.addLocale(d,k,o&&o.defaultLocale))}return a.default.cloneElement(n,L)};n.default=s},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,i=o.useRef(),l=r(o.useState(!1),2),f=l[0],s=l[1],p=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!u&&!f){var e=a.requestIdleCallback((function(){return s(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(7294),a=t(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map},8510:function(e,n,t){"use strict";t.r(n);var r=t(5893);t(9221),t(9008),t(1664);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsx)(n,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},t))}},9221:function(){},9008:function(e,n,t){t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var t=e.O();_N_E=t}]);