from django.http import JsonResponse
from django.shortcuts import render
from .forms import ConfirmacaoForm
from rest_framework import viewsets
from .models import Confirmacao
from .serializers import ConfirmacaoSerializer
from django.views.decorators.csrf import csrf_exempt

def index(request):
    return render(request, 'rvsp/index.html')

@csrf_exempt
def verificar_email(request):
    if request.method == 'POST':
        form = ConfirmacaoForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True})
    else:
        form = ConfirmacaoForm()
    
    return JsonResponse({'success': False})


class ConfirmacaoViewSet(viewsets.ModelViewSet):
    queryset = Confirmacao.objects.all()
    serializer_class = ConfirmacaoSerializer
