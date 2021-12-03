<script>
export default {
  name: "RowsBase",

  props: {
    columnsOptions: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Array,
      default: () => [],
    },
  },

  render() {
    const { $style, columnsOptions, rows } = this;

    return (
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={row.id || index}>
              {columnsOptions.map((column) => {
                return (
                  <td
                    key={column.prop}
                    class={`${$style.cell} ${
                      index % 2 === 0 ? $style.cellGrey : $style.cellGreen
                    }`}
                  >
                    {column.scopedSlots.body
                      ? column.scopedSlots.body({ row })
                      : row[column.prop]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  },
};
</script>

<style module>
.cell {
  text-align: left;
  padding: 1rem;
}

.cell:nth-child(1),
.cell:nth-child(2) {
  width: 14%;
}

.cell:nth-child(3) {
  width: 28%;
}

.cell:nth-child(4) {
  width: 44%;
}

.cellGreen {
  background: rgba(70, 163, 88, 0.06);
}

.cellGrey {
  background: #fbfbfb;
}
</style>