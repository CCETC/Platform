import React from 'react'
import Page from 'portals/admin/components/page'

class Dashboard extends React.Component {

  render() {
    return (
      <Page {...this._getMain()}>
      </Page>
    )
  }

  _getMain() {
    return {
      title: 'Dashboard'
    }
  }

}

export default Dashboard
