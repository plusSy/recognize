### 图片识别

此功能使用了开源技术 **百度AI 开放平台**

#### 查看源码
GitHub链接: https://github.com/Baidu-AIP/nodejs-sdk

#### 直接使用node开发包步骤如下：

- 在[官方网站](https://ai.baidu.com/sdk#ocr)下载node SDK压缩包。

- 将下载的aip-node-sdk-version.zip解压后，复制到工程文件夹中。

- 进入目录，运行```npm install```安装sdk依赖库

- 把目录当做模块依赖

其中，version为版本号，添加完成后，用户就可以在工程中使用通用文字识别 Node SDK。

#### 直接使用npm安装依赖：

```npm install baidu-aip-sdk```

#### 目录

```
  - baidu_sdk
    - aip-node-sdk-2.3.10
      - src
        - auth                      // 授权相关类
        - http                      // HTTP通信x相关类
        - client                    // 公用类
        - util                      // 工具类
        - const                     // 常量类
      - ***.js                      // ***识别交互类
      - index.js                    // 入口文件
      - package.json                // npm 包描述文件
  - config
    - index.js                      // 基础配置
  - http
    - index.js                      // http 配置信息
  - images                          // 本地图片存放位置
  - result                          // 识别结果存放位置
  - index.js                        // 入口文件
  - package.json                    // npm包描述文件
```


**配置详情查看网站** http://ai.baidu.com/docs#/OCR-Node-SDK/4b515026
