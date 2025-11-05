const fs = require('fs');
const path = require('path');

const config = {
      source: path.join(__dirname, '..', 'target'),
      destinations: [
            path.join(
                  __dirname,
                  '..',
                  'android',
                  'app',
                  'src',
                  'main',
                  'res',
                  'drawable',
            ),
            path.join(
                  __dirname,
                  '..',
                  'android',
                  'app',
                  'src',
                  'main',
                  'res',
                  'mipmap-hdpi',
            ),
            path.join(
                  __dirname,
                  '..',
                  'android',
                  'app',
                  'src',
                  'main',
                  'res',
                  'mipmap-mdpi',
            ),
            path.join(
                  __dirname,
                  '..',
                  'android',
                  'app',
                  'src',
                  'main',
                  'res',
                  'mipmap-xhdpi',
            ),
            path.join(
                  __dirname,
                  '..',
                  'android',
                  'app',
                  'src',
                  'main',
                  'res',
                  'mipmap-xxhdpi',
            ),
            path.join(
                  __dirname,
                  '..',
                  'android',
                  'app',
                  'src',
                  'main',
                  'res',
                  'mipmap-xxxhdpi',
            ),
            path.join(
                  __dirname,
                  '..',
                  'android',
                  'app',
                  'src',
                  'main',
                  'res',
                  'values',
            ),
      ],
};

function copyFile(source, destination) {
      try {
            fs.copyFileSync(source, destination);
            console.log(`${path.basename(source)} ✅`);
            return true;
      } catch (error) {
            console.error(`${path.basename(source)} ❌`, error.message);
            return false;
      }
}

function mainFunction() {
      console.clear();
      console.log('🚀 Starting android configuration\n');

      let successCount = 0;
      let errorCount = 0;

      if (!fs.existsSync(config.source)) {
            console.error(
                  `❌ Pasta de origem não encontrada: ${config.source}`,
            );
            process.exit(1);
      }

      config.destinations.forEach(destDir => {
            const lastPart = path.basename(destDir);
            console.log(`📁 Target Directory: ${lastPart}`);

            if (lastPart === 'drawable') {
                  copyFile(
                        path.join(config.source, 'splash/splash.xml'),
                        path.join(destDir, 'splash.xml'),
                  );
            } else if (lastPart.startsWith('mipmap-hdpi')) {
                  copyFile(
                        path.join(config.source, 'assets/hdpi/icon.png'),
                        path.join(destDir, 'icon.png'),
                  );
                  copyFile(
                        path.join(config.source, 'assets/hdpi/icon_round.png'),
                        path.join(destDir, 'icon_round.png'),
                  );
                  copyFile(
                        path.join(config.source, 'splash/splash.png'),
                        path.join(destDir, 'splash.png'),
                  );
            } else if (lastPart.startsWith('mipmap-mdpi')) {
                  copyFile(
                        path.join(config.source, 'assets/mdpi/icon.png'),
                        path.join(destDir, 'icon.png'),
                  );
                  copyFile(
                        path.join(config.source, 'assets/mdpi/icon_round.png'),
                        path.join(destDir, 'icon_round.png'),
                  );
                  copyFile(
                        path.join(config.source, 'splash/splash.png'),
                        path.join(destDir, 'splash.png'),
                  );
            } else if (lastPart.startsWith('mipmap-xhdpi')) {
                  copyFile(
                        path.join(config.source, 'assets/xhdpi/icon.png'),
                        path.join(destDir, 'icon.png'),
                  );
                  copyFile(
                        path.join(config.source, 'assets/xhdpi/icon_round.png'),
                        path.join(destDir, 'icon_round.png'),
                  );
                  copyFile(
                        path.join(config.source, 'splash/splash.png'),
                        path.join(destDir, 'splash.png'),
                  );
            } else if (lastPart.startsWith('mipmap-xxhdpi')) {
                  copyFile(
                        path.join(config.source, 'assets/xxhdpi/icon.png'),
                        path.join(destDir, 'icon.png'),
                  );
                  copyFile(
                        path.join(
                              config.source,
                              'assets/xxhdpi/icon_round.png',
                        ),
                        path.join(destDir, 'icon_round.png'),
                  );
                  copyFile(
                        path.join(config.source, 'splash/splash.png'),
                        path.join(destDir, 'splash.png'),
                  );
            } else if (lastPart.startsWith('mipmap-xxxhdpi')) {
                  copyFile(
                        path.join(config.source, 'assets/xxxhdpi/icon.png'),
                        path.join(destDir, 'icon.png'),
                  );
                  copyFile(
                        path.join(
                              config.source,
                              'assets/xxxhdpi/icon_round.png',
                        ),
                        path.join(destDir, 'icon_round.png'),
                  );
                  copyFile(
                        path.join(config.source, 'splash/splash.png'),
                        path.join(destDir, 'splash.png'),
                  );
            } else if (lastPart.startsWith('values')) {
                  copyFile(
                        path.join(config.source, 'color.xml'),
                        path.join(destDir, 'color.xml'),
                  );
                  copyFile(
                        path.join(config.source, 'strings.xml'),
                        path.join(destDir, 'strings.xml'),
                  );
                  copyFile(
                        path.join(config.source, 'styles.xml'),
                        path.join(destDir, 'styles.xml'),
                  );
            }

            console.log('');
      });

      console.log('📊 Resume:');
      console.log(`   ✅ Success: ${successCount} file(s)`);
      console.log(`   ❌ Error: ${errorCount} file(s)`);

      if (errorCount > 0) {
            process.exit(1);
      }
}

mainFunction();
