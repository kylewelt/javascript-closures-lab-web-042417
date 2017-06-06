function bumpCounter () {
  var counter = 0

  function addBump () {
    counter += 1
  }

  function getBumps () {
    return counter
  }

  return {
    addBump,
    getBumps
  }
}

function createAnimal (animalType) {
  function createHybrid (deadlyDevice) {
    return {
      animalType,
      deadlyDevice
    }
  }
  return createHybrid
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
