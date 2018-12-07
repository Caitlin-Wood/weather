import React from 'react';
import {fetchTemp} from '../actions';

import {connect} from 'react-redux';


class GetTemp extends React.Component {

	render() {
		return (
			<div> <h2>The current temp is ...</h2>
				<div>
				<div className="temp"> 
					<div className="result">
							<strong>{this.props.temp}</strong> 	&deg;C
					</div>
				</div>
					<button 
								className="ui grey button primary"
								onClick={() => this.props.fetchTemp(this.props.lat, this.props.lon)}> GET TEMP! 
					</button>
				</div>

			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {temp: state.temp}
};


export default connect(
	mapStateToProps, 
	{fetchTemp: fetchTemp}
	) (GetTemp);

				