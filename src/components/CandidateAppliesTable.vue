<template>
  <a-table :columns="columns" :data-source="data">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'firstName'">
        <span> First Name </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'firstName'">
        <p>
          {{ record.firstName }}
        </p>
      </template>
      <template v-else-if="column.key === 'contactNumber'">
        <p>
          {{ record.contactNumber }}
        </p>
      </template>

      <template v-else-if="column.key === 'address'">
        <p>
          {{ record.address }}
        </p>
      </template>

      <template v-else-if="column.key === 'status'">
        <a-select
          ref="select"
          v-model:value="record.status"
          style="width: 100%"
          @change="handleChange"
        >
          <a-select-option value="sent">Sent</a-select-option>
          <a-select-option value="received">Received</a-select-option>
          <a-select-option value="accepted">Accepted</a-select-option>
          <a-select-option value="rejected">Rejected</a-select-option>
        </a-select>
      </template>

      <template v-else-if="column.key === 'cv'">
        <a :href="record.candidateCV" target="_blank">
          <a-button type="primary" shape="circle" class="mx-1">
            <template #icon><solution-outlined /></template>
          </a-button>
        </a>
      </template>
    </template>
  </a-table>
</template>
<script>
import { SolutionOutlined } from "@ant-design/icons-vue";
export default {
  name: "CandidateAppliesTable",
  props: ["columns", "data"],
  components: {
    SolutionOutlined,
  },
  methods: {
    handleChange(val) {
      let dataC = {
        jobId: this.data[0].jobId,
        candidateEmail: this.data[0].candidateEmail,
        status: val,
      };
      this.$store.dispatch("updateStatusApply", dataC);
    },
  },
};
</script>
<style>
.ant-table-cell {
  text-transform: capitalize;
}
</style>
