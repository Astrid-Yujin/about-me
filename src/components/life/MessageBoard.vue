<template>
  <section class="message-board">
    <div class="row">
      <div class="row-content">
        <b-table
          :items="messages"
          :fields="fields"
          striped
          hover
        />
      </div>
    </div>
    <div class="row">
      <div class="row-content">
        <comment-block />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import CommentBlock from './CommentBlock.vue';

export default {
  name: 'MessageBoard',
  components: {
    CommentBlock,
  },
  data() {
    return {
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
      })
      .catch((error) => console.log(error));
  },
};
</script>
