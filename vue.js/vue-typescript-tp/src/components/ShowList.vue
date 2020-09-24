<template>
  <div>
    <div v-if="showSearchBar" class="field">
      <label for="searchBar" class="label">Search</label>
      <div class="control">
        <input
          id="searchBar"
          class="input"
          type="text"
          placeholder="Game of Thrones, Breaking Bad, ..."
          @keyup.enter="validatedSearchQuery()"
          v-model="validationSearchQuery"
          v-auto-focus
        />
      </div>
    </div>
    <div>
      <show
        v-for="show in filteredCardsByTitle"
        :key="show.id"
        :id="show.id"
        :title="show.title"
        :description="show.description"
        :image="show.images.poster"
        :created-in="show.createdIn"
        :number-of-seasons="show.numberOfSeasons"
        :status="show.status"
        :genres="show.genres"
        :isFavorite="show.isFavorite"
        @toggle-favorite="toggleFavorite(show.id)"
      >
      </show>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
// @ is an alias to /src
import Show from "@/components/Show.vue";
import { ShowI } from "@/types/ShowI";
import AutoFocus from "@/directives/AutoFocusDirectives";

@Component({
  components: {
    Show
  },
  directives: {
    AutoFocus
  }
})
export default class HomeComponent extends Vue {
  titlePage = "My TV show";
  searchQuery = "";
  validationSearchQuery = "";

  @Prop({ required: true })
  shows!: ShowI[];

  @Prop({ required: true})
  showSearchBar!: boolean;

  validatedSearchQuery(): void {
    this.searchQuery = this.validationSearchQuery;
  }

  toggleFavorite(clickedShowId: number): void {
    this.$emit("toggle-favorite", clickedShowId);
  }

  get filteredCardsByTitle(): ShowI[] {
    return this.shows.filter(show => {
      return show.title
        .toLocaleUpperCase()
        .includes(this.searchQuery.toLocaleUpperCase());
    });
  }
}
</script>

<style>
.navbar-item.is-active {
  color: #00d1b2 !important;
}

.card-result {
  margin-bottom: 20px;
}

.is-128x200 {
  height: 200px;
  width: 128px;
}

.is-favorite {
  color: #ffdd57;
}
</style>
