import {React, Component} from 'react';
import {connect} from 'react-redux';
import {fetchFollowersRequest} from '../actions/followers';
import {getFollowers, getError, getIsFetching, getIsFetched} from '../../reducers/followers';
import {Follower} from '../Follower';

export class Followers extends Component {

    componentDidMount = () => {
        const { isFetched, fetchFollowersRequest } = this.props;
      
        if (!isFetched) fetchFollowersRequest();
    }

    render() {
        const {isFetching, error, ids, followers, login} = this.props;

        if (isFetching) {
            return <p>Here is the spinner</p>;
        }

        if (error !== null) {
            return <p style={{color: 'red'}}>Ошибка! {error}</p>;
        }

        return(
            <div>
                {ids.map((id) => (
                    <Follower follower={id} />
                ))
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ids: getFollowers(state),
    error: getError(state),
    isFetching: getIsFetching(state),
    isFetched: getIsFetched(state)
  });
  
  const mapDispatchToProps = {
    fetchFollowersRequest
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Followers);