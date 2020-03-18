exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { vin: "asdfg", make: "Micra", model: "fdtdb", mileage: 23 },
        { vin: "asruc", make: "toyota", model: "crdd", mileage: 25 },
        { vin: "aeefg", make: "Micddra", model: "fdddtdb", mileage: 29 }
      ]);
    });
};
