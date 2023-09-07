const defaultCurrency = {
  symbol: '€',
  name: 'Euro',
  symbol_native: '€',
  decimal_digits: 2,
  rounding: 0,
  code: 'EUR',
  name_plural: 'euros',
};

export const generalInit = {
  currency: { ...defaultCurrency },
  appSetting: {
    currency: { ...defaultCurrency },
    acceptedCurrency: '',
    exchangeRate: 0,
    maxCustomerServiceValue: 0,
    maxDiscount: [],
    maxDistanceForButler: 0,
    maxTotalEstItemsPriceForButler: 0,
    nearByShopKm: 0,
    nearByShopKmForUserHomeScreen: 0,
    searchDeliveryBoyKm: [],
    secondaryCurrency: { ...defaultCurrency },
    vat: 0,
  },
};

export const generalReducer = (state, { type, payload }) => {
  switch (type) {
    case 'currency':
      return {
        ...state,
        currency: payload?.currency,
      };

    case 'appSetting':
      return {
        ...state,
        currency: payload?.appSetting?.baseCurrency,
        appSetting: payload?.appSetting,
      };

    default:
      return state;
  }
};
