// 初始化 GrapesJS 编辑器
const editor = grapesjs.init({
    container: '#gjs',
    fromElement: false,
    height: '100vh',
    width: '100%',
    storageManager: false,
    // 汉化配置
    i18n: {
        locale: 'zh-CN',
        detectLocale: false,
        localeFallback: 'en',
        messages: {
            'zh-CN': {
                styleManager: {
                    sectors: [{
                        name: '布局',
                        open: false,
                        buildProps: ['display', 'width', 'height', 'padding', 'margin', 'position', 'top', 'right', 'bottom', 'left', 'float', 'overflow']
                    }, {
                        name: '排版',
                        open: false,
                        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-decoration', 'text-transform']
                    }, {
                        name: '装饰',
                        open: false,
                        buildProps: ['background-color', 'border', 'border-radius', 'box-shadow', 'opacity']
                    }]
                },
                traitManager: {
                    title: '属性设置',
                    label: '属性'
                },
                selectorManager: {
                    title: '选择器'
                },
                panels: {
                    views: '视图',
                    layers: '图层',
                    styles: '样式',
                    blocks: '组件',
                    tm: '属性',
                    sm: '样式'
                },
                commands: {
                    'sw-visibility': '显示线框',
                    'preview': '预览',
                    'fullscreen': '全屏',
                    'export-template': '导出模板',
                    'clear': '清空画布',
                    'undo': '撤销',
                    'redo': '重做'
                }
            }
        }
    },
    // 配置面板 - 使用默认配置
    panels: { defaults: [] }
});

// 添加中文组件
Object.keys(chineseBlocks).forEach(blockId => {
    const block = chineseBlocks[blockId];
    editor.BlockManager.add(blockId, block);
});

// 配置设备
editor.DeviceManager.add({
    id: 'Desktop',
    width: '100%',
    widthMedia: '992px'
});

editor.DeviceManager.add({
    id: 'Tablet',
    width: '768px',
    widthMedia: '768px'
});

editor.DeviceManager.add({
    id: 'Mobile',
    width: '320px',
    widthMedia: '480px'
});

// 添加导出命令
editor.Commands.add('export-template', {
    run: function(editor, sender) {
        sender && sender.set('active');
        const html = editor.getHtml();
        const css = editor.getCss();
        const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>导出的网页</title>
    <style>
        ${css}
    </style>
</head>
<body>
    ${html}
</body>
</html>`;
        
        // 创建下载
        const blob = new Blob([fullHtml], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'index.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('网页已导出为 index.html');
    }
});

// 添加中文字体支持
editor.on('load', function() {
    const style = document.createElement('style');
    style.textContent = `
        .gjs-block {
            font-family: -apple-system, BlinkMacSystemFont, 'Microsoft YaHei', sans-serif;
        }
        .gjs-block-label {
            font-size: 14px;
            line-height: 1.5;
        }
        .gjs-pn-panel {
            font-family: -apple-system, BlinkMacSystemFont, 'Microsoft YaHei', sans-serif;
        }
    `;
    document.head.appendChild(style);
    
    console.log('Claw - 中文网页构建器已加载');
});

// 控制台信息
console.log('Claw - 中文网页构建器');
console.log('版本: 1.0.0');
