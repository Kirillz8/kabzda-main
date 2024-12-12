import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('collapsed should be true', () => {

    //data
    const state: StateType = {
        collapsed: false,
    }

    //action
    const newState = reducer (state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(false)
})

test('collapsed should be false', () => {

    //data
    const state: StateType = {
        collapsed: true,
    }

    //action
    const newState = reducer (state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because of incorrect value of action type', () => {

    //data
    const state: StateType = {
        collapsed: true,
    }

    //expectation
    expect(()=> reducer (state, {type: 'danger'})).toThrowError()
})