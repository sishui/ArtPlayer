/*!
 * artplayer-plugin-multiple-subtitles.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2023 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,n,i,r){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof a[i]&&a[i],o=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,n){if(!o[t]){if(!e[t]){var r="function"==typeof a[i]&&a[i];if(!n&&r)return r(t,!0);if(s)return s(t,!0);if(l&&"string"==typeof t)return l(t);var f=new Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}d.resolve=function(n){var i=e[t][1][n];return null!=i?i:n},d.cache={};var c=o[t]=new u.Module(t);e[t][0].call(c.exports,d,c,c.exports,this)}return o[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=o,u.parent=s,u.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return a[i]}}),a[i]=u;for(var f=0;f<t.length;f++)u(t[f]);if(n){var c=u(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}}({"4Kbf6":[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);var i=e("./parser");function r({subtitles:e=[]}){return async t=>{const{unescape:n,getExt:r,srtToVtt:a,assToVtt:s}=t.constructor.utils,o=new(0,i.WebVTTParser),l=new(0,i.WebVTTSerializer),u=await Promise.all(e.map((e=>async function(e,{getExt:t,srtToVtt:n,assToVtt:i}){const r=await fetch(e.url),a=await r.arrayBuffer(),s=new TextDecoder(e.encoding||"utf-8").decode(a);switch(e.type||t(e.url)){case"srt":return n(s);case"ass":return i(s);case"vtt":return s;default:return""}}(e,{getExt:r,srtToVtt:a,assToVtt:s})))),f=u.map(((t,n)=>{const i=o.parse(t,"metadata");return i.url=e[n].url,i.name=e[n].name,i}));let c="";function d(e=[]){const r=function(e){const t=(new(0,i.WebVTTParser)).parse("","metadata");for(let n=0;n<e.length;n++){const i=e[n];if(!i.updated){i.updated=!0;for(let e=0;e<i.cues.length;e++){const t=i.cues[e];for(let e=0;e<t.tree.children.length;e++){const n=t.tree.children[e];n.value=`<div class="art-subtitle-${i.name}">${n.value}</div>`}}}if(0===t.cues.length)t.cues=[...i.cues];else for(let e=0;e<t.cues.length;e++){const n=t.cues[e].tree.children,r=i.cues[e]?.tree?.children;t.cues[e]={...t.cues[e],tree:{children:[...n,...r]}}}}return t}(e),a=l.serialize(r.cues);URL.revokeObjectURL(c);const s=URL.createObjectURL(new Blob([a],{type:"text/vtt"}));c=s,t.option.subtitle.escape=!1,t.subtitle.init({...t.option.subtitle,url:s,type:"vtt",onVttLoad:n})}return d(f),{name:"multipleSubtitles",tracks:(e=[])=>d(e.map((e=>f.find((t=>t.name===e))))),reset:()=>d(f)}}}n.default=r,"undefined"!=typeof window&&(window.artplayerPluginMultipleSubtitles=r)},{"./parser":"cU78l","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],cU78l:[function(e,t,n){!function(){var e={direction:"horizontal",snapToLines:!0,linePosition:"auto",lineAlign:"start",textPosition:"auto",positionAlign:"auto",size:100,alignment:"center"},t=function(t){t||(t={"&amp":"&","&lt":"<","&gt":">","&lrm":"‎","&rlm":"‏","&nbsp":" "}),this.entities=t,this.parse=function(n,a){n=n.replace(/\0/g,"�");var s=Date.now(),o=0,l=n.split(/\r\n|\r|\n/),u=!1,f=[],c=[],d=[];function p(e,t){d.push({message:e,line:o+1,col:t})}var m=l[o],g=m.length,h="WEBVTT",v=0,b=6;for("\ufeff"===m[0]&&(v=1,b+=1),(g<b||m.indexOf(h)!==0+v||g>b&&" "!==m[b]&&"\t"!==m[b])&&p('No valid signature. (File needs to start with "WEBVTT".)'),o++;""!=l[o]&&null!=l[o];){if(p("No blank line after the signature."),-1!=l[o].indexOf("--\x3e")){u=!0;break}o++}for(;null!=l[o];){for(var T;!u&&""==l[o];)o++;if(!u&&null==l[o])break;T=Object.assign({},e,{id:"",startTime:0,endTime:0,pauseOnExit:!1,direction:"horizontal",snapToLines:!0,linePosition:"auto",lineAlign:"start",textPosition:"auto",positionAlign:"auto",size:100,alignment:"center",text:"",tree:null});var x=!0;if(-1==l[o].indexOf("--\x3e")){if(T.id=l[o],/^NOTE($|[ \t])/.test(T.id)){for(o++;""!=l[o]&&null!=l[o];)-1!=l[o].indexOf("--\x3e")&&p("Cannot have timestamp in a comment."),o++;continue}if(/^STYLE($|[ \t])/.test(T.id)){var y=[],w=!1;for(o++;""!=l[o]&&null!=l[o];)-1!=l[o].indexOf("--\x3e")&&(p("Cannot have timestamp in a style block."),w=!0),y.push(l[o]),o++;if(c.length){p("Style blocks cannot appear after the first cue.");continue}w||f.push(y.join("\n"));continue}if(""==l[++o]||null==l[o]){p("Cue identifier cannot be standalone.");continue}if(-1==l[o].indexOf("--\x3e")){x=!1,p("Cue identifier needs to be followed by timestamp.");continue}}u=!1;var O=new i(l[o],p),P=0;if(c.length>0&&(P=c[c.length-1].startTime),!x||O.parse(T,P)){for(o++;""!=l[o]&&null!=l[o];){if(-1!=l[o].indexOf("--\x3e")){p("Blank line missing before cue."),u=!0;break}""!=T.text&&(T.text+="\n"),T.text+=l[o],o++}var j=new r(T.text,p,a,t);T.tree=j.parse(T.startTime,T.endTime),c.push(T)}else for(T=null,o++;""!=l[o]&&null!=l[o];){if(-1!=l[o].indexOf("--\x3e")){u=!0;break}o++}}return c.sort((function(e,t){return e.startTime<t.startTime?-1:e.startTime>t.startTime?1:e.endTime>t.endTime?-1:e.endTime<t.endTime?1:0})),{cues:c,errors:d,time:Date.now()-s,styles:f}}},i=function(e,t){var n=/[\u0020\t\f]/,i=/[^\u0020\t\f]/,r=(e=e,0),a=function(e){t(e,r+1)};function s(t){for(;null!=e[r]&&t.test(e[r]);)r++}function o(t){for(var n="";null!=e[r]&&t.test(e[r]);)n+=e[r],r++;return n}function l(){var t,n,i,s,l="minutes";if(null!=e[r])if(/\d/.test(e[r]))if(((t=o(/\d/)).length>2||parseInt(t,10)>59)&&(l="hours"),":"==e[r])if(r++,2==(n=o(/\d/)).length){if("hours"==l||":"==e[r]){if(":"!=e[r])return void a("No seconds found or minutes is greater than 59.");if(r++,2!=(i=o(/\d/)).length)return void a("Must be exactly two digits.")}else{if(2!=t.length)return void a("Must be exactly two digits.");i=n,n=t,t="0"}if("."==e[r])if(r++,3==(s=o(/\d/)).length)if(parseInt(n,10)>59)a("You cannot have more than 59 minutes.");else{if(!(parseInt(i,10)>59))return 3600*parseInt(t,10)+60*parseInt(n,10)+parseInt(i,10)+parseInt(s,10)/1e3;a("You cannot have more than 59 seconds.")}else a("Milliseconds must be given in three digits.");else a('No decimal separator (".") found.')}else a("Must be exactly two digits.");else a("No time unit separator found.");else a("Timestamp must start with a character in the range 0-9.");else a("No timestamp found.")}this.parse=function(t,o){if(s(n),t.startTime=l(),null!=t.startTime)if(t.startTime<o&&a("Start timestamp is not greater than or equal to start timestamp of previous cue."),i.test(e[r])&&a("Timestamp not separated from '--\x3e' by whitespace."),s(n),"-"==e[r])if(r++,"-"==e[r])if(r++,">"==e[r]){if(r++,i.test(e[r])&&a("'--\x3e' not separated from timestamp by whitespace."),s(n),t.endTime=l(),null!=t.endTime)return t.endTime<=t.startTime&&a("End timestamp is not greater than start timestamp."),i.test(e[r])&&!1,s(n),function(e,t){for(var i=e.split(n),r=[],s=0;s<i.length;s++)if(""!=i[s]){var o=i[s].indexOf(":"),l=i[s].slice(0,o),u=i[s].slice(o+1);if(-1!=r.indexOf(l)&&a("Duplicate setting."),r.push(l),""==u)return void a("No value for setting defined.");if("vertical"==l){if("rl"!=u&&"lr"!=u){a("Writing direction can only be set to 'rl' or 'rl'.");continue}t.direction=u}else if("line"==l){if(/,/.test(u)){var f=u.split(",");u=f[0];var c=f[1]}if(!/^[-\d](\d*)(\.\d+)?%?$/.test(u)){a("Line position takes a number or percentage.");continue}if(-1!=u.indexOf("-",1)){a("Line position can only have '-' at the start.");continue}if(-1!=u.indexOf("%")&&u.indexOf("%")!=u.length-1){a("Line position can only have '%' at the end.");continue}if("-"==u[0]&&"%"==u[u.length-1]){a("Line position cannot be a negative percentage.");continue}var d=u,p=!1;if("%"==u[u.length-1]&&(p=!0,d=u.slice(0,u.length-1),parseInt(u,10)>100)){a("Line position cannot be >100%.");continue}if(""===d||isNaN(d)||!isFinite(d)){a("Line position needs to be a number");continue}if(void 0!==c){if(!["start","center","end"].includes(c)){a("Line alignment needs to be one of start, center or end");continue}t.lineAlign=c}t.snapToLines=!p,t.linePosition=parseFloat(d),parseFloat(d).toString()!==d&&(t.nonSerializable=!0)}else if("position"==l){if(/,/.test(u)){f=u.split(","),u=f[0];var m=f[1]}if("%"!=u[u.length-1]){a("Text position must be a percentage.");continue}if(parseInt(u,10)>100||parseInt(u,10)<0){a("Text position needs to be between 0 and 100%.");continue}if(""===(d=u.slice(0,u.length-1))||isNaN(d)||!isFinite(d)){a("Line position needs to be a number");continue}if(void 0!==m){if(!["line-left","center","line-right"].includes(m)){a("Position alignment needs to be one of line-left, center or line-right");continue}t.positionAlign=m}t.textPosition=parseFloat(d)}else if("size"==l){if("%"!=u[u.length-1]){a("Size must be a percentage.");continue}if(parseInt(u,10)>100){a("Size cannot be >100%.");continue}var g=u.slice(0,u.length-1);if(void 0===g||""===g||isNaN(g)){a("Size needs to be a number"),g=100;continue}if((g=parseFloat(g))<0||g>100){a("Size needs to be between 0 and 100%.");continue}t.size=g}else if("align"==l){var h=["start","center","end","left","right"];if(-1==h.indexOf(u)){a("Alignment can only be set to one of "+h.join(", ")+".");continue}t.alignment=u}else a("Invalid setting.")}}(e.substring(r),t),!0}else a("No valid timestamp separator found.");else a("No valid timestamp separator found.");else a("No valid timestamp separator found.")},this.parseTimestamp=function(){var t=l();if(null==e[r])return t;a("Timestamp must not have trailing characters.")}},r=function(e,t,n,r){this.entities=r;var a=this,s=(e=e,0),o=function(e){"metadata"!=n&&t(e,s+1)};function l(){for(var t="data",n="",i="",l=[];null!=e[s-1]||0==s;){var u=e[s];if("data"==t)if("&"==u)i=u,t="escape";else if("<"==u&&""==n)t="tag";else{if("<"==u||null==u)return["text",n];n+=u}else if("escape"==t){if("<"==u||null==u){let e;return o("Incorrect escape."),(e=i.match(/^&#([0-9]+)$/))?n+=String.fromCharCode(e[1]):a.entities[i]?n+=a.entities[i]:n+=i,["text",n]}if("&"==u)o("Incorrect escape."),n+=i,i=u;else if(/[a-z#0-9]/i.test(u))i+=u;else if(";"==u){let e;(e=i.match(/^&#(x?[0-9]+)$/))?n+=String.fromCharCode("0"+e[1]):a.entities[i+u]?n+=a.entities[i+u]:(e=Object.keys(r).find((e=>i.startsWith(e))))?n+=a.entities[e]+i.slice(e.length)+u:(o("Incorrect escape."),n+=i+";"),t="data"}else o("Incorrect escape."),n+=i+u,t="data"}else if("tag"==t)if("\t"==u||"\n"==u||"\f"==u||" "==u)t="start tag annotation";else if("."==u)t="start tag class";else if("/"==u)t="end tag";else if(/\d/.test(u))n=u,t="timestamp tag";else{if(">"==u||null==u)return">"==u&&s++,["start tag","",[],""];n=u,t="start tag"}else if("start tag"==t)if("\t"==u||"\f"==u||" "==u)t="start tag annotation";else if("\n"==u)i=u,t="start tag annotation";else if("."==u)t="start tag class";else{if(">"==u||null==u)return">"==u&&s++,["start tag",n,[],""];n+=u}else if("start tag class"==t)if("\t"==u||"\f"==u||" "==u)i&&l.push(i),i="",t="start tag annotation";else if("\n"==u)i&&l.push(i),i=u,t="start tag annotation";else if("."==u)i&&l.push(i),i="";else{if(">"==u||null==u)return">"==u&&s++,i&&l.push(i),["start tag",n,l,""];i+=u}else if("start tag annotation"==t){if(">"==u||null==u)return">"==u&&s++,["start tag",n,l,i=i.split(/[\u0020\t\f\r\n]+/).filter((function(e){if(e)return!0})).join(" ")];i+=u}else if("end tag"==t){if(">"==u||null==u)return">"==u&&s++,["end tag",n];n+=u}else if("timestamp tag"==t){if(">"==u||null==u)return">"==u&&s++,["timestamp",n];n+=u}else o("Never happens.");s++}}this.parse=function(t,r){var a={children:[]},u=a,f=[];function c(e){u.children.push({type:"object",name:e[1],classes:e[2],children:[],parent:u}),u=u.children[u.children.length-1]}function d(e){for(var t=u;t;){if(t.name==e)return!0;t=t.parent}}for(;null!=e[s];){var p=l();if("text"==p[0])u.children.push({type:"text",value:p[1],parent:u});else if("start tag"==p[0]){"chapters"==n&&o("Start tags not allowed in chapter title text.");var m=p[1];"v"!=m&&"lang"!=m&&""!=p[3]&&o("Only <v> and <lang> can have an annotation."),"c"==m||"i"==m||"b"==m||"u"==m||"ruby"==m||"rt"==m&&"ruby"==u.name?c(p):"v"==m?(d("v")&&o("<v> cannot be nested inside itself."),c(p),u.value=p[3],p[3]||o("<v> requires an annotation.")):"lang"==m?(c(p),u.value=p[3]):o("Incorrect start tag.")}else if("end tag"==p[0])"chapters"==n&&o("End tags not allowed in chapter title text."),p[1]==u.name?u=u.parent:"ruby"==p[1]&&"rt"==u.name?u=u.parent.parent:o("Incorrect end tag.");else if("timestamp"==p[0]){"chapters"==n&&o("Timestamp not allowed in chapter title text.");var g=new i(p[1],o).parseTimestamp();null!=g&&((g<=t||g>=r)&&o("Timestamp must be between start timestamp and end timestamp."),f.length>0&&f[f.length-1]>=g&&o("Timestamp must be greater than any previous timestamp."),u.children.push({type:"timestamp",value:g,parent:u}),f.push(g))}}for(;u.parent;)"v"!=u.name&&o("Required end tag missing."),u=u.parent;return function e(t){const n={...t};return t.children&&(n.children=t.children.map(e)),n.parent&&delete n.parent,n}(a)}},a=function(){function t(e){const t=("00"+1e3*(e-Math.floor(e)).toFixed(3)).slice(-3);let n=0,i=0,r=0;return e>=3600&&(n=Math.floor(e/3600)),i=Math.floor((e-3600*n)/60),r=Math.floor(e-3600*n-60*i),(n?n+":":"")+(""+i).padStart(2,"0")+":"+(""+r).padStart(2,"0")+"."+t}function n(e){for(var i="",r=0;r<e.length;r++){var a=e[r];if("text"==a.type)i+=a.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");else if("object"==a.type){if(i+="<"+a.name,a.classes)for(var s=0;s<a.classes.length;s++)i+="."+a.classes[s];a.value&&(i+=" "+a.value),i+=">",a.children&&(i+=n(a.children)),i+="</"+a.name+">"}else"timestamp"==a.type?i+="<"+t(a.value)+">":i+="<"+a.value+">"}return i}function i(i){return(void 0!==i.id?i.id+"\n":"")+t(i.startTime)+" --\x3e "+t(i.endTime)+function(t){var n="";const i=Object.keys(e).filter((n=>t[n]!==e[n]));return i.includes("direction")&&(n+=" vertical:"+t.direction),i.includes("alignment")&&(n+=" align:"+t.alignment),i.includes("size")&&(n+=" size:"+t.size+"%"),(i.includes("lineAlign")||i.includes("linePosition"))&&(n+=" line:"+t.linePosition+(t.snapToLines?"":"%")+(t.lineAlign&&t.lineAlign!=e.lineAlign?","+t.lineAlign:"")),(i.includes("textPosition")||i.includes("positionAlign"))&&(n+=" position:"+t.textPosition+"%"+(t.positionAlign&&t.positionAlign!==e.positionAlign?","+t.positionAlign:"")),n}(i)+"\n"+n(i.tree.children)+"\n\n"}this.serialize=function(e,t){var n="WEBVTT\n\n";if(t)for(var r=0;r<t.length;r++)n+="STYLE\n"+t[r]+"\n\n";for(r=0;r<e.length;r++)n+=i(e[r]);return n}};function s(e){e.WebVTTParser=t,e.WebVTTCueTimingsAndSettingsParser=i,e.WebVTTCueTextParser=r,e.WebVTTSerializer=a}"undefined"!=typeof window&&s(window),s(n)}()},{}],"9pCYc":[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["4Kbf6"],"4Kbf6","parcelRequire4dc0");