export function formatCurrency(priceCents){
    //example: 2095 -> 20.95
    return (Math.round(priceCents) / 100).toFixed(2);
}

export default formatCurrency;