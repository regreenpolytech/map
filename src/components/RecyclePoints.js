import React, { Component } from 'react'

import { StoreContext } from '../utils/store'
import YandexMap from './YandexMap'


class RecyclePoints extends Component {
  constructor(props) {
    super(props)
    this.state = {
      points: []
    }
  }

  componentDidMount = () => this.initData()

  initData = async () => this.setState({points: await this.context.store.get()})
  

    render() {
        let filteredPoints = this.state.points;

        if (this.props.choosenFilters.length > 0) {
            filteredPoints = this.state.points.filter(point => this.props.choosenFilters.includes(parseInt(point.icon)));
        }

        return (
            <div className="random-events" id="random-events">
                <div className="random-events__map-container">
                    <YandexMap
                        points={filteredPoints}
                    />
                </div>
            </div>
        )
    }
}

RecyclePoints.contextType = StoreContext

export default RecyclePoints
