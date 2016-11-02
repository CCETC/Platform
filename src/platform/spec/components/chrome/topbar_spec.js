import React from 'react'
import { expect } from 'chai'
import { spy } from 'sinon'
import { shallow } from 'enzyme'
import { Topbar } from '../../../components/chrome/components/topbar'

describe('topbar component', function() {

  it('renders topbar', function() {
    const onToggleDrawer = spy()
    const onSignout = spy()
    const config = {
      unread: 12,
      onToggleDrawer,
      onSignout
    }
    const context = { router: { push: (route) => {} } }
    const topbar = shallow(
      <Topbar {...config} />,
      { context }
    )
    expect(topbar.is('div.chrome-topbar')).to.be.ok
    expect(topbar.children().length).to.equal(4)

    const toggle = topbar.childAt(0)
    expect(toggle.is('div.chrome-toggle')).to.be.ok
    expect(toggle.children().length).to.equal(1)
    expect(toggle.childAt(0).is('i.sidebar.icon')).to.be.ok
    toggle.simulate('click')
    expect(onToggleDrawer.calledOnce).to.be.ok

    const search = topbar.childAt(1)
    expect(search.is('Connect(Search)')).to.be.ok

    const alerts = topbar.childAt(2)
    expect(alerts.is('Link.chrome-alerts[to="/admin/notifications"]')).to.be.ok
    expect(alerts.children().length).to.equal(2)
    expect(alerts.childAt(0).is('i.warning.sign.icon')).to.be.ok
    expect(alerts.childAt(1).is('div.chrome-alerts-label')).to.be.ok
    expect(alerts.childAt(1).text()).to.equal('12')

    const power = topbar.childAt(3)
    expect(power.is('div.chrome-power')).to.be.ok
    expect(power.children().length).to.equal(1)
    expect(power.childAt(0).is('i.power.icon')).to.be.ok
    power.simulate('click')
    expect(onSignout.calledOnce).to.be.ok
  })

})
