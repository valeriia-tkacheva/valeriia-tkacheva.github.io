<script setup lang="ts">
import type { Project } from '#shared/types/Project.ts';

const project: Project = {
  name: 'СберСпасибо',
  company: 'Сбер',
  type: 'Редизайн',
  year: 2026,
  details: {
    title: 'Бонусы Спасибо как\u00a0часть экосистемы Сбера',
    text: [
      'Концепция страницы строится вокруг идеи «круговорота выгоды». Пользователь совершает привычные покупки, получает за\u00a0них бонусы Спасибо, а\u00a0затем вновь совершает покупки, используя бонусы.',
      'Спасибки представлены как\u00a0важная связующая часть экосистемы Сбера, объединяющая разные сервисы и\u00a0жизненные сценарии.',
      'Стилеобразующим элементом являются яркие фотоиллюстрации, которые делают коммуникацию более живой и\u00a0близкой для\u00a0пользователя',
    ],
    siteUrl: 'https://www.sberbank.ru/ru/person/sberspasibo',
    images: [
      '/projects/sber-spasibo/view-1.png',
      '/projects/sber-spasibo/view-2.png',
      '/projects/sber-spasibo/view-3.png',
      '/projects/sber-spasibo/view-4.png',
    ],
  },
};
</script>

<template>
  <ProjectSectionBase :project="project" grid-class="sber-spasibo-section__grid">
    <UiImage class="sber-spasibo-section__item" src="/projects/sber-spasibo/preview-1.jpg" />

    <div class="sber-spasibo-section__item">
      <UiImage src="/projects/sber-spasibo/preview-2-bg.jpg" />

      <UiVideo
        src="/projects/sber-spasibo/preview-2-video.mp4"
        poster="/projects/sber-spasibo/preview-2-poster.jpg"
      />
    </div>

    <UiImage class="sber-spasibo-section__item" src="/projects/sber-spasibo/preview-3.jpg" />

    <img src="/projects/sber-spasibo/coin-top.png" alt="" class="sber-spasibo-section__coin-top" />
    <img
      src="/projects/sber-spasibo/coin-bottom.png"
      alt=""
      class="sber-spasibo-section__coin-bottom"
    />
  </ProjectSectionBase>
</template>

<style lang="scss">
.sber-spasibo-section {
  &__grid {
    position: relative;
    grid-template-columns:
      1fr
      percentContentWidth(698)
      1fr;
    aspect-ratio: $content-width / 500;

    @include media-down($break-tablet) {
      grid-template-columns: 1fr 1fr;
      aspect-ratio: auto;
    }
  }

  &__item {
    &:nth-child(2) {
      position: relative;

      .ui-image {
        width: 100%;
        height: 100%;
      }

      .ui-video {
        position: absolute;
        top: 50%;
        left: 50%;
        width: percentRatio(618, 698);
        transform: translate(-50%, -50%);
        aspect-ratio: 618 / 355;
        border-radius: 8px;
      }

      @include media-down($break-tablet) {
        order: -1;
        grid-column: 1 / 3;
      }
    }
  }

  &__coin-top,
  &__coin-bottom {
    position: absolute;

    @include media-down($break-tablet) {
      display: none;
    }
  }

  &__coin-top {
    width: percentContentWidth(132);
    left: percentContentWidth(985);
    top: 0;
    transform: translate(0, percentRatio(-95, 136));
  }

  &__coin-bottom {
    width: percentContentWidth(218);
    left: percentContentWidth(440);
    bottom: 0;
    transform: translate(0, percentRatio(60, 194));
  }
}
</style>
