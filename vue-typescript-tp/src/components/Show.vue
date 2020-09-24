<template>
  <div class="card card-result">
    <div class="card-header">
      <p class="card-header-title">{{ titleWithFavorite }}</p>
      <a class="card-header-icon">
        <span class="icon is-favorite">
          <i
            :class="[isFavorite ? 'fa-star' : 'fa-star-o']"
            @click="toggleFavorite"
            class="fa"
          ></i>
        </span>
      </a>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x200">
            <img :src="image" alt="" />
          </figure>
        </div>
        <div class="media-content">
          <p>Created in {{ createdIn }} - {{ numberOfSeasons }} seasons</p>
          <p class="tags">
            <span v-for="genre in genres" :key="genre" class="tag">
              {{ genre }}
            </span>
          </p>
          <p class="tags">
            <span class="tag" :class="getStatusClass()">{{ status }} </span>
          </p>
          <div class="content" @click="toogleShortText()">
            {{ description | TextShortcutsFilters(30, isShortText) }}
          </div>
          <div>
            <router-link
              class="button is-link"
              :to="{ name: 'moreDetails', params: { id: this.id } }"
            >
              Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TextShortcutsFilters from "@/filters/TextShortcutsFilters";

@Component({
  filters: {
    TextShortcutsFilters
  }
})
export default class Show extends Vue {
  @Prop({ required: true })
  id!: number;

  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  description!: string;

  @Prop({ required: true })
  status!: string;

  @Prop({ required: true })
  image!: string;

  @Prop({ required: true })
  createdIn!: string;

  @Prop({ required: true })
  numberOfSeasons!: string;

  @Prop({ required: true })
  genres!: readonly string[];

  @Prop({ required: true })
  isFavorite!: boolean;

  isShortText = true;

  toggleFavorite(): void {
    this.$emit("toggle-favorite");
  }

  getStatusClass(): "is-primary" | "is-danger" {
    return this.status === "Continuing" ? "is-primary" : "is-danger";
  }

  toogleShortText(): void {
    this.isShortText = !this.isShortText;
  }

  get titleWithFavorite(): string {
    const negativeFavorite = this.isFavorite ? "" : "NOT";
    return `${this.title} is ${negativeFavorite} your favorite!`;
  }
}
</script>
