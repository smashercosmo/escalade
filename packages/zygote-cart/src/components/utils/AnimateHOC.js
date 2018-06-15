import React, { Component } from 'react'
import { cartState } from '../state'

export default (Comp, customProps) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        shouldRender: this.props.isMounted,
        didMount: false
      }
    }

    componentWillReceiveProps(nextProps) {
      const { isMounted, delayTime } = this.props
      if (isMounted && !nextProps.isMounted) {
        setTimeout(() => {
          this.setState({ shouldRender: false })
          cartState.setState({ mounted: false })
        }, this.props.delayTime)
        this.setState({ didMount: false })
      } else if (!isMounted && nextProps.isMounted) {
        setTimeout(() => {
          this.setState({ didMount: true })
        }, 0)
        this.setState({ shouldRender: true })
        cartState.setState({ mounted: true })
      }
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ didMount: true })
      }, 0)
    }

    render() {
      const { didMount } = this.state
      const { base, action, isMounted } = this.props
      return this.state.shouldRender ? (
        <div className={`${base} ${didMount && isMounted ? action : ''}`}>
          <Comp {...this.props} />
        </div>
      ) : null
    }
  }
}
