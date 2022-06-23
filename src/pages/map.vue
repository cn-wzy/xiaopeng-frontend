<template>
  <div>
    <div id="container"></div>
    <div id="panel"></div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  data() {
    return {};
  },
  computed: {
    longitude() {
      return this.$store.state.error.endPoint.longitude;
    },
    latitude() {
      return this.$store.state.error.endPoint.latitude;
    },
  },
  mounted() {
    this.getMap();
  },
  methods: {
    getMap() {
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
      }).then((AMap) => {
        var map = new AMap.Map("container", {
          resizeEnable: true,
          //   center: [116.397428, 39.90923], //地图中心点
          zoom: 13, //地图显示的缩放级别
        });
        var marker1 = new AMap.Marker({
          position: [113.37443, 23.0902], //位置
        });
        var marker2 = new AMap.Marker({
          position: [113.23336, 23.394711],
        });
        var marker3 = new AMap.Marker({
          position: [113.36676, 22.995081],
        });
        marker1.on("click", this.clickMarker);
        marker2.on("click", this.clickMarker);
        marker3.on("click", this.clickMarker);

        map.add(marker1);
        map.add(marker2);
        map.add(marker3);
        let that = this;
        this.$nextTick(() =>
          map.plugin("AMap.Driving", function () {
            //构造路线导航类
            var driving = new AMap.Driving({
              map: map,
              panel: "panel",
            });
            that.$nextTick(() => {
              driving.search(
                new AMap.LngLat(113.413736, 23.052362),
                new AMap.LngLat(that.longitude, that.latitude),
                function (status, result) {
                  console.log(that.longitude);
                  // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
                  if (status === "complete") {
                    console.log("绘制驾车路线完成");
                  } else {
                    console.error("获取驾车数据失败：" + result);
                  }
                }
              );
            });
            // 根据起终点经纬度规划驾车导航路线
          })
        );
      });
      window._AMapSecurityConfig = {
        securityJsCode: "5c849de4285fadec22ca31f0d9a7fd19",
      };
    },
    clickMarker(position) {
      this.$store.dispatch("chooseEndPoint", position);
      console.log(position);
    },
  },
};
</script>

<style></style>
