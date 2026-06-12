declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number | [number, number, number, number]
    filename?: string
    image?: { type?: string; quality?: number }
    html2canvas?: Record<string, unknown> & { scale?: number; useCORS?: boolean; backgroundColor?: string }
    jsPDF?: { unit?: string; format?: string; orientation?: 'portrait' | 'landscape' }
    pagebreak?: { mode?: Array<'css' | 'legacy' | 'avoid-all'>; avoid?: string }
    enableLinks?: boolean
  }

  interface Html2PdfInstance {
    set(opts: Html2PdfOptions): Html2PdfInstance
    from(element: Element | string): Html2PdfInstance
    save(filename?: string): Promise<void>
    outputPdf(type?: 'blob' | 'datauristring' | 'save', filename?: string): Promise<unknown>
  }

  function html2pdf(): Html2PdfInstance
  export default html2pdf
}
