from django.http import HttpResponseForbidden

class RestrictAdminMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated and request.user.is_staff:
            return self.get_response(request)
        else:
            return HttpResponseForbidden("Acesso proibido para esta URL.")
