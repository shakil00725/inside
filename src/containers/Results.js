import React from 'react';
import Header from '../components/Header/Header';
import ListData from '../components/ListData/Listdata';
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class ResultsData extends React.Component {
    state = {
        keywords: '',
        searchResults: [],
        isLoading:false,
        detailsPage: false,
        questionList:[],
        answerList:[],
        selectedAnswer:'',
        selectedQuestion:'',
    }

    handleSearchWord = (event) => {
        const value = event.target.value;
        this.setState({ keywords: value })
    }

    searchButtonClicked = () => {
        const { keywords } = this.state;
        if (keywords.length > 0) {
            this.getResults(keywords)
        }
    }

    componentDidMount(){
        const { keywords } = this.props.location.state;
        this.getResults(keywords)
        this.setState({keywords:keywords})
    }

    detailsPageClicked = (question,answer) => {
        this.setState({
            detailsPage:true,
            selectedAnswer:answer,
            selectedQuestion:question,
        })

    }

    render() {
        if (this.state.detailsPage) {
            return <Redirect 
                        push to={{pathname: '/inside/details',
                        state: {
                            keywords:this.state.keywords,
                            question:this.state.selectedQuestion,
                            answer:this.state.selectedAnswer,
                        }}}/>;
        }

        return (
                <div>
                    <Header
                        singlePage={false}
                        handleSearchWord={this.handleSearchWord}
                        searchButtonClicked={this.searchButtonClicked}
                        value={this.state.keywords}
                    />
                    <ListData results={this.state.questionList} answers={this.state.answerList} detailsPageClicked={this.detailsPageClicked}/>
                </div> 
        )
    }

    async getResults(Key) {
        try {
            const Results = await axios.get("http://127.0.0.1:5000/");
            const Data = await Results.data;
            const Answers = Data.answers;
            const Questions = Data.query;
            this.setState({ questionList: Questions, answerList: Answers})
        } catch (error) {
            console.log(error)
        }
    }


}