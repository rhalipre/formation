<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ titlePage }}
          </h1>
          <ShowList
            :shows="favoriteShow"
            :show-search-bar="true"
            @toggle-favorite="toggleFavorite"
          ></ShowList>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// @ is an alias to /src
import ShowList from "@/components/ShowList.vue";
import { ShowI } from "@/types/ShowI";
import ShowsService from "@/services/ShowsService";

@Component({
  components: {
    ShowList
  }
})
export default class Favorites extends Vue {
  titlePage = "My TV show";

  created(): void {
    this.$store.dispatch("fetchShows");
  }

  get favoriteShow(): ShowI[] {
    return this.$store.getters.getShowsFavorite;
  }

  toggleFavorite(showId: number): void {
    const show = this.$store.getters.getShowById(showId);
    if (show) {
      this.$store.dispatch("setFavorite", {
        showId: show.id,
        isFavorite: !show.isFavorite,
        findById: false
      });
    }
  }
}
</script>
