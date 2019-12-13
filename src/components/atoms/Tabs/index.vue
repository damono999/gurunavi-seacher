<template>
  <div class="tabs-area">
    <div class="tabs">
      <template
        v-for="area in areas"
      >
        <div
          :key="area.area_code"
          :class="['tab', activeTabArea === area.area_code ? 'tab--active' : '']"
          @click="changeActiveTab(area.area_code)"
        >
          {{ area.area_name }}
        </div>
      </template>
    </div>
    <div class="tabs-area-txt">
      <div
        v-for="pref of prefs"
        :key="pref.pref_code"
        v-show="activeTabArea === pref.area_code"
      >
        <div
          :class="['c-tabs-btn', targetPrefCode === pref.pref_code ? 'btn--active' : '']"
          @click="changeActiveArea(pref.pref_code)"
        >
          {{ pref.pref_name }}
        </div>
      </div>
    </div>
    <div class="c-tabs-areaL">
      <router-link
        v-for="area_Large of area_LargeList"
        :key="area_Large.areacode_l"
        class="c-tabs-btn"
        v-show="targetPrefCode === area_Large.pref.pref_code"
        :to="{
          name: 'result-search',
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
import axios from "axios";
export default {
  data() {
    return {
      targetPrefCode: '',
      areas: [
        {
          "area_code": "AREA150",
          "area_name": "北海道"
        },
        {
          "area_code": "AREA160",
          "area_name": "東北"
        },
        {
          "area_code": "AREA110",
          "area_name": "関東"
        },
        {
          "area_code": "AREA170",
          "area_name": "北陸"
        },
        {
          "area_code": "AREA130",
          "area_name": "中部"
        },
        {
          "area_code": "AREA120",
          "area_name": "関西"
        },
        {
          "area_code": "AREA180",
          "area_name": "中国"
        },
        {
          "area_code": "AREA190",
          "area_name": "四国"
        },
        {
          "area_code": "AREA140",
          "area_name": "九州"
        },
        {
          "area_code": "AREA200",
          "area_name": "沖縄"
        }
      ],
      prefs: [
        {
          "pref_code": "PREF01",
          "pref_name": "北海道",
          "area_code": "AREA150"
        },
        {
          "pref_code": "PREF02",
          "pref_name": "青森県",
          "area_code": "AREA160"
        },
        {
          "pref_code": "PREF03",
          "pref_name": "岩手県",
          "area_code": "AREA160"
        },
        {
          "pref_code": "PREF04",
          "pref_name": "宮城県",
          "area_code": "AREA160"
        },
        {
          "pref_code": "PREF05",
          "pref_name": "秋田県",
          "area_code": "AREA160"
        },
        {
          "pref_code": "PREF06",
          "pref_name": "山形県",
          "area_code": "AREA160"
        },
        {
          "pref_code": "PREF07",
          "pref_name": "福島県",
          "area_code": "AREA160"
        },
        {
          "pref_code": "PREF08",
          "pref_name": "茨城県",
          "area_code": "AREA110"
        },
        {
          "pref_code": "PREF09",
          "pref_name": "栃木県",
          "area_code": "AREA110"
        },
        {
          "pref_code": "PREF10",
          "pref_name": "群馬県",
          "area_code": "AREA110"
        },
        {
          "pref_code": "PREF11",
          "pref_name": "埼玉県",
          "area_code": "AREA110"
        },
        {
          "pref_code": "PREF12",
          "pref_name": "千葉県",
          "area_code": "AREA110"
        },
        {
          "pref_code": "PREF13",
          "pref_name": "東京都",
          "area_code": "AREA110"
        },
        {
          "pref_code": "PREF14",
          "pref_name": "神奈川県",
          "area_code": "AREA110"
        },
        {
          "pref_code": "PREF15",
          "pref_name": "新潟県",
          "area_code": "AREA170"
        },
        {
          "pref_code": "PREF16",
          "pref_name": "富山県",
          "area_code": "AREA170"
        },
        {
          "pref_code": "PREF17",
          "pref_name": "石川県",
          "area_code": "AREA170"
        },
        {
          "pref_code": "PREF18",
          "pref_name": "福井県",
          "area_code": "AREA170"
        },
        {
          "pref_code": "PREF19",
          "pref_name": "山梨県",
          "area_code": "AREA130"
        },
        {
          "pref_code": "PREF20",
          "pref_name": "長野県",
          "area_code": "AREA130"
        },
        {
          "pref_code": "PREF21",
          "pref_name": "岐阜県",
          "area_code": "AREA130"
        },
        {
          "pref_code": "PREF22",
          "pref_name": "静岡県",
          "area_code": "AREA130"
        },
        {
          "pref_code": "PREF23",
          "pref_name": "愛知県",
          "area_code": "AREA130"
        },
        {
          "pref_code": "PREF24",
          "pref_name": "三重県",
          "area_code": "AREA130"
        },
        {
          "pref_code": "PREF25",
          "pref_name": "滋賀県",
          "area_code": "AREA120"
        },
        {
          "pref_code": "PREF26",
          "pref_name": "京都府",
          "area_code": "AREA120"
        },
        {
          "pref_code": "PREF27",
          "pref_name": "大阪府",
          "area_code": "AREA120"
        },
        {
          "pref_code": "PREF28",
          "pref_name": "兵庫県",
          "area_code": "AREA120"
        },
        {
          "pref_code": "PREF29",
          "pref_name": "奈良県",
          "area_code": "AREA120"
        },
        {
          "pref_code": "PREF30",
          "pref_name": "和歌山県",
          "area_code": "AREA120"
        },
        {
          "pref_code": "PREF31",
          "pref_name": "鳥取県",
          "area_code": "AREA180"
        },
        {
          "pref_code": "PREF32",
          "pref_name": "島根県",
          "area_code": "AREA180"
        },
        {
          "pref_code": "PREF33",
          "pref_name": "岡山県",
          "area_code": "AREA180"
        },
        {
          "pref_code": "PREF34",
          "pref_name": "広島県",
          "area_code": "AREA180"
        },
        {
          "pref_code": "PREF35",
          "pref_name": "山口県",
          "area_code": "AREA180"
        },
        {
          "pref_code": "PREF36",
          "pref_name": "徳島県",
          "area_code": "AREA190"
        },
        {
          "pref_code": "PREF37",
          "pref_name": "香川県",
          "area_code": "AREA190"
        },
        {
          "pref_code": "PREF38",
          "pref_name": "愛媛県",
          "area_code": "AREA190"
        },
        {
          "pref_code": "PREF39",
          "pref_name": "高知県",
          "area_code": "AREA190"
        },
        {
          "pref_code": "PREF40",
          "pref_name": "福岡県",
          "area_code": "AREA140"
        },
        {
          "pref_code": "PREF41",
          "pref_name": "佐賀県",
          "area_code": "AREA140"
        },
        {
          "pref_code": "PREF42",
          "pref_name": "長崎県",
          "area_code": "AREA140"
        },
        {
          "pref_code": "PREF43",
          "pref_name": "熊本県",
          "area_code": "AREA140"
        },
        {
          "pref_code": "PREF44",
          "pref_name": "大分県",
          "area_code": "AREA140"
        },
        {
          "pref_code": "PREF45",
          "pref_name": "宮崎県",
          "area_code": "AREA140"
        },
        {
          "pref_code": "PREF46",
          "pref_name": "鹿児島県",
          "area_code": "AREA140"
        },
        {
          "pref_code": "PREF47",
          "pref_name": "沖縄県",
          "area_code": "AREA200"
        }
      ],
      area_LargeList: {}
    }
  },
  props: {
    activeTabArea: String,
  },
  methods: {
    changeActiveTab(targetArea) {
      this.$emit('change-active-tab', targetArea);
      this.changeActiveArea(this.findTargetPref(targetArea));
    },
    changeActiveArea(targetArea){
      this.targetPrefCode = targetArea;
    },
    findTargetPref(targetArea){
      return this.prefs.find(pref => pref.area_code === targetArea).pref_code;
    }
  },
  computed: {

  },
  created() {
    this.$emit('change-active-tab', this.areas[0].area_code);
    this.changeActiveArea(this.prefs[0].pref_code);
    // this.targetPrefCode = ;
    axios.get('https://api.gnavi.co.jp/master/GAreaLargeSearchAPI/v3/',{
      params: {
        keyid: 'ae555c660c3b51ba8a093d9b477d909b',
        lang: 'ja',
      }
    }).then(({ data }) => {
      // 取得したデータを強制的に変えている
      // this.area_LargeList.push(...data.garea_large);
      this.area_LargeList = Object.assign({}, {}, data.garea_large);
    }).catch(err => {
      console.log(err);
    });
  }
}
</script>

<style lang="scss" scoped>
$baseColor1: #f39800;
$baseColor2: gray;
$baseColor3: #fff;

@mixin is-flex($wrap) {
  display: flex;
  flex-flow: $wrap row;
}

.c-tabs-btn {
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

.tabs-area {

  width: 800px;
  margin: 0 auto;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, .18);

  .tabs {

    @include is-flex(nowrap);
    .tab {
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
  &-txt{
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

  .c-tabs-areaL {
    @include is-flex(wrap);
    border: 1px solid $baseColor2;
    border-top: none;
    padding: 8px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    background: $baseColor3;
  }
}
</style>
