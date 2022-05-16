

// Create functions to handle your actions.


import {TASK} from '../types';

export const fetchTasksAction = (tasks) => ({
  type: TASK.FETCHED_START,
  payload: tasks,
});

export default {
  fetchTasksAction,
};
