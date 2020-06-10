const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
      dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
      dinosaur2 = new Dinosaur('stegosaurus', 'herbivore', 30);
      dinosaur3 = new Dinosaur('velociraptor', 'carnivore', 45);
      dinosaur4 = new Dinosaur('anklysaurus', 'herbivore', 20);
      park = new Park('Triassic park',5,[dinosaur1,dinosaur2,dinosaur3])

  })

  it('should have a name',function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Triassic park');
  });

  it('should have a ticket price',function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs',function(){
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [dinosaur1,dinosaur2,dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection',function(){
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [dinosaur1,dinosaur2,dinosaur3,dinosaur4]);
  });

  it('should be able to remove a dinosaur from its collection',function(){
    park.removeDinosaur(dinosaur3)
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [dinosaur1,dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors',function(){
    const actual = park.findMostPopular();
    assert.deepEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species',function(){

    const actual = park.findBySpecies('t-rex');
    assert.deepEqual(actual, [dinosaur1]);
  });

  it('should be able to calculate the total number of visitors per day',function(){
    const actual = park.totalVisitorsDaily();
    assert.strictEqual(actual, 125);
  });

  it('should be able to calculate the total number of visitors per year',function(){
    const actual = park.totalVisitorsYearly();
    assert.strictEqual(actual, 45625);
  });

  it('should be able to calculate total revenue for one year',function(){
    const actual = park.ticketSalesYearly();
    assert.strictEqual(actual, 228125);
  });

});
