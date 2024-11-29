<template>
    <div>
        <q-markup-table>
            <thead>
                <tr>
                    <th
                        v-for="c in colunas" :key="c"
                        class="text-left" style="width: 150px">
                        <q-skeleton animation="blink" type="text" />
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="l in linhas" :key="l">
                    <td
                    v-for="c in colunas" :key="c"
                    class="text-left"
                    >
                        <q-skeleton animation="blink" type="text" width="85px" />
                    </td>
                </tr>
            </tbody>
        </q-markup-table>
    </div>
</template>

<script>
export default {
  name: 'SkeletonTable',
  props: {
    colunas: {
      type: Number,
      default: 3,
      required: false
    },
    linhas: {
      type: Number,
      default: 5,
      required: false
    }
  }
}
</script>
