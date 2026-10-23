import type { Metadata } from 'next'; import { AutoPaginatePricingPage } from '../../../components/autopaginate/AutoPaginatePricingPage';
export const metadata: Metadata = { title: 'AutoPaginate Personal Pricing | Enable My Growth', description: 'Compare AutoPaginate Free and Personal plans for webpage and document capture.', alternates: { canonical: '/autopaginate/pricing' } };
export default function Page() { return <AutoPaginatePricingPage />; }
