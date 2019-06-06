export const fileKey = (file, soft = false) =>
  file.name
    .replace(/\.[^/.]+$/, '')
    .replace(/\s/g, '_')
    .replace(/[.]/g, '')
    .replace(/[^a-zA-Z0-9][-_]/g, '') + (soft ? '__' : file.lastModified);
