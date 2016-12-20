import React from 'react'
import Form from 'portals/admin/components/form'

class New extends React.Component {

  static contextTypes = {
    modal: React.PropTypes.object
  }

  render() {
    return <Form {...this._getForm()} />
  }

  _getForm() {
    return {
      title: 'New Expense',
      method: 'post',
      action: '/admin/reimbursement/expenses',
      onCancel: this.context.modal.close,
      onSuccess: this.context.modal.close,
      sections: [
        {
          fields: [
            { label: 'Receipt', name: 'upload_id', type: 'filefield', endpoint: '/admin/uploads' },
            { label: 'Project', name: 'project_id', type: 'select', placeholder: 'Project', endpoint: '/admin/reimbursement/projects', key: 'id', value: 'title' },
            { label: 'Expense Type', name: 'expense_type_id', type: 'select', placeholder: 'Expense Type', endpoint: '/admin/reimbursement/expense_types', key: 'id', value: 'title' },
            { label: 'Vendor', name: 'vendor_id', type: 'select', placeholder: 'Vendor', endpoint: '/admin/reimbursement/vendors', key: 'id', value: 'name' },
            { label: 'Date', name: 'date_needed', type: 'datefield', placeholder: 'Date Needed' },
            { label: 'Description', name: 'description', type: 'textarea', placeholder: 'Description' },
            { label: 'Amount', name: 'amount', type: 'textfield', placeholder: 'Amount' },
            { label: 'Visa?', name: 'is_visa', type: 'checkbox' }
          ]
        }
      ]
    }
  }

}

export default New
