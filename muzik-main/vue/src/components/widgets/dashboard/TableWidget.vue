<template>
  <div class="table-responsive">
    <b-table-simple id="settlements-table" striped class="mb-0">
      <b-tbody>
        <b-tr v-for="(item, index) in list" :key="index">
          <b-td>
            <div class="d-flex align-items-center">
              <h6 class="mb-0">{{ item.amount }}</h6>
            </div>
          </b-td>
          <b-td class="text-primary"> {{ item.transation_id }} </b-td>
          <b-td class="text-dark">{{ item.date }}</b-td>
          <b-td>
            <b-badge v-if="item.status === 1" variant="success" pill>Processed</b-badge>
            <b-badge v-if="item.status === 0" variant="info text-white" pill>Process</b-badge>
            <b-badge v-if="item.status === 3" variant="success" pill>Refunded</b-badge>
            <b-badge v-if="item.status === 2" variant="danger" pill>Failed</b-badge>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped></style>
