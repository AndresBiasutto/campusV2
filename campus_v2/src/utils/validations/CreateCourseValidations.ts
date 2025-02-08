export const validateName = (value: string) => {
  return value.length > 2 ? "" : "El nombre debe tener al menos 3 caracteres.";
};
export const validateDescription = (value: string) => {
  return value.length > 10
    ? ""
    : "La descripción debe tener al menos 10 caracteres.";
};
export const validateTheme = (value: string) => {
  return value ? "" : "El tema es obligatorio.";
};


