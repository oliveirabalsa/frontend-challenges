/* eslint-disable import/no-anonymous-default-export */
export default function (price: string) {
        price = price.toString();
      
        const priceLength = price.length;
      
        return [price.slice(0, price.length - 2), price.slice(priceLength - 2)];
}