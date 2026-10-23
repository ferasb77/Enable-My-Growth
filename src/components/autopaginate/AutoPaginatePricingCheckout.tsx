'use client';
import { useEffect, useState } from 'react';
declare global { interface Window { Paddle?: { Initialize: (o: { token: string; environment: 'production'; checkout: { settings: { displayMode: 'overlay'; theme: 'dark'; locale: string; successUrl: string } } }) => void; Checkout: { open: (o: { transactionId: string }) => void } } } }
const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
const transactionPattern = /^txn_[a-zA-Z0-9]+$/;
export function AutoPaginatePricingCheckout() {
  const [ready, setReady] = useState(false); const [message, setMessage] = useState<string | null>(null); const [transactionId, setTransactionId] = useState<string | null>(null);
  useEffect(() => { setTransactionId(new URLSearchParams(window.location.search).get('_ptxn')); }, []);
  useEffect(() => { const id = 'paddle-js'; const existing = document.getElementById(id) as HTMLScriptElement | null; if (existing) { setReady(Boolean(window.Paddle)); existing.addEventListener('load', () => setReady(true), { once: true }); return; } const script = document.createElement('script'); script.id = id; script.src = 'https://cdn.paddle.com/paddle/v2/paddle.js'; script.async = true; script.onload = () => setReady(true); script.onerror = () => setMessage('Checkout could not load. Please return to AutoPaginate and try again.'); document.head.appendChild(script); }, []);
  useEffect(() => { if (!transactionId) return; if (!transactionPattern.test(transactionId)) { setMessage('This checkout link is not valid. Please return to AutoPaginate and begin your purchase there.'); return; } if (!ready || !window.Paddle) return; if (!token) { setMessage('Checkout is not currently available. Please return to AutoPaginate and try again later.'); return; } try { window.Paddle.Initialize({ token, environment: 'production', checkout: { settings: { displayMode: 'overlay', theme: 'dark', locale: navigator.language || 'en', successUrl: `${window.location.origin}/autopaginate/checkout/success` } } }); window.Paddle.Checkout.open({ transactionId }); setMessage('Opening secure checkout…'); } catch { setMessage('Checkout could not open. Please return to AutoPaginate and try again.'); } }, [ready, transactionId]);
  return message ? <p className="ap-checkout-status" role="status">{message}</p> : null;
}
