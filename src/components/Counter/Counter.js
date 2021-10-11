import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import * as actions from '../../redux/counter/counter-actions';
import './Counter.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

/*  mapStateToProps - это ф-я, которая будет получать абсолютно все состояние 
приложения и возвращает объект и то что положим свойствами объекта, то и будет
пропсами компонента:

const mapStateToProps = state => {
  return {
    a: 5,
    b: 10,
    c: 15,
  }
}
*/

// dispatch доставляет наши actions до хранилища
/* mapDispatchToProps - ф-я позволяющая передать методы для отправки actions
 */
