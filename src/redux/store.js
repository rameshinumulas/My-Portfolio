import { createStore } from 'redux';
import { congigureStore } from '@reduxjs/toolkit';
import RootReducer from './RootReducer';

export const store = congigureStore({
    reducer: {
        RootReducer
    }
});