import * as yup from 'yup';

export interface Pizza {
  id: number

  name: string

  description?: string
}

// Yup schema for a Pizza object.
export const pizzaSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required(),
  description: yup.string(),
});
