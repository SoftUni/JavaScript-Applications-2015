(function() {
    var getHttpRequest = (function() {
    var xmlHttpFactories;
    xmlHttpFactories = [
      function() {
        return new XMLHttpRequest();
      }, function() {
        return new ActiveXObject("Msxml3.XMLHTTP");
      }, function() {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
      }, function() {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
      }, function() {
        return new ActiveXObject("Msxml2.XMLHTTP");
      }, function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      }
    ];
    return function() {
      var xmlFactory, _i, _len;
      for (_i = 0, _len = xmlHttpFactories.length; _i < _len; _i++) {
        xmlFactory = xmlHttpFactories[_i];
        try {
          return xmlFactory();
        } catch (_error) {

        }
      }
      return null;
    };
  })();

  function sendRequest(method, url, isAsync) {
	  var httpRequest = getHttpRequest(); //XHR object
	  isAsync = isAsync || true;

	  httpRequest.open(method, url, isAsync);
      httpRequest.setRequestHeader('X-Parse-Application-Id', 'Jbky6Cpo4PnzRbOnO82fMZ2evawgMDBOWHsimThO');
      httpRequest.setRequestHeader('X-Parse-REST-API-Key', 'NJTYQ5aNKeG3MjHsLkoS8Yl4odmqtHta0aAoO7q8');
	  httpRequest.send(null);
  }
  
  window.sendRequest = sendRequest;
}());
