const coll = document.getElementsByClassName('collapsible');

for (let i = 0; i < coll.length; i += 1) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.border = 'none';
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
      content.style.border = 'solid 1px grey';
    }
  });
}
