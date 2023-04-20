<template>
  <Splide :options="splideOptions">
    <SplideSlide>
      <div class="wrap">
        <a href="">
          <img src="@/assets/images/slider-badging.jpg" alt="" />
        </a>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="wrap">
        <a href="">
          <img src="@/assets/images/slider-scale.jpg" alt="" />
        </a>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="wrap">
        <a href="">
          <img src="@/assets/images/slider-badag.jpg" alt="" />
        </a>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="wrap">
        <a href="">
          <img src="@/assets/images/slider-scales.jpg" alt="" />
        </a>
      </div>
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
  name: 'ImageSlider',
  components: { Splide, SplideSlide },
  data() {
    return {
      splideOptions: {
        type: 'slide',
        rewind: true,
        perPage: 1,
        perMove: 1,
        autoplay: true,
        interval: 2000,
        speed: 500,
        pagination: true,
        pauseOnHover: true,
        padding: {
          left: '4vw',
          right: '4vw',
        },
        classes: {
          // Add classes for arrows.
          arrows: 'splide__arrows',
          arrow: 'splide__arrow arrow',
          prev: 'splide__arrow--prev',
          next: 'splide__arrow--next',

          // Add classes for pagination.
          pagination: 'splide__pagination', // container
          page: 'splide__pagination__page page', // each button
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
}
</style>

<style lang="scss">
.splide {
  margin-top: 20px;
  width: 100vw;
  margin-left: calc(-3.5vw - 15px);

  &:hover .arrow {
    opacity: 1;
    transition: opacity 0.2s ease 0s;
  }
}

.arrow {
  opacity: 0;
  /* height: 100%;
  width: 5vw; */
  z-index: 1;
}

.splide__arrows {
  display: flex;
  justify-content: center;
  margin-left: 10px;
}

.page {
  height: 10px;
  width: 10px;
  margin: 0 12px;
  position: relative;
  top: 30px;
}

.page.is-active {
  transform: initial;
  opacity: 1;
}
</style>
