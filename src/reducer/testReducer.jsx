import {TEST_REDUCER} from '../actions/testAction';

export function testReducer(state = 0, action) {
    switch(action.type) {
        case TEST_REDUCER:
            return action.data + 1;
        default:
            return state;
    }
}