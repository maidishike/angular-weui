(function() {
  'use strict';

  angular
    .module('app', ['ui.router', 'oc.lazyLoad',  'w5c.validator','app.pagination',
      'ngFileUpload','ngjsColorPicker','cnCitySelect',
      'app.highcharts','app.particles','app.tm.pagination','app.alert.modal','focus-if',"ngProgress"]);
})();
