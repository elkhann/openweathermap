import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setCity } from '../store/actions';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const WeatherSearch = ({ city, onSetCity }) => {
	const [ value, setValue ] = useState('');
	useEffect(
		() => {
			if (city !== undefined) {
				setValue(city);
			}
		},
		[ city ]
	);

	const useStyles = makeStyles((theme) => ({
		input: {
			color: '#fff',
			textAlign: 'center',
			fontSize: '40px',
			fontWeight: '300',
			margin: '16px 32px 32px'
		},
		button: {
			color: '#fff'
		}
	}));

	const classes = useStyles();

	return (
		<form onSubmit={(e) => onSetCity(e, value)}>
			<Grid item xs={10} container justify="center" alignItems="center">
				<Grid item xs={1} />

				<Grid item xs={8}>
					<InputBase
						className={classes.input}
						defaultValue={city}
						type="text"
						onChange={(e) => setValue(e.target.value)}
						inputProps={{ 'aria-label': 'naked' }}
					/>
				</Grid>
				<Grid item xs={1}>
					<Button onClick={(e) => onSetCity(e, value)} className={classes.button}>
						Go
					</Button>
				</Grid>
			</Grid>{' '}
		</form>
	);
};

const mapStateToProps = ({ weather }) => {
	return { city: weather.city };
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetCity: (e, value) => {
			e.preventDefault();
			dispatch(setCity(value));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherSearch);
