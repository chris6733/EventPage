<template>
  <animated-number :value="value" :formatValue="formatToPrice" :duration="300" />
</template>
<script>
// import AnimatedNumber from "animated-number-vue";

export default {
  components: {
    AnimatedNumber,
  },
  //   data() {
  //     return {
  //       value: 1000,
  //     };
  //   },
  //   methods: {
  //     formatToPrice(value) {
  //       return `${value.toFixed(2)}`;
  //     },
  //   },
};
</script>