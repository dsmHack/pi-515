import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import PartnersPagePreview from './preview-templates/PartnersPagePreview'
import ProgramsPagePreview from './preview-templates/ProgramsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('partners', PartnersPagePreview)
CMS.registerPreviewTemplate('programs', ProgramsPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
