<template>
  <div class="container">
    <h1 class="title">{{ title }} - {{ searchQuery }}</h1>
    <div class="field">
      <label class="label">Search</label>
      <div class="control">
        <input
          v-focus
          class="input"
          type="text"
          placeholder="Game of Thrones, Breaking Bad, ..."
          v-model="searchQuery"
          @keypress.enter="validateSearchQuery"
        />
      </div>
    </div>
    <div>
      <card
        v-for="show in filteredShows"
        :key="show.id"
        :id="show.id"
        :title="show.title"
        :description="show.description"
        :created-in="show.createdIn"
        :number-of-seasons="show.numberOfSeasons"
        :status="show.status"
        :url-image="show.images.poster"
        :genres="show.genres"
        :is-favorite="show.isFavorite"
        @toggle-favorite="toggleFavorite(show.id)"
      ></card>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Show } from "../types/Show";
import Card from "@/components/Card.vue";
import focus from "@/directives/AutoFocusDirective";

@Component({
  directives: {
    focus
  },
  components: {
    card: Card
  }
})
export default class ShowList extends Vue {
  title = "Hello Nextoo";

  @Prop({ required: true })
  shows!: Show[];

  searchQuery = "";
  validatedSearchQuery = "";
  get filteredShows(): Show[] {
    return this.shows.filter(show => {
      return show.title
        .toUpperCase()
        .includes(this.validatedSearchQuery.toUpperCase());
    });
  }
  toggleFavorite(clickedShowId: string): void {
    this.$emit("toggle-favorite", clickedShowId);
  }

  validateSearchQuery(): void {
    this.validatedSearchQuery = this.searchQuery;
  }
}
</script>
