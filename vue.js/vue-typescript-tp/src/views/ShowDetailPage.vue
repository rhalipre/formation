<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ titlePage }}
          </h1>
          <ShowList
            :shows="getShow"
            :show-search-bar="false"
            @toggle-favorite="toggleFavorite"
          ></ShowList>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// @ is an alias to /src
import ShowList from "@/components/ShowList.vue";
import ShowsService from "@/services/ShowsService";
import { ShowI } from "@/types/ShowI";

@Component({
  components: {
    ShowList
  }
})
export default class ShowDetail extends Vue {
  @Prop({ required: true })
  id!: number;

  titlePage = "My TV show";

  created(): void {
    this.$store.dispatch("fetchShowById", this.id);
  }

  toggleFavorite(showId: number): void {
    const show = this.$store.getters.getShowById(showId);
    if (show) {
      this.$store.dispatch("setFavorite", {
        showId: show.id,
        isFavorite: !show.isFavorite,
        findById: true
      });
    }
  }

  get getShow() {
    return this.$store.state.shows;
  }
}
</script>
