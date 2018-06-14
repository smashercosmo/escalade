import React, { Component } from 'react'

export default Comp => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        shouldRender: this.props.isMounted
      }
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.isMounted && !nextProps.isMounted) {
        setTimeout(
          () => this.setState({ shouldRender: false }),
          this.props.delayTime
        )
      } else if (!this.props.isMounted && nextProps.isMounted) {
        this.setState({ shouldRender: true })
      }
    }

    render() {
      return this.state.shouldRender ? <Comp {...this.props} /> : null
    }
  }
}
