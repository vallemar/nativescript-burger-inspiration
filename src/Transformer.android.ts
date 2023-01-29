import {Utils} from "@nativescript/core";


@NativeClass
@Interfaces([androidx.viewpager2.widget.ViewPager2.PageTransformer])
export default class UserTransitionTransformation extends java.lang.Object implements androidx.viewpager2.widget.ViewPager2.PageTransformer {
    transformPage(page: android.view.View, position: any) {
        const linearCardTransformation = new LinearCardTransformation(page, position);
        linearCardTransformation.animate()
    }
}

class BasePagerAnimation {
    page: android.view.View;
    position: number;

    constructor(page: android.view.View, position: number) {
        this.page = page;
        this.position = position;
    }
}

class LinearCardTransformation extends BasePagerAnimation {
    constructor(page: android.view.View, position: number) {
        super(page, position);
    }

    // Note: for this transformer to work well on android the item pages must have a margin
    animate(translate = 80, staleFactor = 0.28) {

        const viewPager = this.page.getParent().getParent() as androidx.viewpager2.widget.ViewPager2
        const page = this.page
        const position = this.position
        // viewPager.setOffscreenPageLimit(3);
        viewPager.setClipToPadding(false);
        viewPager.setClipChildren(false);

        androidx.core.view.ViewCompat.setElevation(this.page, -Math.abs(this.position))

        const pageTranslationX = Utils.layout.toDevicePixels(translate);

        if (position < -1) {
            this.page.setTranslationY(-(pageTranslationX) * this.position)
        } else if (position <= 0) {
            this.page.setTranslationY(-(pageTranslationX) * this.position)
        } else if (position <= 1) {
            this.page.setTranslationY(+(pageTranslationX) * this.position)
        } else {
            this.page.setTranslationY(+(pageTranslationX) * this.position)

        }
        this.page.setTranslationX(-(pageTranslationX) * this.position)
    }
}