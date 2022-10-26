<template>
  <div class="HomeContainer">
    <ms-header class="header" />
    <ms-body class="body" />
  </div>
</template>
<script>
import MsHeader from "./Header.vue";
import MsBody from "./Body.vue";
export default {
  name: "MShareHome",
  components: {
    MsHeader,
    MsBody,
  },
};
</script>
<style lang="less">
body {
  margin: 0px 0px !important;
}
.HomeContainer {
  height: 100vh; /* important */
  display: flex;
  flex-direction: column;
  .body {
    flex: 1;
  }
}
</style>
