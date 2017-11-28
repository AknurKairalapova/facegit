import {React, Component} from 'react';
import {connect} from 'react-redux';
import {getUserData, getError, getIsFetching, getIsFetched} from '../../reducers/users';
import {fetchUserRequest} from '../../actions/users';
import {Followers} from '../Followers';

export class UserPage extends Component {

    componentDidMount() {
        const {
            isFetched,
            fetchUserRequest
          } = this.props;
      
          if (!isFetched) fetchUserRequest();
    }

    componentWillReceiveProps (nextProps) {
        
    }

    render() {
        const {isFetching, error, data} = this.props;

        if (isFetching) {
            return <p>Here is the spinner</p>;
        }

        if (!isFetching && data === null) {
            return <p>Пользователь не существует</p>
        }

        if (error !== null) {
            return <p style={{color: 'red'}}>Ошибка! {error}</p>;
        }

        if (!isFetching && data !== null) {
            return (
                <div>
                    <div className="user__profile">
                        <div className="user__avatar">
                            <img src={data.avatar_url} alt={data.login} />
                        </div>
                        <div className="user__info">
                            <h3>{data.login}</h3>
                            <p>Followers: {data.followers}</p>
                            <p>Public Repos: {data.public_repos}</p>
                        </div>
                    </div>
                    <div className="user__followers">
                        <Followers
                            login={data.login}
                            followers={data.followers}
                        />
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    data: getUserData(state),
    error: getError(state),
    isFetching: getIsFetching(state),
    isFetched: getIsFetched(state)
  });
  
  const mapDispatchToProps = {
    fetchUserRequest
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
  