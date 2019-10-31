import Vue from 'Vue';
import Anime from 'animejs';
import cFilters from 'Modules/c-filters.vue';

new Vue({
    el: '#app',
    components:
    {
        'c-filters': cFilters,
    },
    provide:
    {
        anime: Anime
    }
});