import React from 'react';
import { Component } from "react";
import Header from "../../common/Header/Header";
import { Filters } from './Filters';
import "./Home.css";
import { ReleasedMovies } from './ReleasedMovies';
import { UpcomingMovies } from './UpcomingMovies';


export default class Home extends Component{
    render(){
        return(
            <div>
                <Header />
                <span>
                    <h1 className="heading">Upcoming Movies</h1>
                </span>
                <UpcomingMovies />
                
                <div className="flex-container">
                    <div className="left">
                        <ReleasedMovies />
                    </div>
                    <div className="right">
                        <Filters />
                    </div>

                </div>
            </div>
        );
    }
}