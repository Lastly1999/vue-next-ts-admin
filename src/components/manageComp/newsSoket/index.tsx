import {defineComponent, onMounted, reactive, toRefs} from 'vue'
import "./style/index.scss"
import soketList from "@/components/manageComp/newsSoket/soket.ts";

/**
 * 消息队列组件 显示soket日志
 */

const newsSoket = defineComponent({
    setup() {
        const list = reactive([...soketList])
        setTimeout(() => {
            let i = 0
            let data = {
                id: i++,
                info: `[Info] change time:'2020/12/08 ${new Date()} 心跳检测`
            }
            list.push(data)
        }, 1000)
        onMounted(() => {
            console.log(list)
        })
        return {list}
    },
    render() {
        return (<div class={"soketContainer"}>
            {this.list.map(item => {
                return <p class={"infoText"}>{item.info}</p>
            })}
        </div>)
    }
})

export default newsSoket