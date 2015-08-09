(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof root["window"]["App"] === 'undefined' || root["window"]["App"] !== Object(root["window"]["App"])) {
        throw new Error('templatizer: window["window"]["App"] does not exist or is not an object');
    } else {
        root["window"]["App"].templatizer = factory();
    }
}(this, function () {
    var jade=function(){function e(e){return null!=e&&""!==e}function n(t){return(Array.isArray(t)?t.map(n):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(e).join(" ")}var t={};return t.merge=function r(n,t){if(1===arguments.length){for(var a=n[0],i=1;i<n.length;i++)a=r(a,n[i]);return a}var o=n["class"],s=t["class"];(o||s)&&(o=o||[],s=s||[],Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]),n["class"]=o.concat(s).filter(e));for(var l in t)"class"!=l&&(n[l]=t[l]);return n},t.joinClasses=n,t.cls=function(e,r){for(var a=[],i=0;i<e.length;i++)a.push(r&&r[i]?t.escape(n([e[i]])):n(e[i]));var o=n(a);return o.length?' class="'+o+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,a){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(a?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,r){var a=[],i=Object.keys(e);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],l=e[s];"class"==s?(l=n(l))&&a.push(" "+s+'="'+l+'"'):a.push(t.attr(s,l,!1,r))}return a.join("")},t.escape=function(e){var n=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+e?e:n},t.rethrow=function a(e,n,t,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||r))throw e.message+=" on line "+t,e;try{r=r||require("fs").readFileSync(n,"utf8")}catch(i){a(e,null,t)}var o=3,s=r.split("\n"),l=Math.max(t-o,0),f=Math.min(s.length,t+o),o=s.slice(l,f).map(function(e,n){var r=n+l+1;return(r==t?"  > ":"    ")+r+"| "+e}).join("\n");throw e.path=n,e.message=(n||"Jade")+":"+t+"\n"+o+"\n\n"+e.message,e},t}(); 

    var templatizer = {};


    // _accomodations.jade compiled template
    templatizer["_accomodations"] = function tmpl__accomodations() {
        return "<h2>Accomodations Page</h2>";
    };

    // _home.jade compiled template
    templatizer["_home"] = function tmpl__home() {
        return "<h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2><h2>Home Page</h2>";
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
        return "<h2>Story Page</h2>";
    };

    // _nav.jade compiled template
    templatizer["_nav"] = function tmpl__nav() {
        return '<!-- Uses a transparent header that draws on top of the layout\'s background--><style>.layout-transparent {\nbackground: url(\'../assets/demos/transparent.jpg\') center / cover;\n}\n.layout-transparent .mdl-layout__header,\n.layout-transparent .mdl-layout__drawer-button {\n/* This background is dark, so we set text to white. Use 87% black instead if\nyour background is light. */\ncolor: white;\n}</style><div class="layout-transparent mdl-layout mdl-js-layout"><header class="mdl-layout__header mdl-layout__header--transparent"><div class="mdl-layout__header-row"><!-- Title--><span class="mdl-layout-title">Title</span><!-- Add spacer, to align navigation to the right--><div class="mdl-layout-spacer"></div><!-- Navigation--><nav class="mdl-navigation"><a href="" class="mdl-navigation__link">Link</a><a href="" class="mdl-navigation__link">Link</a><a href="" class="mdl-navigation__link">Link</a><a href="" class="mdl-navigation__link">Link</a></nav></div></header><div class="mdl-layout__drawer"><span class="mdl-layout-title">Title</span><nav class="mdl-navigation"><a href="" class="mdl-navigation__link">Link</a><a href="" class="mdl-navigation__link">Link</a><a href="" class="mdl-navigation__link">Link</a><a href="" class="mdl-navigation__link">Link</a></nav></div><main class="mdl-layout__content"></main></div>';
    };

    // index.jade compiled template
    templatizer["index"] = function tmpl_index() {
        return '<!DOCTYPE html(lang=\'en\')><head><title>Donelle &amp; Ashton Wedding</title><meta name="viewport" content="width=device-width, initial-scale=1"/><meta http-equiv="Content-Type" content="text/html;charset=utf-8"/><link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css"/><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/><link rel="stylesheet" type="text/css" href="css/styl.css"/></head><body><header class="header container"><!-- Uses a transparent header that draws on top of the layout\'s background--><style>.layout-transparent {\nbackground: url(\'../assets/demos/transparent.jpg\') center / cover;\n}\n.layout-transparent .mdl-layout__header,\n.layout-transparent .mdl-layout__drawer-button {\n/* This background is dark, so we set text to white. Use 87% black instead if\nyour background is light. */\ncolor: white;\n}</style><div class="layout-transparent mdl-layout mdl-js-layout"><header class="mdl-layout__header mdl-layout__header--transparent"><div class="mdl-layout__header-row"><!-- Title--><span class="mdl-layout-title">Title</span><!-- Add spacer, to align navigation to the right--><div class="mdl-layout-spacer"></div><!-- Navigation--><nav class="mdl-navigation"><a href="" class="mdl-navigation__link">Link</a><a href="" class="mdl-navigation__link">Link</a><a href="" class="mdl-navigation__link">Link</a><a href="" class="mdl-navigation__link">Link</a></nav></div></header><div class="mdl-layout__drawer"><span class="mdl-layout-title">Title</span><nav class="mdl-navigation"><a href="" class="mdl-navigation__link">Link</a><a href="" class="mdl-navigation__link">Link</a><a href="" class="mdl-navigation__link">Link</a><a href="" class="mdl-navigation__link">Link</a></nav></div><main class="mdl-layout__content"></main></div></header><section data-content-block="data-content-block" class="container main-content"></section><script src="jquery/dist/jquery.min.js" type="text/javascript"></script><script src="/node_modules/material-design-lite/material.min.js"></script><script src="js/app.js" type="text/javascript"></script><script src="js/templatizer.js" type="text/javascript"></script></body>';
    };

    return templatizer;
}));