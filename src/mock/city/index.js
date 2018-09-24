import  get from '../../fetch/get';

export function getCityData() {
    const result = get('/api/getCityData')
    return result;
}