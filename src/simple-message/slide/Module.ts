import {
  BaseContext,
  AssetDownload,
  IAssetsStorageAbility,
  IGuardsManager,
  ISlideContext,
  IPublicSlide,
  SlideModule
} from "dynamicscreen-sdk-js";

import { VNode } from 'vue';
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
    console.log('SimpleMessage working to be ready...')

    return true;
  };

  onMounted() {
    console.log('SimpleMessage: onMounted')
  }

  onUpdated() {
    console.log('SimpleMessage: onUpdated')
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
      console.log('Message: onPrepare')

    });

    this.context.onReplay(async () => {
      console.log('Message: onReplay')
    });

    this.context.onPlay(async () => {
      console.log('Message: onPlay')
    });

    // context.onPause(async () => {
    //   console.log('Message: onPause')
    // });

    this.context.onEnded(async () => {
      console.log('Message: onEnded')
    });

    return () =>
      h("div", {
        class: 'h-full w-full flex flex-col justify-center items-center ' + bgColor.value
      }, [
        h(Transition, {
          appear: true,
          enterFromClass: "opacity-0 translate-y-10",
          enterToClass: "opacity-100 translate-y-0"
        }, [
          h("div", {
            class: "font-sans w-1/2 text-6xl mb-16 font-bold text-white duration-500 ease-out transition-all transform"
          }, title.value),
        ]),
        h(Transition, {
          appear: true,
          enterFromClass: "opacity-0 translate-y-10",
          enterToClass: "opacity-100 translate-y-0"
        }, [
          h("div", {
            class : "font-sans w-1/2 text-5xl font-bold text-white delay-200 duration-500 delay-200 ease-out transition-all transform"
          }, message.value)
        ])
      ])
  }
}
