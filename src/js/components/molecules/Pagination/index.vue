<template>
  <div class="pagination">
    <app-button
      pagination
      bg-width
      :button="false"
      :disabled="currentPage === 1"
      @click="$emit('toPage', currentPage === 1 ? 0 : 1)"
    >
      {{ '最初へ' }}
    </app-button>
    <app-button
      pagination
      bg-width
      :button="false"
      :disabled="currentPage === 1"
      @click="$emit('toPage', currentPage === 1 ? 0 : currentPage - 1)"
    >
      {{ '前へ' }}
    </app-button>
    <app-button
      v-if="1 <= currentPage - 3"
      pagination
      :button="false"
      @click="$emit('toPage', 1)"
    >
      {{ '1' }}
    </app-button>
    <template v-for="i of lastPage">
      <app-button
        v-if="Math.abs(currentPage - i) <= 3"
        :key="createUniqueKey(i)"
        pagination
        :button="false"
        :disabled="i === currentPage"
        @click="$emit('toPage', i === currentPage ? 0 : i)"
      >
        {{ `${ Math.abs(currentPage - i) === 3 ? '...' : i }` }}
      </app-button>
    </template>
    <app-button
      v-if="currentPage + 3 <= lastPage"
      pagination
      :button="false"
      @click="$emit('toPage', lastPage)"
    >
      {{ lastPage }}
    </app-button>
    <app-button
      pagination
      bg-width
      :button="false"
      :disabled="currentPage === lastPage"
      @click="$emit('toPage', currentPage === lastPage ? 0 : currentPage + 1)"
    >
      {{ '次へ' }}
    </app-button>
    <app-button
      pagination
      bg-width
      :button="false"
      :disabled="currentPage === lastPage"
      @click="$emit('toPage', currentPage === lastPage ? 0 : lastPage)"
    >
      {{ '最後へ' }}
    </app-button>
  </div>
</template>
<script>
import { Button } from '@atoms';

export default {
  components: {
    appButton: Button,
  },
  props: {
    lastPage: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
