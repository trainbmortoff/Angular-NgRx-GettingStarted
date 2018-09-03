import { User } from '../user';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from 'src/app/user/state/user.action';

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

const initialState: UserState = {
    maskUserName: false,
    currentUser: null
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);

export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.currentUser
);

export function reducer(state = initialState, action: UserActions) {
    switch (action.type) {
        case UserActionTypes.MaskUserName:
            return {
                maskUserName: action.payload
            };

        default:
            return state;
    }
}
