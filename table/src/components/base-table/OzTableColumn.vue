<script>
export default {
  name: "OzTableColumn",

  props: {
    prop: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
</style>