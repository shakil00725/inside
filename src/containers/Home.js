import React from 'react';
import Header from '../components/Header/Header';
import Category from '../components/Category/Category';
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class Home extends React.Component {

    state = {
        keywords: '',
        redirect:false,
        autoComplete:[],
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
        const keywords = event.target.value ;
        if(event.key === 'Enter'){
            if (keywords.length > 0) {
                this.setState({ redirect: true, keywords:keywords})
            }
        }
        else if(event.key === ' '){
                console.log(this.state.autoComplete)
                this.getAutoCompleteWord(keywords);
        }
        else {
            this.getAutoCompleteWord(keywords);
        }
    }

    homeButton = () => {
        this.props.history.push('/inside/') 
    }

    async getAutoCompleteWord(Key) {
        try {
            const Results = await axios.post("https://insidemaps.herokuapp.com/getNextWord",{ "key": Key});
            const autoCompleteWord = Results.data.prediction;
            console.log(autoCompleteWord)
            let sentence = [];
            sentence.push(autoCompleteWord)
            this.setState({autoComplete:sentence})
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to={{pathname: '/inside/articles', state: {keywords:this.state.keywords}}}/>;
        }

        return(
            <div>
                <Header
                    handleKeyPress={this.handleKeyPress}
                    autoComplete={this.state.autoComplete}
                    value={this.state.keywords}
                    homeButton={this.homeButton} 
                    singlePage={true}
                    handleSearchWord={this.handleSearchWord} 
                    searchButtonClicked={this.searchButtonClicked} 
                />
                {/* <Category />  */}
            </div>
        )}
}