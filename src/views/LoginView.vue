<template>
  <section class="container">
    <div class="content">
      <div class="cta">
        <img
          src="@/assets/images/cta-logo-one.svg"
          alt="logo-1"
          class="ctaLogoOne"
        />
        <a class="signUp">GET ALL THERE</a>
        <p class="description">
          Get Premier Access to the latest blockbuster releases for an
          additional fee with a Disney+ subscription. As of 04/14/23, enjoy an
          extensive library of Disney classics, Marvel, Star Wars, Pixar, and
          National Geographic content. Stay up-to-date with new releases and
          exclusive series, only on Disney+.
        </p>
      </div>
      <div class="bgImage" />
      <img
        src="@/assets/images/cta-logo-two.png"
        alt="logo-2"
        class="ctaLogoTwo"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginView',
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
}

.content {
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
}

.bgImage {
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('@/assets/images/login-background.jpg');
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
}

.cta {
  max-width: 650px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.ctaLogoOne {
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
}

.signUp {
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
}

.description {
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
}

.ctaLogoTwo {
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
}
</style>
