import React, {ReactElement, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Qs from 'qs';
import {Pizza, pizzaSchema} from '../models/Pizza';

// The pizza we're expecting to find in the query string.
const pizzaToRead: Pizza = {
  id: 1,
  name: 'Pepperoni',
  description: 'So good!',
};

const PizzaTypedReader = (): ReactElement | null => {
  const [searchParams] = useSearchParams();

  // The pizza retrieved from the query string, if any.
  const [pizza, setPizza] =
    useState<Pizza | null>(null);

  useEffect(() => {
    // Parsing the pizza in the query string.
    const pizzaRaw = Qs.parse(searchParams.toString());

    // Trying to parse a pizza with Yup.cast.
    try {
      const newPizza = pizzaSchema.cast(pizzaRaw) as Pizza;

      // The object is a pizza.
      setPizza(newPizza);
    } catch (error) {
      // The object is *not* a pizza.
      setPizza(null);
    }
  }, [searchParams]);

  // Displaying information about the pizza, if any.
  return (
    <div className={'querystring-reader'}>
      <h1>PizzaTypedReader</h1>
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

export default PizzaTypedReader;
