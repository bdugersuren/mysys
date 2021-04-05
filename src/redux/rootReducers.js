import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { i18nReducer } from "react-redux-i18n";
import { combineReducers } from 'redux';

import authReducer from './authentication/reducers';
import {routeMenusReducer} from './roleMenu/reducers';
import {classTableReducer} from './classTable/reducers';
import {subjectTableReducer} from './subjectTable/reducers';
import {topicTableReducer} from './topicTable/reducers';


const persistConfig = {
  key:'root',
  storage,
  whitelist: ['auth','roleMenu', 'i18n']
}

const rootReducers = combineReducers({
  auth: authReducer,  
  roleMenu:routeMenusReducer,
  classTable:classTableReducer,
  subjectTable: subjectTableReducer,
  topicTable:topicTableReducer,
  i18n: i18nReducer,
});

export default persistReducer(persistConfig, rootReducers);
//export default rootReducers;
