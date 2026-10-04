<script setup lang="ts">
import type { Project } from '#shared/types/Project.ts';
import { usePreviewSlides } from '~/components/sections/projects/wonderfulStays/usePreviewSlides.ts';

const { previewSlides, activeSlideIndex, previousSlideIndex } = usePreviewSlides();

const project: Project = {
  name: 'Wonderful Stays',
  company: 'Uprock School',
  type: 'Концепт',
  year: 2024,
  details: {
    title: 'Эстетика путешествий',
    text: [
      'Wonderful Stays\u00a0— это отобранная коллекция уникальных бутик-отелей, дизайнерских апартаментов, шале и\u00a0домиков в\u00a0Германии, Австрии, Италии и\u00a0Корсике. Проект объединяет эстетику slow travel, editorial-дизайна и\u00a0тихой роскоши, раскрывая её\u00a0через крупную serif-типографику, природную палитру, кинематографичные фотографии и\u00a0большое количество воздуха',
      'Визуальный язык проекта формирует ощущение спокойствия, свободы и\u00a0лёгкой мечтательности. Он\u00a0не\u00a0стремится впечатлить роскошью напрямую, а\u00a0мягко создаёт желание замедлиться, уехать подальше от\u00a0города и\u00a0погрузиться в\u00a0атмосферу места.',
    ],
    images: [
      '/projects/wonderful-stays/view-1.png',
      '/projects/wonderful-stays/view-2.png',
      '/projects/wonderful-stays/view-3.png',
      '/projects/wonderful-stays/view-4.png',
      '/projects/wonderful-stays/view-5.png',
      '/projects/wonderful-stays/view-6.png',
    ],
  },
  modalClass: 'wonderful-stays-modal',
};
</script>

<template>
  <ProjectSectionBase :project="project" grid-class="wonderful-stays-section__grid">
    <div class="wonderful-stays-section__item wonderful-stays-section__slideshow">
      <UiImage
        v-for="(src, index) in previewSlides"
        :key="src"
        class="wonderful-stays-section__slide"
        :class="{
          'wonderful-stays-section__slide--active': index === activeSlideIndex,
          'wonderful-stays-section__slide--previous': index === previousSlideIndex,
        }"
        :src="src"
        :aria-hidden="index !== activeSlideIndex"
      />
    </div>
    <UiImage class="wonderful-stays-section__item" src="/projects/wonderful-stays/preview-2.jpg" />
    <UiImage class="wonderful-stays-section__item" src="/projects/wonderful-stays/preview-3.jpg" />
  </ProjectSectionBase>
</template>

<style lang="scss">
.wonderful-stays-section {
  &__grid {
    grid-template-columns:
      percentContentWidth(698)
      1fr
      1fr;
    aspect-ratio: $content-width / 500;

    @include media-down($break-tablet) {
      grid-template-columns: auto;
      aspect-ratio: auto;
    }
  }

  &__slideshow {
    display: grid;
    min-width: 0;
    isolation: isolate;
  }

  &__slide {
    grid-area: 1 / 1;
    z-index: 0;
    opacity: 0;

    &--previous {
      z-index: 1;
      opacity: 1;
    }

    &--active {
      z-index: 2;
      opacity: 1;
      transition: opacity 1s ease;
    }
  }
}

.wonderful-stays-modal {
  .project-modal {
    &__images {
      margin-top: 100px;
      gap: 80px;

      img {
        &:nth-child(3) {
          margin-top: -80px;
        }
      }

      @include media-down($break-mobile) {
        margin-top: 80px;
        gap: 60px;

        img {
          &:nth-child(3) {
            margin-top: -60px;
          }
        }
      }
    }
  }
}
</style>
