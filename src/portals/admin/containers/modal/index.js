import React from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from './actions'

class Modal extends React.Component {

  static childContextTypes = {
    modal: React.PropTypes.object
  }

  static propTypes = {
    components: React.PropTypes.object,
    onPop: React.PropTypes.func,
    onPush: React.PropTypes.func
  }

  render() {
    const { children, components } = this.props
    return (
      <div className="chrome-modal">
        { children }
        <CSSTransitionGroup transitionName="expanded" transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }>
          { components.length > 0 &&
            <div className="chrome-modal-window">
              <CSSTransitionGroup transitionName="stack" component="div" transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }>
                { components.map((component, index) => {
                  return (
                      <div className="chrome-modal-panel" key={`modal_panel_${index}`}>
                        { _.isFunction(component) ? React.createElement(component) : component }
                      </div>
                  )
                }) }
              </CSSTransitionGroup>
            </div>
          }
        </CSSTransitionGroup>
      </div>
    )
  }

  getChildContext() {
    const { onPop, onPush } = this.props
    return {
      modal: {
        pop: onPop,
        push: onPush
      }
    }
  }

}

const mapStateToProps = (state, props) => ({
  components: state.modal
})

const mapDispatchToProps = {
  onPop: actions.pop,
  onPush: actions.push
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
