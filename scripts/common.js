"use strict";!function(){function t(){var e,t,n=document.getElementById("drawer-menu");null!==n&&(e=document.getElementById("content"),t=document.getElementById("mask"),n.classList.contains("slide-in")?(e&&(e.style.opacity="1",e.style.pointerEvents="auto"),t&&(t.style.display="none"),n.classList.remove("slide-in"),n.classList.add("slide-out"),setTimeout(function(){null!=n&&n.classList.remove("slide-out")},500)):(e&&(e.style.opacity="0.5",e.style.pointerEvents="none"),t&&(t.style.display="block"),n.classList.remove("slide-out"),n.classList.add("slide-in")))}function e(){var e=document.getElementsByTagName("BODY")[0],t=document.getElementById("content"),n=document.getElementById("footer");e&&t&&n&&(27<e.getBoundingClientRect().height-t.getBoundingClientRect().bottom&&(n.style.bottom="0"),n.style.display="block")}function n(){var e=document.getElementById("drawer-menu-handle");null!=e&&e.addEventListener("click",function(){t()});e=document.getElementById("mask");null!=e&&e.addEventListener("click",function(){t()})}function d(e){for(var t,n,d,o=null===(t=e.parentElement)||void 0===t?void 0:t.parentElement,i=0;i<o.childNodes.length;i++)if("copy-content"==o.childNodes[i].className){n=o.childNodes[i].value,d=void 0,(d=document.createElement("textarea")).setAttribute("readonly",""),d.value=n,document.body.appendChild(d),d.select(),document.execCommand("copy"),document.body.removeChild(d),function(t,n){for(var d,o=0;o<n.childNodes.length;o++)!function(){var e;null!==(d=n.childNodes[o].classList)&&void 0!==d&&d.contains("done-icon")&&(e=n.childNodes[o],t.classList.add("hidden"),e.classList.remove("hidden"),setTimeout(function(){e.classList.add("hidden"),t.classList.remove("hidden")},500))}()}(e,e.parentElement);break}}function o(){for(var e=document.getElementsByClassName("copy-btn"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){d(e.target)})}function i(){var e=document.getElementById("drawer-menu");e&&e.classList.contains("slide-in")&&t()}var s=void 0;function l(){var e=document.getElementById("drawer-menu");s=null!=s?s:null==e?void 0:e.offsetTop,e&&s&&(!(480<window.innerWidth)&&window.pageYOffset>=s?e.classList.add("sticky"):e.classList.remove("sticky"))}"interactive"===document.readyState||"complete"===document.readyState?(n(),e(),l()):window.addEventListener("DOMContentLoaded",function(){n(),e(),l()}),"complete"===document.readyState?o():window.addEventListener("load",function(){o()}),window.onscroll=function(){l(),window.scrollY<=0||i()},window.addEventListener("orientationchange",function(e){i()}),window.addEventListener("resize",function(e){i()})}();