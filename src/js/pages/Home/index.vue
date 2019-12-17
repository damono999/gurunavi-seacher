<template>
  <div class="bg">
    <div class="inner">
      <section>
        <GmapMap
          :center="center"
          :zoom="zoom"
          style="width: 100%; height: 300px;"
          @center_changed="debouncedGetStore"
        >
        <GmapMarker v-for="(m,id) in marker_items"
          :position="m.position"
          :title="m.title"
          @click="toggleInfoWindow(m,id)"
          :clickable="true" 
          :draggable="false" 
          :key="id"/>
        </GmapMap>
      </section>
      <section>
        <app-home-carousel />
      </section>
      <section class="tabs">
        <app-home-tabs />
      </section>
    </div>
  </div>
</template>

<script>
import { HomeCarousel, HomeTabs } from '@molecules';
import axios from 'axios';

export default {
  components: {
    appHomeCarousel: HomeCarousel,
    appHomeTabs: HomeTabs,
  },
  data() {
    return {
      center: {
        lat: 35.71,
        lng: 139.72
      },
      zoom: 14,
      marker_items: [],
      debouncedGetStore: null,
      infoWindowPos: null,
      infoWinOpen: false,
      infoContent: {
        imageurl: null,
        title: null,
        address: null
      }

    };
  },
  methods: {
    setCenter(center) {
      this.center = {
        lat: center.lat(),
        lng: center.lng(),
      };
      this.getStore();
    },
    toggleInfoWindow (marker) {
      // this.infoWinOpen = false
      console.log('object');
      this.infoWindowPos = marker.position
      this.infoContent = marker.content
      // this.infoWinOpen = true
    },
    getStore() {
      let params = Object.assign(
        {},
        {
          input_coordinates_mode: 1,
          coordinates_mode: 1,
          latitude: this.center.lat,
          longitude: this.center.lng,
          range: 5,
          hit_per_page: 50
        },
        { keyid: 'ae555c660c3b51ba8a093d9b477d909b' }
      );

      axios.get(`https://api.gnavi.co.jp/RestSearchAPI/v3/`,
        {
          params,
        })
        .then(({ data }) => {
          const items = [];
          for(const i in data.rest) {
            let item = {
              position: {
                lat: Number(data.rest[i].latitude),
                lng: Number(data.rest[i].longitude),
              },
              title: data.rest[i].name,
            }
            items.push(item);
          }
          this.marker_items = [...items];
        }).catch((err) => {
          console.log(`err: ${err}`);
        });
    },
  },
  created() {
    this.debouncedGetStore = this._.debounce(this.setCenter, 500);
  },
  mounted() {
    this.getStore();
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background: #f6f6f6;
  padding: 45px 0 60px;
}

.tabs {
  margin-top: 60px;
}
</style>