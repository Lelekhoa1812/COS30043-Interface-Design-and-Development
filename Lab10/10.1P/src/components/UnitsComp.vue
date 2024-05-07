<template>
  <div>
    <h2>Units</h2>
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Description</th>
          <th>Credit Points</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="unit in units" :key="unit.code">
          <td>{{ unit.code }}</td>
          <td>{{ unit.desc }}</td>
          <td>{{ unit.cp }}</td>
          <td>{{ unit.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import units from '../assets/units.json';

export default {
  name: 'UnitsComp',
  data() {
    return {
      units: units
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
