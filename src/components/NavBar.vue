<template>
  <nav class="nav">
    <RouterLink to="/home" class="logo">
      <img src="@/assets/images/logo.svg" alt="Disney+" />
    </RouterLink>
    <a v-if="!user.user.name" @click="signIn" class="login">login</a>
    <template v-else>
      <div class="navMenu">
        <a href="/home">
          <img src="@/assets/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a>
          <img src="@/assets/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="@/assets/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="@/assets/images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="@/assets/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="@/assets/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </div>
      <div class="signOut">
        <img :src="user.photo" :alt="user.name" class="userImg" />
        <div class="dropDown">
          <span @click="signOut">Sign Out</span>
        </div>
      </div>
    </template>
  </nav>
</template>

<script>
import {
  signInWithGooglePopup,
  onAuthStateChangedListener,
  signOutUser,
} from '@/utils/firebase.utils';
import { useUserStore } from '@/stores/user';
import { RouterLink } from 'vue-router';

export default {
  name: 'NavBar',
  components: { RouterLink },
  data() {
    return {
      store: useUserStore(),
      unsubscribeAuth: null,
    };
  },
  computed: {
    user() {
      return this.store.user;
    },
  },
  created() {
    this.unsubscribeAuth = onAuthStateChangedListener((user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        this.setUser(email, displayName, photoURL);
        this.$router.push('/home');
      }
    });
  },
  beforeUnmount() {
    if (this.unsubscribeAuth) {
      this.unsubscribeAuth();
    }
  },
  methods: {
    async signIn() {
      const user = await signInWithGooglePopup();
      const { displayName, email, photoURL } = user;
      this.setUser(displayName, email, photoURL);
    },
    async signOut() {
      await signOutUser();
      this.store.setSignOutState();
      this.$router.push('/');
    },
    setUser(name, email, photo) {
      this.store.setUserLoginDetails(name, email, photo);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
}

.logo {
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
}

.navMenu {
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: '';
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
}

.login {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
}

.userImg {
  height: 100%;
}

.signOut {
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  .userImg {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    .dropDown {
      opacity: 1;
      transition-duration: 1s;
    }
  }
}

.dropDown {
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
}
</style>
