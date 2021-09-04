<template>
  <section class="comment-block">
    <div
      v-show="!isEditing"
      class="comment-block__edit-trigger"
      v-on:click="isEditing = true"
    >
      <button
        class="btn btn-primary"
        type="button"
      >
        Say something?
      </button>
    </div>
    <transition name="default">
      <div
        v-show="isEditing"
        class="comment-block__form-wrapper"
      >
        <form
          id="#comment-form"
          @submit.prevent="addComment"
        >
          <div v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li
                v-for="(error, index) in errors"
                :key="index"
              >
                {{ error }}
              </li>
            </ul>
          </div>
          <div class="comment-block__form-row mb-3">
            <label
              for="author"
              class="form-label"
            >
              May I know your name?
            </label>
            <input
              type="text"
              class="form-control"
              id="author"
              v-model="model.author"
            >
          </div>
          <div class="comment-block__form-row mb-3">
            <label
              for="comment"
              class="form-label"
            >
              Feel free to say something to me!
            </label>
            <textarea
              name="comment"
              id="comment"
              class="form-control"
              v-model="model.content"
              lazy
            />
          </div>
          <div class="comment-block__form-row actions">
            <button
              ref="resetBtn"
              type="reset"
              class="btn btn-success"
              @click="isEditing = false"
            >
              Maybe Later
            </button>
            <button
              type="submit"
              class="btn btn-primary ml-3"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </transition>
    <b-modal
      ref="successModal"
      title="Thank you!"
    >
      <div class="d-block text-center">
        <h3>I've received your message!</h3>
      </div>
    </b-modal>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CommentBlock',
  data() {
    return {
      errors: [],
      isEditing: false,
      model: {
        author: '',
        time: '',
        content: '',
      },
    };
  },
  methods: {
    addComment() {
      if (this.formValidation()) {
        this.model.time = new Date().toLocaleString();
        axios.defaults.baseURL = 'https://about-me-de1da-default-rtdb.europe-west1.firebasedatabase.app';

        axios.post('/messages.json', this.model)
          .then(() => {
            this.showModal();
            this.$refs.resetBtn.click();
          })
          // eslint-disable-next-line
          .catch((error) => console.log(error));
      }
    },
    formValidation() {
      if (this.model.author && this.model.content) {
        return true;
      }

      this.errors = [];

      if (!this.model.author) {
        this.errors.push('Hallo, may I know your name?');
      }
      if (!this.model.content) {
        this.errors.push('I got a.... EMPTY STRING???');
      }

      return false;
    },
    showModal() {
      this.$refs.successModal.show();
    },
  },
};
</script>
