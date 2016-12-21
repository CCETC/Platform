import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { getApps } from '../../containers/admin/selectors'
import * as actions from './actions'
import navigation from './navigation'
import Panel from './panel'

export class Navigation extends React.Component {

  static contextTypes = {
    drawer: React.PropTypes.object,
    router: React.PropTypes.object
  }

  static propTypes = {
    app: React.PropTypes.number,
    apps: React.PropTypes.array.isRequired,
    mode: React.PropTypes.string,
    onChooseApp: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="chrome-navigation">
        <ReactCSSTransitionGroup transitionName="next" component={ this._firstChild.bind(this) } transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }>
          { true && <Panel items={ navigation } /> }
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  _firstChild(props) {
    const childrenArray = React.Children.toArray(props.children)
    return childrenArray[0] || null
  }

  // render() {
  //   const { apps } = this.props
  //   return (
  //     <div className="chrome-navigation-panel">
  //       <div className="chrome-navigation-title">
  //         <h3>Apps</h3>
  //       </div>
  //       { apps.length > 0 ?
  //       <div className="chrome-apps">
  //         { apps.map((app, appindex) => {
  //           return (
  //             <div key={`app_${appindex}`} className="chrome-app">
  //               <div className={`chrome-app-title ${this.props.app === appindex ? 'active' : ''}`} onClick={this._handleChooseApp.bind(this, appindex)}>
  //                 <i className={`${app.icon} icon`} />
  //                 {app.name}
  //               </div>
  //               <CSSTransitionGroup transitionName="expanded" transitionEnterTimeout={250} transitionLeaveTimeout={250} transitionAppear={true} transitionAppearTimeout={250}>
  //                 {appindex === this.props.app &&
  //                   <div className="chrome-app-menu">
  //                     {app.items.map((item, itemindex) => {
  //                       return <div key={`appitem_${itemindex}`} className="chrome-app-item" onClick={this._handleTransitionTo.bind(this, item.route)}>{item.name}</div>
  //                     })}
  //                   </div>
  //                 }
  //               </CSSTransitionGroup>
  //             </div>
  //           )
  //         })}
  //       </div> :
  //       <div className="chrome-apps-empty">
  //         <div className="chrome-apps-empty-message">
  //           <i className="dont icon" />
  //           <h3>You don't have access to any apps</h3>
  //         </div>
  //       </div> }
  //     </div>
  //   )
  // }
  //
  // componentWillUnmount() {
  //   this.props.onReset()
  // }
  //
  // _handleChooseApp(index) {
  //   this.props.onChooseApp(index)
  // }
  //
  // _handleTransitionTo(pathname) {
  //   this.props.onChooseApp(null)
  //   this.context.drawer.close()
  //   this.context.router.push({ pathname, state: 'static' })
  // }
  //
  // _handleCloseDrawer(index) {
  //   this.context.drawer.close()
  // }

}

const mapStateToProps = state => ({
  app: state.navigation.app,
  apps: getApps(state),
  mode: state.navigation.mode,
  route: state.navigation.route
})

const mapDispatchToProps = {
  onChooseApp: actions.chooseApp,
  onReset: actions.reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
