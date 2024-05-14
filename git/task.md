1. Отримуємо останні оновлення з віддаленого репозиторію:

git fetch origin

2. Переходимо на гілку task_4:

git checkout task_4

3. Оновлюємо task_4 змінами з dev використовуючи rebase:

git rebase origin/dev

4. Розв'язуємо конфлікти та продовжуємо rebase:

git rebase --continue

5. Відправляємо (пушимо) оновлену гілку на віддалений репозиторій:

git push origin task_4 --force
