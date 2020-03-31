export const TEST_REDUCER = "TEST_REDUCER";

export function setReducerInfo (info) {
    return {
        type: TEST_REDUCER,
        data: info
    }
}