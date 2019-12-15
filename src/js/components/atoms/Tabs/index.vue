<template>
  <div class="tabs">
    <div class="tabs-top">
      <template
        v-for="area in areas"
      >
        <div
          :key="area.area_code"
          :class="['tabs-top-item', activeArea === area.area_code ? 'tabs-top-item--active' : '']"
          @click="changeActiveArea(area.area_code)"
        >
          {{ area.area_name }}
        </div>
      </template>
    </div>
    <div class="tabs-middle">
      <template
        v-for="pref of prefs"
      >
        <div
          :key="pref.pref_code"
          v-show="activeArea === pref.area_code"
          :class="['btn', activePref === pref.pref_code ? 'btn--active' : '']"
          @click="changeActivePref(pref.pref_code)"
        >
          {{ pref.pref_name }}
        </div>
      </template>
    </div>
    <div class="tabs-areaL">
      <router-link
        v-for="area_Large of area_LargeList"
        :key="area_Large.areacode_l"
        class="btn"
        v-show="activePref === area_Large.pref.pref_code"
        :to="{
          name: 'search',
          query: {
            areacode_l: area_Large.areacode_l
          }
        }"
      >
        {{ area_Large.areaname_l }}
      </router-link>
    </div>
  </div>
</template>

<script>
import area from '@data/area';
import areaL from '@data/areaL';
import prefecture from '@data/prefecture';

export default {
  data() {
    return {
      activeArea: '',
      activePref: '',
      areas: [],
      prefs: [],
      area_LargeList: [],
    };
  },
  methods: {
    changeActiveArea(area) {
      this.activeArea = area;
      this.changeActivePref(this.findTargetPref);
    },
    changeActivePref(pref) {
      this.activePref = pref;
    },
  },
  computed: {
    findTargetPref() {
      return this.prefs.find(pref => pref.area_code === this.activeArea).pref_code;
    }
  },
  created() {
    this.areas = [...area];
    this.prefs = [...prefecture];
    this.area_LargeList = [...areaL];
    this.activeArea = this.areas[0].area_code;
    this.activePref = this.prefs[0].pref_code;
  },
};
</script>

<style lang="scss" scoped>
@mixin is-flex($wrap) {
  display: flex;
  flex-flow: $wrap row;
  align-items: flex-start;
  align-content: flex-start;
}

.btn {
  border-radius: 6px;
  border: 2px solid $baseColor1;
  background-color: $baseColor3;
  font-size: 15px;
  padding: 10px;
  margin: 0 15px 0 0;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.4);
  opacity: .5;
  transition: .3s;
  align-self: flex-start;
  margin-top: 8px;
  text-decoration: none;

  &:hover {
    background-color: $baseColor1;
    opacity: 1;
  }

  &:active {
    background-color: $baseColor1;
    opacity: .5;
  }
}

.tabs {
  width: 800px;
  margin: 0 auto;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, .18);
  &-top {
    @include is-flex(nowrap);
    &-item {
      background-color: $baseColor1;
      width: 25%;
      font-size: 18px;
      font-weight: 700;
      padding: 8px;
      line-height: 20px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      text-align: center;
      border: 1px solid $baseColor2;
      cursor: pointer;
      position: relative;
      margin: 0 0 0 2px;
      color: $baseColor3;

      &:first-child{
        margin-left: 0;
      }

      &--active {
        border-bottom: none;
        background: $baseColor3;
        color: black;

        &::after {
          background-color: $baseColor2;
          content: '';
          height: 1px;
          left: 2.5%;
          position: absolute;
          bottom: 0;
          width: 95%;
        }
      }
    }
  }
  &-middle {
    padding: 8px;
    border: 1px solid $baseColor2;
    border-top: none;
    border-bottom: none;
    position: relative;
    background: $baseColor3;
    @include is-flex(wrap);

    &::after {
      background-color: $baseColor2;
      content: '';
      height: 1px;
      left: 1%;
      position: absolute;
      bottom: 0;
      width: 98%;
    }

    .btn--active {
      background-color: $baseColor1;
      opacity: 1;
    }
  }

  .tabs-areaL {
    @include is-flex(wrap);
    border: 1px solid $baseColor2;
    border-top: none;
    padding: 8px;
    min-height: 350px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    background: $baseColor3;
  }
}
</style>
