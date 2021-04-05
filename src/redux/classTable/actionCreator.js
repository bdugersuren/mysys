import actions from './actions';
import initialState from '../../demoData/classData.json';

const { loadClassBegin, loadClassSuccess, loadClassErr } = actions;

const loadClassDatas = () => {
  return async dispatch => {
    try {
      dispatch(loadClassBegin());
      dispatch(loadClassSuccess(initialState));
    } catch (err) {
      dispatch(loadClassErr(err));
    }
  };
};

export { loadClassDatas };
