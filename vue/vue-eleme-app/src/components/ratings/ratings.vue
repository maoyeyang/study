<template>
  <div class="all">
    <div class="top">
      <div class="left">
        <p class="score">{{seller.score}}</p>
        <p class="scoreDesc">综合评分</p>
        <p class="rankRate">高于周边商家{{seller.rankRate}}%</p>
      </div>
      <div class="right">
        <p class="rightp serviceScore">
          <span class="trtitle">服务态度</span>
          <star :i="seller.serviceScore"></star>
          <span class="scoreType">{{seller.serviceScore}}</span>
        </p>
        <p class="rightp foodScore">
          <span class="trtitle">商品评分</span>
          <star :i="seller.foodScore"></star>
          <span class="scoreType">{{seller.foodScore}}</span>
        </p>
        <p class="rightp deliveryTime">
          <span class="trtitle">送达时间</span>
          <span class="deliveryTime">{{seller.deliveryTime}}分钟</span>
        </p>
      </div>
    </div>
    <div class="bottom">
      <div class="btndiv">
        <p class="btn btn_all">全部&nbsp;{{manyi[0]+manyi[1]}}</p>
        <p class="btn btn_manyi">满意&nbsp;{{manyi[0]}}</p>
        <p class="btn btn_unmanyi">不满意&nbsp;{{manyi[1]}}</p>
      </div>
      <div class="shezhi">
        <p>
          <span></span>
          <span class="text">只看有内容的评论</span>
        </p>
      </div>
      <ul class="comments">
        <li v-for="(item,index) in ratings"
            :key="index">
          <img :src="item.avatar" />
          <p>
            <span>{{item.username}}</span>
            <span>{{item.rateTime}}</span>
          </p>
          <div>
            <star :i="item.score"></star>
            <span v-show="item.deliveryTime">{{item.deliveryTime}}</span>
          </div>
          <p>{{item.text}}</p>
          <div></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import star from '../star/star'
export default {
  data () {
    return {
      ratings: [],
      seller: {}
    }
  },
  methods: {

  },
  computed: {
    manyi () {
      let manyi = [0, 0]
      this.ratings.forEach(item => {
        if (item.rateType === 0) {
          manyi[0]++
        } else {
          manyi[1]++
        }
      })
      return manyi
    }
  },
  created () {
    this.$http.get('vue-eleme-rating').then(res => {
      if (res.data.errno === 0) {
        this.ratings = res.data.data
        console.log(this.ratings);
      }
    })
    this.$http.get('vue-eleme-seller').then(res => {
      if (res.data.errno === 0) {
        this.seller = res.data.data
        console.log(res.data.data)
      }
    })
  },
  components: {
    star
  }
}
</script>

<style lang="stylus" scoped>
.all
  background-color: #F1F2F6
  .top
    height: 110px
    display: flex
    background-color: #fff
    border-bottom: 1px solid #A8A8A8
    .left
      flex: 3
      margin: 15px auto
      text-align: center
      border-right: 1px solid #C2C2C2
      .score
        font-size: 26px
        color: #FE8D05
        padding-top: 5px
        padding-bottom: 8px
      .scoreDesc
        font-size: 14px
        font-weight: 700
        padding-bottom: 8px
      .rankRate
        font-size: 12px
        color: #A0A0A0
    .right
      flex: 5
      padding: 15px 15px
      .rightp
        display: flex
        justify-content: flex-start
      p
        padding-bottom: 3px
        .trtitle
          font-weight: 700
          font-size: 14px
          margin-right: 5px
          padding: 5px
        .deliveryTime
          color: #A0A0A0
          font-size: 14px
          padding: 5px
        .scoreType
          line-height: 24px
          color: #FE8D05
        div
          margin-right: 5px
  .bottom
    border-top: 1px solid #A8A8A8
    margin-top: 20px
    background-color: #fff
    .btndiv
      height: 30px
      margin: 0 25px
      padding: 15px 0
      border-bottom: 1px solid #EAEAEA
      .btn
        display: inline-block
        margin-right: 10px
        padding: 0 10px
        height: 30px
        line-height: 30px
        font-size: 14px
        text-align: center
      .btn_all
        background-color: #0197DB
        color: #fff
      .btn_manyi
        background-color: #CDE9F8
        color: #000
      .btn_unmanyi
        background-color: #D6D7D9
        color: #000
    .shezhi
      padding: 15px 25px
      border-bottom: 1px solid #CFCFCF
      .text
        font-size: 14px
        color: #909090
</style>
