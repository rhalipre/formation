<template>
  <show-list
    :shows="favoriteShows"
    @toggle-favorite="toggleFavorite"
  ></show-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Show } from "@/types/Show";
import ShowList from "@/components/ShowList.vue";
import {fetchShows, setShowFavorite} from "@/repositories/ShowRepository";

@Component({
  components: {
    showList: ShowList
  }
})
export default class FavoritesComponent extends Vue {
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

  get favoriteShows(): Show[] {
    return this.shows.filter(show => show.isFavorite);
  }
}
</script>
