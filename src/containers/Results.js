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
    }

    handleSearchWord = (event) => {
        const value = event.target.value;
        this.setState({ keywords: value })
    }

    searchButtonClicked = () => {
        const { keywords } = this.state;
        if (keywords.length > 0) {
            this.getTheSearchResults(keywords)
        }
    }

    componentDidMount(){
        const { keywords } = this.props.location.state;
        this.getTheSearchResults(keywords)
        this.setState({keywords:keywords})
    }

    detailsPageClicked = (id) => {
        this.setState({detailsPage:true})
    }

    render() {
        if (this.state.detailsPage) {
            return <Redirect push to={{pathname: '/details',state: {keywords:this.state.keywords}}}/>;
        }

        return (
                <div>
                    <Header
                        singlePage={false}
                        handleSearchWord={this.handleSearchWord}
                        searchButtonClicked={this.searchButtonClicked}
                        value={this.state.keywords}
                    />
                    <ListData results={this.state.searchResults} detailsPageClicked={this.detailsPageClicked}/>
                </div> 
        )
    }

    async getTheSearchResults(Key) {
        try {
            const Results = await axios.get("https://jsonplaceholder.typicode.com/users");
            const data = await Results.data;
            this.setState({ searchResults: data })
            console.log("Result page",Key)
            console.log(this.state.searchResults)
        } catch (error) {
            console.log(error)
        }
    }


}