import { ref, onMounted, onBeforeUnmount } from 'vue'
import $ from 'jquery'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5'

const useDataTable = ({ columns, data = [], url = null, actionCallback }) => {
  const table = ref(null)

  onMounted(() => {
    setTimeout(() => {
      let datatableObj = {
        dom: '<"row align-items-center"<"col-md-6" l><"col-md-6" f>><"table-responsive my-3" rt><"row align-items-center" <"col-md-6" i><"col-md-6" p>><"clear">',
        autoWidth: false,
        columns: columns
      }

      if (url) {
        datatableObj = {
          ...datatableObj,
          processing: true,
          serverSide: true,
          ajax: {
            url: url
          }
        }
      }

      if (data) {
        datatableObj = {
          ...datatableObj,
          data: data
        }
      }
      const datatable = $(table.value).DataTable(datatableObj)

      if (typeof actionCallback === 'function') {
        $(datatable.table().body()).on('click', '[data-table="action"]', function () {
          actionCallback({
            id: $(this).data('id'),
            method: $(this).data('method')
          })
        })
      }
    }, 0)

    onBeforeUnmount(() => {
      if ($.fn.DataTable.isDataTable(table.value)) {
        $(table.value).DataTable().destroy()
      }

      $(table.value).empty()
    })
  })

  return {
    tableRef: table
  }
}

export default useDataTable
