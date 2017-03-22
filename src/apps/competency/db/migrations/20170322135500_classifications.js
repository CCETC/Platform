exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('competency_classifications', function (table) {
      table.increments('id').primary()
      table.integer('team_id').unsigned()
      table.foreign('team_id').references('teams.id')
      table.string('title')
      table.timestamps()
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('competency_classifications')
  ])
}
