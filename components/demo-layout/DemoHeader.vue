<template>
  <div class="absolute top-0 left-0 w-full flex items-center justify-center py-5 shadow-sm">
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
        return "text-blue-500";
      }

      if (route?.query.mode === value) {
        return "text-blue-500";
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
