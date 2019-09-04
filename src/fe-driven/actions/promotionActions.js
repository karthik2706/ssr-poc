import PC from '../constants/promotionConstants';
const promotions = {
    promotions: [
        {
            id: 'first',
            ctaText: 'banner for first promo',
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
    viewAllCtaLink: '/content/we-retail/language-masters'
};

/**
 * @deprecated
 * @description get on product selected/focus
 * @param {number} index redux dispatch
 * @returns {void}
 */
export const setUpPromotions = () => (dispatch) => {
    dispatch({
        type: PC.SET_PROMOTIONS,
        payload: promotions
    });
};
