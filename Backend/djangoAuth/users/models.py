from django.db import models
from .managers import UserManager

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length = 225, unique = True, verbose_name=_("Email Address"))
    name = models.CharField(max_length= 100)
    is_staff = models.BooleanField(default = False)
    is_superuser = models.BooleanField(default = False)
    is_verified = models.BooleanField(default= False)
    is_active = models.BooleanField(default = False)
    date_joined = models.DateTimeField(auto_now_add= True)
    last_login = models.DateTimeField(auto_now = True)
    
    
    USERNAME_FEILD = "email"
    
    REQUIRED_FIELDS = ['email' , 'name']
    
    objects = UserManager()
    
    def __str__(self):
        return self.email
    
    @property
    def get_name(self):
        return self.name
    
    def tokens(self):
        pass