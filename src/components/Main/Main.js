import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/HomePage/HomePage';
import AboutFirst from '../../pages/AboutFirstPage/AboutFirstPage';
import AboutSecond from '../../pages/AboutSecondPage/AboutSecondPage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/about1" name="about1" component={AboutFirst}/>
            <Route path="/about2" name="about2" component={AboutSecond}/>
            <Route path='*' component={Home}/>
        </Switch>
    </main>);
export default Main;