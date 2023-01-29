import {createApp, registerElement} from 'nativescript-vue';
import Home from './components/Home.vue';
import {Pager} from "@nativescript-community/ui-pager";
import StackSlideTransformation from "~/Transformer.android";
import {createPinia} from 'pinia'
import {BottomSheetPlugin} from '@nativescript-community/ui-material-bottomsheet/vue3';
import {install} from "@nativescript-community/ui-material-bottomsheet";

registerElement("LottieView", () => require("@nativescript-community/ui-lottie").LottieView);
registerElement("Pager", () => require("@nativescript-community/ui-pager").Pager);
registerElement("PagerItem", () => require("@nativescript-community/ui-pager").PagerItem);


Pager.registerTransformer('stack', StackSlideTransformation)
install();

const pinia = createPinia()

const app = createApp(Home);
app.use(pinia);
app.use(BottomSheetPlugin);
app.start();
