<template>
  <div class="home">
    <HomePage />
    <ConviceSection />
    <MakeDiff />
    <HomeCause />
    <ServeHumanity />
    <LatestNews />
    <NewsLetter />
    <FooterView />
  </div>
</template>

<script>
// import MyFooter from './MyFooter.vue'
import HomePage from '@/components/HomePage.vue'
import ConviceSection from '@/components/ConviceSection.vue'
import MakeDiff from '@/components/MakeDiff.vue'
import HomeCause from '@/components/HomeCause.vue'
import ServeHumanity from '@/components/ServeHumanity.vue'
import LatestNews from '@/components/LatestNews.vue'
import NewsLetter from '@/components/NewsLetter.vue'

export default {
  name: 'HomeView',
  components: {
    HomePage,
    ConviceSection,
    MakeDiff,
    HomeCause,
    ServeHumanity,
    LatestNews,
    NewsLetter,
  }
}
</script>

<style scoped>
   .home{
    width: 100%;
    height: 100%;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }
</style>
