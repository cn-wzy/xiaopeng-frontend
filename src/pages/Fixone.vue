<template>
  <div class="home-wrap">
    前往维修厂
    <div class="crash-box">
      <div id="container"></div>
    </div>
  </div>
</template>

<script>
 import AMapLoader from "@amap/amap-jsapi-loader";
AMapLoader.load({
  key: "39dad4b9bb049f60ccb4dfc058c3d1aa", // 申请好的Web端开发者Key，首次调用 load 时必填
  version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  AMapUI: {
    // 是否加载 AMapUI，缺省不加载
    version: "1.1", // AMapUI 版本
    plugins: ["overlay/SimpleMarker"], // 需要加载的 AMapUI ui插件
  },
  Loca: {
    // 是否加载 Loca， 缺省不加载
    version: "2.0", // Loca 版本
  },
})
  .then((AMap) => {
    var map = new AMap.Map("container", {
      zoom: 11, //级别
      // center: [113.347, 23.126], //中心点坐标
      viewMode: "3D", //使用3D视图
    });
    var marker1 = new AMap.Marker({
      position: [113.347, 23.126], //位置
    });
    var marker2 = new AMap.Marker({
      position: [113.666, 23,333]
    })
    map.add(marker1);
    map.add(marker2);
    // var lineArr = [
    //     [113.347, 23.126],
    //     [113.347, 23.129],
    //     [113.300, 23.126],
    //     [116.398258, 39.904600]
    // ];
    // var polyline = new AMap.Polyline({
    //     path: lineArr,          //设置线覆盖物路径
    //     strokeColor: "#3366FF", //线颜色
    //     strokeWeight: 5,        //线宽
    //     strokeStyle: "solid",   //线样式
    // });
    // map.add(polyline);
    var infoWindow = new AMap.InfoWindow({
      //创建信息窗体
      isCustom: true, //使用自定义窗体
      content: "<div>信息窗体</div>", //信息窗体的内容可以是任意html片段
      offset: new AMap.Pixel(16, -45),
    });
    var onMarkerClick = function (e) {
      infoWindow.open(map, e.target.getPosition()); //打开信息窗体
      //e.target就是被点击的Marker
    };
    marker1.on("click", onMarkerClick); //绑定click事件
    var geo = new Geolocation()
    map.add(geo)
  })
  .catch((e) => {
    console.error(e); //加载错误提示
  });
window._AMapSecurityConfig = {
  securityJsCode: "5c849de4285fadec22ca31f0d9a7fd19",
}; 

// import { BMPGL } from "@/bmpgl.js";
export default {
  name: "fixone",
  /*data() {
    return {
      ak: "FKsvCG7q4AVhRWuq4kvCckdupVTaeopw", // 百度的地图密钥
      myMap: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // 传入密钥获取地图回调。
      BMPGL(this.ak)
        .then((BMapGL) => {
          // 创建地图实例
          let map = new BMapGL.Map("container");
          // 创建点坐标 axios => res 获取的初始化定位坐标
          let point = new BMapGL.Point(114.031761, 22.542826);
          // 初始化地图，设置中心点坐标和地图级别
          map.centerAndZoom(point, 19);
          //开启鼠标滚轮缩放
          map.enableScrollWheelZoom(true);
          map.setHeading(64.5);
          map.setTilt(73);
          // this.map.setMapType("B_EARTH_MAP");
          // 保存数据
          // this.myMap = map
          let localCtr = new BMapGL.LocationControl();
          map.addControl(localCtr);
          var geolocation = new BMapGL.Geolocation();
          geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
              var mk = new BMapGL.Marker(r.point);
              map.addOverlay(mk);
              map.panTo(r.point);
              alert("您的位置：" + r.point.lng + "," + r.point.lat);
              map.centerAndZoom(r.point, 19);
            } else {
              alert("failed" + this.getStatus());
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }, */
};
</script>

<style scoped>
.home-wrap {
  position: absolute;
  left: 250px;
  margin-top: 30px;
  border: solid 1px;
  border-radius: 100px;
  height: 600px;
  width: 1250px;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
}
.crash-box {
  position: absolute;
  left: 130px;
  border: 1px solid;
  border-radius: 50px;
  width: 1075px;
  height: 530px;
  margin-top: 20px;
}
#container {
  width: 1075px;
  height: 530px;
  border-radius: 50px;
}
</style>
