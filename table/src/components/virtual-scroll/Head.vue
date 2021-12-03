<template>
  <div>
    <div
      v-for="column in Object.keys(propTitleTable)"
      :key="column"
      :class="$style.headerCell"
    >
      {{propTitleTable[column]}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  props: {
    propTitleTable: {
      type: Object,
      default: () => ({}),
    },

    sortData: {
      type: Array,
      default: () => [],
    },

    filterProp: {
      type: String,
      default: "",
    },

    filterText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style module>
.headerCell {
  padding: 1rem;
  background-color: #46a358;
  color: #fff;
  text-align: left;
  font-weight: 700;
}
</style>