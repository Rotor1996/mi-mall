<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="http://www.rotor1996.top" target="_blank">河畔一角主页1</a>
      <span>|</span>
      <a href="http://www.rotor1996.top">河畔一角主页2</a>
      <span>|</span>
      <a href="http://www.rotor1996.top">河畔一角主页3</a>
      <span>|</span>
      <a href="http://www.rotor1996.top">河畔一角主页4</a>
      <span>|</span>
      <a href="http://www.rotor1996.top">河畔一角主页5</a>
    </div>
    <div
      class="copyright"
    >© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div>
  </div>
</template>
<script>
export default {
  name: "nav-footer"
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: $fontI;
  text-align: center;
  .footer-logo{
    margin-top: 46px;
    margin-bottom: 31px;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    a{
      color: $colorD;
      display: inline-block;
      &:hover{
        color: $colorA;
      }
    }
    span{
      margin: 0 10px;
    }
  }
}
</style>