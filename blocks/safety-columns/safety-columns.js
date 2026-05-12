export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    // Each row has 2 cells: text (h3+p) and image (picture)
    // Structure is already correct from .plain.html
    if (cells.length >= 2) {
      cells[0].classList.add('safety-columns-text');
      cells[1].classList.add('safety-columns-image');
    }
  });
}
