import React from 'react';
import WeatherList from './WeatherList';
import WeatherSearch from './WeatherSearch';
import { connect } from 'react-redux';
import { itemsFetchData } from '../store/actions';
import { url } from '../api/openweather';

// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class Weather extends React.Component {
	componentDidMount() {
		this.props.fetchData(url);
		console.log(this.props.weather);
	}
	// useEffect(
	// 	() => {
	// 		fetchData(url);
	// 		console.log(fetchData(url));
	// 	},
	// 	[ fetchData ]
	// );
	render() {
		// const useStyles = makeStyles((theme) => ({
		// 	grid: {
		// 		backgroundColor: '#2053b3',
		// 		margin: 0
		// 	}
		// }));

		// const classes = useStyles();
		return (
			<Container maxWidth="sm">
				<Grid container justify="center" alignItems="center" className="grid">
					{true ? (
						<React.Fragment>
							<WeatherSearch />
							<WeatherList />
						</React.Fragment>
					) : (
						''
					)}
				</Grid>
			</Container>
		);
	}
}

const mapStateToProps = (state, { weather }) => {
	return {
		weather,
		items: state.items,
		hasErrored: state.itemsHasErrored,
		isLoading: state.itemsIsLoading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(itemsFetchData(url))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
