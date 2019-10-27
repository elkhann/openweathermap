import React, { useState } from 'react';
import { connect } from 'react-redux';

import { checkCity } from '../store/actions';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

const CityAdd = ({ addCity, cities }) => {
	const [ value, setValue ] = useState('');
	const inputChange = (e) => {
		const value = e.target.value;
		setValue(value);
	};

	const onAdd = (e) => {
		if (value) {
			addCity(e, value, cities);
		}
	};

	const useStyles = makeStyles((theme) => ({
		root: {
			color: '#fff',
			background: '#4876c2',
			padding: '2px 4px',
			display: 'flex',
			alignItems: 'center'
		},
		input: {
			color: '#fff',
			marginLeft: theme.spacing(1),
			flex: 1
		},
		iconButton: {
			padding: 10,
			color: '#fff'
		},
		divider: {
			height: 28,
			margin: 4
		}
	}));

	const classes = useStyles();

	return (
		<Grid item xs={12} container justify="center" alignItems="center" className={classes.grid}>
			<form onSubmit={(e) => onAdd(e)}>
				<Paper className={classes.root}>
					<InputBase
						className={classes.input}
						placeholder="Enter City"
						inputProps={{ 'aria-label': 'add city' }}
						onChange={(e) => inputChange(e)}
					/>

					<Divider className={classes.divider} orientation="vertical" />
					<IconButton
						onClick={(e) => onAdd(e)}
						color="primary"
						className={classes.iconButton}
						aria-label="directions"
					>
						Add
					</IconButton>
				</Paper>
			</form>
		</Grid>
	);
};

const mapStateToProps = ({ cities }) => {
	return { cities };
};

const mapDispatchToProps = (dispatch) => {
	return {
		addCity: (e, value, cities) => {
			console.log(cities);
			e.preventDefault();
			dispatch(checkCity(value, cities));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CityAdd);
