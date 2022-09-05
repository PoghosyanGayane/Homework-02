var getHandleFromURL = function getHandleFromURL(url) {
    var customRegex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
   
    try {
     var path = new URL(url).pathname;
     var regex = customRegex ? new RegExp(customRegex, 'i') : new RegExp('/([\\w|@|-]+)/?$', 'i');
     var match = regex.exec(path);
     return customRegex ? match.find(function (match, index) {
      return index > 1 && match != undefined;
     }) : match[1];
    } catch (error) {
     //Unable to parse handle, return empty value
     return '';
    }
   }