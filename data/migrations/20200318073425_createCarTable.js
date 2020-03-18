exports.up = function(knex) {
  //  VIN, make, model, and mileage
  // vin : notNullable, unique, text
  // make : notNullable , text
  //model : notnullable  , text,
  // mileage : nullable, integer

  return knex.schema.createTable("cars", table => {
    table.increments();
    table
      .text("Vin")
      .notNullable()
      .unique();
    table.text("make").notNullable();
    table.text("model").notNullable();
    table.integer("mileage");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
