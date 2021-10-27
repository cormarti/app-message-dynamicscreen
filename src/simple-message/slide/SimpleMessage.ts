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

const en = require("../../../languages/en.json");
const fr = require("../../../languages/fr.json");

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


    const bgColor = ref(slide.data.backgroundColor);
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
      });
      this.context.anime({
        targets: "#message",
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 500,
        delay: 300
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
          class: 'h-full w-full flex flex-col justify-center items-center ' + bgColor.value
        }, [
          h("div", {
            class: "font-sans w-1/2 text-6xl mb-16 font-bold text-white text-center",
            id: "title"
          }, title.value),

          h("div", {
            class : "message font-sans w-1/2 text-5xl font-bold text-white text-center opacity-0",
            id: "message"
          }, message.value)
        ])
  }
}
