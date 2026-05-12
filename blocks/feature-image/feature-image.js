export default async function decorate(block) {
  const rows = [...block.children];

  // Row 1: logo + heading
  if (rows[0]) {
    const cells = [...rows[0].children];
    // Cell 0 has logo image, cell 1 has heading
    const logoCell = cells[0];
    const headingCell = cells[1];

    // Extract logo img and reposition as overlay
    const logoImg = logoCell?.querySelector('img');
    if (logoImg) {
      logoImg.classList.add('feature-image-logo');
      block.appendChild(logoImg);
    }
  }

  // Row 2: video URL text → replace with <video> element
  if (rows[1]) {
    const cells = [...rows[1].children];
    const videoCell = cells[0];
    if (videoCell) {
      const videoUrl = videoCell.textContent.trim();
      if (videoUrl.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.controls = true;
        video.crossOrigin = 'anonymous';
        video.preload = 'metadata';
        video.setAttribute('controlslist', 'nodownload');

        const source = document.createElement('source');
        source.src = videoUrl;
        source.type = 'video/mp4';
        video.appendChild(source);

        videoCell.textContent = '';
        videoCell.appendChild(video);
      }
    }
  }
}
