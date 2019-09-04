import asyncComponent from './AsyncComponent';

const Header = asyncComponent(() => import(/* webpackChunkName: "ProductCarousel" */'../shared/components/containers/Header').then(module => module.default));
const BannerComponent = asyncComponent(() => import(/* webpackChunkName: "ProductCarousel" */'../shared/components/containers/Banner').then(module => module.default));
const VideoBannerComponent = asyncComponent(() => import(/* webpackChunkName: "ProductCarousel" */'../shared/components/common/VideoBannerComponent').then(module => module.default));
const TextImageCarouselComponent = asyncComponent(() => import(/* webpackChunkName: "ProductCarousel" */'../shared/components/common/TextImageCarouselComponent').then(module => module.default));
const StickyTrigger = asyncComponent(() => import(/* webpackChunkName: "ProductCarousel" */'../shared/components/common/StickyPromo/tester').then(module => module.default));
const StickyPromotion = asyncComponent(() => import(/* webpackChunkName: "ProductCarousel" */'../shared/components/common/StickyPromo').then(module => module.default));

const componentMap = {
    'kohls-header': { comp: Header, isPure: false },
    'kohls-banner': { comp: BannerComponent, isPure: false },
    'kohls-video-banner': { comp: VideoBannerComponent, isPure: false },
    'kohls-text-image-carousel': { comp: TextImageCarouselComponent, isPure: false },
    'kohls-stickytester': { comp: StickyTrigger, isPure: false },
    'kohls-sticky-promotions': { comp: StickyPromotion, isPure: false },
};

export default componentMap;
