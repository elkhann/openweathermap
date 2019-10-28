import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const Error = ({ error }) => {
	const useStyles = makeStyles((theme) => ({
		root: {
			color: '#000',
			background: '#FEBFBF',
			padding: theme.spacing(2),
			display: 'flex',
			alignItems: 'center',
			fontSize: '18px'
		},
		error: {
			paddingTop: theme.spacing(4)
		}
	}));

	const classes = useStyles();

	return (
		<Fragment>
			{error ? (
				<Grid item xs={12} className={classes.error}>
					<Card>
						<Paper className={classes.root}>{error}</Paper>
					</Card>
				</Grid>
			) : (
				''
			)}
		</Fragment>
	);
};

const mapStateToProps = ({ fetch }) => {
	return { error: fetch.hasError };
};

export default connect(mapStateToProps)(Error);
