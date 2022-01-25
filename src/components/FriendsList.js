import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import AddFriend from "./AddFriend";



class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        axiosWithAuth().get('/friends')
            .then(res => {
                this.setState({
                    ...this.state,
                    friends: res.data
                })
                .catch(err => console.log(err))
            })
    }

    formatData = () => {
        const formattedData = [];
        this.state.friends.forEach((item, index) => {
            formattedData.push({
                id: index+1,
                name: item.name,
                email: item.email
            })
        })
        return formattedData;
    }

    render() {
        const friendsList = this.formatData();
        return (
            <div>
                { friendsList.map(item => (
                    <div className="friends-list" key={item.id}>
                        <div className="friend-card">
                            <h3>-{item.name}-</h3>
                            <h3>-{item.email}-</h3>
                        </div>
                    </div>
                ))}
                <Router>
                    <div>
                        <Link to='/add'>Add Friends</Link>
                        <Switch>
                            <PrivateRoute path='/friends/add' component={AddFriend} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default FriendsList;