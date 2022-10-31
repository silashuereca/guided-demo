<template>
  <div class="absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-3 justify-center py-5 shadow-sm z-10">
    <div class="px-5">
      <p class="font-medium text-lg">
        Title Of the Demo Goes Here
      </p>
    </div>
    <div class="flex items-center">
      <NuxtLink :to="{ name: 'demo-create', query: { mode: 'build' } }" :class="[highlightMode('build')]">
        Build Mode
      </NuxtLink>
      <p class="mx-5 text-xl">
        /
      </p>
      <NuxtLink :to="{ name: 'demo-create', query: { mode: 'preview'}}" :class="[highlightMode('preview')]">
        Preview Mode
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from "#imports";
import { onMounted, defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      routeName: <string>"",
    });

    onMounted(() => {
      if (route?.query?.mode) return;
      router.push({ name: "demo-create", query: { mode: "build" } });
    });

    function highlightMode(value: string): string {
      if (route?.query.mode === value) {
        return "text-indigo-500";
      }

      if (route?.query.mode === value) {
        return "text-indigo-500";
      }

      return "text-gray-600";
    }

    return {
      route,
      state,
      highlightMode,
    };
  },
});
</script>
