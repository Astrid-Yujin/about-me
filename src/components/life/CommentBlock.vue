<template>
  <section class="comment-block">
    <div
      v-show="!isEditing"
      class="comment-block__edit-trigger"
      v-on:click="isEditing = true"
    >
      <button class="btn btn-outline-primary" type="button">Say something to me?</button>
    </div>
    <div
      v-show="isEditing"
      class="comment-block__form-wrapper"
    >
      <form>
        <div class="mb-3">
          <label for="author" class="form-label">Who are you?</label>
          <input type="email" class="form-control" id="author">
        </div>
        <div class="mb-3">
          <label for="comment" class="form-label">Feel free to say something to me!</label>
          <textarea name="comment" id="comment" class="form-control"></textarea>
        </div>
        <div class="mb-3">
          <button
            type="reset"
            class="btn btn-outline-success"
            @click.prevent="isEditing = false"
          >
            Maybe Later
          </button>
          <button type="submit" class="btn btn-outline-primary ml-3">Submit Now</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CommentBlock',
  data() {
    return {
      isEditing: false,
    };
  },
};
</script>
