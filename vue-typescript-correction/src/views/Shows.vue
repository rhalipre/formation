<template>
  <show-list :shows="shows" @toggle-favorite="toggleFavorite"></show-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ShowList from "@/components/ShowList.vue";
import { Show } from "@/types/Show";
import { fetchShows, setShowFavorite } from "@/repositories/ShowRepository";

@Component({
  components: {
    showList: ShowList
  }
})
export default class ShowsComponent extends Vue {
  shows: Show[] = [];

  async created(): Promise<void> {
    this.shows = await fetchShows();
  }

  async toggleFavorite(clickedShowId: number): Promise<void> {
    const showToToggle = this.shows.find(show => {
      return show.id === clickedShowId;
    });
    if (showToToggle) {
      await setShowFavorite(clickedShowId, !showToToggle.isFavorite);
      this.shows = await fetchShows();
    }
  }
}
</script>
