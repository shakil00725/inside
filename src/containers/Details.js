import React from 'react';
import Header from '../components/Header/Header';
import { Redirect } from "react-router-dom";
import DetailsPage from '../components/DetailsPage/Details';

export default class Details extends React.Component {
    state = {
        keywords: '',
        redirect:false,
        answer:'',
        question:'',
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

    componentDidMount(){
        const { keywords, question, answer } = this.props.location.state;
        this.setState({
            keywords:keywords,
            question:question,
            answer:answer
        })
    }

    render(){
        if (this.state.redirect) {
            return <Redirect to={{pathname: '/inside/articles',state: {keywords:this.state.keywords}}}/>;
        }

        return(
            <div>
            <Header
                singlePage={false}
                handleSearchWord={this.handleSearchWord}
                searchButtonClicked={this.searchButtonClicked}
                value={this.state.keywords}
            />
            <DetailsPage question={this.state.question} answer={this.state.answer}/>
        </div> 
        )}
}