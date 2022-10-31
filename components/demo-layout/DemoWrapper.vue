<template>
  <div class="h-screen w-full overflow-auto relative">
    <DemoHeader class="bg-white" />
    <div class="relative flex w-full h-full pt-16 justify-end">
      <!-- build option -->
      <div v-show="state.mode === 'build'" class="w-full flex h-full w-full">
        <div class="flex h-full w-full">
          <div class="p-5">
            Body Content
          </div>
        </div>
        <!-- styling section -->
        <div class="pointer-events-auto w-screen max-w-md">
          <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div class="relative flex-1 py-6 px-4 sm:px-6 bg-indigo-100">
              <div class="ml-3 flex h-7 items-center justify-end">
                We will put styling options here
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- preview option -->
      <div v-show="state.mode === 'preview'" class="w-full bg-blue-50 p-5">
        Preview Mode
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
