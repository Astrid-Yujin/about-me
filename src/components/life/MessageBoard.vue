<template>
  <section class="message-board">
    <div class="message-board__title">
      Say something to me!
    </div>
    <div class="message-board__content">
      <div class="row">
        <div class="row-content">
          <comment-form></comment-form>
        </div>
      </div>

      <div class="row">
        <div class="row-content">
          <div 
            v-for="(value, name, key) in infos"
            :key=key 
            class="message-board__item"
          >
            <div class="message-board__author">{{ author }}</div>
            <div class="message-board__message" v-html="message"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import commentForm from './CommentForm';

export default {
  name: 'message-board',
  components: {
    commentForm,
  },
};
</script>
