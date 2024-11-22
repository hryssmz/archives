# Django REST framework

![logo.png](./fig/logo.png)

Django REST framework is a powerful and flexible toolkit for building Web APIs.

Some reasons you might want to use REST framework:

- The [Web browsable API](https://restframework.herokuapp.com/) is a huge usability win for your developers.
- [Authentication policies](https://www.django-rest-framework.org/api-guide/authentication/) including packages for [OAuth1a](https://www.django-rest-framework.org/api-guide/authentication/#django-rest-framework-oauth) and [OAuth2](https://www.django-rest-framework.org/api-guide/authentication/#django-oauth-toolkit).
- [Serialization](https://www.django-rest-framework.org/api-guide/serializers/) that supports both [ORM](https://www.django-rest-framework.org/api-guide/serializers/) and [non-ORM](https://www.django-rest-framework.org/api-guide/serializers#serializers) data sources.
- Customizable all the way down - just use [regular function-based views](https://www.django-rest-framework.org/api-guide/views#function-based-views) if you don't need the [more powerful features](https://www.django-rest-framework.org/api-guide/generic-views/).
- Extensive documentation, and [great community support](https://groups.google.com/forum/?fromgroups#!forum/django-rest-framework).
- Used and trusted by internationally recognised companies including [Mozilla](https://www.mozilla.org/en-US/about/), [Red Hat](https://www.redhat.com/), [Heroku](https://www.heroku.com/), and [Eventbrite](https://www.eventbrite.co.uk/about/).

## Requirements

REST framework requires the following:

- Python (3.6, 3.7, 3.8, 3.9, 3.10)
- Django (2.2, 3.0, 3.1, 3.2, 4.0, 4.1)

We **highly recommend** and only officially support the latest patch release of each Python and Django series.

The following packages are optional:

- [PyYAML](https://pypi.org/project/PyYAML/), [uritemplate](https://pypi.org/project/uritemplate/) (5.1+, 3.0.0+) - Schema generation support.
- [Markdown](https://pypi.org/project/Markdown/) (3.0.0+) - Markdown support for the browsable API.
- [Pygments](https://pypi.org/project/Pygments/) (2.4.0+) - Add syntax highlighting to Markdown processing.
- [django-filter](https://pypi.org/project/django-filter/) (1.0.1+) - Filtering support.
- [django-guardian](https://github.com/django-guardian/django-guardian) (1.1.1+) - Object level permissions support.

## Installation

Install using `pip`, including any optional packages you want...

```sh
pip install djangorestframework
pip install markdown       # Markdown support for the browsable API.
pip install django-filter  # Filtering support
```

...or clone the project from github.

```sh
git clone https://github.com/encode/django-rest-framework
```

Add `'rest_framework'` to your `INSTALLED_APPS` setting.

```py
INSTALLED_APPS = [
    ...
    'rest_framework',
]
```

If you're intending to use the browsable API you'll probably also want to add REST framework's login and logout views. Add the following to your root `urls.py` file.

```py
urlpatterns = [
    ...
    path('api-auth/', include('rest_framework.urls'))
]
```

Note that the URL path can be whatever you want.

## Example

Let's take a look at a quick example of using REST framework to build a simple model-backed API.

We'll create a read-write API for accessing information on the users of our project.

Any global settings for a REST framework API are kept in a single configuration dictionary named `REST_FRAMEWORK`. Start off by adding the following to your `settings.py` module:

```py
REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ]
}
```

Don't forget to make sure you've also added `rest_framework` to your `INSTALLED_APPS`.

We're ready to create our API now. Here's our project's root `urls.py` module:

```py
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
```

You can now open the API in your browser at [http://127.0.0.1:8000/](http://127.0.0.1:8000/), and view your new 'users' API. If you use the login control in the top right corner you'll also be able to add, create and delete users from the system.

## Quickstart

Can't wait to get started? The [quickstart guide](https://www.django-rest-framework.org/tutorial/quickstart/) is the fastest way to get up and running, and building APIs with REST framework.

## Development

See the [Contribution guidelines](https://www.django-rest-framework.org/community/contributing/) for information on how to clone the repository, run the test suite and contribute changes back to REST Framework.
