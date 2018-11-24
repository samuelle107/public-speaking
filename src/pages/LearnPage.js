import React, { Component } from 'react';
import { Grid, Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class HomePage extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h1>What We Can Do</h1>
                    <p>
                        Family planning stagnates population growth, prevents pregnancy-related health risks, reduces infant mortality rate, helps prevents HIV/AIDS, provides contraception, and more.
                        The efforts to promote family planning around the world is simple!
                        It can range from simply filling out the form to joining an organization.
                        Below is a list, but not limited to, of actions that we can take.
                    </p>
                </Jumbotron>
                <ListGroup>
                    <ListGroupItem href='https://www.sos.arkansas.gov/uploads/elections/2018ElectionCalendar.pdf'>
                        Vote at elections.  Your voice is strong, but a unified voice is even stronger.
                    </ListGroupItem>

                    <ListGroupItem href='https://secure2.convio.net/pf/site/Donation2?df_id=7062&mfc_pref=T&7062.donation=form1'>
                        Donate to family planning services around the globe.
                    </ListGroupItem>

                    <ListGroupItem href='http://iyafp.org/'>
                        Join the International Youth Alliance for Family Planning.
                    </ListGroupItem>

                    <ListGroupItem>
                        Simply spread the word.
                    </ListGroupItem>
                </ListGroup>
            </Grid>
        );
    }
}
