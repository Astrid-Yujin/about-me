<template>
  <section class="image-gallery">
    <div class="row is-fullwidth">
      <div class="row-content">
        <swiper
          ref="mySwiper"
          :options="swiperOptions"
        >
          <swiper-slide
            v-for="(image, index) in images"
            :key="index"
          >
            <cld-image
              class="swiper-image"
              :publicId="image.publicId"
              loading="lazy"
              crop="fill"
              width="auto"
              quality="auto"
              aspectRatio="4:3"
              gravity="auto"
            />
            <div class="swiper-text h4">{{ image.description }}</div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="row">
      <div class="row-content">
        <div class="video-wrapper">
          <b-button v-b-modal.modal-video>Want a Video?</b-button>
          <b-modal id="modal-video" title=":)">
            <iframe
              src="https://player.bilibili.com/player.html?aid=625941618&bvid=BV1pt4y1y78o&cid=200764819&page=1&high_quality=1&danmaku=0"
              scrolling="no"
              border="0"
              frameborder="no"
              framespacing="0"
              allowfullscreen="true"
            ></iframe>
          </b-modal>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.min.css';

import SwiperCore, {
  EffectCoverflow,
  Pagination,
} from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination]);

export default {
  name: 'ImageGallery',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      },
      images: [
        {
          publicId: 'about-me/210821_camping',
          description: 'Camping in Switzerland - 21.08.2021',
        },
        {
          publicId: 'sample',
          description: 'sample',
        },
        {
          publicId: 'samples/landscapes/landscape-panorama',
          description: 'landscape-panorama',
        },
        {
          publicId: 'samples/landscapes/nature-mountains',
          description: 'nature-mountains',
        },
        {
          publicId: 'samples/landscapes/beach-boat',
          description: 'beach-boat',
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  beforeRouteEnter(to, from, next) {
    next(() => {
      document.body.className = to.meta.bodyClass;
    });
  },
};
</script>
