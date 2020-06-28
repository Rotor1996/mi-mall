<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">mui</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登陆</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header"
};
</script>
<style lang="scss">
  @import './../assets/scss/base.scss';
  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #b0b0b0;
        .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        a{
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
        }
        .my-cart{
          background-color: #FF6600;
          width: 110px;
          text-align: center;
          color: #ffffff;
          .icon-cart{
            display: inline-block;
            width: 16px;
            height: 12px;
            background: url('/imgs/icon-cart-checked.png') no-repeat center;
            background-size: contain;
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{
     .container{
       height: 112px;
       display: flex;
       justify-content: space-between;
       align-items: center;
       .header-logo{
         display: inline-block;
         width: 55px;
         height: 55px;
         background-color: #FF6600;
         a{
           display: inline-block;
           width: 110px;
           height: 55px;
           &:before{
             content: '';
             display:inline-block;
             width: 55px;
             height: 55px;
             background: url('/imgs/mi-logo.png') no-repeat center;
             background-size:55px;
             transition: margin .2s;
           }
           &::after{
             content: '';
             display:inline-block;
             width: 55px;
             height: 55px;
             background: url('/imgs/mi-home.png') no-repeat center;
             background-size:55px;
           }
           &:hover::before{
             margin-left: -55px;
             transition: margin .2s;
           }
         }
       }
       .header-menu{
         display: inline-block;
         width: 200px;
         padding-left: 209px;
         .item-menu{
           display: inline-block;
           color:#333333;
           font-weight: bold;
           font-size: 16px;
           line-height: 112px;
           span{
             cursor: pointer;
           }
           &:hover{
             
           }
         }
       }
     }
    }
  }
</style>