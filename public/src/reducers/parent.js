function Parent(state = [{name:'parent',age: 40}], action) {
    if (action.type === 'PADD'||action.type === "PREDUCE") {
        return [...state,action.result];
    }

    return state;
}

module.exports = Parent;