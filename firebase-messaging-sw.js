importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDPcyxpHRuLx9T2CO4LJ-n9jaqAynUjvqw",
  authDomain: "xix5-a119a.firebaseapp.com",
  projectId: "xix5-a119a",
  messagingSenderId: "332265425367",
  appId: "1:332265425367:web:0a95e71d8bd0058503a392"
});

const messaging = firebase.messaging();

// 🎯 استقبال الإشعار عند إغلاق الموقع
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});
