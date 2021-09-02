<template>
  <div class="life page-content">
    <nature class="page-background"/>
    <div class="row">
      <div class="row-content">
        <div class="video-wrapper">
            <iframe
              src="https://player.bilibili.com/player.html?aid=625941618&bvid=BV1pt4y1y78o&cid=200764819&page=1&high_quality=1&danmaku=0"
              scrolling="no"
              border="0"
              frameborder="no"
              framespacing="0"
              allowfullscreen="true"
            ></iframe>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="row-content">
        <comment-block></comment-block>
      </div>
    </div>
  </div>
</template>

<script>
import CommentBlock from '../components/life/CommentBlock.vue';
import Nature from '../components/background/Nature.vue';

export default {
  name: 'Life',
  components: {
    CommentBlock,
    Nature,
  },
  beforeRouteEnter(to, from, next) {
    next(() => {
      document.body.className = to.meta.bodyClass;
    });
  },
};
</script>
