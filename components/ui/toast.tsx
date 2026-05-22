"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/shugar/button-1";

export type ToastAction =
  | { label: string; onClick: () => void }
  | { label: string; href: string };

export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  action?: ToastAction;
  duration?: number;
  onDismiss: (id: string) => void;
}

export function Toast({
  id,
  title,
  description,
  action,
  duration = 5000,
  onDismiss
}: ToastProps) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(100);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (duration > 0) {
      const step = 100 / (duration / 50);
      progressRef.current = setInterval(() => {
        setProgress(prev => {
          const next = prev - step;
          if (next <= 0) {
            clearInterval(progressRef.current!);
            onDismiss(id);
            return 0;
          }
          return next;
        });
      }, 50);
    }
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [duration, id, onDismiss]);

  const handleDismiss = useCallback(() => {
    setVisible(false);
    setTimeout(() => onDismiss(id), 300);
  }, [id, onDismiss]);

  const handleAction = () => {
    if (action && !("href" in action)) {
      action.onClick();
      handleDismiss();
    }
  };

  return (
    <div
      className={`toast-item ${visible ? "toast-enter" : "toast-exit"}`}
      role="alert"
    >
      <div className="toast-content">
        <div className="toast-body">
          {title && <p className="toast-title">{title}</p>}
          {description && <p className="toast-description">{description}</p>}
        </div>
        <div className="toast-actions">
          {action && (
            "href" in action ? (
              <a href={action.href} className="toast-action-link">
                <Button
                  size="small"
                  variant="tertiary"
                  onClick={handleDismiss}
                >
                  {action.label}
                </Button>
              </a>
            ) : (
              <Button
                size="small"
                variant="tertiary"
                onClick={handleAction}
              >
                {action.label}
              </Button>
            )
          )}
          <button
            className="toast-close"
            onClick={handleDismiss}
            aria-label="Dismiss notification"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>
      </div>
      {duration > 0 && (
        <div
          className="toast-progress"
          style={{ width: `${progress}%` }}
        />
      )}
    </div>
  );
}

interface ToastItem {
  id: string;
  title?: string;
  description?: string;
  action?: ToastAction;
  duration?: number;
}

interface ToastContextValue {
  toasts: ToastItem[];
  addToast: (toast: Omit<ToastItem, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((toast: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).slice(2, 11);
    setToasts(prev => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="toast-container" aria-live="polite">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            {...toast}
            onDismiss={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export function dismissToast(id: string) {
  document.dispatchEvent(new CustomEvent("toast:dismiss", { detail: { id } }));
}