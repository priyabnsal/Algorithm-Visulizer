import React from 'react';

import NavBar from './utils/navbar';
import { Route } from 'react-router-dom';

// Components
import IndexTable from './utils/indexTable';
import WordSearch from './wordSearchVisualiser/wordSearch';
import PathFinder from './PathFinder/PathFinder';
import SortingVisualiser from './sortingAlgorithms/sortingVisualiser';
import BinarySearch from './searchingAlgorithms/binarySearch/binarySearch';
import LinearSearch from './searchingAlgorithms/linearSearch/linearSearch';

//  Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import BackBar from './utils/backbar';

const searchCombined = () => {
  return (
    <div>
      <BackBar />
      <LinearSearch />
      <BinarySearch />
    </div>
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={IndexTable} />
        <Route path="/sorting" component={SortingVisualiser} />
        <Route path="/searching" component={searchCombined} />
        <Route path="/pathfinder" component={PathFinder} />
        <Route path="/word-search" component={WordSearch} />
      </div>
    );
  }
}
