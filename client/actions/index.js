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

export const loadMonth = (month) => {
  console.log('redirecting to: ', month)
  return {
    type: 'LOAD_MONTH',
    month
  }
}

export const loadUserVeges = (userVeges) => {
  console.log('user veges are ', userVeges)
  return {
    type: 'LOAD_USER_VEGES',
    userVeges
  }
}

export const setVeg = (monthClickedVeg) => {
  console.log('user veges are ', monthClickedVeg)
  return {
    type: 'SET_VEG',
    monthClickedVeg
  }
}


