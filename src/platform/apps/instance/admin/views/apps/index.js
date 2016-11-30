import React from 'react'
import Page from 'portals/admin/components/chrome/page'

class New extends React.Component {

  render() {
    return (
      <Page {...this._getMain()}>
        Apps
      </Page>
    )
  }

  _getMain() {
    const { params } = this.props
    return {
      back: `/admin/users/${params.id}`,
      title: 'Edit User',
      permissions: ['foo']
    }
  }

}

export default New
