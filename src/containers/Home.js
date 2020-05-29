import React from 'react';
import Header from '../components/Header/Header';
import Category from '../components/Category/Category';
import { Redirect } from "react-router-dom";

export default class Home extends React.Component {
    state = {
        keywords: '',
        redirect:false,
    }

    handleSearchWord = (event) => {
        const value = event.target.value;
        this.setState({ keywords: value })
    }

    searchButtonClicked = () => {
        const { keywords } = this.state;
        if (keywords.length > 0) {
            this.setState({ redirect: true})
        }
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            const { keywords } = this.state;
            if (keywords.length > 0) {
                this.setState({ redirect: true})
            }
        }
    }

    homeButton = () => {
        this.props.history.push('/inside/') 
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to={{pathname: '/inside/articles', state: {keywords:this.state.keywords}}}/>;
        }

        return(
            <div>
                <Header
                    handleKeyPress={this.handleKeyPress}
                    value={this.state.keywords}
                    homeButton={this.homeButton} 
                    singlePage={true}
                    handleSearchWord={this.handleSearchWord} 
                    searchButtonClicked={this.searchButtonClicked} 
                />
                <Category /> 
            </div>
        )}
}