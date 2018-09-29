

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

//轮播页数据
var catagory = require("./home/catagory.js");
router.get("/api/catagory",  async (ctx,next) => {
    ctx.body = catagory;
});
//首页 --广告（超值特惠）
var adData = require("./home/ad.js");
router.get("/api/homed", async (ctx,next) => {
    ctx.body = adData;
});

//猜你喜欢
var favorite = require("./home/favorite.js");
router.get("/api/guessFavorite/:city/:page", async (ctx,next) => {
    let params = ctx.params;
    console.log();
    let pageSize = 6;
    let start = (params.page - 1) * pageSize;
    let end = params.page * pageSize - 1;
    console.log("start" + start);
    console.log("end" + end);
    let result = favorite.filter((item,index)=>{
        return item.city == params.city;
    });

    ctx.body = result;
});

//城市列表
var cityData = require("./city/cityList.js");
router.get("/api/getCityData", async (ctx,next) => {
    ctx.body = cityData;
})

//详情
router.get("/api/getDetailById/:id", async(ctx,next) => {
    let result;
    result = favorite.filter((item,index) => {
        return item.data.filter((data,indexd) => {
            return data.id == ctx.params.id;
        });
    })
    //console.log(result);
    console.log(ctx.params.id);
    ctx.body = result[0].data.filter((item,index) => {
        return item.id == ctx.params.id;
    })[0]
})

var comments = require("./detail/comments.js");
router.get("/api/getComments/:id", async (ctx,next) => {
    ctx.body = comments.filter((item) => {
        return item.shopId = ctx.params.id;
    })
})

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(8080);
