(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        if (typeof root["window"]["App"] === 'undefined' || root["window"]["App"] !== Object(root["window"]["App"])) {
            throw new Error('templatizer: window["window"]["App"] does not exist or is not an object');
        }
        root["window"]["App"].templatizer = factory();
    }
}(this, function () {
    var jade=function(){function n(n){return null!=n&&""!==n}function t(e){return(Array.isArray(e)?e.map(t):e&&"object"==typeof e?Object.keys(e).filter(function(n){return e[n]}):[e]).filter(n).join(" ")}function e(n){return i[n]||n}function r(n){var t=String(n).replace(o,e);return t===""+n?n:t}var a={};a.merge=function s(t,e){if(1===arguments.length){for(var r=t[0],a=1;a<t.length;a++)r=s(r,t[a]);return r}var i=t["class"],o=e["class"];(i||o)&&(i=i||[],o=o||[],Array.isArray(i)||(i=[i]),Array.isArray(o)||(o=[o]),t["class"]=i.concat(o).filter(n));for(var f in e)"class"!=f&&(t[f]=e[f]);return t},a.joinClasses=t,a.cls=function(n,e){for(var r=[],i=0;i<n.length;i++)e&&e[i]?r.push(a.escape(t([n[i]]))):r.push(t(n[i]));var o=t(r);return o.length?' class="'+o+'"':""},a.style=function(n){return n&&"object"==typeof n?Object.keys(n).map(function(t){return t+":"+n[t]}).join(";"):n},a.attr=function(n,t,e,r){return"style"===n&&(t=a.style(t)),"boolean"==typeof t||null==t?t?" "+(r?n:n+'="'+n+'"'):"":0==n.indexOf("data")&&"string"!=typeof t?(-1!==JSON.stringify(t).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),t&&"function"==typeof t.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+n+"='"+JSON.stringify(t).replace(/'/g,"&apos;")+"'"):e?(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+n+'="'+a.escape(t)+'"'):(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+n+'="'+t+'"')},a.attrs=function(n,e){var r=[],i=Object.keys(n);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],f=n[s];"class"==s?(f=t(f))&&r.push(" "+s+'="'+f+'"'):r.push(a.attr(s,f,!1,e))}return r.join("")};var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},o=/[&<>"]/g;return a.escape=r,a.rethrow=function f(n,t,e,r){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&t||r))throw n.message+=" on line "+e,n;try{r=r||require("fs").readFileSync(t,"utf8")}catch(a){f(n,null,e)}var i=3,o=r.split("\n"),s=Math.max(e-i,0),l=Math.min(o.length,e+i),i=o.slice(s,l).map(function(n,t){var r=t+s+1;return(r==e?"  > ":"    ")+r+"| "+n}).join("\n");throw n.path=t,n.message=(t||"Jade")+":"+e+"\n"+i+"\n\n"+n.message,n},a.DebugItem=function(n,t){this.lineno=n,this.filename=t},a}(); 

    var templatizer = {};


    // _accomodations.jade compiled template
    templatizer["_accomodations"] = function tmpl__accomodations() {
        return "<h2>Accomodations Page</h2>";
    };

    // _home.jade compiled template
    templatizer["_home"] = function tmpl__home() {
        return '<section class="home"><h2 class="home-title">Donelle &amp; Ashton</h2><h3 class="home-date">October 7th, 2016 - Montego Bay, Jamaica</h3></section>';
    };

    // _party.jade compiled template
    templatizer["_party"] = function tmpl__party() {
        return "<h2>Party Page</h2>";
    };

    // _photos.jade compiled template
    templatizer["_photos"] = function tmpl__photos() {
        return "<h2>Photos Page</h2>";
    };

    // _registry.jade compiled template
    templatizer["_registry"] = function tmpl__registry() {
        return "<h2>Registry Page</h2>";
    };

    // _story.jade compiled template
    templatizer["_story"] = function tmpl__story() {
        return '<div class="sub-page-content"><div class="inner"><div class="row"><div class="md-span-6"><img src="../images/IMG_9437_square.jpg" class="round-top-left"/></div></div></div></div>';
    };

    // _header.jade compiled template
    templatizer["_header"] = function tmpl__header() {
        return '<div class="container row logo-wrap"><button class="nav-button"><span class="nav-button-row"></span><span class="nav-button-row"></span><span class="nav-button-row"></span></button><h1 class="header-logo"><a href="./" class="header-logo-link"><span class="d">D</span><span class="a">A</span></a></h1></div><nav class="container row main-nav"><li><a href="#home">Home</a></li><li><a href="#story">Our Story</a></li><li><a href="#party">Wedding Party</a></li><li><a href="#photos">Photos</a></li><li><a href="#accomodations">Accomodations</a></li><li><a href="#registry">Registry</a></li><li><a href="#rsvp">RSVP</a></li></nav>';
    };

    // index.jade compiled template
    templatizer["index"] = function tmpl_index() {
        return '<!DOCTYPE html(lang=\'en\')><head><title>Donelle &amp; Ashton Wedding</title><meta name="viewport" content="width=device-width, initial-scale=1"/><meta http-equiv="Content-Type" content="text/html;charset=utf-8"/><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/><link href="http://fonts.googleapis.com/css?family=Rouge+Script|Lato:400,300italic,300,100italic,100,400italic,700,700italic,900,900italic" rel="stylesheet" type="text/css"/><link rel="stylesheet" type="text/css" href="css/styl.css"/></head><body><header class="header"><div class="container row logo-wrap"><button class="nav-button"><span class="nav-button-row"></span><span class="nav-button-row"></span><span class="nav-button-row"></span></button><h1 class="header-logo"><a href="./" class="header-logo-link"><span class="d">D</span><span class="a">A</span></a></h1></div><nav class="container row main-nav"><li><a href="#home">Home</a></li><li><a href="#story">Our Story</a></li><li><a href="#party">Wedding Party</a></li><li><a href="#photos">Photos</a></li><li><a href="#accomodations">Accomodations</a></li><li><a href="#registry">Registry</a></li><li><a href="#rsvp">RSVP</a></li></nav></header><main class="mdl-layout__content"><div class="page-content"><section data-content-block="data-content-block" class="container main-content"></section></div></main><script src="jquery/dist/jquery.min.js" type="text/javascript"></script><script src="js/vendor.js" type="text/javascript"></script><script src="js/app.js" type="text/javascript"></script><script src="templatizer.js" type="text/javascript"></script></body>';
    };

    return templatizer;
}));
