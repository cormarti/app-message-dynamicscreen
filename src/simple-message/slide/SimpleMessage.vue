<template>
    <div class="container">
      <p>{{  trans('modules.simple_message.title') }}</p>

      <div class="slide-content" :style="{backgroundColor: bgColor}">
            <div class="container-message">
                <div class="title">
                  <strong>{{ slide.data.title }}</strong>
                  <strong>{{  trans('app.title') }}</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import i18next from "i18next";
const en = require("../../../languages/en.json");
const fr = require("../../../languages/fr.json");

export default defineComponent({
        props: { context: {type: Object} },
      mounted() {
          this.initI18n();
      },
      computed: {
          slide() {
            return this.context.slide;
          },
          bgColor() {
            return this.slide.data.background_color;
        }
      },
      methods: {
          initI18n() {
            i18next.init({
              fallbackLng: 'en',
              lng: 'fr',
              resources: {
                en: { translation: en },
                fr: { translation: fr },
              },
              debug: true,
              ns: {
                namespaces: ['translation'],
                defaultNs: 'translation'
              }
            }, (err, t) => {
              if (err) return console.log('something went wrong loading translations', err);
            });
        },
        trans(key) {
          return i18next.t(key);
        },
      },
    })
</script>

<style scoped>

.slide-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-message {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2em;
  margin-bottom: 0.5em;
  color: #ffffff;
}

.container-animation {
  animation:
    slideUp 0.75s .3s cubic-bezier(0.17,.88,.32,1.27) both,
    fadeIn .25s .3s ease-in both;
  animation-delay: 0.5s;
}

.message-text {
  color: #ffffff;
  text-overflow: ellipsis;
  padding-right: 1.5em;
  padding-left: 1.5em;
  text-align: justify;
}


.line hr {
  border: 3px solid #ffffff;
  width: 4%;
  margin: 0.5em 0 0 1.6em;
}

@keyframes slideUp {
  from {transform: translateY(200%);}
  to {transform:translateY(0%);}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

</style>
