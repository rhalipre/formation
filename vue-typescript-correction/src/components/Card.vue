<template>
  <div class="card card-result">
    <div class="card-header">
      <p class="card-header-title" v-ludo:love.really="isFavorite">
        {{ titleWithFavorite }}
      </p>
      <a class="card-header-icon">
        <span
          class="icon"
          :class="{ 'is-favorite': isFavorite }"
          @click="toggleIsFavorite"
        >
          <i class="fa fa-star"></i>
        </span>
      </a>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x200">
            <img :src="urlImage" alt="" />
          </figure>
        </div>
        <div class="media-content">
          <p>Created in {{ createdIn }} - {{ numberOfSeasons }} seasons</p>
          <p class="tags">
            <span class="tag" v-for="genre in genres" :key="genre">{{
              genre
            }}</span>
          </p>
          <p class="tags">
            <span class="tag" :class="[statusTagClass]">{{ status }}</span>
          </p>
          <div class="content" @click="toggleSummarize">
            {{ description | summarizeFilter(shouldSummarize) }}
          </div>
          <router-link
            class="button is-primary"
            :to="{ name: 'Detail', params: { id } }"
          >Details</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LudoDirective from "@/directives/LudoDirective";
import summarizeFilter from "@/filters/SummarizeFilter";

@Component({
  directives: {
    ludo: LudoDirective
  },
  filters: {
    summarizeFilter
  }
})
export default class CardComponent extends Vue {
  @Prop({ required: true })
  id!: string;

  @Prop({ required: true })
  genres!: ReadonlyArray<string>;

  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  description!: string;

  @Prop({ required: true })
  createdIn!: string;

  @Prop({ required: true })
  numberOfSeasons!: number;

  @Prop({ required: true })
  status!: string;

  @Prop({ required: true })
  urlImage!: string;

  @Prop({ required: true })
  isFavorite!: boolean;

  shouldSummarize = true;

  toggleIsFavorite(): void {
    this.$emit("toggle-favorite");
  }

  toggleSummarize(): void {
    this.shouldSummarize = !this.shouldSummarize;
  }

  get titleWithFavorite(): string {
    const negativeFavorite = this.isFavorite ? "" : " NOT";
    return `${this.title} is${negativeFavorite} Favorited`;
  }

  get statusTagClass(): "is-primary" | "is-danger" {
    if (this.status === "Continuing") {
      return "is-primary";
    }
    return "is-danger";
  }
}
</script>

<style>
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
