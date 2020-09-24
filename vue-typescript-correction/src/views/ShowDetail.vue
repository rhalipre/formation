<template>
  <card
    v-if="show !== null"
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
  <h1 v-else class="is-danger">Show not found !</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Show } from "@/types/Show";
import Card from "@/components/Card.vue";
import { fetchShowById, setShowFavorite } from "@/repositories/ShowRepository";

@Component({
  components: {
    card: Card
  }
})
export default class ShowDetailComponent extends Vue {
  @Prop({ required: true })
  id!: number;

  show: Show | null = null;

  async created(): Promise<void> {
    this.show = await fetchShowById(this.id);
  }

  async toggleFavorite(): Promise<void> {
    this.show = await setShowFavorite(this.id, !this.show?.isFavorite);
  }
}
</script>
