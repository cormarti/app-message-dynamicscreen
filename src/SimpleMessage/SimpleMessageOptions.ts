import {
  BaseContext,
  AssetDownload,
  IAssetsStorageAbility,
  IGuardsManager,
  ISlideContext,
  IPublicSlide,
  SlideModule,
  SlideUpdateFunctions
} from "dynamicscreen-sdk-js";

import i18next from "i18next";

const en = require("../../languages/en.json");
const fr = require("../../languages/fr.json");

export default class SimpleMessageOptionsModule extends SlideModule {
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
    console.log('onMounted simple-message OPTIONS')
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
    console.log('on updated')
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
  setup(props, ctx, update: SlideUpdateFunctions, OptionsContext) {
    const { h } = ctx;

    const { Field, TextInput, ColorPicker } = OptionsContext.components

    return () => [
        h(Field, { label: "Titre" }, [
          h(TextInput, {...update.option("title")})
        ]),
        h(Field, { label: "Message" }, [
          h(TextInput, {...update.option("message")})
        ]),
        h(Field, { label: "Couleur de fond" }, [
          h(ColorPicker, {...update.option("background_color")})
        ]),
      ]
  }
}
