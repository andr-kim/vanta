import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

interface Service {
	id: number;
	name: string;
}

const services: Service[] = [
  { id: 1, name: 'UX/UI' },
  { id: 2, name: 'Web Development' },
  { id: 3, name: 'Mobile Development' },
  { id: 4, name: 'Digital Marketing' },
  { id: 5, name: 'SEO' },
  { id: 6, name: 'Advertizing' }
];

export const load: PageLoad = ({ params }) => {
  const id = parseInt(params.serviceId);
  const service = services.find(service=> service.id === id);
  if (!service) {
    throw error(404, 'Service not found');
  }
  return { service };

}