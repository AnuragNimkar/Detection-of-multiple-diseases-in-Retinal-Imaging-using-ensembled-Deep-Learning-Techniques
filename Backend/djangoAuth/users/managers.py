from django.contrib.auth.models import BaseUserManager
from django.contrib.auth  import *
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _


class UserManager(BaseUserManager):
    def email_validator(self, email):
        try:
            validate_email(email)
        except ValidationError:
            raise ValueError(_("Please enetr valid email address"))
        
        
    
    def create_users(self, email , name , password , **extra_fields):
    
        if email:
            email= self.normalize_email(email)
        else:
            raise ValueError(_("an email adderess is required"))
        
        if not name:
            raise ValueError(_("name is required"))
        
        user = self.model(email = email, name = name, **extra_fields)
        user.set_password(password)
        user.save(using= self._db)
        return user
    
    
    
    def create_superuser(self, email, name , password, **extra_fields):
        extra_fields.setdefault("is_staff" , True)
        extra_fields.setdefault("is_superuser" , True)
        extra_fields.setdefault("is_verified", True)
        
        
        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("is staff must be true for admin users"))
        
        if extra_fields.get("is_superuser")  is not True:
            raise ValueError(_("is Superuser must be true"))
        
        user = self.create_users(
            email, name, password, **extra_fields
        )
        
        user.save(using = self._db)
        return user
        
            