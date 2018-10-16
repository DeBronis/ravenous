import React from 'react';
import './searchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};
class SearchBar extends React.Component {
    render(){
        return(
        <div className="searchBar">
        <div className="searchBar-sort-options">
          <ul>
            .renderSortByOptions() {
           } 
          </ul>
        </div>
        <div className="searchBar-fields">
          <input placeholder="search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="searchBar-submit">
          <a href>Let's Go</a>
        </div>
      </div>)
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={"sortByOptionValue"}>{sortByOption}</li>
        });

      }
}
export default SearchBar;