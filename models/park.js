const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
}
Park.prototype.removeDinosaur = function(dinosaur) {
  const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDinosaur, 1);
}
Park.prototype.findMostPopular = function() {
  let most_popular= null;
  for (let index in this.dinosaurs) {
    if (most_popular == null){
      most_popular=this.dinosaurs[index];
    }
    else if (this.dinosaurs[index].guestsAttractedPerDay > most_popular.guestsAttractedPerDay) {
      most_popular=this.dinosaurs[index];
    }

  }
  return most_popular
}
Park.prototype.findBySpecies = function(species) {
  let array= [];

  for (let index in this.dinosaurs) {
    if (this.dinosaurs[index].species == species){
      array.push(this.dinosaurs[index]);
    }


  }
  return array

}
Park.prototype.totalVisitorsDaily = function() {
  let daily= 0;

  for (let index in this.dinosaurs) {

    daily +=this.dinosaurs[index].guestsAttractedPerDay;



  }
  return daily;

}
Park.prototype.totalVisitorsYearly = function() {
  const daily = park.totalVisitorsDaily();
  const yearly = daily * 365;
  return yearly;


}
Park.prototype.ticketSalesYearly = function() {
  const yearly = park.totalVisitorsYearly();

  const sales = yearly * this.ticketPrice;
  return sales;
}


module.exports = Park;


// A park must be able to:
//
// Add a dinosaur to its collection of dinosaurs
// Remove a dinosaur from its collection of dinosaurs
// Find the dinosaur that attracts the most visitors
// Find all dinosaurs of a particular species
// Calculate the total number of visitors per day
// Calculate the total number of visitors per year
// Calculate the total revenue from ticket sales for one year
