export const required = value =>
  value && value !== 'none' ? undefined : 'Required';
export default {
  required,
};
