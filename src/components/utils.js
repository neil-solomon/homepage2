export function isInViewport(id) {
  const element = document.getElementById(id);

  if (!element) return false;

  if (
    element.getBoundingClientRect().bottom > 0 &&
    element.getBoundingClientRect().top < window.innerHeight
  ) {
    // console.log(`${id} in view`);
    return true;
  } else {
    // console.log(`${id} NOT in view`);
    return false;
  }
}
