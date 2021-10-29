import {
  BaseContext,
  AssetDownload,
  IAssetsStorageAbility,
  IGuardsManager,
  ISlideContext,
  IPublicSlide,
  SlideModule
} from "dynamicscreen-sdk-js";

import i18next from "i18next";
import {computed} from "vue";

const en = require("../../languages/en.json");
const fr = require("../../languages/fr.json");

export const COLOR_CLASSES = {
  "green": 'lime-600', // text-lime-600 bg-lime-600 focus:ring-lime-600 border-lime-600
  "cyan": 'teal-400', // text-teal-400 bg-teal-400 focus:ring-teal-400 border-teal-400
  "blue": 'sky-500', // text-sky-500 bg-sky-500 focus:ring-sky-500 border-sky-500
  "blue-gray": 'blueGray-500', // text-blueGray-500 bg-blueGray-500 focus:ring-blueGray-500 border-blueGray-500
  "indigo": 'indigo-700', // text-indigo-700 bg-indigo-700 focus:ring-indigo-700 border-indigo-700
  "purple": 'purple-600', // text-purple-600 bg-purple-600 focus:ring-purple-600 border-purple-600
  "pink": 'pink-500', // text-pink-500 bg-pink-500 focus:ring-pink-500 border-pink-500
  "red": 'red-600', // text-red-600 bg-red-600 focus:ring-red-600 border-red-600
  "orange": 'orange-500', // text-orange-500 bg-orange-500 focus:ring-orange-500 border-orange-500
  "brown": 'yellow-800', // text-yellow-800 bg-yellow-800 focus:ring-yellow-800 border-yellow-800
  "yellow": 'yellow-500', // text-yellow-500 bg-yellow-500 focus:ring-yellow-500 border-yellow-500
  "gray": 'trueGray-400', // text-trueGray-400 bg-trueGray-400 focus:ring-trueGray-400 border-trueGray-400
};

export default class SimpleMessageSlideModule extends SlideModule {

  constructor(context: ISlideContext) {
    super(context);
  }

  trans(key: string) {
    return i18next.t(key);
  };

  async onReady() {
    return true;
  };

  onMounted() {

  }

  //@ts-ignore
  onErrorTracked(err: Error, instance: Component, info: string) {
  }

  //@ts-ignore
  onRenderTriggered(e) {
  }

  //@ts-ignore
  onRenderTracked(e) {
  }

  onUpdated() {
  }

  initI18n() {
    i18next.init({
      fallbackLng: 'en',
      lng: 'fr',
      resources: {
        en: { translation: en },
        fr: { translation: fr },
      },
      debug: true,
    }, (err, t) => {
      if (err) return console.log('something went wrong loading translations', err);
    });
  };

  // @ts-ignore
  setup(props, ctx) {
    const { h, reactive, ref, Transition } = ctx;

    const slide = reactive(props.slide) as IPublicSlide;
    this.context = reactive(props.slide.context);

    const bgColor = computed(() => {
        return COLOR_CLASSES[slide.data.background_color];
    })
    const title = ref(slide.data.title)
    const message = ref(slide.data.message)

    this.context.onPrepare(async () => {

    });

    this.context.onReplay(async () => {
    });

    this.context.onPlay(async () => {
      this.context.anime({
        targets: "#title",
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuad'
      });
      this.context.anime({
        targets: "#message",
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 500,
        delay: 200,
        easing: 'easeOutQuad'
      });
      console.log("ON PLAY CALLED")
    });

    // this.context.onPause(async () => {
    //   console.log('Message: onPause')
    // });

    this.context.onEnded(async () => {
    });

    return () =>
        h("div", {
          class: 'h-full w-full flex flex-col justify-center items-center bg-' + bgColor.value
        }, [
          h("div", {
            class: "font-sans w-1/2 text-6xl mb-16 font-bold text-white text-center",
            id: "title"
          }, title.value),

          h("div", {
            class : "message font-sans w-1/2 text-5xl font-bold text-white text-center",
            id: "message"
          }, message.value)
        ])
  }
}
