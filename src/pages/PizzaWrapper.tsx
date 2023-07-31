import React, {ReactElement} from 'react';
import PizzaWriter from '../components/PizzaWriter';
import PizzaReader from '../components/PizzaReader';
import PizzaTypedReader from '../components/PizzaTypedReader';

const PizzaWrapper = (): ReactElement | null => {
  return (
    <>
      <PizzaWriter/>
      <PizzaReader/>
      <PizzaTypedReader/>
    </>
  );
}

export default PizzaWrapper;
