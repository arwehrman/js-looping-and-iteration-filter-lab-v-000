function findMatching(drivers, string) {
  return drivers.filter(function(name){
    return name.toLowerCase() === string.toLowerCase()});
}
