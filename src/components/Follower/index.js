import {React, Component} from 'react';

export class Follower extends Component {

    render() {
        const {avatar_url, login} = this.props;
        const url = "/user/" + login;

        return(
            <div>
                <div>
                    <img src={avatar_url} alt={login} />
                </div>
                <div>
                    <a href={url}>{login}</a>
                </div>
            </div>
        );
    }
}