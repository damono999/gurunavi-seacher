<template>
  <div>
    <app-text
      tag="h5"
      bg
    >
      エリアから探す
    </app-text>
    <div class="tabs">
      <app-tabs
        @change-active-tab="changeActiveTab($event)"
      />
    </div>
  </div>
</template>

<script>
import { Tabs, Text } from "@atoms";

export default {
  components: {
    appTabs: Tabs,
    appText: Text,
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  margin-top: 30px;
}
</style>