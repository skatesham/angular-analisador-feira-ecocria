import{$ as g,$b as Ot,Ab as tn,Bb as nn,Cb as on,Cc as B,Db as Ft,Eb as Tt,Fb as Zn,Gc as Lt,Hb as qn,Hc as ei,Ib as ee,Ic as ti,Jb as O,Kb as Xn,Kc as $,Lc as ln,Mb as le,Nb as be,Ob as ye,Pa as V,Pb as qe,Qa as Gn,Rb as Xe,Sb as Qe,T as z,U as qt,Ua as _t,Va as Kn,W as v,Wb as Qn,X as W,Xa as Ye,Yb as Jn,Z as k,Za as Ee,Zb as Z,_ as Ne,_a as T,_b as It,a as m,aa as Wn,ab as At,b as Le,c as zn,db as J,eb as K,fb as R,fc as ie,ga as Et,gb as Qt,ha as Xt,hb as Y,ia as G,ib as $e,ic as rn,jb as Re,m as fe,mb as Yn,na as j,pb as xe,ra as wt,sa as F,ua as he,vc as sn,wb as I,xb as Jt,xc as an,ya as Be,yb as en,yc as we,zb as Ze,zc as oe}from"./chunk-7DKLUWM4.js";var oi=null;function Nt(){return oi}function Qo(t){oi??=t}var un=class{},cn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>g(ri),providedIn:"platform"})}return t})();var ri=(()=>{class t extends cn{_location;_history;_doc=g(G);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Nt().getBaseHref(this._doc)}onPopState(e){let n=Nt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Nt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function si(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function ni(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function _e(t){return t&&t[0]!=="?"?`?${t}`:t}var Rt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>g(li),providedIn:"root"})}return t})(),ai=new k(""),li=(()=>{class t extends Rt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??g(G).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return si(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+_e(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+_e(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+_e(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(Ne(cn),Ne(ai,8))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ui=(()=>{class t{_subject=new fe;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=tr(ni(ii(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+_e(n))}normalize(e){return t.stripTrailingSlash(er(this._basePath,ii(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_e(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_e(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=_e;static joinWithSlash=si;static stripTrailingSlash=ni;static \u0275fac=function(n){return new(n||t)(Ne(Rt))};static \u0275prov=v({token:t,factory:()=>Jo(),providedIn:"root"})}return t})();function Jo(){return new ui(Ne(Rt))}function er(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function ii(t){return t.replace(/\/index.html$/,"")}function tr(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var bn=(function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t})(bn||{});var H=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(H||{}),C=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(C||{}),X=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(X||{}),Q={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function gi(t){return ee(t)[O.LocaleId]}function mi(t,i,e){let n=ee(t),o=[n[O.DayPeriodsFormat],n[O.DayPeriodsStandalone]],r=re(o,i);return re(r,e)}function bi(t,i,e){let n=ee(t),o=[n[O.DaysFormat],n[O.DaysStandalone]],r=re(o,i);return re(r,e)}function yi(t,i,e){let n=ee(t),o=[n[O.MonthsFormat],n[O.MonthsStandalone]],r=re(o,i);return re(r,e)}function Di(t,i){let n=ee(t)[O.Eras];return re(n,i)}function Je(t,i){let e=ee(t);return re(e[O.DateFormat],i)}function et(t,i){let e=ee(t);return re(e[O.TimeFormat],i)}function tt(t,i){let n=ee(t)[O.DateTimeFormat];return re(n,i)}function ge(t,i){let e=ee(t),n=e[O.NumberSymbols][i];if(typeof n>"u"){if(i===Q.CurrencyDecimal)return e[O.NumberSymbols][Q.Decimal];if(i===Q.CurrencyGroup)return e[O.NumberSymbols][Q.Group]}return n}function vi(t,i){return ee(t)[O.NumberFormats][i]}function Ci(t){if(!t[O.ExtraData])throw new z(2303,!1)}function Si(t){let i=ee(t);return Ci(i),(i[O.ExtraData][2]||[]).map(n=>typeof n=="string"?dn(n):[dn(n[0]),dn(n[1])])}function Ei(t,i,e){let n=ee(t);Ci(n);let o=[n[O.ExtraData][0],n[O.ExtraData][1]],r=re(o,i)||[];return re(r,e)||[]}function re(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new z(2304,!1)}function dn(t){let[i,e]=t.split(":");return{hours:+i,minutes:+e}}var nr=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,xt={},ir=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function wi(t,i,e,n){let o=pr(t);i=De(e,i)||i;let s=[],a;for(;i;)if(a=ir.exec(i),a){s=s.concat(a.slice(1));let c=s.pop();if(!c)break;i=c}else{s.push(i);break}let l=o.getTimezoneOffset();n&&(l=Ai(n,l),o=dr(o,n));let u="";return s.forEach(c=>{let d=ur(c);u+=d?d(o,e,l):c==="''"?"'":c.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function $t(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function De(t,i){let e=gi(t);if(xt[e]??={},xt[e][i])return xt[e][i];let n="";switch(i){case"shortDate":n=Je(t,X.Short);break;case"mediumDate":n=Je(t,X.Medium);break;case"longDate":n=Je(t,X.Long);break;case"fullDate":n=Je(t,X.Full);break;case"shortTime":n=et(t,X.Short);break;case"mediumTime":n=et(t,X.Medium);break;case"longTime":n=et(t,X.Long);break;case"fullTime":n=et(t,X.Full);break;case"short":let o=De(t,"shortTime"),r=De(t,"shortDate");n=Pt(tt(t,X.Short),[o,r]);break;case"medium":let s=De(t,"mediumTime"),a=De(t,"mediumDate");n=Pt(tt(t,X.Medium),[s,a]);break;case"long":let l=De(t,"longTime"),u=De(t,"longDate");n=Pt(tt(t,X.Long),[l,u]);break;case"full":let c=De(t,"fullTime"),d=De(t,"fullDate");n=Pt(tt(t,X.Full),[c,d]);break}return n&&(xt[e][i]=n),n}function Pt(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return i!=null&&n in i?i[n]:e})),t}function ue(t,i,e="-",n,o){let r="";(t<0||o&&t<=0)&&(o?t=-t+1:(t=-t,r=e));let s=String(t);for(;s.length<i;)s="0"+s;return n&&(s=s.slice(s.length-i)),r+s}function or(t,i){return ue(t,3).substring(0,i)}function L(t,i,e=0,n=!1,o=!1){return function(r,s){let a=rr(t,r);if((e>0||a>-e)&&(a+=e),t===3)a===0&&e===-12&&(a=12);else if(t===6)return or(a,i);let l=ge(s,Q.MinusSign);return ue(a,i,l,n,o)}}function rr(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new z(2301,!1)}}function _(t,i,e=H.Format,n=!1){return function(o,r){return sr(o,r,t,i,e,n)}}function sr(t,i,e,n,o,r){switch(e){case 2:return yi(i,o,n)[t.getMonth()];case 1:return bi(i,o,n)[t.getDay()];case 0:let s=t.getHours(),a=t.getMinutes();if(r){let u=Si(i),c=Ei(i,o,n),d=u.findIndex(f=>{if(Array.isArray(f)){let[p,h]=f,b=s>=p.hours&&a>=p.minutes,y=s<h.hours||s===h.hours&&a<h.minutes;if(p.hours<h.hours){if(b&&y)return!0}else if(b||y)return!0}else if(f.hours===s&&f.minutes===a)return!0;return!1});if(d!==-1)return c[d]}return mi(i,o,n)[s<12?0:1];case 3:return Di(i,n)[t.getFullYear()<=0?0:1];default:let l=e;throw new z(2302,!1)}}function Mt(t){return function(i,e,n){let o=-1*n,r=ge(e,Q.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(t){case 0:return(o>=0?"+":"")+ue(s,2,r)+ue(Math.abs(o%60),2,r);case 1:return"GMT"+(o>=0?"+":"")+ue(s,1,r);case 2:return"GMT"+(o>=0?"+":"")+ue(s,2,r)+":"+ue(Math.abs(o%60),2,r);case 3:return n===0?"Z":(o>=0?"+":"")+ue(s,2,r)+":"+ue(Math.abs(o%60),2,r);default:throw new z(2310,!1)}}}var ar=0,Bt=4;function lr(t){let i=$t(t,ar,1).getDay();return $t(t,0,1+(i<=Bt?Bt:Bt+7)-i)}function _i(t){let i=t.getDay(),e=i===0?-3:Bt-i;return $t(t.getFullYear(),t.getMonth(),t.getDate()+e)}function pn(t,i=!1){return function(e,n){let o;if(i){let r=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();o=1+Math.floor((s+r)/7)}else{let r=_i(e),s=lr(r.getFullYear()),a=r.getTime()-s.getTime();o=1+Math.round(a/6048e5)}return ue(o,t,ge(n,Q.MinusSign))}}function kt(t,i=!1){return function(e,n){let r=_i(e).getFullYear();return ue(r,t,ge(n,Q.MinusSign),i)}}var fn={};function ur(t){if(fn[t])return fn[t];let i;switch(t){case"G":case"GG":case"GGG":i=_(3,C.Abbreviated);break;case"GGGG":i=_(3,C.Wide);break;case"GGGGG":i=_(3,C.Narrow);break;case"y":i=L(0,1,0,!1,!0);break;case"yy":i=L(0,2,0,!0,!0);break;case"yyy":i=L(0,3,0,!1,!0);break;case"yyyy":i=L(0,4,0,!1,!0);break;case"Y":i=kt(1);break;case"YY":i=kt(2,!0);break;case"YYY":i=kt(3);break;case"YYYY":i=kt(4);break;case"M":case"L":i=L(1,1,1);break;case"MM":case"LL":i=L(1,2,1);break;case"MMM":i=_(2,C.Abbreviated);break;case"MMMM":i=_(2,C.Wide);break;case"MMMMM":i=_(2,C.Narrow);break;case"LLL":i=_(2,C.Abbreviated,H.Standalone);break;case"LLLL":i=_(2,C.Wide,H.Standalone);break;case"LLLLL":i=_(2,C.Narrow,H.Standalone);break;case"w":i=pn(1);break;case"ww":i=pn(2);break;case"W":i=pn(1,!0);break;case"d":i=L(2,1);break;case"dd":i=L(2,2);break;case"c":case"cc":i=L(7,1);break;case"ccc":i=_(1,C.Abbreviated,H.Standalone);break;case"cccc":i=_(1,C.Wide,H.Standalone);break;case"ccccc":i=_(1,C.Narrow,H.Standalone);break;case"cccccc":i=_(1,C.Short,H.Standalone);break;case"E":case"EE":case"EEE":i=_(1,C.Abbreviated);break;case"EEEE":i=_(1,C.Wide);break;case"EEEEE":i=_(1,C.Narrow);break;case"EEEEEE":i=_(1,C.Short);break;case"a":case"aa":case"aaa":i=_(0,C.Abbreviated);break;case"aaaa":i=_(0,C.Wide);break;case"aaaaa":i=_(0,C.Narrow);break;case"b":case"bb":case"bbb":i=_(0,C.Abbreviated,H.Standalone,!0);break;case"bbbb":i=_(0,C.Wide,H.Standalone,!0);break;case"bbbbb":i=_(0,C.Narrow,H.Standalone,!0);break;case"B":case"BB":case"BBB":i=_(0,C.Abbreviated,H.Format,!0);break;case"BBBB":i=_(0,C.Wide,H.Format,!0);break;case"BBBBB":i=_(0,C.Narrow,H.Format,!0);break;case"h":i=L(3,1,-12);break;case"hh":i=L(3,2,-12);break;case"H":i=L(3,1);break;case"HH":i=L(3,2);break;case"m":i=L(4,1);break;case"mm":i=L(4,2);break;case"s":i=L(5,1);break;case"ss":i=L(5,2);break;case"S":i=L(6,1);break;case"SS":i=L(6,2);break;case"SSS":i=L(6,3);break;case"Z":case"ZZ":case"ZZZ":i=Mt(0);break;case"ZZZZZ":i=Mt(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=Mt(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=Mt(2);break;default:return null}return fn[t]=i,i}function Ai(t,i){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?i:e}function cr(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function dr(t,i,e){let o=t.getTimezoneOffset(),r=Ai(i,o);return cr(t,-1*(r-o))}function pr(t){if(ci(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[o,r=1,s=1]=t.split("-").map(a=>+a);return $t(o,r-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(nr))return fr(n)}let i=new Date(t);if(!ci(i))throw new z(2311,!1);return i}function fr(t){let i=new Date(0),e=0,n=0,o=t[8]?i.setUTCFullYear:i.setFullYear,r=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),o.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,a=Number(t[5]||0)-n,l=Number(t[6]||0),u=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return r.call(i,s,a,l,u),i}function ci(t){return t instanceof Date&&!isNaN(t.valueOf())}var hr=/^(\d+)?\.((\d+)(-(\d+))?)?$/,di=22,Ht=".",nt="0",gr=";",mr=",",hn="#";function br(t,i,e,n,o,r,s=!1){let a="",l=!1;if(!isFinite(t))a=ge(e,Q.Infinity);else{let u=vr(t);s&&(u=Dr(u));let c=i.minInt,d=i.minFrac,f=i.maxFrac;if(r){let w=r.match(hr);if(w===null)throw new z(2306,!1);let M=w[1],Se=w[3],Oe=w[5];M!=null&&(c=gn(M)),Se!=null&&(d=gn(Se)),Oe!=null?f=gn(Oe):Se!=null&&d>f&&(f=d)}Cr(u,d,f);let p=u.digits,h=u.integerLen,b=u.exponent,y=[];for(l=p.every(w=>!w);h<c;h++)p.unshift(0);for(;h<0;h++)p.unshift(0);h>0?y=p.splice(h,p.length):(y=p,p=[0]);let E=[];for(p.length>=i.lgSize&&E.unshift(p.splice(-i.lgSize,p.length).join(""));p.length>i.gSize;)E.unshift(p.splice(-i.gSize,p.length).join(""));p.length&&E.unshift(p.join("")),a=E.join(ge(e,n)),y.length&&(a+=ge(e,o)+y.join("")),b&&(a+=ge(e,Q.Exponential)+"+"+b)}return t<0&&!l?a=i.negPre+a+i.negSuf:a=i.posPre+a+i.posSuf,a}function Fi(t,i,e){let n=vi(i,bn.Decimal),o=yr(n,ge(i,Q.MinusSign));return br(t,o,i,Q.Group,Q.Decimal,e)}function yr(t,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(gr),o=n[0],r=n[1],s=o.indexOf(Ht)!==-1?o.split(Ht):[o.substring(0,o.lastIndexOf(nt)+1),o.substring(o.lastIndexOf(nt)+1)],a=s[0],l=s[1]||"";e.posPre=a.substring(0,a.indexOf(hn));for(let c=0;c<l.length;c++){let d=l.charAt(c);d===nt?e.minFrac=e.maxFrac=c+1:d===hn?e.maxFrac=c+1:e.posSuf+=d}let u=a.split(mr);if(e.gSize=u[1]?u[1].length:0,e.lgSize=u[2]||u[1]?(u[2]||u[1]).length:0,r){let c=o.length-e.posPre.length-e.posSuf.length,d=r.indexOf(hn);e.negPre=r.substring(0,d).replace(/'/g,""),e.negSuf=r.slice(d+c).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function Dr(t){if(t.digits[0]===0)return t;let i=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(i===0?t.digits.push(0,0):i===1&&t.digits.push(0),t.integerLen+=2),t}function vr(t){let i=Math.abs(t)+"",e=0,n,o,r,s,a;for((o=i.indexOf(Ht))>-1&&(i=i.replace(Ht,"")),(r=i.search(/e/i))>0?(o<0&&(o=r),o+=+i.slice(r+1),i=i.substring(0,r)):o<0&&(o=i.length),r=0;i.charAt(r)===nt;r++);if(r===(a=i.length))n=[0],o=1;else{for(a--;i.charAt(a)===nt;)a--;for(o-=r,n=[],s=0;r<=a;r++,s++)n[s]=Number(i.charAt(r))}return o>di&&(n=n.splice(0,di-1),e=o-1,o=1),{digits:n,exponent:e,integerLen:o}}function Cr(t,i,e){if(i>e)throw new z(2307,!1);let n=t.digits,o=n.length-t.integerLen,r=Math.min(Math.max(i,o),e),s=r+t.integerLen,a=n[s];if(s>0){n.splice(Math.max(t.integerLen,s));for(let d=s;d<n.length;d++)n[d]=0}else{o=Math.max(0,o),t.integerLen=1,n.length=Math.max(1,s=r+1),n[0]=0;for(let d=1;d<s;d++)n[d]=0}if(a>=5)if(s-1<0){for(let d=0;d>s;d--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[s-1]++;for(;o<Math.max(0,r);o++)n.push(0);let l=r!==0,u=i+t.integerLen,c=n.reduceRight(function(d,f,p,h){return f=f+d,h[p]=f<10?f:f-10,l&&(h[p]===0&&p>=u?h.pop():l=!1),f>=10?1:0},0);c&&(n.unshift(c),t.integerLen++)}function gn(t){let i=parseInt(t);if(isNaN(i))throw new z(2305,!1);return i}var mn=/\s+/,pi=[],Sr=(()=>{class t{_ngEl;_renderer;initialClasses=pi;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(mn):pi}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(mn):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(mn).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(T(he),T(Ee))};static \u0275dir=R({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Ut=class{$implicit;ngForOf;index;count;constructor(i,e,n,o){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Ti=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,o){this._viewContainer=e,this._template=n,this._differs=o}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((o,r,s)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new Ut(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),fi(a,o)}});for(let o=0,r=n.length;o<r;o++){let a=n.get(o).context;a.index=o,a.count=r,a.ngForOf=this._ngForOf}e.forEachIdentityChange(o=>{let r=n.get(o.currentIndex);fi(r,o)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(T(At),T(Ye),T(ei))};static \u0275dir=R({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function fi(t,i){t.context.$implicit=i.item}var yn=(()=>{class t{_viewContainer;_context=new jt;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){hi(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){hi(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(T(At),T(Ye))};static \u0275dir=R({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),jt=class{$implicit=null;ngIf=null};function hi(t,i){if(t&&!t.createEmbeddedView)throw new z(2020,!1)}var Dn=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,o){this._ngEl=e,this._differs=n,this._renderer=o}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[o,r]=e.split("."),s=o.indexOf("-")===-1?void 0:Gn.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(T(he),T(ti),T(Ee))};static \u0275dir=R({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),vn=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(T(At))};static \u0275dir=R({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[wt]})}return t})();function Ii(t,i){return new z(2100,!1)}var Er="mediumDate",Oi=new k(""),Li=new k(""),wr=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,o){this.locale=e,this.defaultTimezone=n,this.defaultOptions=o}transform(e,n,o,r){if(e==null||e===""||e!==e)return null;try{let s=n??this.defaultOptions?.dateFormat??Er,a=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return wi(e,s,r||this.locale,a)}catch(s){throw Ii(t,s.message)}}static \u0275fac=function(n){return new(n||t)(T(sn,16),T(Oi,24),T(Li,24))};static \u0275pipe=Qt({name:"date",type:t,pure:!0})}return t})();var _r=(()=>{class t{_locale;constructor(e){this._locale=e}transform(e,n,o){if(!Ar(e))return null;o||=this._locale;try{let r=Fr(e);return Fi(r,o,n)}catch(r){throw Ii(t,r.message)}}static \u0275fac=function(n){return new(n||t)(T(sn,16))};static \u0275pipe=Qt({name:"number",type:t,pure:!0})}return t})();function Ar(t){return!(t==null||t===""||t!==t)}function Fr(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new z(2309,!1);return t}var me=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=W({})}return t})();function Tr(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[o,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var Cn=class{};var Or="browser",Lr="server";function it(t){return t===Or}function En(t){return t===Lr}var ul=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>new Sn(g(G),window)})}return t})(),Sn=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(Le(m({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=Nr(this.document,i);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(qt(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),o=n.left+this.window.pageXOffset,r=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(Le(m({},e),{left:o-s[0],top:r-s[1]}))}};function Nr(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),o=n.currentNode;for(;o;){let r=o.shadowRoot;if(r){let s=r.getElementById(i)||r.querySelector(`[name="${i}"]`);if(s)return s}o=n.nextNode()}}return null}function Ae(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[Ae(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function Ni(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function ot(t,i){if(t&&i){let e=n=>{Ni(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function xr(){return window.innerWidth-document.documentElement.offsetWidth}function Ri(t){typeof t=="string"?ot(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,xr()+"px"),ot(document.body,t?.className||"p-overflow-hidden"))}function Fe(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function xi(t){typeof t=="string"?Fe(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),Fe(document.body,t?.className||"p-overflow-hidden"))}function rt(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Pi(t){let i={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display],o=t.getBoundingClientRect();t.style.visibility="hidden",t.style.display="block",i.width=o.width||t.offsetWidth,i.height=o.height||t.offsetHeight,t.style.display=n,t.style.visibility=e}return i}function Mi(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:r}}function wn(t){return t?Math.abs(t.scrollLeft):0}function Pr(){let t=document.documentElement;return(window.pageXOffset||wn(t))-(t.clientLeft||0)}function Mr(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function kr(t){return t?getComputedStyle(t).direction==="rtl":!1}function ml(t,i,e=!0){var n,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Pi(t),l=a.height,u=a.width,c=i.offsetHeight,d=i.offsetWidth,f=i.getBoundingClientRect(),p=Mr(),h=Pr(),b=Mi(),y,E,w="top";f.top+c+l>b.height?(y=f.top+p-l,w="bottom",y<0&&(y=p)):y=c+f.top+p,f.left+u>b.width?E=Math.max(0,f.left+h+d-u):E=f.left+h,kr(t)?t.style.insetInlineEnd=E+"px":t.style.insetInlineStart=E+"px",t.style.top=y+"px",t.style.transformOrigin=w,e&&(t.style.marginTop=w==="bottom"?`calc(${(o=(n=rt(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=rt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function bl(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function ki(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function yl(t,i,e=!0,n=void 0){var o;if(t){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Pi(t),s=i.offsetHeight,a=i.getBoundingClientRect(),l=Mi(),u,c,d=n??"top";if(!n&&a.top+s+r.height>l.height?(u=-1*r.height,d="bottom",a.top+u<0&&(u=-1*a.top)):u=s,r.width>l.width?c=a.left*-1:a.left+r.width>l.width?c=(a.left+r.width-l.width)*-1:c=0,t.style.top=u+"px",t.style.insetInlineStart=c+"px",t.style.transformOrigin=d,e){let f=(o=rt(/-anchor-gutter$/))==null?void 0:o.value;t.style.marginTop=d==="bottom"?`calc(${f??"2px"} * -1)`:f??""}}}function Bi(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function Br(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Bi(t))}function He(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function $i(t){let i=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?i=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?i=t.el.nativeElement:i=t.el)),He(i)?i:void 0}function $r(t,i){var e,n,o;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@first":return i?.firstElementChild;case"@last":return i?.lastElementChild;case"@child":return(e=i?.children)==null?void 0:e[0];case"@parent":return i?.parentElement;case"@grandparent":return(n=i?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((o=i?.children)==null?void 0:o[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=$i(r);return Br(s)?s:r?.nodeType===9?r:void 0}}}function Dl(t,i){let e=$r(t,i);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function Vt(t,i={}){if(He(t)){let e=(n,o)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?e(n,u):Object.entries(u).map(([f,p])=>n==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=d.length?l.concat(d.filter(f=>!!f)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?Vt(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function Hr(t,i={},...e){if(t){let n=document.createElement(t);return Vt(n,i),n.append(...e),n}}function vl(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function Ur(t,i){return He(t)?Array.from(t.querySelectorAll(i)):[]}function Cl(t,i){return He(t)?t.matches(i)?t:t.querySelector(i):null}function Sl(t,i){t&&document.activeElement!==t&&t.focus(i)}function El(t,i){if(He(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Hi(t,i=""){let e=Ur(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function wl(t,i){let e=Hi(t,i);return e.length>0?e[0]:null}function _n(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function _l(t){var i;if(t){let e=(i=Bi(t))==null?void 0:i.childNodes,n=0;if(e)for(let o=0;o<e.length;o++){if(e[o]===t)return n;e[o].nodeType===1&&n++}}return-1}function Al(t,i){let e=Hi(t,i);return e.length>0?e[e.length-1]:null}function Ui(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||wn(document.documentElement)||wn(document.body)||0)}}return{top:"auto",left:"auto"}}function An(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Fl(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Fn(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function Tl(t){return!!(t&&t.offsetParent!=null)}function Il(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function ji(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function Ol(t,i){let e=$i(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function Ll(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=t.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,l=t.scrollTop,u=t.clientHeight,c=An(i);a<0?t.scrollTop=l+a:a+c>u&&(t.scrollTop=l+a-u+c)}function Vi(t,i="",e){He(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function zi(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.forEach(o=>{o(e)})},clear(){t.clear()}}}var jr=Object.defineProperty,Wi=Object.getOwnPropertySymbols,Vr=Object.prototype.hasOwnProperty,zr=Object.prototype.propertyIsEnumerable,Gi=(t,i,e)=>i in t?jr(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Ki=(t,i)=>{for(var e in i||(i={}))Vr.call(i,e)&&Gi(t,e,i[e]);if(Wi)for(var e of Wi(i))zr.call(i,e)&&Gi(t,e,i[e]);return t};function Yi(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[Yi(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function Wr(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Gr({skipUndefined:t=!1},...i){return i?.reduce((e,n={})=>{for(let o in n){let r=n[o];if(!(t&&r===void 0))if(o==="style")e.style=Ki(Ki({},e.style),n.style);else if(o==="class"||o==="className")e[o]=Yi(e[o],n[o]);else if(Wr(r)){let s=e[o];e[o]=s?(...a)=>{s(...a),r(...a)}:r}else e[o]=r}return e},{})}function Tn(...t){return Gr({skipUndefined:!1},...t)}var Kr=Object.defineProperty,Zi=Object.getOwnPropertySymbols,Yr=Object.prototype.hasOwnProperty,Zr=Object.prototype.propertyIsEnumerable,qi=(t,i,e)=>i in t?Kr(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,qr=(t,i)=>{for(var e in i||(i={}))Yr.call(i,e)&&qi(t,e,i[e]);if(Zi)for(var e of Zi(i))Zr.call(i,e)&&qi(t,e,i[e]);return t};function Pe(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function In(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),r,s,a;if(n&&o){if(s=t.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!In(t[r],i[r],e))return!1;return!0}if(n!=o)return!1;let l=t instanceof Date,u=i instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==i.getTime();let c=t instanceof RegExp,d=i instanceof RegExp;if(c!=d)return!1;if(c&&d)return t.toString()==i.toString();let f=Object.keys(t);if(s=f.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,f[r]))return!1;for(r=s;r--!==0;)if(a=f[r],!In(t[a],i[a],e))return!1;return!0}function Xr(t,i){return In(t,i)}function Wt(t){return typeof t=="function"&&"call"in t&&"apply"in t}function S(t){return!Pe(t)}function zt(t,i){if(!t||!i)return null;try{let e=t[i];if(S(e))return e}catch{}if(Object.keys(t).length){if(Wt(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,r=e.length;o<r;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function st(t,i,e){return e?zt(t,e)===zt(i,e):Xr(t,i)}function Pl(t,i){if(t!=null&&i&&i.length){for(let e of i)if(st(t,e))return!0}return!1}function ce(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function Xi(t={},i={}){let e=qr({},t);return Object.keys(i).forEach(n=>{let o=n;ce(i[o])&&o in t&&ce(t[o])?e[o]=Xi(t[o],i[o]):e[o]=i[o]}),e}function On(...t){return t.reduce((i,e,n)=>n===0?e:Xi(i,e),{})}function Ml(t,i){let e=-1;if(S(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function x(t,...i){return Wt(t)?t(...i):t}function se(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Te(t){return se(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Gt(t,i="",e={}){let n=Te(i).split("."),o=n.shift();if(o){if(ce(t)){let r=Object.keys(t).find(s=>Te(s)===o)||"";return Gt(x(t[r],e),n.join("."),e)}return}return x(t,e)}function Ln(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function kl(t){return t instanceof Date}function Qi(t){return S(t)&&!isNaN(t)}function Bl(t=""){return S(t)&&t.length===1&&!!t.match(/\S| /)}function de(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Nn(...t){return On(...t)}function Me(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function te(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let i={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let e in i)t=t.replace(i[e],e)}return t}function Kt(t){return se(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}var Yt={};function at(t="pui_id_"){return Object.hasOwn(Yt,t)||(Yt[t]=0),Yt[t]++,`${t}${Yt[t]}`}var Ji=["*"],Qr=(function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t})(Qr||{}),zl=(()=>{class t{requireConfirmationSource=new fe;acceptConfirmationSource=new fe;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var P=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),Wl=(()=>{class t{static AND="and";static OR="or"}return t})(),Gl=(()=>{class t{filter(e,n,o,r,s){let a=[];if(e)for(let l of e)for(let u of n){let c=zt(l,u);if(this.filters[r](c,o,s)){a.push(l);break}}return a}filters={startsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=te(n.toString()).toLocaleLowerCase(o);return te(e.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=te(n.toString()).toLocaleLowerCase(o);return te(e.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=te(n.toString()).toLocaleLowerCase(o);return te(e.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=te(n.toString()).toLocaleLowerCase(o),s=te(e.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:te(e.toString()).toLocaleLowerCase(o)==te(n.toString()).toLocaleLowerCase(o),notEquals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:te(e.toString()).toLocaleLowerCase(o)!=te(n.toString()).toLocaleLowerCase(o),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(st(e,n[o]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,o)=>this.filters.equals(e,n,o),isNot:(e,n,o)=>this.filters.notEquals(e,n,o),before:(e,n,o)=>this.filters.lt(e,n,o),after:(e,n,o)=>this.filters.gt(e,n,o),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Kl=(()=>{class t{messageSource=new fe;clearSource=new fe;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Yl=(()=>{class t{clickSource=new fe;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=J({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Ji,decls:1,vars:0,template:function(n,o){n&1&&(be(),ye(0))},encapsulation:2})}return t})(),ql=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=J({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Ji,decls:1,vars:0,template:function(n,o){n&1&&(be(),ye(0))},encapsulation:2})}return t})(),eo=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(T(Ye))};static \u0275dir=R({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),Ie=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=W({imports:[me]})}return t})(),Xl=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Jr=Object.defineProperty,es=Object.defineProperties,ts=Object.getOwnPropertyDescriptors,Zt=Object.getOwnPropertySymbols,io=Object.prototype.hasOwnProperty,oo=Object.prototype.propertyIsEnumerable,to=(t,i,e)=>i in t?Jr(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,A=(t,i)=>{for(var e in i||(i={}))io.call(i,e)&&to(t,e,i[e]);if(Zt)for(var e of Zt(i))oo.call(i,e)&&to(t,e,i[e]);return t},je=(t,i)=>es(t,ts(i)),ve=(t,i)=>{var e={};for(var n in t)io.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Zt)for(var n of Zt(t))i.indexOf(n)<0&&oo.call(t,n)&&(e[n]=t[n]);return e};var ns=zi(),N=ns,lt=/{([^}]*)}/g,ro=/(\d+\s+[\+\-\*\/]\s+\d+)/g,so=/var\([^)]+\)/g;function no(t){return se(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}function is(t){return ce(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function os(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Rn(t="",i=""){return os(`${se(t,!1)&&se(i,!1)?`${t}-`:t}${i}`)}function ao(t="",i=""){return`--${Rn(t,i)}`}function rs(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function lo(t,i="",e="",n=[],o){if(se(t)){let r=t.trim();if(rs(r))return;if(de(r,lt)){let s=r.replaceAll(lt,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(c=>de(u,c)));return`var(${ao(e,Kt(l.join("-")))}${S(o)?`, ${o}`:""})`});return de(s.replace(so,"0"),ro)?`calc(${s})`:s}return r}else if(Qi(t))return t}function ss(t,i,e){se(i,!1)&&t.push(`${i}:${e};`)}function Ue(t,i){return t?`${t}{${i}}`:""}function uo(t,i){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,c="",d=null,f=0;for(;u<=s.length;){let p=s[u];if((p==='"'||p==="'"||p==="`")&&s[u-1]!=="\\"&&(d=d===p?null:p),!d&&(p==="("&&f++,p===")"&&f--,(p===","||u===s.length)&&f===0)){let h=c.trim();h.startsWith("dt(")?l.push(uo(h,a)):l.push(n(h)),c="",u++;continue}p!==void 0&&(c+=p),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let o=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&o.push([a,s])}if(!o.length)return t;for(let s=o.length-1;s>=0;s--){let[a,l]=o[s],u=t.slice(a+3,l),c=e(u,i),d=i(...c);t=t.slice(0,a)+d+t.slice(l+1)}return t}var Pn=t=>{var i;let e=D.getTheme(),n=xn(e,t,void 0,"variable"),o=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],r=xn(e,t,void 0,"value");return{name:o,variable:n,value:r}},Ce=(...t)=>xn(D.getTheme(),...t),xn=(t={},i,e,n)=>{if(i){let{variable:o,options:r}=D.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=de(i,lt)?i:`{${i}}`;return n==="value"||Pe(n)&&a==="strict"?D.getTokenValue(i):lo(l,void 0,s,[o.excludedKeyRegex],e)}return""};function Ve(t,...i){if(t instanceof Array){let e=t.reduce((n,o,r)=>{var s;return n+o+((s=x(i[r],{dt:Ce}))!=null?s:"")},"");return uo(e,Ce)}return x(t,{dt:Ce})}var as=(t={})=>{let{preset:i,options:e}=t;return{preset(n){return i=i?Nn(i,n):n,this},options(n){return e=e?A(A({},e),n):n,this},primaryPalette(n){let{semantic:o}=i||{};return i=je(A({},i),{semantic:je(A({},o),{primary:n})}),this},surfacePalette(n){var o,r;let{semantic:s}=i||{},a=n&&Object.hasOwn(n,"light")?n.light:n,l=n&&Object.hasOwn(n,"dark")?n.dark:n,u={colorScheme:{light:A(A({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:A(A({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return i=je(A({},i),{semantic:A(A({},s),u)}),this},define({useDefaultPreset:n=!1,useDefaultOptions:o=!1}={}){return{preset:n?D.getPreset():i,options:o?D.getOptions():e}},update({mergePresets:n=!0,mergeOptions:o=!0}={}){let r={preset:n?Nn(D.getPreset(),i):i,options:o?A(A({},D.getOptions()),e):e};return D.setTheme(r),r},use(n){let o=this.define(n);return D.setTheme(o),o}}};function ls(t,i={}){let e=D.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=i,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:c,path:d}=l.pop();for(let f in c){let p=c[f],h=is(p),b=de(f,r)?Rn(d):Rn(d,Kt(f));if(ce(h))l.push({node:h,path:b});else{let y=ao(b),E=lo(h,b,n,[r]);ss(a,y,E);let w=b;n&&w.startsWith(n+"-")&&(w=w.slice(n.length+1)),s.push(w.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:Ue(o,u)}}var pe={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return ls(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s,a,l,u,c,d;let{preset:f,options:p}=i,h,b,y,E,w,M,Se;if(S(f)&&p.transform!=="strict"){let{primitive:Oe,semantic:ut,extend:ct}=f,We=ut||{},{colorScheme:dt}=We,pt=ve(We,["colorScheme"]),ft=ct||{},{colorScheme:ht}=ft,Ge=ve(ft,["colorScheme"]),Ke=dt||{},{dark:gt}=Ke,mt=ve(Ke,["dark"]),bt=ht||{},{dark:yt}=bt,Dt=ve(bt,["dark"]),vt=S(Oe)?this._toVariables({primitive:Oe},p):{},Ct=S(pt)?this._toVariables({semantic:pt},p):{},St=S(mt)?this._toVariables({light:mt},p):{},Hn=S(gt)?this._toVariables({dark:gt},p):{},Un=S(Ge)?this._toVariables({semantic:Ge},p):{},jn=S(Dt)?this._toVariables({light:Dt},p):{},Vn=S(yt)?this._toVariables({dark:yt},p):{},[xo,Po]=[(r=vt.declarations)!=null?r:"",vt.tokens],[Mo,ko]=[(s=Ct.declarations)!=null?s:"",Ct.tokens||[]],[Bo,$o]=[(a=St.declarations)!=null?a:"",St.tokens||[]],[Ho,Uo]=[(l=Hn.declarations)!=null?l:"",Hn.tokens||[]],[jo,Vo]=[(u=Un.declarations)!=null?u:"",Un.tokens||[]],[zo,Wo]=[(c=jn.declarations)!=null?c:"",jn.tokens||[]],[Go,Ko]=[(d=Vn.declarations)!=null?d:"",Vn.tokens||[]];h=this.transformCSS(t,xo,"light","variable",p,n,o),b=Po;let Yo=this.transformCSS(t,`${Mo}${Bo}`,"light","variable",p,n,o),Zo=this.transformCSS(t,`${Ho}`,"dark","variable",p,n,o);y=`${Yo}${Zo}`,E=[...new Set([...ko,...$o,...Uo])];let qo=this.transformCSS(t,`${jo}${zo}color-scheme:light`,"light","variable",p,n,o),Xo=this.transformCSS(t,`${Go}color-scheme:dark`,"dark","variable",p,n,o);w=`${qo}${Xo}`,M=[...new Set([...Vo,...Wo,...Ko])],Se=x(f.css,{dt:Ce})}return{primitive:{css:h,tokens:b},semantic:{css:y,tokens:E},global:{css:w,tokens:M},style:Se}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:r,selector:s}){var a,l,u;let c,d,f;if(S(i)&&e.transform!=="strict"){let p=t.replace("-directive",""),h=i,{colorScheme:b,extend:y,css:E}=h,w=ve(h,["colorScheme","extend","css"]),M=y||{},{colorScheme:Se}=M,Oe=ve(M,["colorScheme"]),ut=b||{},{dark:ct}=ut,We=ve(ut,["dark"]),dt=Se||{},{dark:pt}=dt,ft=ve(dt,["dark"]),ht=S(w)?this._toVariables({[p]:A(A({},w),Oe)},e):{},Ge=S(We)?this._toVariables({[p]:A(A({},We),ft)},e):{},Ke=S(ct)?this._toVariables({[p]:A(A({},ct),pt)},e):{},[gt,mt]=[(a=ht.declarations)!=null?a:"",ht.tokens||[]],[bt,yt]=[(l=Ge.declarations)!=null?l:"",Ge.tokens||[]],[Dt,vt]=[(u=Ke.declarations)!=null?u:"",Ke.tokens||[]],Ct=this.transformCSS(p,`${gt}${bt}`,"light","variable",e,o,r,s),St=this.transformCSS(p,Dt,"dark","variable",e,o,r,s);c=`${Ct}${St}`,d=[...new Set([...mt,...yt,...vt])],f=x(E,{dt:Ce})}return{css:c,tokens:d,style:f}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s;let a=t.replace("-directive",""),{preset:l,options:u}=i,c=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:c,options:u,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${x(o.order||o.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:i,params:e,set:o,defaults:r}),a=Object.entries(n).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(ce(c)&&Object.hasOwn(c,"css")){let d=Me(c.css),f=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){var s;let a={name:t,theme:i,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((c,[d,f])=>c.push(`${d}="${f}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${Me(l)}</style>`:""},createTokens(t={},i,e="",n="",o={}){let r=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let c=this.value;if(typeof this.value=="string"&&lt.test(this.value)){let d=this.value.trim().replace(lt,f=>{var p;let h=f.slice(1,-1),b=this.tokens[h];if(!b)return console.warn(`Token not found for path: ${h}`),"__UNRESOLVED__";let y=b.computed(a,l,u);return Array.isArray(y)&&y.length===2?`light-dark(${y[0].value},${y[1].value})`:(p=y?.value)!=null?p:"__UNRESOLVED__"});c=ro.test(d.replace(so,"0"))?`calc(${d})`:d}return Pe(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:c.includes("__UNRESOLVED__")?void 0:c}},s=(a,l,u)=>{Object.entries(a).forEach(([c,d])=>{let f=de(c,i.variable.excludedKeyRegex)?l:l?`${l}.${no(c)}`:no(c),p=u?`${u}.${c}`:c;ce(d)?s(d,f,p):(o[f]||(o[f]={paths:[],computed:(h,b={},y=[])=>{if(o[f].paths.length===1)return o[f].paths[0].computed(o[f].paths[0].scheme,b.binding,y);if(h&&h!=="none")for(let E=0;E<o[f].paths.length;E++){let w=o[f].paths[E];if(w.scheme===h)return w.computed(h,b.binding,y)}return o[f].paths.map(E=>E.computed(E.scheme,b[E.scheme],y))}}),o[f].paths.push({path:p,value:d,scheme:p.includes("colorScheme.light")?"light":p.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:o}))})};return s(t,e,n),o},getTokenValue(t,i,e){var n;let o=(a=>a.split(".").filter(l=>!de(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),r=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[o])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:c}=u,d=ve(u,["colorScheme"]);return a[c]=d,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Ue(S(i)?`${t}${i},${t} ${i}`:t,n):Ue(t,Ue(i??":root,:host",n))},transformCSS(t,i,e,n,o={},r,s,a){if(S(i)){let{cssLayer:l}=o;if(n!=="style"){let u=this.getColorSchemeOption(o,s);i=e==="dark"?u.reduce((c,{type:d,selector:f})=>(S(f)&&(c+=f.includes("[CSS]")?f.replace("[CSS]",i):this.getSelectorRule(f,a,d,i)),c),""):Ue(a??":root,:host",i)}if(l){let u={name:"primeui",order:"primeui"};ce(l)&&(u.name=x(l.name,{name:t,type:n})),S(u.name)&&(i=Ue(`@layer ${u.name}`,i),r?.layerNames(u.name))}return i}return""}},D={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=je(A({},i),{options:A(A({},this.defaults.options),i.options)}),this._tokens=pe.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),N.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=je(A({},this.theme),{preset:t}),this._tokens=pe.createTokens(t,this.defaults),this.clearLoadedStyleNames(),N.emit("preset:change",t),N.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=je(A({},this.theme),{options:t}),this.clearLoadedStyleNames(),N.emit("options:change",t),N.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return pe.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return pe.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return pe.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return pe.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return pe.getPreset(o)},getLayerOrderCSS(t=""){return pe.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return pe.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return pe.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return pe.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),N.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&N.emit("theme:load"))}};function au(...t){let i=On(D.getPreset(),...t);return D.setPreset(i),i}function lu(t){return as().surfacePalette(t).update().preset}var co=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var us=0,po=(()=>{class t{document=g(G);use(e,n={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++us}`,id:c=void 0,media:d=void 0,nonce:f=void 0,first:p=!1,props:h={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),s){if(!s.isConnected){r=e;let b=this.document.head;Vi(s,"nonce",f),p&&b.firstChild?b.insertBefore(s,b.firstChild):b.appendChild(s),Vt(s,{type:"text/css",media:d,nonce:f,"data-primeng-style-id":u})}s.textContent!==r&&(s.textContent=r)}return{id:c,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ze={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},cs=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,U=(()=>{class t{name="base";useStyle=g(po);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},o=r=>r)=>{let r=o(Ve`${x(e,{dt:Ce})}`);return r?this.useStyle.use(Me(r),m({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n="")=>this.load(this.style,e,(o="")=>D.transformCSS(e.name||this.name,`${o}${Ve`${n}`}`));loadBaseCSS=(e={})=>this.load(cs,e);loadBaseStyle=(e={},n="")=>this.load(co,e,(o="")=>D.transformCSS(e.name||this.name,`${o}${Ve`${n}`}`));getCommonTheme=e=>D.getCommon(this.name,e);getComponentTheme=e=>D.getComponent(this.name,e);getPresetTheme=(e,n,o)=>D.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>D.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=x(this.css,{dt:Ce}),r=Me(Ve`${o}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>D.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[D.getStyleSheet(this.name,e,n)];if(this.style){let r=this.name==="base"?"global-style":`${this.name}-style`,s=Ve`${x(this.style,{dt:Ce})}`,a=Me(D.transformCSS(r,s)),l=Object.entries(n).reduce((u,[c,d])=>u.push(`${c}="${d}"`)&&u,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ds=(()=>{class t{theme=j(void 0);csp=j({nonce:void 0});isThemeChanged=!1;document=g(G);baseStyle=g(U);constructor(){oe(()=>{N.on("theme:change",e=>{an(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),oe(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){D.clearLoadedStyleNames(),N.clear()}onThemeChange(e){D.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!D.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,m({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,m({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,m({name:"global-variables"},s)),this.baseStyle.loadBaseStyle(m({name:"global-style"},s),r),D.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mn=(()=>{class t extends ds{ripple=j(!1);platformId=g(Be);inputStyle=j(null);inputVariant=j(null);overlayAppendTo=j("self");overlayOptions={};csp=j({nonce:void 0});unstyled=j(void 0);pt=j(void 0);ptOptions=j(void 0);filterMatchModeOptions={text:[P.STARTS_WITH,P.CONTAINS,P.NOT_CONTAINS,P.ENDS_WITH,P.EQUALS,P.NOT_EQUALS],numeric:[P.EQUALS,P.NOT_EQUALS,P.LESS_THAN,P.LESS_THAN_OR_EQUAL_TO,P.GREATER_THAN,P.GREATER_THAN_OR_EQUAL_TO],date:[P.DATE_IS,P.DATE_IS_NOT,P.DATE_BEFORE,P.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new fe;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=m(m({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:c,overlayAppendTo:d,zIndex:f,ptOptions:p,pt:h,unstyled:b}=e||{};n&&this.csp.set(n),d&&this.overlayAppendTo.set(d),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),f&&(this.zIndex=f),h&&this.pt.set(h),p&&this.ptOptions.set(p),b&&this.unstyled.set(b),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ps=new k("PRIME_NG_CONFIG");function Lu(...t){let i=t?.map(n=>({provide:ps,useValue:n,multi:!1})),e=Yn(()=>{let n=g(Mn);t?.forEach(o=>n.setConfig(o))});return Wn([...i,e])}var fo=(()=>{class t extends U{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ke=new k("PARENT_INSTANCE"),ae=(()=>{class t{document=g(G);platformId=g(Be);el=g(he);injector=g(Xt);cd=g(Lt);renderer=g(Ee);config=g(Mn);$parentInstance=g(ke,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=g(fo);baseStyle=g(U);scopedStyleEl;parent=this.$params.parent;cn=Ae;_themeScopedListener;dt=B();unstyled=B();pt=B();ptOptions=B();$attrSelector=at("pc");get $name(){return this.componentName||this.constructor?.name?.replace(/^_/,"")||"UnknownComponent"}get $hostName(){return this.hostName}$unstyled=we(()=>this.unstyled()!==void 0?this.unstyled():this.config?.unstyled()||!1);$pt=we(()=>x(this.pt()||this.directivePT(),this.$params));directivePT=j(void 0);get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>x(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||x(e,this.$params))}get $style(){return m(m({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){oe(e=>{this.document&&!En(this.platformId)&&(N.off("theme:change",this._themeScopedListener),this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{N.off("theme:change",this._themeScopedListener)})}),oe(e=>{this.document&&!En(this.platformId)&&(N.off("theme:change",this._loadCoreStyles),this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))),e(()=>{N.off("theme:change",this._loadCoreStyles)})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.el?.nativeElement?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return Wt(e)?e(...n):Tn(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",o={}){return Gt(e,n,o)}_hook(e,...n){if(!this.$hostName){let o=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);o?.(...n),r?.(...n)}}_load(){ze.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),ze.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener(()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);S(e)&&this.baseStyle.load(e,m({name:"global"},this.$styleOptions))}_loadCoreStyles(){!ze.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),ze.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!D.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,m({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,m({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(o?.css,m({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(m({name:"global-style"},this.$styleOptions),r),D.setLoadedStyleName("common")}if(!D.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,m({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(m({name:`${this.$style?.name}-style`},this.$styleOptions),n),D.setLoadedStyleName(this.$style?.name)}if(!D.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,m({name:"layer-order",first:!0},this.$styleOptions)),D.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},o=this.$style?.load(n,m({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){ze.clearLoadedStyleNames(),N.on("theme:change",e.bind(this))}_removeThemeListeners(){N.off("theme:change",this._loadCoreStyles),N.off("theme:change",this._load),N.off("theme:change",this._themeScopedListener)}_getPTValue(e={},n="",o={},r=!0){let s=/./g.test(n)&&!!o[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=r?s?this._useGlobalPT(this._getPTClassValue,n,o):this._useDefaultPT(this._getPTClassValue,n,o):void 0,c=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,Le(m({},o),{global:u||{}})),d=this._getPTDatasets(n);return a||!a&&c?l?this._mergeProps(l,u,c,d):m(m(m({},u),c),d):m(m({},c),d)}_getPTDatasets(e=""){let n="data-pc-",o=e==="root"&&S(this.$pt()?.["data-pc-section"]);return e!=="transition"&&Le(m({},e==="root"&&Le(m({[`${n}name`]:Te(o?this.$pt()?.["data-pc-section"]:this.$name)},o&&{[`${n}extend`]:Te(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:Te(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,o){let r=this._getOptionValue(e,n,o);return se(r)||Ln(r)?{class:r}:r}_getPT(e,n="",o){let r=(s,a=!1)=>{let l=o?o(s):s,u=Te(n),c=Te(this.$hostName||this.$name);return(a?u!==c?l?.[u]:void 0:l?.[u])??l};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e,!0)}_usePT(e,n,o,r){let s=a=>n?.call(this,a,o,r);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=e._usept||this.config?.ptOptions()||{},u=s(e.originalValue),c=s(e.value);return u===void 0&&c===void 0?void 0:se(c)?c:se(u)?u:a||!a&&c?l?this._mergeProps(l,u,c):m(m({},u),c):c}return s(e)}_useGlobalPT(e,n,o){return this._usePT(this.$globalPT,e,n,o)}_useDefaultPT(e,n,o){return this._usePT(this.$defaultPT,e,n,o)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,m(m({},this.$params),n))}ptms(e,n={}){return e.reduce((o,r)=>(o=Tn(o,this.ptm(r,n))||{},o),{})}ptmo(e={},n="",o={}){return this._getPTValue(e,n,m({instance:this},o),!1)}cx(e,n={}){return this.$unstyled()?void 0:Ae(this._getOptionValue(this.$style.classes,e,m(m({},this.$params),n)))}sx(e="",n=!0,o={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,e,m(m({},this.$params),o)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,m(m({},this.$params),o));return m(m({},s),r)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[ie([fo,U]),wt]})}return t})();var kn=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=M=>{if(M)return getComputedStyle(M).getPropertyValue("position")==="relative"?M:r(M.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),p=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*c},h,b,y="top";l.top+a+s.height>d.height?(h=l.top-p.top-s.height,y="bottom",l.top+h<0&&(h=-1*l.top)):(h=a+l.top-p.top,y="top");let E=l.left+s.width-d.width,w=l.left-p.left;if(s.width>d.width?b=(l.left-p.left)*-1:E>0?b=w-E:b=l.left-p.left,e.style.top=h+"px",e.style.left=b+"px",e.style.transformOrigin=y,o){let M=rt(/-anchor-gutter$/)?.value;e.style.marginTop=y==="bottom"?`calc(${M??"2px"} * -1)`:M??""}}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),d=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),p=this.getViewport(),h,b;c.top+l+s>p.height?(h=c.top+d-s,e.style.transformOrigin="bottom",h<0&&(h=d)):(h=l+c.top+d,e.style.transformOrigin="top"),c.left+a>p.width?b=Math.max(0,c.left+f+u-a):b=c.left+f,e.style.top=h+"px",e.style.left=b+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let c of u){let d=this.findSingle(a,c);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=e.scrollTop,f=e.clientHeight,p=this.getOuterHeight(n);c<0?e.scrollTop=d+c:c+p>f&&(e.scrollTop=d+c-f+p)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?o(r,u):Object.entries(u).map(([f,p])=>r==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=d.length?l.concat(d.filter(f=>!!f)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Ku(){Ri({variableName:Pn("scrollbar.width").name})}function Yu(){xi({variableName:Pn("scrollbar.width").name})}var ho=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=kn.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var go=(()=>{class t extends ae{autofocus=!1;focused=!1;platformId=g(Be);document=g(G);host=g(he);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){it(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=kn.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275dir=R({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[Y]})}return t})();var ne=(()=>{class t{el;renderer;pBind=B(void 0);_attrs=j(void 0);attrs=we(()=>this._attrs()||this.pBind());styles=we(()=>this.attrs()?.style);classes=we(()=>Ae(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,oe(()=>{let a=this.attrs()||{},{style:o,class:r}=a,s=zn(a,["style","class"]);for(let[l,u]of Object.entries(s))if(l.startsWith("on")&&typeof u=="function"){let c=l.slice(2).toLowerCase();if(!this.listeners.some(d=>d.eventName===c)){let d=this.renderer.listen(this.el.nativeElement,c,u);this.listeners.push({eventName:c,unlisten:d})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,u.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){st(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(T(he),T(Ee))};static \u0275dir=R({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,o){n&2&&(Jn(o.styles()),Z(o.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),mo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=W({})}return t})();var bo=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var fs=`
    ${bo}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,hs={root:({instance:t})=>{let i=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,o=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":S(i)&&String(i).length===1,"p-badge-dot":Pe(i),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},yo=(()=>{class t extends U{name="badge";style=fs;classes=hs;static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Do=new k("BADGE_INSTANCE");var $n=(()=>{class t extends ae{$pcBadge=g(Do,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(ne,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=B();badgeSize=B();size=B();severity=B();value=B();badgeDisabled=B(!1,{transform:$});_componentStyle=g(yo);static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(Z(o.cn(o.cx("root"),o.styleClass())),Qn("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[ie([yo,{provide:Do,useExisting:t},{provide:ke,useExisting:t}]),$e([ne]),Y],decls:1,vars:1,template:function(n,o){n&1&&It(0),n&2&&Ot(o.value())},dependencies:[me,Ie,mo],encapsulation:2,changeDetection:0})}return t})(),vo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=W({imports:[$n,Ie,Ie]})}return t})();var ms=["*"],bs={root:"p-fluid"},Co=(()=>{class t extends U{name="fluid";classes=bs;static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var So=new k("FLUID_INSTANCE"),Eo=(()=>{class t extends ae{$pcFluid=g(So,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(ne,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=g(Co);static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&Z(o.cx("root"))},features:[ie([Co,{provide:So,useExisting:t},{provide:ke,useExisting:t}]),$e([ne]),Y],ngContentSelectors:ms,decls:1,vars:0,template:function(n,o){n&1&&(be(),ye(0))},dependencies:[me],encapsulation:2,changeDetection:0})}return t})();var ys=["*"],Ds=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,wo=(()=>{class t extends U{name="baseicon";css=Ds;static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _o=(()=>{class t extends ae{spin=!1;_componentStyle=g(wo);getClassNames(){return Ae("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&Z(o.getClassNames())},inputs:{spin:[2,"spin","spin",$]},features:[ie([wo]),Y],ngContentSelectors:ys,decls:1,vars:0,template:function(n,o){n&1&&(be(),ye(0))},encapsulation:2,changeDetection:0})}return t})();var vs=["data-p-icon","spinner"],Ao=(()=>{class t extends _o{pathId;onInit(){this.pathId="url(#"+at()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["","data-p-icon","spinner"]],features:[Y],attrs:vs,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Et(),tn(0,"g"),on(1,"path",0),nn(),tn(2,"defs")(3,"clipPath",1),on(4,"rect",2),nn()()),n&2&&(xe("clip-path",o.pathId),V(3),qn("id",o.pathId))},encapsulation:2})}return t})();var Fo=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Cs=`
    ${Fo}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Ss={root:"p-ink"},To=(()=>{class t extends U{name="ripple";style=Cs;classes=Ss;static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Io=(()=>{class t extends ae{zone=g(Kn);_componentStyle=g(To);animationListener;mouseDownListener;timeout;constructor(){super(),oe(()=>{it(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Fe(n,"p-ink-active"),!_n(n)&&!Fn(n)){let a=Math.max(ki(this.el.nativeElement),An(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=Ui(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-Fn(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-_n(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),ot(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Fe(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&Fe(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Fe(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ji(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[ie([To]),Y]})}return t})(),sd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=W({})}return t})();var Oo=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Es=["content"],ws=["loadingicon"],_s=["icon"],As=["*"],Ro=(t,i)=>({class:t,pt:i});function Fs(t,i){t&1&&Zn(0)}function Ts(t,i){if(t&1&&Ze(0,"span",7),t&2){let e=le(3);Z(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon)),I("pBind",e.ptm("loadingIcon")),xe("aria-hidden",!0)}}function Is(t,i){if(t&1&&(Et(),Ze(0,"svg",8)),t&2){let e=le(3);Z(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),I("pBind",e.ptm("loadingIcon"))("spin",!0),xe("aria-hidden",!0)}}function Os(t,i){if(t&1&&(Ft(0),Re(1,Ts,1,4,"span",3)(2,Is,1,5,"svg",6),Tt()),t&2){let e=le(2);V(),I("ngIf",e.loadingIcon),V(),I("ngIf",!e.loadingIcon)}}function Ls(t,i){}function Ns(t,i){if(t&1&&Re(0,Ls,0,0,"ng-template",9),t&2){let e=le(2);I("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Rs(t,i){if(t&1&&(Ft(0),Re(1,Os,3,2,"ng-container",2)(2,Ns,1,1,null,5),Tt()),t&2){let e=le();V(),I("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),V(),I("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",rn(3,Ro,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function xs(t,i){if(t&1&&Ze(0,"span",7),t&2){let e=le(2);Z(e.cn("icon",e.iconClass())),I("pBind",e.ptm("icon"))}}function Ps(t,i){}function Ms(t,i){if(t&1&&Re(0,Ps,0,0,"ng-template",9),t&2){let e=le(2);I("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function ks(t,i){if(t&1&&(Ft(0),Re(1,xs,1,3,"span",3)(2,Ms,1,1,null,5),Tt()),t&2){let e=le();V(),I("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),V(),I("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",rn(3,Ro,e.cx("icon"),e.ptm("icon")))}}function Bs(t,i){if(t&1&&(Jt(0,"span",7),It(1),en()),t&2){let e=le();Z(e.cx("label")),I("pBind",e.ptm("label")),xe("aria-hidden",e.icon&&!e.label),V(),Ot(e.label)}}function $s(t,i){if(t&1&&Ze(0,"p-badge",10),t&2){let e=le();I("value",e.badge)("severity",e.badgeSeverity)("pt",e.ptm("pcBadge"))}}var Hs={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Lo=(()=>{class t extends U{name="button";style=Oo;classes=Hs;static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var No=new k("BUTTON_INSTANCE");var Us=(()=>{class t extends ae{hostName="";$pcButton=g(No,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(ne,{self:!0});_componentStyle=g(Lo);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=B(void 0,{transform:$});onClick=new _t;onFocus=new _t;onBlur=new _t;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=g(Eo,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=F(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(qe(r,Es,5),qe(r,ws,5),qe(r,_s,5),qe(r,eo,4)),n&2){let s;Xe(s=Qe())&&(o.contentTemplate=s.first),Xe(s=Qe())&&(o.loadingIconTemplate=s.first),Xe(s=Qe())&&(o.iconTemplate=s.first),Xe(s=Qe())&&(o.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",$],raised:[2,"raised","raised",$],rounded:[2,"rounded","rounded",$],text:[2,"text","text",$],plain:[2,"plain","plain",$],outlined:[2,"outlined","outlined",$],link:[2,"link","link",$],tabindex:[2,"tabindex","tabindex",ln],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",$],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",$],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[ie([Lo,{provide:No,useExisting:t},{provide:ke,useExisting:t}]),$e([ne]),Y],ngContentSelectors:As,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt"]],template:function(n,o){n&1&&(be(),Jt(0,"button",0),Xn("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),ye(1),Re(2,Fs,1,0,"ng-container",1)(3,Rs,3,6,"ng-container",2)(4,ks,3,6,"ng-container",2)(5,Bs,2,5,"span",3)(6,$s,1,3,"p-badge",4),en()),n&2&&(Z(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),I("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),xe("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),V(2),I("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),V(),I("ngIf",o.loading),V(),I("ngIf",!o.loading),V(),I("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),V(),I("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[me,yn,vn,Dn,Io,go,Ao,vo,$n,Ie,ne],encapsulation:2,changeDetection:0})}return t})(),Pd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=W({imports:[me,Us,Ie,Ie]})}return t})();export{Nt as a,Qo as b,un as c,Rt as d,ui as e,Sr as f,Ti as g,yn as h,Dn as i,vn as j,wr as k,_r as l,me as m,Tr as n,Cn as o,Or as p,it as q,ul as r,Ni as s,ot as t,Fe as u,Mi as v,Pr as w,Mr as x,kr as y,ml as z,bl as A,ki as B,yl as C,He as D,$r as E,Dl as F,Hr as G,vl as H,Ur as I,Cl as J,Sl as K,El as L,Hi as M,wl as N,_n as O,_l as P,Al as Q,Ui as R,An as S,Fl as T,Fn as U,Tl as V,Il as W,Ol as X,Ll as Y,Vi as Z,Pe as _,Xr as $,S as aa,zt as ba,st as ca,Pl as da,Ml as ea,kl as fa,Bl as ga,at as ha,Qr as ia,zl as ja,P as ka,Wl as la,Gl as ma,Kl as na,Yl as oa,Zl as pa,ql as qa,eo as ra,Ie as sa,Xl as ta,as as ua,au as va,lu as wa,U as xa,Mn as ya,Lu as za,ke as Aa,ae as Ba,kn as Ca,Ku as Da,Yu as Ea,ho as Fa,go as Ga,ne as Ha,mo as Ia,$n as Ja,vo as Ka,Eo as La,_o as Ma,Ao as Na,Io as Oa,sd as Pa,Us as Qa,Pd as Ra};
