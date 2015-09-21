var App = window.App;

var LocationBar = require("location-bar");


App = {
  init: function () {
    this.currentPattern = '';
    this.getCurrentRoute();
    this.bindNav();
    this.initializeRouter();
    this.bindMenuButton();
  },

  initializeRouter: function () {
    var locationBar = new LocationBar();

    // listen to all changes to the location bar
    locationBar.onChange(function (path) {
      // console.log("the current url is", path);
      App.getPatterns(path);
    });

    locationBar.start({
      pushState: false
    });
  },

  bindMenuButton: function () {
    $('.nav-button').click(function () {
      $( this ).toggleClass('expanded');
      $( '.main-nav' ).toggleClass('expanded');
    });
  },

  bindNav: function () {
    var self = this;
    $('a').click(function (e) {
      e.preventDefault();

      $('.nav-button').toggleClass('expanded');
      $( '.main-nav' ).toggleClass('expanded');

      var file = e.target.hash.split('#')[1];

      self.updateRoute(file);
      self.updateSelectedNav(e.target.hash);
    });
  },

  getCurrentRoute: function () {
    this.getPatterns(window.location.hash.split('#')[1] || 'home');
    this.updateSelectedNav(window.location.hash);
  },

  updateRoute: function (route) {
    window.location.hash = route;
  },

  getPatterns: function (file) {
    if (this.currentPattern === file) {return false;}
    this.currentPattern = file;
    var container = $('[data-content-block]'),
      tmpl = window.App.templatizer["_" + file];

    container.html(tmpl);

    // Fire JS that has to wait to load
    this.fireCustomJS();
  },

  updateSelectedNav: function (hash) {
    var navListLink = $('.nav-list li a');

    navListLink.removeClass('selected');
    $('[href="' + hash + '"]').addClass('selected');
  },

  fireCustomJS: function () {
    this.counter();
  },

  counter: function () {
   $('.countdown').countdown("2016/10/07", function(event) {
     $(this).text(
       event.strftime('%D days to go')
     );
   });
  }

};

$().ready(function () {
  App.init();
});
