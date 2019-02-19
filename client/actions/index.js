//actions - index.js

export function receiveLogin(user) {
  return {
    type: 'LOGIN_SUCCESS',
    user
  };
}

export function loadMonths(months) {
  console.log(months)
  return {
    type: 'LOAD_MONTHS',
    months
  };
}

export function loadMonthVeges(monthVeges) {
  console.log(monthVeges)
  return {
    type: 'LOAD_MONTH_VEGES',
    monthVeges
  };
}

export const showError = (errorMessage) => {
  return {
    type: 'SHOW_ERROR',
    errorMessage: errorMessage
  }
}

export const redirect = (month) => {
  console.log('redirecting to: ', month)
  return {
    type: 'REDIRECT',
    month
  }
}


