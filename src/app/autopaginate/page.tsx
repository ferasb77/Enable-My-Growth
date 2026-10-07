import type { Metadata } from 'next';
import { AutoPaginatePage } from '../../components/autopaginate/AutoPaginatePage';

export const metadata: Metadata = { title: 'AutoPaginate | Capture Multi-Page Web Documents to PDF', description: 'AutoPaginate detects and captures multi-page web documents, assembles them correctly, and lets you review, redact, and export clean PDFs or images.', alternates: { canonical: '/autopaginate' } };
export default function Page() { return <AutoPaginatePage />; }
