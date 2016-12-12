exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('reimbursement_expenses', function (table) {
      table.increments('id').primary()
      table.integer('team_id').unsigned()
      table.foreign('team_id').references('teams.id')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.integer('project_id').unsigned()
      table.foreign('project_id').references('reimbursement_projects.id')
      table.integer('expense_type_id').unsigned()
      table.foreign('expense_type_id').references('reimbursement_expense_types.id')
      table.integer('vendor_id').unsigned()
      table.foreign('vendor_id').references('reimbursement_vendors.id')
      table.date('date')
      table.text('description')
      table.decimal('amount', 6, 2)
      table.boolean('is_visa')
      table.timestamps()
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('reimbursement_expenses')
  ])
}
