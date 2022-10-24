<template>
  <div class="h-screen w-full overflow-auto relative">
    <DemoHeader class="bg-white" />
    <div class="relative flex w-full h-full pt-16 justify-end">
      <!-- styling form slide over -->
      <div v-show="state.mode === 'build'" class="w-full flex h-full w-full">
        <div class="flex h-full w-full">
          <div class="p-5">
            Body Content
          </div>
        </div>
        <div class="p-5">
          <button v-show="!state.openSideBar" type="button" class="block primary-button whitespace-nowrap" @click="state.openSideBar = true">
            Style Demo
          </button>
        </div>
        <DemoSlideOver :open="state.openSideBar" @close="state.openSideBar = false" />
      </div>
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
      openSideBar: <boolean>false,
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
