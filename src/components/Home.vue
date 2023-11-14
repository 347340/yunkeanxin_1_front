<template>
  <div id="background">
    <div class="image">
      <img src="@/assets/技术大陆.png" style="margin-left: 100px;">
      <img src="@/assets/淘金大陆.png" style="margin-left: 400px;">
      <img src="@/assets/风险大陆.png" style="margin-left: 400px;">
    </div>
    <div class="menu">
      <p class="menu_space" style="margin-left: 100px;">社区首页</p>
      <router-link to="/zhuiFeng">
        <p class="menu_space">追风大陆</p>
      </router-link>
      <p class="menu_space">淘金大陆</p>
      <p class="menu_space">风险大陆</p>
      <p class="menu_space">登录注册</p>
    </div>
    <div>
      <BannerComponent />
    </div>
  </div>
</template>

<script>
import BannerComponent from '@/components/Banner.vue';
export default {
  name: 'backgroundComponent',
  components: {
    BannerComponent
  }
}
</script>
<style>
@import '@/assets/Home.css';
</style>
