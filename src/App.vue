

<template>
  <div class="container">
    <!-- <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>
    </section> -->

    <div id="app">
      <!-- header-video -->
      <div class="header-video">
        <video autoplay playsinline loop muted>
          <source
            src="https://cdn.17app.co/31c3bc54-c10f-422b-b9b0-4e86a1c9d43f.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <!-- header-video -->

      <!-- mainnav -->
      <div class="mainselect">
        <div class="allselect">
          <div class="top">
            <li class="select01">
              <div
                :class="{ active: selected == 1 }"
                @click="
                  selected = 1;
                  content = 'one';
                "
              ></div>
            </li>
            <li class="select07">
              <div
                :class="{ active: selected == 7 }"
                @click="
                  selected = 7;
                  content = 'seven';
                "
              ></div>
            </li>
          </div>

          <div class="bottom">
            <li class="select02">
              <div
                :class="{ active: selected == 2 }"
                @click="
                  selected = 2;
                  content = 'two';
                "
              ></div>
            </li>
            <li class="select03">
              <div
                :class="{ active: selected == 3 }"
                @click="
                  selected = 3;
                  content = 'three';
                "
              ></div>
            </li>
            <li class="select04">
              <div
                :class="{ active: selected == 4 }"
                @click="
                  selected = 4;
                  content = 'four';
                "
              ></div>
            </li>
            <li class="select05">
              <div
                :class="{ active: selected == 5 }"
                @click="
                  selected = 5;
                  content = 'five';
                "
              ></div>
            </li>
            <li class="select06">
              <div
                :class="{ active: selected == 6 }"
                @click="
                  selected = 6;
                  content = 'six';
                "
              ></div>
            </li>
          </div>
        </div>
      </div>
      <!-- mainnav -->

      <keep-alive>
        <component :is="content" :data="item" :data2="leader"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import one from "./components/one.vue";
import two from "./components/two.vue";
import three from "./components/three.vue";
import four from "./components/four.vue";
import five from "./components/five.vue";
import six from "./components/six.vue";
import seven from "./components/seven.vue";

export default {
  name: "App",
  data: function () {
    return {
      content: "one",
      isActive: false,
      selected: 1,
      info: null,
      loading: true,
      errored: false,
      leader: [],

      item: {
        header: "header",
        title: "title",
        text: "活動已結束",
      },
    };
  },

  mounted() {
    const api = `https://sta-api.17app.co/api/v1/leaderboards/eventory?count=1000&containerID=25a8fe58-7846-4f64-8444-854cb9a2c776`;
    this.$http
      .get(api)
      .then((response) => {
        this.leader = response.data.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
