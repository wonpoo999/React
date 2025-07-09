import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    root: '.', // 이게 기본값 (루트를 현재 폴더로 설정)
})

