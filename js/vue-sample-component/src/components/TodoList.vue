<template>
    <div>
        <h1 v-html="title"></h1>
        <ul>
            <li 
                v-for="(item, index) in items"
                @click="removeItem(index)"
                :class="[ 'task', {'even': isEven(index)} ]"
                :key="index">
                <input v-bind:name="`task[${index}]`" type="checkbox">

                <strong v-if="item == 'Coffee'">{{ item }}</strong>
                <em v-else-if="item == 'Frosted Flakes'">{{ item }}</em>
                <span v-else>{{ item }}</span>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TodoList', 

    data() {
        return {
            title: '<em>My Grocery List</em>',
            items: [
                'Captain Crunch',
                'Frosted Flakes',
                'Coffee', 
                'French Vanilla Creamer'
            ]
        }
    },

    methods: {
        isEven(n) {
            if ((n + 1) % 2 == 0) {
                return true;
            }
            return false;
        },

        removeItem(index) {
            console.log('Target', index);
            this.items.splice(index, 1);
        }
    }
}
</script>

<style scoped>
.even {
    background-color: #ccc;
}
</style>