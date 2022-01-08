import { inject, observer } from 'mobx-react';
import { useCallback } from 'react';
import Person from '../components/Person';

const PersonContainer = ({ personStore }) => {
  const age10 = personStore.age10;

  // personStore 객체가 바뀌지 않으면 이 함수는 새로 만들어지지 않는다.
  const plus = useCallback(() => {
    personStore.plus();
  }, [personStore]);

  return <Person age10={age10} plus={plus} />;
};

export default inject('personStore')(observer(PersonContainer));
