@echo off
echo === 🧹 ĐANG DỌN DẸP PROJECT ===

REM Di chuyển đến thư mục gốc nếu cần
cd /d %~dp0

REM Xóa node_modules cũ
echo Xóa node_modules trong client và server...
rmdir /s /q client\node_modules
rmdir /s /q server\node_modules

REM Xóa package-lock cũ
echo Xóa package-lock.json trong client và server...
del /f /q client\package-lock.json
del /f /q server\package-lock.json

REM Xóa package.json cũ (nếu còn)
echo Xóa package.json cũ trong client và server...
del /f /q client\package.json
del /f /q server\package.json

REM Cài lại từ package.json gộp
echo ✅ Cài lại npm packages từ thư mục gốc...
npm install

echo ✅ Hoàn tất! Bạn có thể chạy:
echo - npm run dev         (React frontend)
echo - npm run dev-server  (Backend Express)
pause
