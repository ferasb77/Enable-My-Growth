import type { Metadata } from 'next'; import { AutoPaginateCheckoutSuccessPage } from '../../../../components/autopaginate/AutoPaginatePricingPage';
export const metadata: Metadata = { title: 'Payment Received | AutoPaginate', alternates: { canonical: '/autopaginate/checkout/success' } };
export default function Page() { return <AutoPaginateCheckoutSuccessPage />; }
