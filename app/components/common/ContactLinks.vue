<script setup lang="ts">
interface Props {
  vertical?: boolean;
}

const { vertical } = defineProps<Props>();

interface Item {
  title: string;
  href: string;
}

const items: Item[] = [
  { title: 'Behance', href: 'https://www.behance.net/soma_a' },
  { title: 'Telegram', href: 'https://t.me/valeriabndrnk' },
  { title: 'Gmail', href: 'mailto:valeriiabondarenko01@gmail.com' },
];
</script>

<template>
  <ul
    class="contact-links"
    :class="{
      'contact-links--vertical': vertical,
    }"
  >
    <li v-for="{ title, href } in items" :key="title" class="contact-links__item">
      <a :href="href" target="_blank">{{ title }}</a>
    </li>
  </ul>
</template>

<style lang="scss">
.contact-links {
  display: flex;

  &--vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  &__item {
    text-transform: uppercase;

    a {
      @include hover {
        background-color: var(--color-text);
        color: var(--color-background);
      }
    }
  }

  &:not(&--vertical) &__item {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      &::before {
        content: '';
        @include circle(4px);
        margin: 0 12px;
        background-color: var(--color-text);
      }
    }
  }
}
</style>
