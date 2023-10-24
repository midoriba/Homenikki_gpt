# Homenikki

## ほめ日記
### 概要
書いた内容にフィードバックをくれる日記アプリケーションです。

### 使用技術
- フロントエンド：React
- バックエンド：Django REST Framework
- 文生成：ChatGPT

## 実行方法

```bash
#初期設定
docker compose up -d
docker compose exec api bash
./scripts/setup.sh
python manage.py createsuperuser
# Eメールアドレス入力
# パスワード入力
```
http://localhost:8000/ にアクセス
