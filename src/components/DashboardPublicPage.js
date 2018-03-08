import React, { Component } from 'react';
import Header from './Header';
import InfoPage from './InfoPage';

class DashboardPublicPage extends Component {
    state = {
        showInfo: false
    }
    toggleInfoHandler = () => {
        const doesShow = this.state.showInfo;
        this.setState({ showInfo: !doesShow })
        console.log(doesShow)
    }
    render() {
        if (this.state.showInfo) {
            return (
                <div>
                    <Header clickInfo={this.toggleInfoHandler} />
                    <InfoPage />
                </div>
            )
        }
        return (
            <div>
                <Header clickInfo={this.toggleInfoHandler} />
            </div>
        )
    }
}



export default DashboardPublicPage;