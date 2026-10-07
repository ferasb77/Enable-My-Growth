import type { Metadata } from 'next';
import { AutoPaginateSupportPage } from '../../../components/autopaginate/AutoPaginatePage';

export const metadata: Metadata = { title: 'AutoPaginate Support | Enable My Growth', description: 'Get help with AutoPaginate, including page detection, capture, PDF export, image export, permissions, bug reports, and feature requests.', alternates: { canonical: '/autopaginate/support' } };
export default function Page() { return <AutoPaginateSupportPage />; }
