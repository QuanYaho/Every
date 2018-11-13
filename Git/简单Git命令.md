#### 简单命令

1. 克隆线上代码到本地
$ git clone 路径名

2. 初始化 
$ git init

3. 更新代码
$ git pull

4. 添加本地代码到远程存储区
$ git add .

5. 查看状态
$ git status

6. 提交到远程仓库
$ git commit -m "【问题】: XXX提交 【修改】: XXX提交" 

7. 配置用户名
$ git config --global user.name "我的用户名"

8. 配置邮箱
$ git config --global user.email "我的邮箱"

9. 提交代码到主干
    - $ git push -u origin master  (第一次提交) 
    - $ git push

10. $ git diff
   看具体改了什么

11. $ git log
    版本日志

12. $ git reset --hard 命令串
   版本回退

#### 修改代码后操作步骤

1. $ git init  
    初始化

2. $ git stash
   将自己的代码保存到最近的状态

3. $ git pull
   更新远程仓库的代码到本地

4. $ git stash pop stash@{0}
   查看哪些文件有冲突，哪些改过哪些没改过

5. $ git add .
   添加本地代码到远程存储区

6. $ git commit -m "【问题】：XXX " 

7. $ git push