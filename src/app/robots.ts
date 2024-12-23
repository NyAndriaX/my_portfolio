import { baseURL } from './lib/config'

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
            },
        ],
        sitemap: `${baseURL}/sitemap.xml`,
    }
}