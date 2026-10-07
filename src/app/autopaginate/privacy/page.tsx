import type { Metadata } from 'next';
import { AutoPaginatePrivacyPage } from '../../../components/autopaginate/AutoPaginatePage';

export const metadata: Metadata = {
  title: 'AutoPaginate Privacy Policy | Enable My Growth',
  description: 'Privacy policy for the AutoPaginate Chrome extension, including local processing, storage, permissions, retention, and user controls.',
  alternates: { canonical: '/autopaginate/privacy' },
};

export default function Page() {
  return <AutoPaginatePrivacyPage />;
}
