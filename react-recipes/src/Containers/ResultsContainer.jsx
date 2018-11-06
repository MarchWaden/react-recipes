import React, { Component } from 'react';
import SearchContainer from './SearchContainer';
import SearchRecipeList from '../Components/SearchRecipeList';

class ResultsContainer extends Component {
    constructor(){
      super();
  
      this.state = {recipes: []};
    }
    handleSubmit = async (term) => {
      const url = `https://api.edamam.com/search?q=${term.replace(/\s/g, '+')}&app_id=5e4b0c5c&app_key=459a130d904b5a0e60b7682878b95ffa`;
      const result = await fetch(url);
      const parsed = await result.json();
      console.log(parsed);
      this.setState({recipes: parsed.hits});
    }
    render() {
      return (
        <div className="App">
          <SearchContainer onSubmit={term => this.handleSubmit(term)} />
          <SearchRecipeList recipes={this.state.recipes} />
        </div>
      );
    }
  }

  export default ResultsContainer;