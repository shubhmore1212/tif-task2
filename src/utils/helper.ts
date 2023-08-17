export const handleInputChange = (
  name: string,
  value: string | number,
  setState: Function,
  form: string
) => {
  setState((prev: any) => ({
    ...prev,
    [form]: {
      ...prev[form],
      [name]: value,
    },
  }));
};
