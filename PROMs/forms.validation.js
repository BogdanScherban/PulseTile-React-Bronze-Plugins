import { valuesNames } from './forms.config';

const validateSelectHelpers = (values, fieldName, selectPlaceholder, errorMessage) => {
  if (!values[fieldName] || values[fieldName] === selectPlaceholder) {
    return errorMessage
  }
  return null;
};

const validateForm = (values) => {
  const errors = {};
  errors[valuesNames.NAME] = !values[valuesNames.NAME] ? 'You must enter a value.' : null;
  errors[valuesNames.RECORDS] = !values[valuesNames.RECORDS] ? 'You must enter a value.' : null;
  errors[valuesNames.SPECIFIC_Q1] = validateSelectHelpers(values, valuesNames.SPECIFIC_Q1, '-- Select --', 'You must enter a correct value.');
  errors[valuesNames.SPECIFIC_Q2] = validateSelectHelpers(values, valuesNames.SPECIFIC_Q2, '-- Select --', 'You must enter a correct value.');
  errors[valuesNames.SPECIFIC_Q3] = validateSelectHelpers(values, valuesNames.SPECIFIC_Q3, '-- Select --', 'You must enter a correct value.');
  errors[valuesNames.SPECIFIC_Q4] = validateSelectHelpers(values, valuesNames.SPECIFIC_Q4, '-- Select --', 'You must enter a correct value.');
  errors[valuesNames.SPECIFIC_Q5] = validateSelectHelpers(values, valuesNames.SPECIFIC_Q5, '-- Select --', 'You must enter a correct value.');

  return errors
};

export { validateForm }
