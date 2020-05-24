import React from 'react';
import Header from '../components/Header/Header';
import ListData from '../components/ListData/Listdata';
import axios from "axios";
import { Redirect } from "react-router-dom";
import Skeleton from '@material-ui/lab/Skeleton';

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
        this.setState({ keywords: value , isLoading:false})
    }

    searchButtonClicked = () => {
        const { keywords } = this.state;
        if (keywords.length > 0) {
            this.getResults(keywords)
        }
    }

    componentDidMount(){
        console.log(this.state.keywords);
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

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            const { keywords } = this.state;
            if (keywords.length > 0) {
                this.getResults(keywords)
            }
            console.log(keywords)
        }
    }

    homeButton = () => {
        this.props.history.push('/inside/') 
    }

    render() {
        if (this.state.detailsPage) {
            return <Redirect 
                        push to={{pathname: '/inside/details',
                        state: {
                            question:this.state.selectedQuestion,
                            answer:this.state.selectedAnswer,
                        }}}/>;
        }

        return (
                <div>
                    <Header
                        handleKeyPress={this.handleKeyPress}
                        homeButton={this.homeButton}
                        singlePage={false}
                        handleSearchWord={this.handleSearchWord}
                        searchButtonClicked={this.searchButtonClicked}
                        value={this.state.keywords}
                    />
                    {this.state.isLoading ? 
                    <ListData keywords={this.state.keywords} results={this.state.questionList} answers={this.state.answerList} detailsPageClicked={this.detailsPageClicked}/>
                    :<div style={{ width:'50%', margin:'20px auto'}}>
                     <Skeleton />
                     <Skeleton />   
                     <Skeleton />   
                    </div>}
                </div> 
        )
    }

    async getResults(Key) {
        try {
            const Results = await axios.post("https://insidemapssearch.herokuapp.com/getAll",{ "key": Key});
            const Data = Results.data;
            const Answers = Data.answers?Data.answers:[];
            const Questions = Data.query?Data.query:[];
            console.log(Results)
            this.setState({ questionList: Questions, answerList: Answers, isLoading:true})
        } catch (error) {
            console.log(error)
        }
    }
}