<template>
  <section class="info-block">
    <div class="info-block__title">
      {{ title }}
    </div>
    <div class="info-block__content">
      <div
        v-for="(info, key) in infos"
        :key="key"
        class="info-block__item"
      >
        <template v-if="progressBarType == 'chart'">
          <vue-ellipse-progress
            :progress="info.value"
            :size="150"
            color="blue"
            emptyColor="#8ec5fc"
            lineMode="in 5"
            animation="bounce 1000"
            :legend="true"
            :legendValue="info.value"
            legendClass="legend-custom-style"
          >
            <span slot="legend-value">/100</span>
            <div slot="legend-caption">{{ info.label }}</div>
          </vue-ellipse-progress>
        </template>
        <template v-else>
          <div class="info-block__item-name">{{ info.label }}</div>
          <div class="info-block__item-value" v-html="info.value"></div>
          <template v-if="progressBarType == 'line'">
            <b-progress
              ref="progressLine"
              class="mb-3"
              :value="info.value"
              :max="100"
            >
            </b-progress>
          </template>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InfoBlock',
  props: {
    title: String,
    infos: Array,
    progressBarType: String,
  },
  data() {
    return {
      timer: null,
    };
  },
  mounted() {
    const progressLines = this.$refs.progressLine;
    // const vm = this;

    /* eslint-disable no-param-reassign */
    if (progressLines) {
      this.infos.forEach((info) => {
        info.originalValue = info.value;
        info.value = 0;

        this.timer = setTimeout(() => {
          info.value = info.originalValue;
        }, 500);
      });
    }
    /* eslint-enable no-param-reassign */
  },
  beforeDestroy() {
    this.timer = null;
  },
};
</script>
