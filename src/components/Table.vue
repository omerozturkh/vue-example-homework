<template>
    <div>
        <div class="table-responsive">
            <table>
                <thead>
                    <th :key="index" v-for="(item, index) in data.headers">{{item}}</th>
                </thead>
                <tbody>
                <tr :key="index" v-for="(item, index) in data.rows">
                    <td  :key="index" v-for="(row, index) in item">{{row}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import json from '@/json/table.json'

    export default {
        name: 'Header',
        props: ['hasLogin'],

        data() {
            return {
                data: json.data
            };
        },

    }
</script>
