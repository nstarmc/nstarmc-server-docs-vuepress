# 感谢赞助

<div id="sp"></div>
<script>function getZanzhu() {
  // 创建一个新的XMLHttpRequest对象
  const xhr = new XMLHttpRequest();
  // 设置请求的URL
  xhr.open('GET', 'https://nsc6.nstarmc.cn/servers/zanzhu.txt');

  // 设置请求的响应类型为文本
  xhr.responseType = 'text';

  // 注册一个监听器，当请求完成时触发
  xhr.onload = function() {
    if (xhr.status === 200) {
      // 请求成功，将响应的内容插入到指定的div中
      document.getElementById('sp').innerHTML = xhr.response;
    } else {
      // 请求失败，在控制台中输出错误信息
      console.error('请求失败:', xhr.status, xhr.statusText);
    }
  };

  // 发送请求
  xhr.send();
}

// 调用getZanzhu函数
getZanzhu();
</script>
