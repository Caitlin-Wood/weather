import React from 'react';
import GetTemp from './GetTemp';
import {connect} from 'react-redux';
import {fetchLocation} from '../actions';

class GetLocation extends React.Component {
	
		state = {
		lat: null, 
		lon: null,
		errorMessage: ''
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition (
			position => { this.setState ({
					lat: position.coords.latitude, 
					lon: position.coords.longitude
				});
			}, 
			err => this.setState ({errorMessage: err.message })
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
				return <div> Error: {this.state.errorMessage} </div>;
		}
		
		if (!this.state.errorMessage && this.state.lat && this.state.lon) {
			return (
				<div> <h1>Check your local temperature!</h1>
					<GetTemp lat={this.state.lat} lon={this.state.lon} />
				</div>
			);
		}
		
		return <div> "Do I need a toque and mitts today? " </div>

	}

	render() {
		return (
			<div>{this.renderContent()}
		</div>
		);
	}

}


export default GetLocation;



