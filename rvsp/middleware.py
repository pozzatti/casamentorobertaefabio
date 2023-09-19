from django.http import HttpResponseForbidden

class RestrictAdminMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith('/confirmacoes/'):
            return self.get_response(request)
        else:
            return self.get_response(request)
