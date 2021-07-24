import * as api from '../api/index.js';

export const signIn = (form, history) => async (dispatch) => {
	try {
		const { data } = await api.signIn(form);
		dispatch({ type: 'SIGN_IN', data });
		history.goBack();
	} catch (error) {
		console.log(error);
	}
};

export const signUp = (form, history) => async (dispatch) => {
	try {
		const { data } = await api.signUp(form);
		dispatch({ type: 'SIGN_UP', data });
		history.push('/');
	} catch (error) {
		console.log(error);
	}
};
