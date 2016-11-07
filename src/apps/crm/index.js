import api from './api'
import admin from './admin'
import jobs from './jobs'
import website from './website'

const config = {
  name: 'CRM',
  description: 'Manage Contacts',
  path: '/crm'
}

export { admin }
export { api }
export { config }
export { website }

export default {
  admin,
  api,
  config,
  jobs,
  website
}
