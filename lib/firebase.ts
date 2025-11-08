import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCqeYOz8kUxc6GGgEekfWnaH7AmOfT3tEs',
  authDomain: 'eco-ai-2.firebaseapp.com',
  projectId: 'eco-ai-2',
  storageBucket: 'eco-ai-2.firebasestorage.app',
  messagingSenderId: '440210182029',
  appId: '1:440210182029:web:efb251af88fb2b0f22b7c4'
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

