(function(){var h=this;var n=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};var aa=n("0.0"),ba=n("0.01");var ca=/^true$/.test("false")?!0:!1;var r=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},u=function(a,b){return a<b?-1:a>b?1:0};var da=function(a,b,c,e){for(var d=c.length;0<=(b=a.indexOf(c,b))&&b<e;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+d),!f||61==f||38==f||35==f)return b;b+=d+1}return-1},ea=/#|$/,v=function(a,b){var c=a.search(ea),e=da(a,0,b,c);if(0>e)return null;var d=a.indexOf("&",e);if(0>d||d>c)d=c;e+=b.length+1;return decodeURIComponent(a.substr(e,d-e).replace(/\+/g," "))},fa=/[?&]($|#)/;var x;a:{var ga=h.navigator;if(ga){var ha=ga.userAgent;if(ha){x=ha;break a}}x=""};var C=function(a){C[" "](a);return a};C[" "]=function(){};var ia=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var ja=-1!=x.indexOf("Opera"),D=-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE"),ka=-1!=x.indexOf("Edge"),E=-1!=x.indexOf("Gecko")&&!(-1!=x.toLowerCase().indexOf("webkit")&&-1==x.indexOf("Edge"))&&!(-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE"))&&-1==x.indexOf("Edge"),la=-1!=x.toLowerCase().indexOf("webkit")&&-1==x.indexOf("Edge"),ma=function(){var a=h.document;return a?a.documentMode:void 0},F;
a:{var G="",H=function(){var a=x;if(E)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ka)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(la)return/WebKit\/(\S+)/.exec(a);if(ja)return/(?:Version)[ \/]?(\S+)/.exec(a)}();H&&(G=H?H[1]:"");if(D){var I=ma();if(null!=I&&I>parseFloat(G)){F=String(I);break a}}F=G}
var na=F,ta={},ua=function(a){if(!ta[a]){for(var b=0,c=r(String(na)).split("."),e=r(String(a)).split("."),d=Math.max(c.length,e.length),f=0;0==b&&f<d;f++){var g=c[f]||"",m=e[f]||"",k=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var l=k.exec(g)||["","",""],q=p.exec(m)||["","",""];if(0==l[0].length&&0==q[0].length)break;b=u(0==l[1].length?0:parseInt(l[1],10),0==q[1].length?0:parseInt(q[1],10))||u(0==l[2].length,0==q[2].length)||u(l[2],q[2])}while(0==b)}ta[a]=0<=b}},va=h.document,wa=va&&
D?ma()||("CSS1Compat"==va.compatMode?parseInt(na,10):5):void 0;var J;if(!(J=!E&&!D)){var K;if(K=D)K=9<=Number(wa);J=K}J||E&&ua("1.9.1");D&&ua("9");var xa=function(){this.b={};this.a={};this.c=!1;for(var a=[1,2,3,4],b=0,c=a.length;b<c;++b)this.a[a[b]]=""},ya=function(a,b,c){var e=L;if(!e.c&&(c?e.a.hasOwnProperty(c)&&""==e.a[c]:1)){var d;a:{try{var f=window.top.location.hash;if(f){var g=f.match(/\bdeid=([\d,]+)/);d=g&&g[1]||"";break a}}catch(k){}d=""}if(d=(d=d.match(new RegExp("\\b("+a.join("|")+")\\b")))&&d[0]||null)a=d;else a:{if(!(1E-4>Math.random())&&(d=Math.random(),d<b)){b=window;try{var m=new Uint32Array(1);b.crypto.getRandomValues(m);
d=m[0]/65536/65536}catch(k){d=Math.random()}a=a[Math.floor(d*a.length)];break a}a=null}a&&""!=a&&(c?e.a.hasOwnProperty(c)&&(e.a[c]=a):e.b[a]=!0)}},M=function(a){var b=L;return b.a.hasOwnProperty(a)?b.a[a]:""},za=function(){var a=L,b=[];ia(a.b,function(a,e){b.push(e)});ia(a.a,function(a){""!=a&&b.push(a)});return b};var N=null,O=null;var L,Aa="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url".split(" ");
function P(a){return null!=a?"345553315"==(L?M(2):"")?encodeURIComponent(a.toString()):escape(a.toString()):""}function Ba(a){return null!=a?a.toString().substring(0,512):""}function Q(a,b){var c=P(b);if(""!=c){var e=P(a);if(""!=e)return"&".concat(e,"=",c)}return""}function R(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")}
function Ca(a){var b;if((a=a.google_custom_params)&&"object"==typeof a&&"function"!=typeof a.join){var c=[];for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var e=a[b];if(e&&"function"==typeof e.join){for(var d=[],f=0;f<e.length;++f){var g=R(e[f]);null!=g&&d.push(g)}e=0==d.length?null:d.join(",")}else e=R(e);(d=R(b))&&null!=e&&c.push(d+"="+e)}b=c.join(";")}else b="";return""==b?"":"&".concat("data=",encodeURIComponent(b))}
function Da(a){if(null!=a){a=a.toString();if(2==a.length)return Q("hl",a);if(5==a.length)return Q("hl",a.substring(0,2))+Q("gl",a.substring(3,5))}return""}function S(a){return"number"!=typeof a&&"string"!=typeof a?"":P(a.toString())}
function Ea(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],c=0,e=a.length;c<e;c++){var d=a[c],f=[];d&&(f.push(S(d.value)),f.push(S(d.quantity)),f.push(S(d.item_id)),f.push(S(d.adwords_grouping)),f.push(S(d.sku)),b.push("("+f.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""}
function Fa(a,b,c){var e=[];if(a){var d=a.screen;d&&(e.push(Q("u_h",d.height)),e.push(Q("u_w",d.width)),e.push(Q("u_ah",d.availHeight)),e.push(Q("u_aw",d.availWidth)),e.push(Q("u_cd",d.colorDepth)));a.history&&e.push(Q("u_his",a.history.length))}c&&"function"==typeof c.getTimezoneOffset&&e.push(Q("u_tz",-c.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&e.push(Q("u_java",b.javaEnabled())),b.plugins&&e.push(Q("u_nplug",b.plugins.length)),b.mimeTypes&&e.push(Q("u_nmime",b.mimeTypes.length)));
return e.join("")}function Ga(a){a=a?a.title:"";if(void 0==a||""==a)return"";var b=function(a){try{return decodeURIComponent(a),!0}catch(b){return!1}};a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)}
function Ha(a,b,c,e){var d="";if(b){var f;if(a.top==a)f=0;else{var g=a.location.ancestorOrigins;if(g)f=g[g.length-1]==a.location.origin?1:2;else{g=a.top;try{var m;if(m=!!g&&null!=g.location.href)c:{try{C(g.foo);m=!0;break c}catch(k){}m=!1}f=m}catch(k){f=!1}f=f?1:2}}a=c?c:1==f?a.top.location.href:a.location.href;d+=Q("frm",f);d+=Q("url",Ba(a));d+=Q("ref",Ba(e||b.referrer))}return d}
function Y(a,b){return!(ca||b&&Ia.test(navigator.userAgent))||a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?"https:":"http:"}var Ia=/Android ([01]\.|2\.[01])/i,Z=function(a,b){var c=b.createElement("iframe");c.style.display="none";c.src=Y(a,!1)+"//bid.g.doubleclick.net/xbbe/pixel?d=KAE";b.body.appendChild(c)};function Ja(){return new Image}
function Ka(a,b,c,e){if("27391102"==(L?M(4):""))try{var d;a:if(3!=v(c,"fmt"))d=!1;else{if(e){var f=v(c,"random"),g=v(c,"label");if(!f||!g){d=!1;break a}var m;for(var k=decodeURIComponent(g.replace(/\+/g," "))+":"+decodeURIComponent(f.replace(/\+/g," ")),f=[],p=g=0;p<k.length;p++){for(var l=k.charCodeAt(p);255<l;)f[g++]=l&255,l>>=8;f[g++]=l}if(!N)for(N={},O={},k=0;65>k;k++)N[k]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k),O[k]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(k);
k=O;l=[];for(g=0;g<f.length;g+=3){var q=f[g],y=g+1<f.length,z=y?f[g+1]:0,T=g+2<f.length,oa=T?f[g+2]:0,p=q>>2,Ma=(q&3)<<4|z>>4,pa=(z&15)<<2|oa>>6,qa=oa&63;T||(qa=64,y||(pa=64));l.push(k[p],k[Ma],k[pa],k[qa])}var U=l.join("").replace(/[.]*$/,""),A,B=a.GooglebQhCsO;B||(B={},a.GooglebQhCsO=B);A=B;A[U]?m=!1:(A[U]=[],A[U][0]=e,m=!0);if(!m){d=!1;break a}}var V=c.search(ea);a=0;var W;for(e=[];0<=(W=da(c,a,"fmt",V));)e.push(c.substring(a,W)),a=Math.min(c.indexOf("&",W)+1||V,V);e.push(c.substr(a));var t=[e.join("").replace(fa,
"$1"),"&","fmt"];t.push("=",encodeURIComponent("4"));if(t[1]){var w=t[0],X=w.indexOf("#");0<=X&&(t.push(w.substr(X)),t[0]=w=w.substr(0,X));var ra=w.indexOf("?");0>ra?t[1]="?":ra==w.length-1&&(t[1]=void 0)}var sa=b.createElement("script");sa.src=t.join("");b.getElementsByTagName("script")[0].parentElement.appendChild(sa);d=!0}return d}catch(Pa){}return!1}
function La(a,b,c,e,d,f){var g=c.opt_image_generator&&c.opt_image_generator.call;d=d&&c.onload_callback&&c.onload_callback.call?c.onload_callback:function(){};e+=Q("async","1");!g&&f&&Ka(a,b,e,d)||(a=Ja,g&&(a=c.opt_image_generator),c=a(),c.src=e,c.onload=d)}function Na(a,b){"376635471"==(L?M(3):"")&&("complete"===b.readyState?Z(a,b):a.addEventListener?a.addEventListener("load",function(){Z(a,b)}):a.attachEvent("onload",function(){Z(a,b)}))}
function Oa(a){for(var b=window,c={},e=function(d){c[d]=a&&null!=a[d]?a[d]:b[d]},d=0;d<Aa.length;d++)e(Aa[d]);e("onload_callback");return c};window.google_trackConversion=function(a){a=Oa(a);a.google_conversion_format=3;var b;var c=window,e=navigator,d=document,f=!1;if(a&&3==a.google_conversion_format){try{var g;"landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough?g=!1:(a.google_conversion_date=new Date,a.google_conversion_time=a.google_conversion_date.getTime(),a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+
1:1,"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time),a.google_conversion_js_version="8",0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=1),L=new xa,g=!0);if(g){a.google_remarketing_only&&L&&ya(["376635470","376635471"],aa,3);a.google_remarketing_only||a.google_conversion_domain||L&&ya(["27391101","27391102"],ba,4);g="/?";"landing"==a.google_conversion_type&&
(g="/extclk?");var m,k=[a.google_remarketing_only?"viewthroughconversion/":"conversion/",P(a.google_conversion_id),g,"random=",P(a.google_conversion_time)].join(""),p=a.google_remarketing_only?"googleads.g.doubleclick.net":a.google_conversion_domain||"www.googleadservices.com";m=Y(c,/www[.]googleadservices[.]com/i.test(p))+"//"+p+"/pagead/"+k;var l;l=[Q("cv",a.google_conversion_js_version),Q("fst",a.google_conversion_first_time),Q("num",a.google_conversion_snippets),Q("fmt",a.google_conversion_format),
Q("value",a.google_conversion_value),Q("currency_code",a.google_conversion_currency),Q("label",a.google_conversion_label),Q("oid",a.google_conversion_order_id),Q("bg",a.google_conversion_color),Da(a.google_conversion_language),Q("guid","ON"),Q("disvt",a.google_disable_viewthrough),Q("eid",za().join()),Ea(a),Fa(c,e,a.google_conversion_date),Ca(a),Ha(c,d,a.google_conversion_page_url,a.google_conversion_referrer_url),a.google_remarketing_for_search&&!a.google_conversion_domain?"&srr=n":"",Ga(d)].join("");
La(c,d,a,m+l,!0,!0);if(a.google_remarketing_for_search&&!a.google_conversion_domain){var q=Math.floor(1E9*Math.random()),y,z=[P(a.google_conversion_id),"/?random=",q].join("");l=y=Y(c,!1)+"//www.google.com/ads/user-lists/"+z;b=[Q("label",a.google_conversion_label),Q("fmt","3"),Ha(c,d,a.google_conversion_page_url,a.google_conversion_referrer_url)].join("");La(c,d,a,l+b,!1,!1)}a.google_remarketing_only&&Na(c,d);f=!0}}catch(T){}b=f}else b=!1;return b};}).call(this);