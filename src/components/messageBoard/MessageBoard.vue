<template>
  <section class="message-board">
    <div class="row">
      <div class="row-content">
        <b-table
          ref="messageTable"
          :items="messages"
          :fields="fields"
          striped
          hover
        />
      </div>
    </div>
    <div class="row">
      <div class="row-content">
        <comment-block @update="updateMessages"/>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { BTable } from 'bootstrap-vue';
import CommentBlock from '../commentBlock/CommentBlock.vue';

export default {
  name: 'MessageBoard',
  components: {
    CommentBlock,
    BTable,
  },
  data() {
    return {
      isLoading: true,
      fields: [
        {
          key: 'author',
          sortable: true,
        },
        {
          key: 'time',
          sortable: true,
        },
        {
          key: 'content',
          label: 'Message',
          sortable: false,
        },
      ],
      messages: [],
    };
  },
  created() {
    axios.defaults.baseURL = 'https://about-me-de1da-default-rtdb.europe-west1.firebasedatabase.app';

    axios.get('/messages.json')
      .then((res) => {
        const { data } = res;
        this.messages = Object.values(data);
        this.$store.commit('finishPageLoading');
      })
      // eslint-disable-next-line
      .catch((error) => alert(error));
  },
  mounted() {
    this.$store.commit('startPageLoading');
  },
  beforeDestroy() {
    this.$store.commit('finishPageLoading');
  },
  methods: {
    updateMessages(newMessage) {
      this.messages.push(newMessage);
    },
  },
};
</script>
