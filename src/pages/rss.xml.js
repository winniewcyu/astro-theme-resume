import rss from '@astrojs/rss'
import { siteConfig } from '@/site-config'

export const GET = async () => {

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `/blog/${post.slug}`
		}))
	})
}
