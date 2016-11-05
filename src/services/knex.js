import knex from 'knex'
import config from './config'

var defaults = {
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'schema_migrations',
    directory: '/'
  },
  seeds: {
    directory: '/'
  }
}

export default knex({
  ...defaults,
  ...config.database
})
