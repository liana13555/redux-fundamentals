export const myAction = value => {
  return {
    type: 'MY_ACTION',
    payload: value,
  };
};

export const myAction2 = {
  type: 'MY_ACTION_2',
  payload: 'super payload 2',
};
