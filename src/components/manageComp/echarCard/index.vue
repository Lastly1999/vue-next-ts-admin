<template>
  <a-row :gutter="16" style="color:#eee;margin-bottom: 20px">
    <a-col :span="6">
      <a-card :bordered="false" bodyStyle="cardList" title="总销售额">
        <a-statistic title="总销售额(元)" :precision="2" value="99445"></a-statistic>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card :bordered="false" bodyStyle="cardList" title="产品访问量">
        <a-statistic  title="访问人数/个" :precision="2" value="3859">
          <template #suffix>
            <like-outlined/>
          </template>
        </a-statistic>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card :bordered="false" bodyStyle="cardList" title="支付笔数">
        <a-statistic title="单位(笔)" :precision="2" value="125954">

        </a-statistic>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card :bordered="false" bodyStyle="cardList" title="企业访问量">
        <a-statistic :precision="2" value="112,893" title="Active Users">

        </a-statistic>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {LikeOutlined, DollarTwoTone} from "@ant-design/icons-vue"

export default defineComponent({
  props: {
    title: {
      type: String,
      default: () => "CardTtile"
    }
  },
  name: "echarCard",
  components: {
    LikeOutlined,
    DollarTwoTone
  }
})

</script>

<style scoped>
.cardList {
  color: #666;
}
</style>