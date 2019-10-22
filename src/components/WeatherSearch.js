import React, { useState } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const WeatherSearch = ({ city }) => {
	const [ value, setValue ] = useState('');

	return (
		<Grid item xs={10} container justify="center" alignItems="center">
			<Grid item xs={1} />
			<Grid item xs={8}>
				<InputBase
					type="text"
					defaultValue={city}
					inputProps={{ 'aria-label': 'naked' }}
					style={{
						color: '#fff',
						textAlign: 'center',
						fontSize: '40px',
						fontWeight: '300',
						margin: '16px 32px 32px',
						border: 'none'
					}}
					onChange={() => setValue(value)}
				/>
			</Grid>
			<Grid item xs={1}>
				<Button style={{ color: '#fff' }}>Go</Button>
			</Grid>
		</Grid>
	);
};

const mapStateToProps = ({ weather }) => {
	return { city: 'weather.city' };
};

export default connect(mapStateToProps)(WeatherSearch);
