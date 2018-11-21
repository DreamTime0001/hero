<template>
  <div class="download-index">
    <div v-if="isShow">
      <p class="title">
        <span>最新客户端下载</span>
      </p>
      <table>
        <tbody>
          <tr>
            <th>文件名</th>
            <th>大小</th>
            <th>MDS</th>
            <th>下载链接</th>
          </tr>
          <tr>
            <td>jsyx3.pak</td>
            <td>705MB</td>
            <td>C454C96D40F9E3E5030CDD69B373F397</td>
            <td>
              <a href="">下载链接</a>
            </td>
          </tr>
          <tr>
            <td>jsyx3.pak</td>
            <td>705MB</td>
            <td>C454C96D40F9E3E5030CDD69B373F397</td>
            <td>
              <a href="">下载链接</a>
            </td>
          </tr>
          <tr>
            <td>jsyx3.pak</td>
            <td>705MB</td>
            <td>C454C96D40F9E3E5030CDD69B373F397</td>
            <td>
              <a href="">下载链接</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p class="title">
        <span>最新补丁</span>
      </p>
      <table>
        <tbody>
          <tr>
            <th>版本</th>
            <th>大小</th>
            <th>更新时间</th>
            <th>下载链接</th>
            <th>试用客户端</th>
          </tr>
          <tr>
            <td>jsyx3.pak</td>
            <td>705MB</td>
            <td>2018/09/1</td>
            <td>
              <a href="">下载链接</a>
            </td>
            <td>xp</td>
          </tr>
          <tr>
            <td>jsyx3.pak</td>
            <td>705MB</td>
            <td>2018/09/1</td>
            <td>
              <a href="">下载链接</a>
            </td>
            <td>xp</td>
          </tr>
          <tr>
            <td>jsyx3.pak</td>
            <td>705MB</td>
            <td>2018/09/1</td>
            <td>
              <a href="">下载链接</a>
            </td>
            <td>xp</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    isShow() {
      return this.$route.query.name === "游戏下载"
    }
  }
};
</script>

<style lang="scss" scoped>
.download-index {
  padding-top: 10px;
  .title {
    padding: 15px 0;
    color: #1d1f25;
    span {
      display: inline-block;
      font-size: 18px;
      font-weight: bold;
      line-height: 18px;
      padding-left: 15px;
      border-left: 3px solid #ffce53;
    }
  }
  table {
    width: 100%;
    margin-bottom: 10px;
    tr {
      height: 46px;
      border-bottom: 1px solid #fff;
    }
    th {
      text-align: center;
      background: #9b907a;
      color: #fff;
    }
    td {
      text-align: center;
      background: #efedea;
      color: #1d1f25;
      a {
        color: #1d1f25;
        text-decoration: underline;
      }
    }
  }
}
</style>

