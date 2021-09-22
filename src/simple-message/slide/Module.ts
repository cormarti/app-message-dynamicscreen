import {
  BaseContext,
  AssetDownload,
  IAssetsStorageAbility,
  IGuardsManager,
  ISlideContext,
  IPublicSlide,
  SlideModule
} from "../../../../../../../../dynamicscreen-sdk-js/src";

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
    const { h, reactive, computed } = ctx;
    let slide = reactive(props.slide) as IPublicSlide;
    const context = reactive(props.slide.context);
    const bgColor = computed(() => slide.data.color);

    this.context = context

    context.onPrepare(async () => {
      console.log('SimpleMessage: onPrepare');
    });

    context.onReplay(async () => {
      console.log('SimpleMessage: onReplay')
    });

    context.onPlay(async () => {
      console.log('SimpleMessage: onPlay')
    });

    context.onEnded(async () => {
      console.log('SimpleMessage: onEnded')
    });

    return () => h("div", {
      class: "container"
    }, [
      h("div", {}, [
        h("p", {
          class: "a"
        }, this.trans('modules.simple_message.title')),
        h("p", {
          class: "b"
        }, this.trans('modules.simple_message.description')),
        h("div", {
          class: "slide-content center vertical-center-wrapper flex-column",
          style: [{ backgroundColor: bgColor }],
        }, [
          h('div', { class: 'container-message' }, [
            h("div", {
              class: "title",
            }, [
              h('strong', slide.data.title),
              h('strong', slide.data.message)
            ])
          ]),
        ]),
      ]),
    ]) as VNode
  }
}
