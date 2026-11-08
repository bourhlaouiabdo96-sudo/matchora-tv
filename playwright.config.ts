import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests/browser',workers:2,use:{baseURL:'http://127.0.0.1:3001',headless:true,launchOptions:{executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']}},webServer:{command:'npm start',url:'http://127.0.0.1:3001',reuseExistingServer:!process.env.CI,timeout:60000},reporter:'list'});
