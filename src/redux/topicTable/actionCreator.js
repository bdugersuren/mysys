import actions from './actions';
import initialState from '../../demoData/topicData.json';

const { loadTopicBegin, loadTopicSuccess, loadTopicErr } = actions;

const loadTopicDatas = () => {
  return async dispatch => {
    try {
      dispatch(loadTopicBegin());
      dispatch(loadTopicSuccess(initialState));
    } catch (err) {
      dispatch(loadTopicErr(err));
    }
  };
};

export { loadTopicDatas };
