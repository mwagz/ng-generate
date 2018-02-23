exports.format = function(name) {
  var formattedName = {
    standard: name,
    camel: convertToCamel(),
    capped: convertToCamel(true)
  };

  // What case is it in?
  if (name.indexOf('-') === -1) {
    return { error: 'Format component name with dashes (e.g. my-component)' };
  }

  return formattedName;

  function convertToCamel(all) {
    var tmpName = name.split('-');

    var newName = tmpName.map(function(item, ind) {
      if (ind === 0 && !all) {
        return item;
      }

      var newItem = capitalizeFirstLetter(item);

      return newItem;
    });

    return newName.join('');
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};
