from django.db import models
from wagtail.models import Page
from wagtail.fields import RichTextField, StreamField
from wagtail.admin.panels import FieldPanel
from wagtail.images.blocks import ImageChooserBlock

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

class Whitepaper(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=100)
    image = StreamField([
        ('image', ImageChooserBlock(required=True)),
    ], use_json_field=True, blank=True)
    file = models.ForeignKey(
        'wagtaildocs.Document',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    
    panels = [
        FieldPanel('title'),
        FieldPanel('description'),
        FieldPanel('category'),
        FieldPanel('image'),
        FieldPanel('file'),
    ]

class Webinar(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    image = StreamField([
        ('image', ImageChooserBlock(required=True)),
    ], use_json_field=True, blank=True)
    registration_link = models.URLField()
    
    panels = [
        FieldPanel('title'),
        FieldPanel('description'),
        FieldPanel('date'),
        FieldPanel('image'),
        FieldPanel('registration_link'),
    ]

class ContactSubmission(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    company = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} - {self.company}"