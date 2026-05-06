import { buyBtn } from "./ProductShowcase.astro.0.mts";

buyBtn?.addEventListener("click", () => {
    if (window.addToCart) {
        window.addToCart({
            name: "Polera Misiones HDM - Premium",
            price: 49.0,
        });
    }
});
