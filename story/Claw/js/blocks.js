// 中文组件定义
const chineseBlocks = {
    'text-basic': {
        label: '文本',
        content: '<div style="padding: 10px;">在这里输入文本内容</div>',
        category: '基础组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'heading': {
        label: '标题',
        content: '<h2 style="padding: 10px;">这是一个标题</h2>',
        category: '基础组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'paragraph': {
        label: '段落',
        content: '<p style="padding: 10px; line-height: 1.6;">这是一段文本内容。您可以在这里输入更长的文本，用于展示文章、说明或其他内容。</p>',
        category: '基础组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'image': {
        label: '图片',
        content: '<img src="https://via.placeholder.com/350x250" style="max-width: 100%; height: auto;" alt="占位图片">',
        category: '媒体组件',
        attributes: { class: 'gjs-block-image' }
    },
    'video': {
        label: '视频',
        content: '<div style="height: 350px; background-color: #ddd; display: flex; align-items: center; justify-content: center; color: #666;">视频播放器</div>',
        category: '媒体组件',
        attributes: { class: 'gjs-block-video' }
    },
    'button-primary': {
        label: '主要按钮',
        content: '<button style="padding: 12px 24px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">点击按钮</button>',
        category: '表单组件',
        attributes: { class: 'gjs-block-form' }
    },
    'button-secondary': {
        label: '次要按钮',
        content: '<button style="padding: 12px 24px; background-color: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">点击按钮</button>',
        category: '表单组件',
        attributes: { class: 'gjs-block-form' }
    },
    'button-success': {
        label: '成功按钮',
        content: '<button style="padding: 12px 24px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">成功</button>',
        category: '表单组件',
        attributes: { class: 'gjs-block-form' }
    },
    'button-danger': {
        label: '危险按钮',
        content: '<button style="padding: 12px 24px; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">删除</button>',
        category: '表单组件',
        attributes: { class: 'gjs-block-form' }
    },
    'input-text': {
        label: '文本输入框',
        content: '<div style="padding: 10px;"><input type="text" placeholder="请输入文本" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"></div>',
        category: '表单组件',
        attributes: { class: 'gjs-block-form' }
    },
    'input-email': {
        label: '邮箱输入框',
        content: '<div style="padding: 10px;"><input type="email" placeholder="请输入邮箱" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"></div>',
        category: '表单组件',
        attributes: { class: 'gjs-block-form' }
    },
    'input-password': {
        label: '密码输入框',
        content: '<div style="padding: 10px;"><input type="password" placeholder="请输入密码" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"></div>',
        category: '表单组件',
        attributes: { class: 'gjs-block-form' }
    },
    'textarea': {
        label: '文本域',
        content: '<div style="padding: 10px;"><textarea placeholder="请输入多行文本" rows="4" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"></textarea></div>',
        category: '表单组件',
        attributes: { class: 'gjs-block-form' }
    },
    'checkbox': {
        label: '复选框',
        content: '<div style="padding: 10px;"><label style="display: flex; align-items: center; cursor: pointer;"><input type="checkbox" style="margin-right: 8px;"> 选项标签</label></div>',
        category: '表单组件',
        attributes: { class: 'gjs-block-form' }
    },
    'radio': {
        label: '单选框',
        content: '<div style="padding: 10px;"><label style="display: flex; align-items: center; cursor: pointer;"><input type="radio" name="radio1" style="margin-right: 8px;"> 选项1</label><label style="display: flex; align-items: center; cursor: pointer;"><input type="radio" name="radio1" style="margin-right: 8px;"> 选项2</label></div>',
        category: '表单组件',
        attributes: { class: 'gjs-block-form' }
    },
    'select': {
        label: '下拉选择',
        content: '<div style="padding: 10px;"><select style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"><option value="">请选择选项</option><option value="1">选项1</option><option value="2">选项2</option><option value="3">选项3</option></select></div>',
        category: '表单组件',
        attributes: { class: 'gjs-block-form' }
    },
    'form': {
        label: '表单容器',
        content: '<form style="padding: 20px; border: 1px solid #ddd; border-radius: 4px;"><div style="margin-bottom: 15px;"><label style="display: block; margin-bottom: 5px;">用户名</label><input type="text" placeholder="请输入用户名" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"></div><div style="margin-bottom: 15px;"><label style="display: block; margin-bottom: 5px;">邮箱</label><input type="email" placeholder="请输入邮箱" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"></div><button type="submit" style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">提交</button></form>',
        category: '表单组件',
        attributes: { class: 'gjs-block-form' }
    },
    'link': {
        label: '链接',
        content: '<a href="#" style="color: #007bff; text-decoration: underline;">这是一个链接</a>',
        category: '基础组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'divider': {
        label: '分隔线',
        content: '<hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">',
        category: '基础组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'quote': {
        label: '引用',
        content: '<blockquote style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #007bff; margin: 20px 0;"><p>这是一段引用内容。</p></blockquote>',
        category: '基础组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'code': {
        label: '代码块',
        content: '<pre style="padding: 15px; background-color: #f4f4f4; border-radius: 4px; overflow-x: auto;"><code>这是一段代码内容</code></pre>',
        category: '基础组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'container': {
        label: '容器',
        content: '<div style="padding: 20px; border: 1px dashed #ccc; min-height: 100px;">容器内容</div>',
        category: '布局组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'row-2': {
        label: '两列布局',
        content: '<div style="display: flex; gap: 20px; padding: 10px;"><div style="flex: 1; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">左侧内容</div><div style="flex: 1; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">右侧内容</div></div>',
        category: '布局组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'row-3': {
        label: '三列布局',
        content: '<div style="display: flex; gap: 20px; padding: 10px;"><div style="flex: 1; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">第一列</div><div style="flex: 1; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">第二列</div><div style="flex: 1; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">第三列</div></div>',
        category: '布局组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'section': {
        label: '区块',
        content: '<section style="padding: 40px 20px; background-color: #f8f9fa;"><h2 style="text-align: center; margin-bottom: 20px;">区块标题</h2><p style="text-align: center; color: #666;">这里是区块内容，可以放置任何文本、图片或其他组件。</p></section>',
        category: '布局组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'header-simple': {
        label: '简单页头',
        content: '<header style="padding: 20px; background-color: #007bff; color: white;"><h1>网站标题</h1><nav><a href="#" style="color: white; margin-right: 20px; text-decoration: none;">首页</a><a href="#" style="color: white; margin-right: 20px; text-decoration: none;">关于我们</a><a href="#" style="color: white; text-decoration: none;">联系我们</a></nav></header>',
        category: '页面组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'footer-simple': {
        label: '简单页脚',
        content: '<footer style="padding: 20px; background-color: #333; color: white; text-align: center;"><p>&copy; 2024 版权所有</p></footer>',
        category: '页面组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'hero-section': {
        label: '主视觉区',
        content: '<section style="padding: 80px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center;"><h1 style="font-size: 48px; margin-bottom: 20px;">欢迎访问我们的网站</h1><p style="font-size: 18px; margin-bottom: 30px; opacity: 0.9;">这是一个令人惊叹的主视觉区域</p><button style="padding: 15px 40px; background-color: white; color: #667eea; border: none; border-radius: 30px; font-size: 18px; cursor: pointer; font-weight: bold;">立即开始</button></section>',
        category: '页面组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'card': {
        label: '卡片',
        content: '<div style="padding: 20px; background-color: white; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><h3 style="margin-bottom: 10px;">卡片标题</h3><p style="color: #666; margin-bottom: 15px;">这是卡片内容描述文本。</p><a href="#" style="color: #007bff; text-decoration: none;">了解更多 →</a></div>',
        category: '页面组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'list-ul': {
        label: '无序列表',
        content: '<ul style="padding-left: 20px; line-height: 1.8;"><li>列表项1</li><li>列表项2</li><li>列表项3</li></ul>',
        category: '基础组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'list-ol': {
        label: '有序列表',
        content: '<ol style="padding-left: 20px; line-height: 1.8;"><li>第一步：完成这个任务</li><li>第二步：完成那个任务</li><li>第三步：所有任务完成</li></ol>',
        category: '基础组件',
        attributes: { class: 'gjs-block-basic' }
    },
    'table-simple': {
        label: '简单表格',
        content: '<table style="width: 100%; border-collapse: collapse; margin: 10px 0;"><thead><tr style="background-color: #f4f4f4;"><th style="padding: 12px; border: 1px solid #ddd;">姓名</th><th style="padding: 12px; border: 1px solid #ddd;">年龄</th><th style="padding: 12px; border: 1px solid #ddd;">职业</th></tr></thead><tbody><tr><td style="padding: 12px; border: 1px solid #ddd;">张三</td><td style="padding: 12px; border: 1px solid #ddd;">25</td><td style="padding: 12px; border: 1px solid #ddd;">工程师</td></tr><tr><td style="padding: 12px; border: 1px solid #ddd;">李四</td><td style="padding: 12px; border: 1px solid #ddd;">30</td><td style="padding: 12px; border: 1px solid #ddd;">设计师</td></tr></tbody></table>',
        category: '基础组件',
        attributes: { class: 'gjs-block-basic' }
    }
};
