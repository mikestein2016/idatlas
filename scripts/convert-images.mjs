import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

async function convertDir(dir) {
  for (const file of await readdir(dir)) {
    const full = join(dir, file);
    const s = await stat(full);
    if (s.isDirectory()) {
      await convertDir(full);
    } else if (['.png', '.jpg', '.jpeg'].includes(extname(file).toLowerCase()) && file !== 'favicon.png') {
      const out = join(dir, basename(file, extname(file)) + '.webp');
      await sharp(full).webp({ quality: 85 }).toFile(out);
      const newSize = (await stat(out)).size;
      const pct = Math.round((1 - newSize / s.size) * 100);
      console.log(`  ${file} → ${basename(out)} (${s.size} → ${newSize} bytes, -${pct}%)`);
    }
  }
}

await convertDir('public');
