const initialState = []

export const itemsReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_ITEM':
			return [...state, payload.item];
		case 'TOGGLE_ITEM':
      // TBD
			return state;
		case 'DELETE_ITEM':
			return state.filter(item => item.id !== payload.id);
		default:
			return state;
	}
};