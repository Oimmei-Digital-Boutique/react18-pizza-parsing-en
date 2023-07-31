import React, {ReactElement, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Qs from 'qs';
import {Pizza} from '../models/Pizza';
import {isPizza} from '../helpers/pizzaHelper';

// The pizza we're expecting to find in the query string.
const pizzaToRead: Pizza = {
  id: 1,
  name: 'Pepperoni',
  description: 'So good!',
};

const PizzaReader = (): ReactElement | null => {
  const [searchParams] = useSearchParams();

  // The pizza retrieved from the query string, if any.
  const [pizza, setPizza] =
    useState<Pizza | null>(null);

  useEffect(() => {
    // Parsing the pizza in the query string.
    const pizzaRaw = Qs.parse(searchParams.toString());

    // If the object is a pizza, saving that in the state.
    if (isPizza(pizzaRaw)) {
      setPizza(pizzaRaw);
    }
  }, [searchParams]);

  // Displaying information about the pizza, if any.
  return (
    <div className={'querystring-reader'}>
      <h1>PizzaReader</h1>
      {pizza !== null ? (
        <div className={'pizza-info'}>
          <div>
            <div className={'bold'}>ID</div>
            <div>{pizza.id}</div>
          </div>
          <div>
            <div className={'bold'}>Name</div>
            <div>{pizza.name}</div>
          </div>
          <div>
            <div className={'bold'}>Description</div>
            <div>{pizza.description}</div>
          </div>
          <div>
            {/* If this is a pepperoni pizza, meaning the one we expect, saying Yes. */}
            <div className={'bold'}>Pepperoni</div>
            <div>{pizza.id === pizzaToRead.id ? 'Yes' : 'No'}</div>
          </div>
        </div>
      ) : (
        'No pizza in the query string :('
      )}
    </div>
  );
};

export default PizzaReader;
