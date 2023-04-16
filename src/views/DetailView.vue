<template>
  <div class="container">
    <div class="background">
      <img :src="movie.backgroundImg" :alt="movie.title" />
    </div>
    <div class="imageTitle">
      <img :src="movie.titleImg" :alt="movie.title" />
    </div>
    <div class="contentMeta">
      <div class="controls">
        <button class="player">
          <img src="@/assets/images/play-icon-black.png" alt="" />
          <span>Play</span>
        </button>
        <button class="trailer player">
          <img src="@/assets/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </button>
        <div class="addList">
          <span />
          <span />
        </div>
        <div class="groupWatch">
          <div>
            <img src="@/assets/images/group-icon.png" alt="" />
          </div>
        </div>
      </div>
      <div class="subTitle">
        {{ movie.subTitle }}
      </div>
      <div class="description">
        {{ movie.description }}
      </div>
    </div>
  </div>
</template>

<script>
import { fetchMovieById } from '@/utils/firebase.utils';
export default {
  name: 'DetailView',
  data() {
    return {
      movie: {},
    };
  },
  async created() {
    const res = await fetchMovieById(this.$route.params.id);
    console.log(res);
    if (res) this.movie = res;
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
}

.background {
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
}

.imageTitle {
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
}

.contentMeta {
  max-width: 874px;
}

.controls {
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
}

.player {
  font-size: 15px;
  margin: 0 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
}

.trailer {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
}

.addList {
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
}

.groupWatch {
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
}

.subTitle {
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.description {
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
}
</style>
