Vue.component('card', {
    template: ` 
        <div class="card card-result">
            <div class="card-header">
              <p class="card-header-title">{{ titleWithFavorite }}</p>
              <a class="card-header-icon">
                <span class="icon is-favorite">
                  <i class="fa fa-star"></i>
                </span>
              </a>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-128x200">
                    <img :src="image"
                      alt="">
                  </figure>
                </div>
                <div class="media-content">
                  <p>Created in {{creationDate}} - {{seasonsNumber}} seasons</p>
                  <p class="tags">
                    <span v-for="genre in genres" class="tag">{{ genre }}</span>
                  </p>
                  <p class="tags">
                    <span class="tag is-danger">{{ status }}</span>
                  </p>
                  <div class="content">
                    {{ description }}
                  </div>
                </div>
              </div>
            </div>
        </div>
    `,
    props: [
        'title',
        'description',
        'status',
        'image',
        'creationDate',
        'seasonsNumber',
        'genres',
        'isFavorite',
    ],
    computed: {
        titleWithFavorite() {
            const negativeFavorite  = this.isFavorite ? '' : 'NOT';
            return `${this.title} is ${negativeFavorite} your favorite!`;
        },
    }
})


let vm = new Vue({
    el: `#app`,
    data: {
        title: `My TV shows`,
    },
    // beforeCreate: function () {
    //     console.log('beforeCreate', this.title, this.$el);
    // },
    // created: function () {
    //     console.log('created', this.title, this.$el);
    // },
    // beforeMount: function () {
    //     console.log('beforeMount', this.title, this.$el);
    // },
    // mounted: function () {
    //     console.log('mounted', this.title, this.$el);
    // },
    // beforeDestroy: function () {
    //     console.log('beforeDestroy', this.title, this.$el);
    // },
    // destroyed: function () {
    //     console.log('destroyed', this.title, this.$el);
    // },
})