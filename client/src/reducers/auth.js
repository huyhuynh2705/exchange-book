const authReducer = (state = { authData: null, isLoading: true }, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
			return { ...state, authData: action.data };
		case 'SIGN_UP':
			localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
			return { ...state, authData: action.data };
		case 'LOG_OUT':
			localStorage.clear();
			return { ...state, authData: null };
		default:
			return state;
	}
};

export default authReducer;
