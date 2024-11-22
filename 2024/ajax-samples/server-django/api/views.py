# api/views.py
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt


@method_decorator(csrf_exempt, name="dispatch")
class FileView(View):
    def post(self, request):
        text_content = request.FILES["text_file"].file.read().decode("utf8")
        body = {
            "username": request.POST["username"].upper(),
            "gender": request.POST["gender"],
            "text_content": text_content,
        }
        return JsonResponse(body)
