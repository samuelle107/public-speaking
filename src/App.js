import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import * as firebase from 'firebase';
import { Grid, PageHeader } from 'react-bootstrap';
import { HashRouter, Route} from 'react-router-dom';
import CustomNavbar from './components/customnavbar/CustomNavbar';
import LearnPage from './pages/LearnPage';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

export default class App extends Component {
    constructor() {
        super();
        this.state = {
          active: false,
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        this.defaultDatabase = firebase.database();
    }

    componentDidMount() {
        let ref = this.defaultDatabase.ref();
        ref.on('value', snapshot => {
            let active = snapshot.val().active;
            this.setState({ active: active });
        });
    }

    render() {
        if(this.state.active) {
            return (
                <HashRouter>
                    <div>
                        <CustomNavbar/>
                        <Route exact path='/' render={()=>(<HomePage database={this.defaultDatabase}/>)} />
                        <Route exact path='/learn' component={ LearnPage } />
                    </div>
                </HashRouter>
            );
        } else {
            return (
                <Grid>
                    <PageHeader>Please wait</PageHeader>
                </Grid>
            );
        }
    }
}
