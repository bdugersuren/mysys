import actions from "./actions";
//import initialState from '../../demoData/subjectData.json';
import axios from "../../utility/axios";

const { loadSubjectBegin, loadSubjectSuccess, loadSubjectErr } = actions;

const loadSubjectDatas = () => {
  return async (dispatch) => {
    try {
      dispatch(loadSubjectBegin());

      await axios.get("category").then(({ data }) => {
        return dispatch(loadSubjectSuccess(data));
      });

    } catch (err) {
      dispatch(loadSubjectErr(err));
    }
  };
};

export { loadSubjectDatas };


 //dispatch(loadSubjectSuccess(initialState));