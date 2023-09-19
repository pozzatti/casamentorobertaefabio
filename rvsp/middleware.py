from django.http import HttpResponseForbidden

class RestrictAdminMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith('/confirmacoes/'):
            if request.method == 'GET':
                return self.get_response(request)
            elif request.user.is_authenticated and request.user.is_staff:
                return self.get_response(request)
            else:
                return HttpResponseForbidden("Acesso proibido para esta URL.")
        else:
            return self.get_response(request)