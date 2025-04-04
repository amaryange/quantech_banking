import { Logger } from 'tslog';

const isProduction = process.env.NEXT_PUBLIC_NODE_ENV === 'production';
console.log('Is production:', isProduction); // Vérifiez que cette valeur est correcte
export const logger = new Logger({
    name: 'Quantech Banking',
    minLevel: isProduction ? 3 : 0, // 3 = Warn, 0 = Trace
});
