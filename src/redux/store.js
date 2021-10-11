import { createStore } from 'redux';

const reducer = (state = {}, action) => {
  console.log('Лог экшена в reducer:', action);
  return state;
};
// принимает предыдущее состояние state и действие и возвращает след.состояние

const store = createStore(reducer);

export default store;

/*
createStore(reducer, [preloadedState], [enhancer])
[preloadedState], [enhancer] - необязательные параметры
*/
