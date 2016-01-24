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
        return '<h1 class="page-header">~ Accomodations ~</h1><div class="sub-page-content"><div class="inner"><div class="acc-header-image"><img src="images/accomodations/sesmb.00RL01gk-is-241.jpg" class="round-top"/></div><a href="https://www.signup4.net/public/ap.aspx?EID=SMIT39E&amp;OID=50" target="_blank" class="cta external-link">Book Now!</a><p class="text">We are thrilled you’re joining us in Jamaica for what promises to be a great time! We have a room block set up through Apple Vacations for your stay at Secrets St. James, an all-inclusive resort. Apple Vacations is also offering a reduced room rate if you book your flight through their Reservations Department (more info about that when you click on the link below).</p><p class="text">One thing worth mentioning - we’ve planned the wedding over Columbus Day weekend so our guests can take advantage of having Monday off before diving back into the work week.</p></div></div>';
    };

    // _home.jade compiled template
    templatizer["_home"] = function tmpl__home() {
        return '<section class="home"><h2 class="home-title">Donelle &amp; Ashton</h2><h3 class="home-date">October 7th, 2016 - Montego Bay, Jamaica</h3><div class="countdown-wrap"><div class="countdown"></div><div class="countdown-text">Days to Go</div></div></section>';
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
        return '<h1 class="page-header">~ Registry ~</h1><div class="sub-page-content"><div class="inner registry-content"><a href="http://www.amazon.com/registry/wedding/1CHK1R0OCT87R" target="_blank" class="registry-link external-link"><img src="images/registry/amazon.png" alt="Amazon Registry"/></a><a href="https://www.myregistry.com/wedding-registry/Donelle-Smith-Ashton-Harris-Philadelphia-PA/964813" target="_blank" class="registry-link external-link"><img src="images/registry/my-reg-logo.png" alt="My Registry"/></a></div></div>';
    };

    // _rsvp.jade compiled template
    templatizer["_rsvp"] = function tmpl__rsvp() {
        return '<h1 class="page-header">~ RSVP ~</h1><div class="sub-page-content"><div class="inner"><div class="typeform-widget" data-url="https://harriswedding.typeform.com/to/DuW2cS" data-text="Vacation Request Form"></div>\n<script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id=\'typef_orm\',b=\'https://s3-eu-west-1.amazonaws.com/share.typeform.com/\';if(!gi.call(d,id)){js=ce.call(d,\'script\');js.id=id;js.src=b+\'widget.js\';q=gt.call(d,\'script\')[0];q.parentNode.insertBefore(js,q)}})()</script></div></div>';
    };

    // _story.jade compiled template
    templatizer["_story"] = function tmpl__story() {
        return '<h1 class="page-header">~ Our Story ~</h1><div class="sub-page-content"><div class="inner"><div class="row"><div class="md-span-6"><img src="../images/story/IMG_9417.jpg" class="round-top-left"/></div><div class="md-span-6"><p class="story-text"><span class="first-character">D</span>onelle & Ashton met during their sophomore year at LaSalle. They both lived in St. Basil Court and met on Donelle’s 19th birthday through mutual friends. They began dating the summer of their junior year and have been by each others sides ever since!</p></div></div><div class="row"><div class="span-12 md-span-6 right"><img src="../images/story/IMG_9437.jpg"/></div><div class="span-12 md-span-6"><p class="story-text">After graduation, Donelle went back to New York and Ashton moved to South Philly. It was during that summer and traveling back and forth to Philadelphia that Ashton asked Donelle to look for jobs in Philadelphia and to move in with him. That October, Donelle landed her first job and moved back to Philadelphia to be with Ashton. They lived in South Philly for about a month before moving to Manayunk with their good friend, Dana Gehr. Shortly after moving in there was a new addition to the Smith/Harris household, their bluenose pitbull puppy, Jayda!</p></div></div><div class="row"><div class="span-12 md-span-6"><img src="../images/story/IMG_9160.jpg"/></div><div class="span-12 md-span-6"><p class="story-text">Ashton proposed to Donelle on July, 7, 2013 on what turned out to be a whirl-wind brunch. They started the morning by trying a new restaurant off of one of their favorite hiking trails. During their walk back to the car they came across a small bridge and stopped to look at the water running underneath it. They continued to walk towards the car and Ashton spun her around, got down on one knee and proposed. After the proposal, they went to brunch where they called their family and friends to share the exciting news!</p></div></div><div class="row"><div class="span-12 md-span-6 right"><img src="../images/story/IMG_9027.jpg" class="round-bottom-right"/></div><div class="span-12 md-span-6"><p class="story-text">To our families and friends, thank you for your constant love and support over the last seven years and for all the years ahead.</p><p class="story-text">We look forward to celebrating with all of you in Jamaica!</p></div></div></div></div>';
    };

    // _header.jade compiled template
    templatizer["_header"] = function tmpl__header() {
        return '<div class="container row logo-wrap"><button class="nav-button"><span class="nav-button-row"></span><span class="nav-button-row"></span><span class="nav-button-row"></span></button><h1 class="header-logo"><a href="#home" class="header-logo-link"><span class="d">D</span><span class="a">A</span></a></h1></div><nav class="container row main-nav"><li><a href="#home">Home</a></li><li><a href="#story">Our Story</a></li><li><a href="#accomodations">Accomodations</a></li><li><a href="#registry">Registry</a></li><li><a href="https://harriswedding.typeform.com/to/DuW2cS" target="_blank" class="rsvp-link external-link">RSVP</a></li></nav>';
    };

    // index.jade compiled template
    templatizer["index"] = function tmpl_index() {
        return '<!DOCTYPE html(lang=\'en\')><head><title>Donelle &amp; Ashton Wedding</title><meta name="viewport" content="width=device-width, initial-scale=1"/><meta http-equiv="Content-Type" content="text/html;charset=utf-8"/><link href="https://fonts.googleapis.com/css?family=Rouge+Script|Lato:400,300italic,300,100italic,100,400italic,700,700italic,900,900italic" rel="stylesheet" type="text/css"/><link rel="stylesheet" type="text/css" href="css/styl.css"/></head><body><header class="header"><div class="container row logo-wrap"><button class="nav-button"><span class="nav-button-row"></span><span class="nav-button-row"></span><span class="nav-button-row"></span></button><h1 class="header-logo"><a href="#home" class="header-logo-link"><span class="d">D</span><span class="a">A</span></a></h1></div><nav class="container row main-nav"><li><a href="#home">Home</a></li><li><a href="#story">Our Story</a></li><li><a href="#accomodations">Accomodations</a></li><li><a href="#registry">Registry</a></li><li><a href="https://harriswedding.typeform.com/to/DuW2cS" target="_blank" class="rsvp-link external-link">RSVP</a></li></nav></header><main class="mdl-layout__content"><div class="page-content"><section data-content-block="data-content-block" class="container main-content"></section></div></main><script src="jquery/dist/jquery.min.js" type="text/javascript"></script><script src="js/vendor.js" type="text/javascript"></script><script src="js/app.js" type="text/javascript"></script><script src="templatizer.js" type="text/javascript"></script></body>';
    };

    return templatizer;
}));
