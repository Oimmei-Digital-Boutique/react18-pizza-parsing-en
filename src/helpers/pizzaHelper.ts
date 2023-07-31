import {Pizza} from '../models/Pizza';

// Type guard to make sure any object is a Pizza.
export const isPizza = (obj: any): obj is Pizza => {
  return 'id' in obj && 'name' in obj && 'description' in obj;
}
