/**
 * Umami analytics wrapper.
 *
 * - Resilient: silently no-ops if the script hasn't loaded or is blocked.
 * - Typed: gives us autocompletion on event names and props.
 * - Privacy: only sends what we explicitly track — no cookies, no PII.
 *
 * Docs: https://umami.is/docs/tracker-functions
 */

import type { Locale } from '../content'

type UmamiEventName =
  | 'resume_view'
  | 'language_switch'
  | 'pdf_download'
  | 'outbound-github'
  | 'outbound-linkedin'
  | 'scroll-depth'

type UmamiEventProps = Record<string, string | number | boolean>

type UmamiPayload = UmamiEventProps & {
  /**
   * Override the URL associated with this event. Used to make SPA
   * navigations (locale switch) appear as distinct pageviews in the
   * dashboard while keeping the real browser URL stable.
   */
  $current_url?: string
}

interface UmamiTracker {
  track: (eventOrPayload?: UmamiEventName | UmamiPayload, data?: UmamiEventProps) => void
  identify: (id?: string, data?: UmamiEventProps) => void
}

declare global {
  interface Window {
    umami?: UmamiTracker
  }
}

function tracker(): UmamiTracker | undefined {
  if (typeof window === 'undefined') return undefined
  return window.umami
}

/** Safe track — no-op if Umami hasn't loaded yet. */
export function track(event: UmamiEventName, props?: UmamiEventProps): void {
  tracker()?.track(event, props)
}

/** Safe track with URL override — used for virtual pageviews. */
export function trackPageview(url: string, props?: UmamiEventProps): void {
  tracker()?.track({ ...props, $current_url: url })
}

/**
 * Record that the resume is being viewed in a given locale.
 * Emits a `resume_view` event AND a virtual pageview with the locale
 * query string so Umami's "Pages" report shows ES/EN as separate rows.
 */
export function trackResumeView(locale: Locale): void {
  const url = `${window.location.pathname}?lang=${locale}${window.location.hash}`
  track('resume_view', { lang: locale })
  trackPageview(url, { lang: locale })
}

/** Record a locale switch. Called BEFORE the locale state actually flips. */
export function trackLanguageSwitch(from: Locale, to: Locale): void {
  track('language_switch', { from, to })
}

/** Record a PDF download attempt. */
export function trackPdfDownload(locale: Locale): void {
  track('pdf_download', { lang: locale })
}
