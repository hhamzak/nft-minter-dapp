@echo off
echo "React projesi başlatılıyor..."
cd /d %~dp0
npm install --legacy-peer-deps
npm start dev