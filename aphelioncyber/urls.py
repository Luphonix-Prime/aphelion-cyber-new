"""
URL configuration for aphelioncyber project.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from wagtail.admin import urls as wagtailadmin_urls
from wagtail import urls as wagtail_urls
from wagtail.documents import urls as wagtaildocs_urls
from wagtail.images.views.serve import ServeView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('admin/', include(wagtailadmin_urls)),
    path('documents/', include(wagtaildocs_urls)),
    # Remove or comment out this line since wagtail_app doesn't exist
    # path('blog/', include('wagtail_app.blog.urls')),
    # path('search/', search, name='search'),  # This search view is also undefined
    
    # Serve Wagtail images
    path('images/<str:signature>/<str:image_id>/<str:filter_spec>/<str:filename>', 
         ServeView.as_view(), 
         name='wagtailimages_serve'),
    
    path('', include('aphelioncyber.website.urls')),
    path('', include(wagtail_urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)