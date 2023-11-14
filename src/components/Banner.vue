<template>
  <div>
    <div class="banner">
      <div class="item">
        <img :src="bannerData[currentIndex]">
      </div>
      <div class="page" v-if="bannerData.length > 1">
        <ul>
          <li @click="gotoPage(prevIndex)">&lt;</li>
          <li v-for="(item, index) in bannerData" :key="index" @click="gotoPage(index)" :class="{'current': currentIndex === index}">{{index+1}}</li>
          <li @click="gotoPage(nextIndex)">&gt;</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BannerComponent',
  data () {
    return {
      bannerData: [
        require('@/assets/社区首页-banner1.png'),
        require('@/assets/社区首页-banner2.png'),
        require('@/assets/社区首页-banner3.png')
      ],
      currentIndex: 0,
      timer: null
    }
  },
  computed: {
    prevIndex () {
      if (this.currentIndex === 0) {
        return this.bannerData.length - 1
      } else {
        return this.currentIndex - 1
      }
    },
    nextIndex () {
      if (this.currentIndex === this.bannerData.length - 1) {
        return 0
      } else {
        return this.currentIndex + 1
      }
    }
  },
  methods: {
    gotoPage (index) {
      this.currentIndex = index
    },
    runInv () {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex)
      }, 3000)
    }
  },
  created () {
    this.runInv()
  }
}
</script>
<style>
@import '@/assets/Home.css';
</style>
