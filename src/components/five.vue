<template>
  <div class="container">
    <div class="eventstatus">
      <h2>6/12 (五) 00:00:00－6/19 (五) 23:59:59</h2>
      <h3>{{ data.text }}</h3>
    </div>
    <div class="eventwrap">
      <div class="boardtop">
        <div class="method">
          採計禮物：
          <br />17 商店（小 / 中 / 大）、工人寶寶
          <br />
          <br />1. 主播排名「前 25 名」送獎金 <br />2. 主播累積「15,000
          坪數」升級 <br />茶攤 / 雜貨店 / 小餐車 / 報紙攤 <br />3.
          主播累積「60,000 坪數」升級 <br />手搖舖 / 便利商店 / 速食店 / 書局
          <br />4. 主播累積「150,000 坪數」升級 <br />咖啡廳 / 連鎖超市 /
          美式餐廳 / 圖書館 <br />5. 所有建築皆升級到最低門檻，
          <br />送「直播間貼紙」 <br />6. 所有建築皆升級到最高門檻，
          <br />送「永久直播間貼紙」
        </div>
      </div>
      <div class="board-mid1"></div>
      <div class="board-mid2"></div>
      <div class="board-bottom00"></div>
    </div>

    <div class="contenttitle">
      <img
        src="https://vmo.17.media/2005-tw-city/static/images/city_rank4.png"
        alt
      />
    </div>
    <div class="searchbar">
      <input v-model="filterText" placeholder="請搜尋主播ID" />
    </div>

    <div v-if="filterArray.length">
      <div
        v-for="(person, index) in filterArray"
        :key="index"
        class="leaderswrap"
      >
        <div class="rank">
          <span>{{ index + 1 }}</span>
        </div>
        <div class="avatar">
          <img
            :src="
              'https://assets-17app.akamaized.net/THUMBNAIL_' +
              person.userInfo.picture
            "
            :alt="person.userInfo.displayName"
          />
          <svg width="21" height="21">
            <defs>
              <path
                id="crown_svg__b"
                d="M10.024 20C4.49 20 0 15.68 0 10.356v-.712C0 4.32 4.49 0 10.024 0c5.535 0 10.024 4.32 10.024 9.644v.712C20.058 15.68 15.568 20 10.024 20z"
              />
              <path
                id="crown_svg__d"
                d="M2.338 3.78L6.831 0l4.48 3.76 2.245-2.388-1.002 4.362c-1.844-.19-3.816-.393-5.725-.393-1.907 0-3.776.14-5.722.393L.1 1.397 2.338 3.78zm3.532-.092c0 .5.429.905.958.905.529 0 .958-.405.958-.905s-.43-.904-.958-.904c-.529 0-.958.405-.958.904z"
              />
              <path
                id="crown_svg__f"
                d="M5.277.102l-.12.002C4.202.119 3.252.169 2.295.25l-.112.01C1.489.32.793.397.086.49l.036.153.002.007.36 1.422c.41-.052.733-.525 1.137-.566.082-.009.054-.287.136-.294 1.343-.13 2.666 0 4.007 0 1.341 0 2.663-.13 4.007 0 .082.007.04.285.122.294.404.04.74.514 1.15.566l.36-1.422.003-.007.035-.154A48.882 48.882 0 0 0 9.234.25C8.276.17 7.326.12 6.37.104L6.25.102C6.09.1 5.927.099 5.765.099 5.6.1 5.439.1 5.277.102z"
              />
              <path
                id="crown_svg__h"
                d="M.117 1.135c0 .57.469 1.035 1.045 1.035s1.044-.465 1.044-1.035A1.04 1.04 0 0 0 1.162.1C.586.1.117.564.117 1.135z"
              />
              <path
                id="crown_svg__j"
                d="M.07.898c0 .466.385.846.855.846s.853-.38.853-.846c0-.466-.383-.845-.853-.845S.07.433.07.898z"
              />
              <path
                id="crown_svg__l"
                d="M.071.898c0 .466.384.846.854.846s.853-.38.853-.846c0-.466-.383-.845-.853-.845S.07.433.07.898z"
              />
              <linearGradient
                id="crown_svg__c"
                x1="2.328%"
                x2="95.263%"
                y1="2.557%"
                y2="95.045%"
              >
                <stop offset="0%" stop-color="#DA9210" />
                <stop offset="50%" stop-color="#FFD15C" />
                <stop offset="100%" stop-color="#DA9210" />
              </linearGradient>
              <filter
                id="crown_svg__a"
                width="105%"
                height="110%"
                x="-2.5%"
                y="-2.5%"
                filterUnits="objectBoundingBox"
              >
                <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                <feColorMatrix
                  in="shadowOffsetOuter1"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
              </filter>
            </defs>
            <g fill="none" fill-rule="evenodd" transform="translate(.258 1)">
              <use
                fill="#000"
                filter="url(#crown_svg__a)"
                xlink:href="#crown_svg__b"
              />
              <use fill="#FFF" xlink:href="#crown_svg__b" />
              <path
                fill="url(#crown_svg__c)"
                d="M10.12 18.762c-4.802 0-8.688-3.74-8.688-8.345v-.644c0-4.612 3.894-8.344 8.688-8.344 4.802 0 8.687 3.74 8.687 8.344v.644c.008 4.613-3.885 8.345-8.687 8.345z"
              />
              <g transform="translate(3.331 6.738)">
                <mask id="crown_svg__e" fill="#fff">
                  <use xlink:href="#crown_svg__d" />
                </mask>
                <path
                  fill="#FFF"
                  d="M-4.695 10.518h23.046V-4.783H-4.695z"
                  mask="url(#crown_svg__e)"
                />
              </g>
              <g transform="translate(4.397 12.176)">
                <mask id="crown_svg__g" fill="#fff">
                  <use xlink:href="#crown_svg__f" />
                </mask>
                <path
                  fill="#FFF"
                  d="M-4.709 6.855h20.946V-4.684H-4.709z"
                  mask="url(#crown_svg__g)"
                />
              </g>
              <g transform="translate(9.019 5.083)">
                <mask id="crown_svg__i" fill="#fff">
                  <use xlink:href="#crown_svg__h" />
                </mask>
                <path
                  fill="#FFF"
                  d="M-4.678 6.954h11.68V-4.684h-11.68z"
                  mask="url(#crown_svg__i)"
                />
              </g>
              <g transform="translate(15.893 6.974)">
                <mask id="crown_svg__k" fill="#fff">
                  <use xlink:href="#crown_svg__j" />
                </mask>
                <path
                  fill="#FFF"
                  d="M-3.847 5.653h9.543v-9.509h-9.543z"
                  mask="url(#crown_svg__k)"
                />
              </g>
              <g transform="translate(2.501 6.974)">
                <mask id="crown_svg__m" fill="#fff">
                  <use xlink:href="#crown_svg__l" />
                </mask>
                <path
                  fill="#FFF"
                  d="M-3.847 5.653h9.543v-9.509h-9.543z"
                  mask="url(#crown_svg__m)"
                />
              </g>
            </g>
          </svg>
        </div>
        <div class="content">
          <i></i>
          <span>{{ person.userInfo.displayName }}</span>
          <span>{{ person.score }} 坪數</span>
          <span>+ XXXX 分</span>
        </div>
        <a @click.prevent="toggle(person)">
          <div class="map">
            <button :class="{ active: !person.rank }"></button>
          </div>
        </a>

        <div class="mapbox" v-if="!person.rank">
          <img
            src="https://vmo.17.media/2005-tw-city/static/images/city_map-ground-l.png"
            width="100%"
          />
        </div>
      </div>
    </div>

    <div v-else>
      <p class="text-center" style="color: #ffffff">
        <strong>此ID尚未上榜</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "five",
  props: ["data", "data2"],
  data() {
    return {
      filterText: "",
    };
  },
  computed: {
    filterArray: function () {
      var vm = this;
      return vm.data2.filter(function (person) {
        return person.userInfo.displayName.match(vm.filterText);
      });
    },
  },
  methods: {
    toggle: function (person) {
      person.rank = !person.rank;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
