<script setup lang="ts">
const slides = [
  '1_dune.jpg',
  '2_arrival.jpg',
  '3_euphoria.jpg',
  '4_little women.jpg',
  '5_call me by your name.jpg',
  '6_marty supreme.jpg',
  '7_parasite.jpg',
  '8_before sunrise.jpg',
  '9_la la land.jpg',
  '10_manchester by the sea.jpg',
  '11_black swan.jpg',
  '12_interstellar.jpg',
  '13_gone girl.jpg',
];

const preview = useTemplateRef<HTMLElement>('preview');
const isVisible = ref(false);
let observer: IntersectionObserver | undefined;

onMounted(() => {
  // Начинаем движение при появлении превью на экране, сохраняя первый постер по центру.
  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry?.isIntersecting ?? false;
  });

  if (preview.value) observer.observe(preview.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <div
    ref="preview"
    class="kinopoisk-carousel"
    :class="{ 'kinopoisk-carousel--playing': isVisible }"
    :style="{
      '--slide-count': slides.length,
      '--rotation-duration': `${slides.length * 4}s`,
    }"
    role="img"
    aria-label="Экран выбора фильмов в Kinopoisk Deluxe"
  >
    <UiImage class="kinopoisk-carousel__background" src="/projects/kinopoisk/preview-1-bg.jpg" />
    <div class="kinopoisk-carousel__scene" aria-hidden="true">
      <div class="kinopoisk-carousel__ring">
        <img
          v-for="(slide, index) in slides"
          :key="slide"
          class="kinopoisk-carousel__poster"
          :style="{ '--slide-index': index }"
          :src="$public(`/projects/kinopoisk/carousel/${slide}`)"
          alt=""
          width="200"
          height="300"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.kinopoisk-carousel {
  // Геометрия дуги масштабируется относительно ширины исходного превью 722 × 920.
  --carousel-radius: calc(100cqw * 415 / 722);

  position: relative;
  min-width: 0;
  overflow: hidden;
  container-type: inline-size;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  user-select: none;

  @include media-down($break-tablet) {
    aspect-ratio: 722 / 920;
  }

  &__background {
    width: 100%;
    height: 100%;
  }

  &__scene {
    position: absolute;
    inset: 0;
    perspective: calc(100cqw * 850 / 722);
    pointer-events: none;
  }

  &__ring {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateZ(var(--carousel-radius));
    animation: kinopoisk-carousel-spin var(--rotation-duration) linear infinite;
    animation-play-state: paused;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  &--playing &__ring {
    animation-play-state: running;
  }

  &__poster {
    position: absolute;
    top: 50%;
    left: 50%;
    width: percentRatio(175, 722);
    height: auto;
    aspect-ratio: 2 / 3;
    border-radius: calc(100cqw * 16 / 722);
    backface-visibility: hidden;
    // Постеры обращены внутрь кольца: первый в центре, последний — слева от него.
    transform: translate(-50%, -50%)
      rotateY(calc(-360deg * var(--slide-index) / var(--slide-count)))
      translateZ(calc(-1 * var(--carousel-radius)));
  }
}

@keyframes kinopoisk-carousel-spin {
  from {
    transform: translateZ(var(--carousel-radius)) rotateY(0deg);
  }

  to {
    transform: translateZ(var(--carousel-radius)) rotateY(360deg);
  }
}
</style>
