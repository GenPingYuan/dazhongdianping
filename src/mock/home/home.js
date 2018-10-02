import  get from '../../fetch/get';

export function getAdData() {
    const result = get('/api/homed')
    return result;
}


export function getCatagory() {
    return get("/api/catagory");
}

export function getFavicoty(city,page) {
    return get("/api/guessFavorite/" + encodeURIComponent(city) + "/" + page);
}