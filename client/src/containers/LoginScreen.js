import { Login } from '../components/Login/Login';
import { connect } from 'react-redux';
import { logIn } from '../actions';

const mapStateToProps = state => ({
    summonerName: state.summonerName
});

const mapDispatchToProps = dispatch => ({
    logIn: summonerName => dispatch(logIn(summonerName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);