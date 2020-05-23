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

    render() {
        if (this.state.redirect) {
            return <Redirect push to={{pathname: '/inside/articles', state: {keywords:this.state.keywords}}}/>;
        }

        return(
            <div>
                <Header 
                    singlePage={true}
                    handleSearchWord={this.handleSearchWord} 
                    searchButtonClicked={this.searchButtonClicked} 
                />
                <Category />
            </div>
        )}
}