import resources from 'platform/middleware/resources'
import Expense from '../../../models/expense'
import ExpenseSerializer from '../../../serializers/expense_serializer'
import canApprove from './utils'

const loggers = require('./loggers').default('expense')
const processors = require('./processors').default('expense', Expense)
const after = require('./after').default('expense')

export default resources({
  access: canApprove,
  actions: {
    approve: {
      on: 'member',
      path: 'approve',
      method: 'patch'
    },
    reject: {
      on: 'member',
      path: 'reject',
      method: 'patch'
    }
  },
  after: {
    approve: after.approve,
    reject: after.reject
  },
  defaultSort: '-date',
  filterParams: ['user_id','expense_type_id','project_id','date','is_approved'],
  logger: {
    approve: loggers.approve,
    reject: loggers.reject
  },
  model: Expense,
  name: 'expense',
  only: ['list','show','update'],
  ownedByUser: false,
  pathPrefix: '/approvals',
  processor: {
    approve: processors.approve,
    reject: processors.reject
  },
  query: (qb, req, filters) => {
    qb.joinRaw('inner join expenses_members on expenses_members.project_id = expenses_expenses.project_id and expenses_members.user_id=? and expenses_members.member_type_id != ?', [req.user.get('id'), 3])
    qb.whereNot('expenses_expenses.user_id', req.user.get('id'))
  },
  serializer: ExpenseSerializer,
  sortParams: ['date'],
  withRelated: ['receipt','user.photo','project','expense_type','vendor']
})
