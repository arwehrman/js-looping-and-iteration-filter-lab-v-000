function findMatching(drivers, string) {
  return drivers.filter(function(name){
    return name.toLowerCase() === string.toLowerCase()});
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function(name){
    return name.slice(0)
  })
}
