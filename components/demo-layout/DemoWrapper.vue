<template>
  <div class="h-screen w-full overflow-auto relative">
    <DemoHeader class="bg-white" />
    <div class="flex w-full h-full pt-16 justify-end">
      <!-- styling form slide over -->
      <DemoSlideOver />
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from "#imports";
import { onMounted, defineComponent, reactive, watch } from "vue";

export default defineComponent({
  setup() {
    const route = useRoute();
    const state = reactive({
      mode: <string>"build",
    });

    onMounted(() => {
      if (route?.query?.mode) {
        state.mode = route.query.mode;
      }
    });

    watch(
      () => route.query,
      (newVaL) => {
        state.mode = newVaL.mode;
      },
      { deep: true }
    );

    return {
      state,
    };
  },
});
</script>
