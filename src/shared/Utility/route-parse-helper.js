export const getIndustryCode = (state, noSlash) => {
    let pageUrl = '';
    let industry;
    if (state && state.server && state.server.reqUrl) {
        pageUrl = state.server.reqUrl
    }   else if (typeof window !== "undefined" && window) {
        pageUrl = window.location.pathname;
    }

    if (pageUrl) {
        const locationSegmentArr = pageUrl.split("/");
        //make sure industry is passed as second path or else don't bother to fetch industryId
        if (locationSegmentArr.length>2 && locationSegmentArr[1].toLowerCase() == "industry") {
          industry = locationSegmentArr[2];
        }
    }

    console.log('industry', industry);
    //send back '/' at the end
    return industry ? industry + (noSlash?'':'/') : '';
}

export const getProductCategory = (state, noSlash) => {
    let pageUrl = '';
    let productCategory;
    if (state && state.server && state.server.reqUrl) {
        pageUrl = state.server.reqUrl
    }   else if (typeof window !== "undefined" && window) {
        pageUrl = window.location.pathname;
    }
    console.log('pageUrl', pageUrl);

    if (pageUrl) {
        const locationSegmentArr = pageUrl.split("/");
        //make sure industry is passed as second path or else don't bother to fetch industryId
        if (locationSegmentArr.length>3) {
            productCategory = `${locationSegmentArr[3]}/${locationSegmentArr[4]}`;
        }
    }

    console.log('Product Category', productCategory);
    return productCategory||'fruits/sku-fruit-0001';
}