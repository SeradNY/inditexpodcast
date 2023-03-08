export const INCREASE_COUNTER = "INCREASE_COUNTER";

export const increaseCounter = (amount) => {
    return {
        type: INCREASE_COUNTER,
        payload: amount
    }
}