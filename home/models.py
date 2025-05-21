from django.db import models
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.documents.models import Document
from wagtail.images.models import Image
from wagtail.blocks import RichTextBlock

# class WhitePaperPage(Page):
#     publication_date = models.DateField()
#     description = RichTextField()
#     thumbnail = models.ForeignKey(
#         'wagtailimages.Image',
#         null=True,
#         blank=True,
#         on_delete=models.SET_NULL,
#         related_name='+'
#     )
#     document = models.ForeignKey(
#         'wagtaildocs.Document',
#         null=True,
#         blank=True,
#         on_delete=models.SET_NULL,
#         related_name='+'
#     )
#     categories = models.CharField(
#         max_length=100,
#         blank=True
#     )

#     content_panels = Page.content_panels + [
#         FieldPanel('publication_date'),
#         FieldPanel('description'),
#         FieldPanel('thumbnail'),
#         FieldPanel('document'),
#         FieldPanel('categories'),
#     ]

#     class Meta:
#         verbose_name = "White Paper"
#         verbose_name_plural = "White Papers"


# class ResourcesPage(Page):
#     intro_title = models.CharField(max_length=255)
#     intro_subtitle = models.CharField(max_length=255)
#     featured_whitepaper_tag = models.CharField(max_length=100)
#     featured_whitepaper_title = models.CharField(max_length=255)
#     featured_whitepaper_description = RichTextField()
#     featured_whitepaper_image = models.ForeignKey(
#         'wagtailimages.Image',
#         null=True,
#         blank=True,
#         on_delete=models.SET_NULL,
#         related_name='+'
#     )
#     featured_whitepaper_file = models.ForeignKey(
#         'wagtaildocs.Document',
#         null=True,
#         blank=True,
#         on_delete=models.SET_NULL,
#         related_name='+'
#     )

#     content_panels = Page.content_panels + [
#         FieldPanel('intro_title'),
#         FieldPanel('intro_subtitle'),
#         FieldPanel('featured_whitepaper_tag'),
#         FieldPanel('featured_whitepaper_title'),
#         FieldPanel('featured_whitepaper_description'),
#         FieldPanel('featured_whitepaper_image'),  # Changed from ImageChooserPanel
#         FieldPanel('featured_whitepaper_file'),   # Changed from DocumentChooserPanel
#     ]

#     def get_whitepapers(self):
#         return WhitePaperPage.objects.live().descendant_of(self).order_by('-publication_date')