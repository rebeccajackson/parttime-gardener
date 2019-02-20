//actions - index.js

export function receiveLogin(user) {
  return {
    type: 'LOGIN_SUCCESS',
    user
  };
}

export function loadMonths(months) {
  return {
    type: 'LOAD_MONTHS',
    months
  };
}

export function loadMonthVeges(monthVeges) {
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
  return {
    type: 'LOAD_MONTH',
    month
  }
}

export const loadUserVeges = (userVeges) => {
  return {
    type: 'LOAD_USER_VEGES',
    userVeges
  }
}

export const setVeg = (currentVeg) => {
  return {
    type: 'SET_VEG',
    currentVeg
  }
}

export const addedVegtoGarden = () => {
  return {
    type: 'ADDED_VEG'
  }
}


