const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function build() {
  console.log('🚀 Building Vietnamese Bible Tooltip library...');

  const distDir = path.resolve(__dirname, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // 1. Copy CSS
  fs.copyFileSync(
    path.resolve(__dirname, 'src/styles.css'),
    path.resolve(distDir, 'vietnamese-bible-tooltip.css')
  );
  console.log('✅ Copied CSS to dist/vietnamese-bible-tooltip.css');

  // 2. Build ESM
  await esbuild.build({
    entryPoints: [path.resolve(__dirname, 'src/index.ts')],
    bundle: true,
    format: 'esm',
    outfile: path.resolve(distDir, 'index.mjs'),
    sourcemap: true,
    target: ['es2020'],
  });
  console.log('✅ Built ESM module: dist/index.mjs');

  // 3. Build CJS
  await esbuild.build({
    entryPoints: [path.resolve(__dirname, 'src/index.ts')],
    bundle: true,
    format: 'cjs',
    outfile: path.resolve(distDir, 'index.cjs'),
    sourcemap: true,
    target: ['es2020'],
  });
  console.log('✅ Built CJS module: dist/index.cjs');

  // 4. Build Standalone IIFE (Unminified)
  await esbuild.build({
    entryPoints: [path.resolve(__dirname, 'src/index.ts')],
    bundle: true,
    format: 'iife',
    globalName: 'VietnameseBibleTooltip',
    outfile: path.resolve(distDir, 'vietnamese-bible-tooltip.iife.js'),
    sourcemap: true,
    target: ['es2018'],
  });
  console.log('✅ Built Standalone IIFE: dist/vietnamese-bible-tooltip.iife.js');

  // 5. Build Standalone IIFE (Minified)
  await esbuild.build({
    entryPoints: [path.resolve(__dirname, 'src/index.ts')],
    bundle: true,
    format: 'iife',
    globalName: 'VietnameseBibleTooltip',
    outfile: path.resolve(distDir, 'vietnamese-bible-tooltip.iife.min.js'),
    minify: true,
    sourcemap: true,
    target: ['es2018'],
  });
  console.log('✅ Built Minified IIFE: dist/vietnamese-bible-tooltip.iife.min.js');

  // 6. Generate TypeScript declaration types
  try {
    execSync('npx tsc --emitDeclarationOnly --declaration', {
      cwd: __dirname,
      stdio: 'inherit',
    });
    console.log('✅ Generated TypeScript declarations');
  } catch (err) {
    console.warn('⚠️ Warning: tsc declaration emit encountered an issue', err);
  }

  console.log('🎉 Build complete!');
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
