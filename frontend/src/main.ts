// Smoothly animate gradient on scroll

let lastGradPos = 60;
let targetGradPos = 60;
let lastBgY = 0;
let targetBgY = 0;
let lastBottomLeftOpacity = 0;
let targetBottomLeftOpacity = 0;
const updateGrad = () => {
  // Use same smoothing factor (0.08) for all transitions to ensure they move at the same pace
  const smoothingFactor = 0.08;
  lastGradPos += (targetGradPos - lastGradPos) * smoothingFactor;
  lastBgY += (targetBgY - lastBgY) * smoothingFactor;
  lastBottomLeftOpacity += (targetBottomLeftOpacity - lastBottomLeftOpacity) * smoothingFactor;
  document.body.style.setProperty('--grad-pos', lastGradPos + '%');
  document.body.style.setProperty('--grad-bg-y', lastBgY + '%');
  document.body.style.setProperty('--bottom-left-opacity', lastBottomLeftOpacity.toString());
  if (Math.abs(targetGradPos - lastGradPos) > 0.1 || Math.abs(targetBgY - lastBgY) > 0.1 || Math.abs(targetBottomLeftOpacity - lastBottomLeftOpacity) > 0.01) {
    requestAnimationFrame(updateGrad);
  }
};
const calcTargetGrad = () => {
  const doc = document.documentElement;
  const scrollTop = window.scrollY || doc.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  // Map scroll position to 40% - 80%
  return 40 + 40 * (scrollTop / (scrollHeight || 1));
};
const calcTargetBgY = () => {
  const doc = document.documentElement;
  const scrollTop = window.scrollY || doc.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  // Map scroll position to 0% - 60% for background movement
  return 0 + 60 * (scrollTop / (scrollHeight || 1));
};
const calcBottomLeftOpacity = () => {
  const doc = document.documentElement;
  const scrollTop = window.scrollY || doc.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  // Fade in the bottom-left gradient as we scroll down (0 to 1)
  return Math.min(1, (scrollTop / (scrollHeight || 1)) * 1.5);
};
const onScroll = () => {
  targetGradPos = calcTargetGrad();
  targetBgY = calcTargetBgY();
  targetBottomLeftOpacity = calcBottomLeftOpacity();
  requestAnimationFrame(updateGrad);
};
window.addEventListener('scroll', onScroll);
// Initialize on load
targetGradPos = calcTargetGrad();
lastGradPos = targetGradPos;
targetBgY = calcTargetBgY();
lastBgY = targetBgY;
targetBottomLeftOpacity = calcBottomLeftOpacity();
lastBottomLeftOpacity = targetBottomLeftOpacity;
document.body.style.setProperty('--grad-pos', lastGradPos + '%');
document.body.style.setProperty('--grad-bg-y', lastBgY + '%');
document.body.style.setProperty('--bottom-left-opacity', lastBottomLeftOpacity.toString());
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
