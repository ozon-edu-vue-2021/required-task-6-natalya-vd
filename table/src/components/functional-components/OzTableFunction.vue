<script>
import DotsLoaderIcon from "../../assets/images/dost-loader.svg";
import HeadFunction from "./HeadFunction.vue";
import RowsFunction from "./RowsFunction.vue";

export default {
  name: "OzTableFunction",

  props: {
    rows: {
      type: Array,
      default: () => [],
    },

    totalPages: {
      type: Number,
      default: 0,
    },

    currentPage: {
      type: Number,
      default: 0,
    },

    staticPaging: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      urlSort: "",
      urlFilter: "",
      filterProp: "",
      filterText: "",
      filterData: {},
      sortData: [],
      sortProps: [],
      sortDirections: [],
    };
  },

  mounted() {
    const columnOptions = this.getColumnOptions();
    this.filterData = this.getKeysInFilterData(columnOptions);
  },

  methods: {
    toggleSort(prop) {
      const index = this.sortData.findIndex((item) => prop in item);

      if (index === -1) {
        this.sortData.push({ [prop]: "desc" });
      } else {
        this.sortData[index][prop] =
          this.sortData[index][prop] === "desc" ? "asc" : "desc";
      }

      this.sortProps = this.sortData.map((item) => Object.keys(item)[0]);
      this.sortDirections = this.sortData.map((item) => Object.values(item)[0]);

      this.getUrlSort();
    },

    getUrlSort() {
      this.urlSort = `&_sort=${this.sortProps.join(
        ","
      )}&_order=${this.sortDirections.join(",")}`;
      this.$emit("getUrl", `${this.urlSort}${this.urlFilter}`);
    },

    getUrlFilter() {
      this.urlFilter = "";

      for (let objProp in this.filterData) {
        if (this.filterData[objProp].length) {
          this.urlFilter += `&${objProp}_like=${this.filterData[objProp]}`;
        }
      }

      this.$emit("getUrl", `${this.urlSort}${this.urlFilter}`);
      this.openFilterTooltip();
    },

    openFilterTooltip(prop = "") {
      this.filterProp = prop;
      this.filterText = "";
    },

    getKeysInFilterData(columnsOptions) {
      const result = {};

      columnsOptions.forEach((column) => {
        result[column.prop] = "";
      });
      return result;
    },

    setFilterText(e, prop) {
      this.filterText = e.target.value;
      this.filterData[prop] = e.target.value;
    },

    cleareFilterItem(prop) {
      this.filterData[prop] = "";
      this.getUrlFilter();
    },

    getColumnOptions() {
      return this.$slots.default
        .filter((item) => {
          return (
            item.componentOptions &&
            item.componentOptions.tag === "oz-table-column-function"
          );
        })
        .map((column) => {
          return Object.assign({}, column.componentOptions.propsData, {
            scopedSlots: column.data.scopedSlots || {},
          });
        });
    },

    renderInfPage() {
      const directives = [
        {
          name: "detect-viewport",
          value: {
            callback: this.$listeners.getPage,
          },
        },
      ];

      const style = {
        background: `url("${DotsLoaderIcon}") no-repeat center`,
      };
      return <div {...{ class: this.$style.infPager, style, directives }} />;
    },
  },

  render() {
    const { $style } = this;
    const columnsOptions = this.getColumnOptions();

    return (
      <div>
        <table class={$style.table}>
          <thead>
            <HeadFunction
              columnsOptions={columnsOptions}
              filterProp={this.filterProp}
              filterText={this.filterText}
              sortData={this.sortData}
              on={{
                toggleSort: (columnProp) => this.toggleSort(columnProp),
                openFilterTooltip: (columnProp) =>
                  this.openFilterTooltip(columnProp),
                closeFilterTooltip: () => this.openFilterTooltip(),
                setFilterText: (e, columnProp) =>
                  this.setFilterText(e, columnProp),
                runFilter: () => this.getUrlFilter(),
                cleareFilterItem: (columnProp) =>
                  this.cleareFilterItem(columnProp),
              }}
            />
          </thead>
          <tbody>
            {this.rows.length === 0 && this.currentPage > 1 ? (
              <p>По данному запросу ничего не найдено</p>
            ) : (
              <RowsFunction columnsOptions={columnsOptions} rows={this.rows} />
            )}
          </tbody>
        </table>

        {this.renderInfPage()}
      </div>
    );
  },
};
</script>

<style module>
.table {
  width: 100%;
  border-spacing: 0;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgb(205 205 205 / 30%);
}

.infPager {
  width: 100%;
  height: 32px;
}
</style>