import React, { Component } from 'react'
import { initialState, StoreContext } from './utils/store'
import RecyclePoints from './components/RecyclePoints'
import SidePanel from './components/SidePanel'
import './styles/index.sass'

const   recycleTypes = {
    plastic: [0, 5, 6, 8, 10, 90, 95, 96, 98],
    paper: [1, 5, 7, 8, 91, 95, 97, 98],
    rare: [3, 10, 93],
    glass: [2, 6, 7, 8, 92, 96, 97, 98],
    battery: [4, 94],
    cap: [9, 10, 99]
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = initialState({
            state: this.state,
            setState: this.setState,
        })
        this.state.choosenFilters = [];
    }

    onFilterChange = (value, isChecked) => {
        const updatedFilters = [...this.state.choosenFilters];
        const typeList = recycleTypes[value];
        const isNeedToFilter = isChecked;

        const index = updatedFilters.findIndex(filter => filter === typeList);
        
        if (isNeedToFilter & index == -1) {
            updatedFilters.push(typeList);
        }
        else if (!isNeedToFilter) {
            updatedFilters.splice(index, 1);
        }
        
        this.setState({ choosenFilters: updatedFilters });
    };

    render = () => (
        <StoreContext.Provider value={this.state}>
            <div className="App">
                <SidePanel onFilterChange={this.onFilterChange} />
                <RecyclePoints choosenFilters={this.state.choosenFilters.flat()} />
            </div>
        </StoreContext.Provider>
    )
}

export default App
