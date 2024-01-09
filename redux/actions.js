// actions.js
export const setCoverInfo = (title, paragraph,image,button) => ({
    type: 'SET_COVER_INFO',
    payload: { title, paragraph, image, button },
});
