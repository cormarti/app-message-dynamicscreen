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

export default class AdvancedMessageSlideModule extends SlideModule {
  constructor(context: ISlideContext) {
    super(context);
  }

  trans(key: string) {
    return i18next.t(key);
  };

  async onReady() {
    console.log('AdvancedMessage working to be ready...')

    return true;
  };

  onMounted() {
    console.log('AdvancedMessage: onMounted')
  }

  onUpdated() {
    console.log('AdvancedMessage: onUpdated')
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

    const bgUrl = ref(slide.data.backgroundImage)

    return () =>
      h("div", {
        class: 'h-full bg-fixed w-full bg-blue-400 flex flex-col justify-center items-center text-center',
        style: `background-image: url(${bgUrl})`
      }, [
        h(Transition, {
          appear: true,
          enterFromClass: "opacity-0 translate-y-10",
          enterToClass: "opacity-100 translate-y-0"
        }, [
          h("div", {
            class: "font-sans w-1/2 text-6xl mb-16 text-red-400 font-bold duration-500 ease-out transition-all transform"
          }, "Bonjour je suis le titre"),
        ]),
        h("div", {
          class: "flex flex-row w-full justify-around items-center"
        }, [
          h(Transition, {
            appear: true,
            enterFromClass: "opacity-0 translate-y-10",
            enterToClass: "opacity-100 translate-y-0"
          }, [
            h("div", {
              class : "font-sans w-1/3 text-3xl font-bold text-blue-300 delay-200 duration-500 delay-200 ease-out transition-all transform"
            }, "Bonjour je suis le texte 1"),
          ]),
          h(Transition, {
            appear: true,
            enterFromClass: "opacity-0 translate-y-10",
            enterToClass: "opacity-100 translate-y-0"
          }, [
            h("div", {
              class : "font-sans w-1/3 text-3xl font-bold text-blue-300 delay-300 duration-500 delay-200 ease-out transition-all transform"
            }, "Bonjour je suis le texte 2"),
          ]),
          h(Transition, {
            appear: true,
            enterFromClass: "opacity-0 translate-y-10",
            enterToClass: "opacity-100 translate-y-0"
          }, [
            h("div", {
              class : "font-sans w-1/3 text-3xl font-bold text-blue-300 delay-500 duration-500 delay-200 ease-out transition-all transform"
            }, "Bonjour je suis le texte 3"),
          ])
        ])
      ])
  }
}
