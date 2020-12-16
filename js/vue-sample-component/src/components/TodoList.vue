<template>
    <div>
        <h1 v-html="title"></h1>
        <input 
            type="text"
            v-model="newItem" 
            @keypress.enter="addItem">
        <ul>
            <li v-if="newItem">{{ newItem }}</li>
            <li 
                v-for="(item, index) in items"
                @click="removeItem(index)"
                :class="[ 'item', {'even': isEven(index)} ]"
                :key="index">
                <input v-bind:name="`item[${index}]`" type="checkbox">

                <strong v-if="item == 'Coffee'">{{ item }}</strong>
                <em v-else-if="item == 'Frosted Flakes'">{{ item }}</em>
                <span v-else>{{ item }}</span>
            </li>
        </ul>
        <h4>You have {{ itemCount }} items to complete</h4>
    </div>
</template>

<script>
export default {
    name: 'TodoList', 

    data() {
        return {
            title: '<em>My Grocery List</em>',
            newItem: '',
            items: [
                'Captain Crunch',
                'Frosted Flakes',
                'Coffee', 
                'French Vanilla Creamer'
            ]
        }
    },

    computed: {
        itemCount() {
            return this.items.length;
        }
    },

    methods: {
        addItem() {
            this.items.splice(0, 0, this.newItem);
            this.newItem = '';
        },

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