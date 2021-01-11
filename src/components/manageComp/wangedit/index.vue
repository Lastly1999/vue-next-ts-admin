<template>
  <div ref='editor'></div>
  <button @click='syncHTML'>实时预览</button>
  <div :innerHTML='content.html'></div>
</template>
<script lang="ts">
import {defineComponent, onMounted, onBeforeUnmount, ref, reactive} from 'vue'
import WangEditor from 'wangeditor';

export default defineComponent({
  setup() {
    const editor = ref();
    const content = reactive({
      html: '',
      text: '',
    });
    let instance: any;
    onMounted(() => {
      instance = new WangEditor(editor.value);
      Object.assign(instance.config, {
        onchange(e: any) {
          content.html = e
        },
      });
      instance.create();
    });
    onBeforeUnmount(() => {
      instance.destroy();
      instance = null;
    });
    const syncHTML = () => {
      content.html = instance.txt.html();
    };

    return {
      syncHTML,
      editor,
      content,
    }
  }
})
</script>