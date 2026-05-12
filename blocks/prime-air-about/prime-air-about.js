export default async function decorate(block) {
  const rows = [...block.children];

  // Second row contains the video link - convert it to a video element
  if (rows.length >= 2) {
    const videoCell = rows[1].querySelector('a');
    if (videoCell) {
      const videoUrl = videoCell.href;
      const video = document.createElement('video');
      video.controls = true;
      video.crossOrigin = 'anonymous';
      video.preload = 'metadata';
      video.setAttribute('controlslist', 'nodownload');

      const source = document.createElement('source');
      source.src = videoUrl;
      source.type = 'video/mp4';
      video.appendChild(source);

      // Replace the link cell content with the video
      const cell = rows[1].querySelector('div') || rows[1];
      cell.innerHTML = '';
      cell.appendChild(video);
    }
  }
}
