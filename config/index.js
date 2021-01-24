const path = require('path');

const config = {
  projectName: 'applet-alipay-market-launch',
  date: '2020-12-27',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  alias: {
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/config': path.resolve(__dirname, '..', 'src/config'),
    '@/core': path.resolve(__dirname, '..', 'src/core'),
    '@/inner': path.resolve(__dirname, '..', 'src/inner'),
    '@/model': path.resolve(__dirname, '..', 'src/model'),
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    '@/store': path.resolve(__dirname, '..', 'src/store'),
  }
};

module.exports = function (merge) {
  if (process.env.BUILD_ENV === 'development') {
    return merge({}, config, require('./dev'));
  } else if(process.env.BUILD_ENV === 'testing') {
    return merge({}, config, require('./testing'));
  } else{
    return merge({}, config, require('./prod'));
  }

};
