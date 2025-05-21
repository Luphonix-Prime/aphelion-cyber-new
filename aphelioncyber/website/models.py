from django.db import models
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel

class WhitePaper(Page):
    cover_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    description = RichTextField()
    publication_date = models.DateField()
    pdf_file = models.FileField(upload_to='whitepapers/')

    content_panels = Page.content_panels + [
        FieldPanel('cover_image'),
        FieldPanel('description'),
        FieldPanel('publication_date'),
        FieldPanel('pdf_file'),
    ]

class Webinar(Page):
    cover_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    description = RichTextField()
    webinar_date = models.DateTimeField()
    registration_link = models.URLField()
    is_upcoming = models.BooleanField(default=True)
    recording_url = models.URLField(blank=True, null=True)

    content_panels = Page.content_panels + [
        FieldPanel('cover_image'),
        FieldPanel('description'),
        FieldPanel('webinar_date'),
        FieldPanel('registration_link'),
        FieldPanel('is_upcoming'),
        FieldPanel('recording_url'),
    ]

class ResourcesPage(Page):
    intro_title = models.CharField(max_length=200, default="Resources")
    intro_subtitle = models.TextField(default="Access guides, whitepapers, and best practices to strengthen your security posture.")
    
    # Featured Whitepaper
    featured_whitepaper_tag = models.CharField(max_length=100, default="Featured Whitepaper")
    featured_whitepaper_title = models.CharField(max_length=200)
    featured_whitepaper_description = models.TextField()
    featured_whitepaper_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    featured_whitepaper_file = models.ForeignKey(
        'wagtaildocs.Document',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    content_panels = Page.content_panels + [
        FieldPanel('intro_title'),
        FieldPanel('intro_subtitle'),
        FieldPanel('featured_whitepaper_tag'),
        FieldPanel('featured_whitepaper_title'),
        FieldPanel('featured_whitepaper_description'),
        FieldPanel('featured_whitepaper_image'),
        FieldPanel('featured_whitepaper_file'),
    ]

class ContactSubmission(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    company = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} - {self.company}"
