import { useSyncExternalStore, type ReactNode } from 'react';

export interface ToastMessage {
  id: number;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}

let nextId = 0;
let currentToast: ToastMessage | null = null;
const listeners = new Set<() => void>();

function setToast(message: ToastMessage | null) {
  currentToast = message;
  for (const listener of listeners) listener();
}

export function dismissToast(id: number) {
  if (currentToast?.id === id) setToast(null);
}

export function toast(message: Omit<ToastMessage, 'id'>) {
  const id = ++nextId;
  setToast({ ...message, id });
  return { id, dismiss: () => dismissToast(id) };
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

export function useToast() {
  return useSyncExternalStore(subscribe, () => currentToast);
}
