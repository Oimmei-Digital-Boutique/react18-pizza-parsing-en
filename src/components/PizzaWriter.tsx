import React, {ReactElement} from 'react';
import {useSearchParams} from 'react-router-dom';
import Qs from 'qs';
import {Pizza} from '../models/Pizza';

// The pizza to be delivered via query string.
const pizzaToWrite: Pizza = {
  id: 1,
  name: 'Pepperoni',
  description: 'So good!',
};

const PizzaWriter = (): ReactElement => {
  // Function to manipulate the query string.
  const [, setSearchParams] = useSearchParams();

  // Saving the pizza in the query string on click.
  const savePizzaInQueryString = (): void => {
    setSearchParams(Qs.stringify(pizzaToWrite));
  }

  return (
    <div className={'querystring-writer'}>
      <h1>PizzaWriter</h1>
      <button onClick={savePizzaInQueryString}>
        Save pizza in query string
      </button>
    </div>
  );
}

export default PizzaWriter;
