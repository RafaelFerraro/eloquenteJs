function singleToDouble(message) {
  return message.replace(/\'\w+\'/g, function(str) {
    return str.replace(/\'/g, '\"');
  });
};