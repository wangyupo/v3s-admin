#!/bin/sh

echo "正在添加文件..."
git add .
git commit -m "update"
echo "正在开始提交代码..."
git push
echo "代码提交成功，正在关闭..."