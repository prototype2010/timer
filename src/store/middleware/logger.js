export default store => next => ({type, payload}) => {
    console.warn(type, payload);
    next({type, payload});
};