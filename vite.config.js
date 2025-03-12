import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/kuuu-document/', // ここをGitHubリポジトリ名に変更
});
