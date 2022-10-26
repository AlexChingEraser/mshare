<template>
  <div class="HeaderContainer">
    <div class="logo">MShare</div>
    <div class="operation">
      <div>login</div>
      <div>register</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MShareHeader",
};
</script>
<style lang="less" scoped>
.HeaderContainer {
  background-color: rgb(176, 150, 226);
  color: #fff;
  font-family: consolas;
  display: flex;
  flex-direction: row;
  .logo {
    padding: 0.2vh 0.5vw;
    font-size: 3rem;
  }
  .operation {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    & > div {
      margin-right: 0.5vw;
    }
  }
}
</style>
