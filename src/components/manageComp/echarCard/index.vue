<template>
  <a-row :gutter="16" style="color:#eee;margin-bottom: 20px">
    <a-col :span="6">
      <a-card :bordered="false" bodyStyle="cardList" title="总销售额">
        <a-statistic style="margin-bottom: 10px" title="总销售额/元" :precision="2" value="99445"></a-statistic>
        <tinyChar :data="[274, 337, 81, 497, 666, 219, 269]"/>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card :bordered="false" bodyStyle="cardList" title="产品访问量">
        <a-statistic style="margin-bottom: 10px" title="访问人数/个" :precision="2" value="3859">
          <template #suffix>
            <like-outlined/>
          </template>
        </a-statistic>
        <tinyLine/>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card :bordered="false" bodyStyle="cardList" title="支付笔数">
        <a-statistic style="margin-bottom: 10px" title="单位/笔" :precision="2" value="125954"></a-statistic>
        <tinyArea/>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card :bordered="false" bodyStyle="cardList" title="企业访问量">
        <a-statistic style="margin-top: 10px" :precision="2" value="112,893" title="数量/人"></a-statistic>
        <tinyChar :data="[333, 500, 222, 111, 333, 555, 444]"/>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {LikeOutlined, DollarTwoTone} from "@ant-design/icons-vue"
import tinyChar from "@/components/manageComp/g2plot/miniTiny/index.vue"
import tinyLine from "@/components/manageComp/g2plot/tinyLine/index.vue"
import tinyArea from "@/components/manageComp/g2plot/tinyArea/index.vue"

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
    DollarTwoTone,
    tinyChar,
    tinyLine,
    tinyArea
  }
})

</script>

<style scoped>
.cardList {
  color: #666;
}
</style>