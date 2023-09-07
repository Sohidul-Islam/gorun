export const currentUserInit = {
  shop: {},
  seller: {},
  admin: {},
  userType: null,
  adminType: null,
  credentialUserId: "",
};

export const currentUserReducer = (state, { type, payload }) => {
  switch (type) {
    case "shop":
      return {
        ...state,
        shop: payload.shop,
        userType: payload.isCurrentUser ? "shop" : state.userType,
      };

    case "seller":
      return {
        ...state,
        seller: payload.seller,
        userType: payload.isCurrentUser ? "seller" : state.userType,
      };

    case "admin":
      return {
        ...state,
        admin: payload.admin,
        userType: payload.isCurrentUser ? "admin" : state.userType,
        adminType: payload.admin?.adminType,
      };

    case "credentialUserId":
      return {
        ...state,
        credentialUserId: payload.credentialUserId,
      };

    default:
      return state;
  }
};
