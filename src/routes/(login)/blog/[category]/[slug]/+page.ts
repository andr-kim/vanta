import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

interface Post {
	slug: string;
	title: string;
	category: string;
	content: string;
}
const posts: Post[] = [
	{
		slug: 'first-post',
		title: 'My First Post',
		category: 'general',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	},
	{
		slug: 'second-post',
		title: 'Tech Post',
		category: 'tech',
		content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		slug: 'third-post',
		title: 'My Third Post',
		category: 'lifestyle',
		content:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		slug: 'fourth-post',
		title: 'My Fourth Post',
		category: 'general',
		content:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	},
	{
		slug: 'fifth-post',
		title: 'My Fifth Post',
		category: 'tech',
		content:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		slug: 'sixth-post',
		title: 'My Sixth Post',
		category: 'lifestyle',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	}
];

export const load: PageLoad = ({ params }) => {
	const { category, slug } = params;
	const post = posts.find((post) => post.slug === slug && post.category === category);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return { post };
};
