import fetch from 'isomorphic-fetch';
import Constants from '../Constants';

// Actions
const PROMO_LEFT = 'PROMO_LEFT';
const PROMO_ENTERED = 'PROMO_ENTERED';

const initialState = {
  promotions: [
    {
      id: 'first',
      ctaText: 'Take an extra 15% OFF with Promo Code: SPRINGTIME',
      ctaLink: '#',
      color: 'green'
    },
    {
      id: 'second',
      ctaText: 'banner for second promo',
      ctaLink: '#',
      color: 'blue'
    },
    {
      id: 'third',
      ctaText: 'banner for third promo',
      ctaLink: '#',
      color: 'red'
    },
    {
      id: 'fourth',
      ctaText: 'banner for fourth promo',
      ctaLink: '#',
      color: 'amber'
    },
    {
      id: 'fifth',
      ctaText: 'banner for fifth promo',
      ctaLink: '#',
      color: 'cyan'
    },
    {
      id: 'sixth',
      ctaText: 'banner for sixth promo',
      ctaLink: '#',
      color: 'pink'
    },
    {
      id: 'seventh',
      ctaText: 'banner for seventh promo',
      ctaLink: '#',
      color: 'indigo'
    },
  ],
  applicablePromos: [
    {
      relationHeading: 'FRIENDS+FAMILY',
      promotionText: 'Take an extra 20% off',
      promotionDescription: '<p>with your Friends + Famiily Pass\nPromo code: MYFAMILY20\nEnds May 5. Get pass for Detailis & Exlucsions.</p>',
      ctaText: 'APPLY NOW',
      ctaLink: '/content/dam',
      type: 'type1'
    },
    {
      relationHeading: '',
      promotionText: 'Take an extra $10 off',
      promotionDescription: '<p>Promo code: SPRINGTIME\nEnds March 31\nGet pass for details and exclusions.</p>',
      ctaText: 'APPLY NOW',
      ctaLink: '/content/dam',
      type: 'type2'
    },
    {
      relationHeading: '',
      promotionText: 'Get $10 Kohl’s Cash',
      promotionDescription: '<p>for every $50 spend through March 31. Redeemable April 1-7. Detail and exclusions.</p>',
      promotionImage: '../../../../assets/images/wallet-kohls-cash.png',
      type: 'type3'
    }
  ],
  currentPromotion: 'first',
  viewAllCta: 'View ALL Coupons',
  viewAllCtaLink:'/content/we-retail/language-masters'
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PROMO_LEFT: {
      return {
        ...state,
        currentPromotion: state.promotions[action.payload - 1].id
      }
    }
    case PROMO_ENTERED: {
      return {
        ...state,
        currentPromotion: state.promotions[action.payload].id
      }
    }
    default:
      return state;
  }
}

// Action Creators
const handleOutOfView = data => ({ type: PROMO_LEFT, payload: data });
const handleInsideView = data => ({ type: PROMO_ENTERED, payload: data });

export const outOfSection = ({ currentPosition, previousPosition, id }) => (dispatch, getState) => {
  if (currentPosition === 'below' && previousPosition === 'inside') {

    let index = -1;
    const { promotions } = getState().promotions;
    
    promotions.forEach((promo, i) => {
      if (promo.id === id) {
        index = i;
      }
    });

    // section has left view port
    // console.log(`currently viewing ${index} promotion`);

    if (index !== -1) {
      if (index === 0) {
        return dispatch(handleOutOfView(1));
      }
      return dispatch(handleOutOfView(index));
    }
  }
};

export const insideSection = ({ currentPosition, previousPosition, id }) => (dispatch, getState) => {
  if (currentPosition === 'inside' && previousPosition === 'below') {
    let index = -1;
    const { promotions } = getState().promotions;
    
    promotions.forEach((promo, i) => {
      if (promo.id === id) {
        index = i;
      }
    });
    // section has entered view port
    // console.log(`${id} has entered view port`)
    // console.log(`currently viewing ${index} promotion`);

    return dispatch(handleInsideView(index));
  }
};
