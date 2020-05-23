import React from 'react';
import Header from '../components/Header/Header';
import { Redirect } from "react-router-dom";
import DetailsPage from '../components/DetailsPage/Details';

export default class Details extends React.Component {
    state = {
        keywords: '',
        redirect:false
    }

    handleSearchWord = (event) => {
        const value = event.target.value;
        this.setState({ keywords: value })
    }

    searchButtonClicked = () => {
        const { keywords } = this.state;
        if (keywords.length > 0) {
            console.log("details",keywords);
            this.setState({keywords: keywords ,redirect: true})
        }
    }

    render(){
        if (this.state.redirect) {
            return <Redirect push to={{pathname: '/inside/articles',state: {keywords:this.state.keywords}}}/>;
        }

        return(
            <div>
            <Header
                singlePage={false}
                handleSearchWord={this.handleSearchWord}
                searchButtonClicked={this.searchButtonClicked}
                value={this.state.keywords}
            />
            <DetailsPage />
        </div> 
        )}
}