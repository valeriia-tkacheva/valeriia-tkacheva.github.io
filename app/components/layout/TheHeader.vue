<script setup lang="ts">
import { NAME } from '#shared/utils/constants.ts';
import { useMoscowTime } from '~/composables/useMoscowTime.ts';

const moscowTime = useMoscowTime();

const isMobileMenuOpen = ref(false);
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <p class="header__time">Москва. {{ moscowTime }}</p>

      <div class="header__main">
        <p class="header__name">{{ NAME }}</p>

        <UiButton href="/valeriia-tkacheva.pdf" class="header__resume" text="Резюме" download>
          <IconDownload />
        </UiButton>

        <div class="header__mobile-menu-button" @click="isMobileMenuOpen = !isMobileMenuOpen">
          {{ isMobileMenuOpen ? 'Скрыть' : 'Контакты' }}
        </div>

        <div v-if="isMobileMenuOpen" class="header__mobile-menu">
          <ContactLinks class="header__mobile-contacts" vertical />

          <UiButton
            href="/valeriia-tkacheva.pdf"
            class="header__mobile-resume"
            text="Резюме"
            download
          >
            <IconDownload />
          </UiButton>
        </div>
      </div>

      <ContactLinks class="header__contacts" />
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  text-transform: uppercase;

  @include media-down($break-tablet) {
    top: 20px;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 634px 1fr;

    @include media-down($break-tablet) {
      display: block;
    }
  }

  &__time {
    @include media-down($break-tablet) {
      display: none;
    }
  }

  &__main {
    display: flex;
    gap: 40px;

    @include media-down($break-tablet) {
      position: relative;
      justify-content: space-between;
    }
  }

  &__resume {
    @include media-down($break-tablet) {
      display: none;
    }
  }

  &__contacts {
    justify-self: end;

    @include media-down($break-tablet) {
      display: none;
    }
  }

  &__mobile-menu-button {
    cursor: pointer;

    @include media-up($break-tablet) {
      display: none;
    }
  }

  &__mobile-menu {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
    background-color: var(--color-background);
  }

  &__mobile-contacts {
    align-items: flex-end;
  }

  &__mobile-resume {
    margin-top: 32px;
  }
}
</style>
