export function isInViewport(id) {
  const element = document.getElementById(id);

  if (!element) return false;

  if (
    element.getBoundingClientRect().bottom > 0 &&
    element.getBoundingClientRect().top < window.innerHeight
  ) {
    return true;
  } else {
    return false;
  }
}
