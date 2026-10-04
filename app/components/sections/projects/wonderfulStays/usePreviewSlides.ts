const previewSlides = [
  '/projects/wonderful-stays/preview-1-slide1.jpg',
  '/projects/wonderful-stays/preview-1-slide2.jpg',
  '/projects/wonderful-stays/preview-1-slide3.jpg',
  '/projects/wonderful-stays/preview-1-slide4.jpg',
  '/projects/wonderful-stays/preview-1-slide5.jpg',
];

export const usePreviewSlides = () => {
  const activeSlideIndex = ref(0);
  const previousSlideIndex = ref<number | null>(null);
  let slideInterval: ReturnType<typeof setInterval> | undefined;

  onMounted(() => {
    slideInterval = setInterval(() => {
      previousSlideIndex.value = activeSlideIndex.value;
      activeSlideIndex.value = (activeSlideIndex.value + 1) % previewSlides.length;
    }, 3000);
  });

  onUnmounted(() => {
    clearInterval(slideInterval);
  });

  return { previewSlides, activeSlideIndex, previousSlideIndex };
};
