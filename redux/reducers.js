// reducers.js
const initialState = {
    title: 'Friday days come',
    paragraph: 'fjezo fjzo jefoz jeffe fejofzef zfjeof but notyig fsdf sdf vc xdfdfd sdfsdf sdj dsdjf sdfsfd sd efzef efze zefzef zefzeff zfeezf zfeze zefze ',
    image: require('../images/gift.png'),
    button:'Next'
};

const coverReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COVER_INFO':
            return {
                ...state,
                title: action.payload.title,
                paragraph: action.payload.paragraph,
                image: action.payload.image,
                button: action.payload.button,

            };
        default:
            return state;
    }
};

export default coverReducer;
