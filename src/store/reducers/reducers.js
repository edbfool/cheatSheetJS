export function users (state = [], action) {
    return Object.assign([], state, action.users)
}

export function pics (state = [], action) {
    return {}
}