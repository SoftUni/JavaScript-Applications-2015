var cookie = (function () {
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(str) {
      if (this.length < str.length) {
        return false;
      }
      for (var i = 0; i < str.length; i++) {
        if (this[i] !== str[i]) {
          return false;
        }
      }
      return true;
    }
  }

  function setCookie(name, value, expires, path, domain) {
    var cookie = name + "=" + escape(value) + ";";
   
    if (expires) {
      if(expires instanceof Date) {
        isNaN(expires.getTime()) ? expires = new Date() : null;
      } else {
        expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);
      }
   
      cookie += "expires=" + expires.toGMTString() + ";";
    }
   
    if (path) {
      cookie += "path=" + path + ";";
    }
    if (domain) {
      cookie += "domain=" + domain + ";";
    }

    document.cookie = cookie;
  }

  function getCookie(name) {
    var allCookies = document.cookie.split(";");
    for (var i = 0; i < allCookies.length; i++) {
        var cookie = allCookies[i];
        var trailingZeros = 0;
        for (var j = 0; j < cookie.length; j++) {
            if (cookie[j] !== " ") {
                break;
            }
        }
        cookie = cookie.substring(j);
        if (cookie.startsWith(name + "=")) {
            return cookie;
        }
    }
  }

  function deleteCookie(name) {
    if(getCookie(name)) {
      setCookie(name, '', -1);
    }
  }

  return {
    get: getCookie,
    set: setCookie,
    delete: deleteCookie
  }
}());