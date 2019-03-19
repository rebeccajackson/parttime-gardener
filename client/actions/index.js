//actions - index.js

export const LOAD_MONTH = 'LOAD_MONTH'
export const LOAD_MONTHS = 'LOAD_MONTHS'
export const LOAD_MONTH_VEGES = 'LOAD_MONTH_VEGES'
export const LOAD_PLANTING_MONTHS = 'LOAD_PLANTING_MONTHS'
export const SHOW_ERROR = 'SHOW_ERROR'
export const SET_VEG = 'SET_VEG'
export const DISPLAY_VIEW_VEG = 'DISPLAY_VIEW_VEG'


export function loadMonths(months) {
  return {
    type: LOAD_MONTHS,
    months
  };
}

export function loadMonthVeges(monthVeges) {
  return {
    type: LOAD_MONTH_VEGES,
    monthVeges
  };
}

export function loadPlantingMonths(plantingMonths) {
  return {
    type: LOAD_PLANTING_MONTHS,
    plantingMonths
  };
}

export const loadMonth = (month) => {
  return {
    type: LOAD_MONTH,
    month
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const loadUserVeges = (userVeges) => {
  return {
    type: LOAD_USER_VEGES,
    userVeges
  }
}

export const setVeg = (currentVeg) => {
  return {
    type: SET_VEG,
    currentVeg
  }
}

export const displayViewVeg = (currentVeg) => {
  return {
    type: DISPLAY_VIEW_VEG,
    currentVeg
  }
}
