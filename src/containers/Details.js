import React from 'react';
import axios from "axios";
import Header from '../components/Header/Header';
import { Redirect } from "react-router-dom";
import DetailsPage from '../components/DetailsPage/Details';

export default class Details extends React.Component {
    state = {
        keywords: '',
        redirect: false,
        answer: '',
        question: '',
        autoComplete: []
    }

    handleSearchWord = (event) => {
        const value = event.target.value;
        this.setState({ keywords: value })
    }

    searchButtonClicked = () => {
        const { keywords } = this.state;
        if (keywords.length > 0) {
            console.log("details", keywords);
            this.setState({ keywords: keywords, redirect: true })
        }
    }

    async getAutoCompleteWord(Key) {
        try {
            const Results = await axios.post("https://insidemaps.herokuapp.com/getNextWord", { "key": Key });
            const autoCompleteWord = Results.data.prediction;
            let sentence = [];
            sentence.push(autoCompleteWord)
            this.setState({ autoComplete: sentence })
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        const { question, answer } = this.props.location.state;
        this.setState({
            question: question,
            answer: answer
        })

    }

    handleKeyPress = (event) => {
        const keywords = event.target.value;
        if (event.key === 'Enter') {
            //const { keywords } = this.state;
            if (keywords.length > 0) {
                console.log("details", keywords);
                this.setState({ keywords: keywords, redirect: true })
            }
            console.log(keywords)
        }
        else if (event.key === ' ') {
            this.getAutoCompleteWord(keywords);
        }
        else {
            this.getAutoCompleteWord(keywords);
        }
    }

    homeButton = () => {
        this.props.history.push('/inside/')
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{ pathname: '/inside/articles', state: { keywords: this.state.keywords } }} />;
        }

        return (
            <div>
                <Header
                    handleKeyPress={this.handleKeyPress}
                    homeButton={this.homeButton}
                    autoComplete={this.state.autoComplete}
                    singlePage={false}
                    handleSearchWord={this.handleSearchWord}
                    searchButtonClicked={this.searchButtonClicked}
                    value={this.state.keywords}
                />
                <DetailsPage question={this.state.question} answer={this.state.answer} />
            </div>
        )
    }
}