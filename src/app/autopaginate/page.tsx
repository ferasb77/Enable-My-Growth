import type { Metadata } from 'next';
import { AutoPaginatePage } from '../../components/autopaginate/AutoPaginatePage';

export const metadata: Metadata = { title: 'AutoPaginate | Capture Multi-Page Web Documents to PDF', description: 'AutoPaginate automatically detects, captures, assembles, annotates, and exports multi-page web documents as polished PDFs or images.', alternates: { canonical: '/autopaginate' } };
export default function Page() { return <AutoPaginatePage />; }
