const Crazy = (element, reverse=true) => {

  if (window.innerWidth < 1200) {
    return;
  }

  // element position
  const rect = element.getBoundingClientRect();
  const elX = rect.left;
  const elY = rect.top;

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const diffX = Math.ceil(x - elX) / 50 * (reverse ? -1 : 1);
    const diffY = Math.ceil(y - elY) / 50 * (reverse ? -1 : 1);

    element.style.transform = `translate(${diffX}px, ${diffY}px)`;
  });

};

export default Crazy;
