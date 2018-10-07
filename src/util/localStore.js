export default {
    getItem: function (key){
        let value;
        try {
            value  =  localStorage.getItem(key);
        } catch (error) {
            console.error("localStorage.getItem报错：" + error);
        }
        return value;
    },

    setItem: function(key,value) {
        try {
            const state = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : {};
            console.log(localStorage.getItem("state"));
            state[key] = value;
            localStorage.setItem("state",JSON.stringify(state));
        } catch (error) {
            console.error("localStorage.setItem报错：" + error);
        }
    },
    removeItem: function(key) {
        localStorage.removeItem(key);
    }
}