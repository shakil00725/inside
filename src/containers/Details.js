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
        const { question, answer } = this.props.location.state;
        this.setState({
            question:question,
            answer:answer
        })
       
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            const { keywords } = this.state;
            if (keywords.length > 0) {
                console.log("details",keywords);
                this.setState({keywords: keywords ,redirect: true})
            }
            console.log(keywords)
        }
    }

    homeButton = () => {
        this.props.history.push('/inside/') 
    }
    

    render(){
        if (this.state.redirect) {
            return <Redirect to={{pathname: '/inside/articles',state: {keywords:this.state.keywords}}}/>;
        }

        return(
            <div>
            <Header
                handleKeyPress={this.handleKeyPress}
                homeButton={this.homeButton}
                singlePage={false}
                handleSearchWord={this.handleSearchWord}
                searchButtonClicked={this.searchButtonClicked}
                value={this.state.keywords}
            />
            <DetailsPage question={this.state.question} answer={this.state.answer}/>
        </div> 
        )}
}