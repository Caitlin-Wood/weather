
const tempReducer = (state=null, action) => {
	switch (action.type) {
		case 'CURRENT_TEMP':
			return action.payload;
		default: 
			return state;
	}

};

export default tempReducer;