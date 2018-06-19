import React, { Component } from 'react'
import { cartState } from '../state'

export default Comp => {
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
        }, delayTime)
        this.setState({ didMount: false })
      }
      if (!isMounted && nextProps.isMounted) {
        setTimeout(() => {
          this.setState({ didMount: true })
        }, 0)
        this.setState({ shouldRender: true })
        cartState.setState({ mounted: true })
      }
      // Comp is not mounted and not rendering
      if (!isMounted && !nextProps.isMounted) {
        this.setState({ didMount: false })
      }
    }

    componentDidMount() {
      if (this.props.isMounted) {
        setTimeout(() => {
          this.setState({ didMount: true })
        }, 0)
      }
    }

    render() {
      const { didMount } = this.state
      const { base, action, isMounted } = this.props
      return this.state.shouldRender ? (
        <div
          className={`${base || ''} ${
            didMount && isMounted ? action || '' : ''
          }`}
        >
          <Comp {...this.props} />
        </div>
      ) : null
    }
  }
}
